import type { FrequencyStep } from '../data/frequencies';

export type ChannelMode = 'stereo' | 'left' | 'right';

export interface AudioEngineCallbacks {
  onStepChange?: (stepIndex: number, step: FrequencyStep) => void;
  onProgress?: (elapsedSec: number, totalSec: number, percent: number) => void;
  onComplete?: () => void;
  onError?: (err: Error) => void;
}

export class SpeakerCleanerEngine {
  public audioContext: AudioContext | null = null;
  public oscillator: OscillatorNode | null = null;
  public gainNode: GainNode | null = null;
  public masterGain: GainNode | null = null;
  public stereoPanner: StereoPannerNode | null = null;

  public isRunning: boolean = false;
  public isPaused: boolean = false;
  public currentStep: number = 0;
  public startTime: number = 0;
  public pausedElapsed: number = 0;

  private sequence: FrequencyStep[] = [];
  private callbacks: AudioEngineCallbacks = {};
  private timerId: number | null = null;
  private currentVolume: number = 0.8; // conservative initial default (0 to 1.0)
  private channelMode: ChannelMode = 'stereo';

  constructor(sequence: FrequencyStep[], callbacks: AudioEngineCallbacks = {}) {
    this.sequence = sequence;
    this.callbacks = callbacks;
  }

