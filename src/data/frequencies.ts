export interface FrequencyStep {
  duration: number; // in seconds
  frequency: number; // in Hz
  label: string;
  type?: 'sine' | 'square' | 'sawtooth' | 'triangle';
}

export interface SoundProfile {
  id: string;
  name: string;
  description: string;
  totalDuration: number;
  steps: FrequencyStep[];
}

export const CLEANER_FREQUENCY_SEQUENCE: FrequencyStep[] = [
  { duration: 10, frequency: 165, label: "Deep Resonance (165 Hz)", type: 'sine' },
  { duration: 10, frequency: 175, label: "Medium Vibration (175 Hz)", type: 'sine' },
  { duration: 10, frequency: 185, label: "Acoustic Dislodgement (185 Hz)", type: 'sine' },
  { duration: 10, frequency: 200, label: "Agitation Phase (200 Hz)", type: 'sine' },
  { duration: 10, frequency: 220, label: "Harmonic Sweep (220 Hz)", type: 'sine' },
  { duration: 10, frequency: 240, label: "Final Ejection (240 Hz)", type: 'sine' }
];

export const WATER_EJECT_SEQUENCE: FrequencyStep[] = [
  { duration: 8, frequency: 155, label: "Pulse Stage 1 (155 Hz)", type: 'sawtooth' },
  { duration: 8, frequency: 165, label: "Pulse Stage 2 (165 Hz)", type: 'sine' },
  { duration: 8, frequency: 175, label: "Max Impulse (175 Hz)", type: 'sawtooth' },
  { duration: 8, frequency: 190, label: "Rapid Air Displacement (190 Hz)", type: 'sine' },
  { duration: 8, frequency: 210, label: "Drainage Clear (210 Hz)", type: 'sine' }
];

export const SPEAKER_TEST_PROFILES = {
  leftChannel: {
    name: "Left Speaker Test",
    duration: 10,
    frequency: 440,
    pan: -1, // Left
    label: "Testing Left Speaker Channel (440 Hz Tone)"
  },
  rightChannel: {
    name: "Right Speaker Test",
    duration: 10,
    frequency: 440,
    pan: 1, // Right
    label: "Testing Right Speaker Channel (440 Hz Tone)"
  },
  stereoBalance: {
    name: "Stereo Speaker Test",
    duration: 15,
    frequency: 500,
    label: "Testing Left, Right, & Combined Stereo Balance"
  },
  frequencySweep: {
    name: "Full Frequency Sweep",
    duration: 20,
    startFreq: 20,
    endFreq: 15000,
    label: "Audible Range Sweep (20 Hz - 15 kHz)"
  }
};