  /**
   * Initializes or unlocks the Web Audio AudioContext upon direct user gesture.
   */
  public async initContext(): Promise<AudioContext> {
    if (!this.audioContext) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) {
        throw new Error('Web Audio API is not supported by your browser.');
      }
      this.audioContext = new AudioCtx();
    }

    if (this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }

    // iOS Safari silent buffer unlock trick
    try {
      const buffer = this.audioContext.createBuffer(1, 1, 22050);
      const source = this.audioContext.createBufferSource();
      source.buffer = buffer;
      source.connect(this.audioContext.destination);
      source.start(0);
    } catch {
      // Ignore fallback unlock errors
    }

    return this.audioContext;
  }

  /**
   * Starts playback of the sound sequence from the current or zero position.
   */
  public async start(channel: ChannelMode = 'stereo'): Promise<void> {
    try {
      this.channelMode = channel;
      await this.initContext();

      if (!this.audioContext) return;

      this.stopNodes(); // Ensure previous nodes are cleaned up

      this.isRunning = true;
      this.isPaused = false;
      this.currentStep = 0;
      this.pausedElapsed = 0;
      this.startTime = this.audioContext.currentTime;

      this.setupGraph();
      this.playStep(0);
      this.startTimer();
    } catch (err) {
      this.isRunning = false;
      if (this.callbacks.onError) {
        this.callbacks.onError(err instanceof Error ? err : new Error(String(err)));
      }
    }
  }

  /**
   * Builds the Web Audio API node graph (Oscillator -> Gain -> Master Gain -> StereoPanner -> Destination).
   */
  private setupGraph(): void {
    if (!this.audioContext) return;

    this.gainNode = this.audioContext.createGain();
    this.masterGain = this.audioContext.createGain();

    // Initial conservative gain setting (max 0.95 for safety)
    const targetGain = Math.min(Math.max(this.currentVolume, 0), 0.95);
    this.masterGain.gain.setValueAtTime(targetGain, this.audioContext.currentTime);

    let lastNode: AudioNode = this.masterGain;

    // StereoPannerNode support check
    if (typeof this.audioContext.createStereoPanner === 'function') {
      this.stereoPanner = this.audioContext.createStereoPanner();
      let panValue = 0;
      if (this.channelMode === 'left') panValue = -1;
      if (this.channelMode === 'right') panValue = 1;
      this.stereoPanner.pan.setValueAtTime(panValue, this.audioContext.currentTime);
      this.masterGain.connect(this.stereoPanner);
      lastNode = this.stereoPanner;
    }

    lastNode.connect(this.audioContext.destination);
  }

  /**
   * Plays a specific frequency step in the sequence.
   */
  private playStep(stepIndex: number): void {
    if (!this.isRunning || !this.audioContext || stepIndex >= this.sequence.length) {
      if (stepIndex >= this.sequence.length) {
        this.complete();
      }
      return;
    }

    this.currentStep = stepIndex;
    const step = this.sequence[stepIndex];

    if (this.oscillator) {
      try {
        this.oscillator.stop();
        this.oscillator.disconnect();
      } catch {
        // Node already stopped
      }
    }

    this.oscillator = this.audioContext.createOscillator();
    this.oscillator.type = step.type || 'sine';
    
    // Smooth frequency ramp to prevent popping
    const now = this.audioContext.currentTime;
    this.oscillator.frequency.setValueAtTime(step.frequency, now);

    if (this.gainNode) {
      this.oscillator.connect(this.gainNode);
      this.gainNode.connect(this.masterGain!);
    }

    this.oscillator.start();

    if (this.callbacks.onStepChange) {
      this.callbacks.onStepChange(stepIndex, step);
    }
  }

  /**
   * Updates frequency dynamically during playback (used for frequency test).
   */
  public setFrequency(freq: number): void {
    if (this.oscillator && this.audioContext) {
      const now = this.audioContext.currentTime;
      this.oscillator.frequency.linearRampToValueAtTime(Math.max(20, Math.min(20000, freq)), now + 0.05);
    }
  }

  /**
   * Sets volume level safely (0 to 1).
   */
  public setVolume(volume: number): void {
    const clamped = Math.min(Math.max(volume, 0), 1.0);
    this.currentVolume = clamped;
    if (this.masterGain && this.audioContext) {
      const now = this.audioContext.currentTime;
      // Cap max gain at 0.95 to prevent digital clipping/distortion
      this.masterGain.gain.linearRampToValueAtTime(clamped * 0.95, now + 0.05);
    }
  }

  /**
   * Sets channel panning (-1 = left, 0 = center, 1 = right).
   */
  public setPan(pan: number): void {
    if (this.stereoPanner && this.audioContext) {
      const clamped = Math.min(Math.max(pan, -1), 1);
      this.stereoPanner.pan.setValueAtTime(clamped, this.audioContext.currentTime);
    }
  }

  /**
   * Calculates total duration of the current sequence in seconds.
   */
  public getTotalDuration(): number {
    return this.sequence.reduce((acc, step) => acc + step.duration, 0);
  }

  /**
   * Gets current elapsed time in seconds.
   */
  public getCurrentTime(): number {
    if (!this.isRunning) return this.pausedElapsed;
    if (this.isPaused) return this.pausedElapsed;
    if (!this.audioContext) return 0;
    return (this.audioContext.currentTime - this.startTime) + this.pausedElapsed;
  }

  /**
   * Gets remaining time in seconds.
   */
  public getRemainingTime(): number {
    const total = this.getTotalDuration();
    const elapsed = this.getCurrentTime();
    return Math.max(0, total - elapsed);
  }

  /**
   * Internal timer loop that manages step switching and progress updates.
   */
  private startTimer(): void {
    this.stopTimer();
    const totalDuration = this.getTotalDuration();

    this.timerId = window.setInterval(() => {
      if (!this.isRunning || this.isPaused) return;

      const elapsed = this.getCurrentTime();
      const percent = Math.min(100, Math.round((elapsed / totalDuration) * 100));

      if (this.callbacks.onProgress) {
        this.callbacks.onProgress(Math.floor(elapsed), totalDuration, percent);
      }

      // Check step advancement
      let accumulatedTime = 0;
      for (let i = 0; i < this.sequence.length; i++) {
        accumulatedTime += this.sequence[i].duration;
        if (elapsed < accumulatedTime) {
          if (i !== this.currentStep) {
            this.playStep(i);
          }
          break;
        }
      }

      if (elapsed >= totalDuration) {
        this.complete();
      }
    }, 100);
  }

  private stopTimer(): void {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  public pause(): void {
    if (!this.isRunning || this.isPaused) return;
    this.isPaused = true;
    if (this.audioContext) {
      this.pausedElapsed = this.getCurrentTime();
      this.audioContext.suspend();
    }
  }

  public async resume(): Promise<void> {
    if (!this.isRunning || !this.isPaused) return;
    if (this.audioContext && this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
      this.startTime = this.audioContext.currentTime;
    }
    this.isPaused = false;
  }

  public stop(): void {
    this.stopTimer();
    this.stopNodes();
    this.isRunning = false;
    this.isPaused = false;
    this.currentStep = 0;
    this.pausedElapsed = 0;
  }

  private complete(): void {
    this.stop();
    if (this.callbacks.onComplete) {
      this.callbacks.onComplete();
    }
  }

  private stopNodes(): void {
    if (this.oscillator) {
      try {
        this.oscillator.stop();
        this.oscillator.disconnect();
      } catch {
        // Node was already stopped
      }
      this.oscillator = null;
    }
    if (this.gainNode) {
      try {
        this.gainNode.disconnect();
      } catch {
        // Ignore
      }
      this.gainNode = null;
    }
    if (this.masterGain) {
      try {
        this.masterGain.disconnect();
      } catch {
        // Ignore
      }
      this.masterGain = null;
    }
    if (this.stereoPanner) {
      try {
        this.stereoPanner.disconnect();
      } catch {
        // Ignore
      }
      this.stereoPanner = null;
    }
  }

  public destroy(): void {
    this.stop();
    if (this.audioContext && this.audioContext.state !== 'closed') {
      this.audioContext.close();
      this.audioContext = null;
    }
  }
}
