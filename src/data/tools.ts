export interface ToolMeta {
  id: string;
  title: string;
  shortName: string;
  description: string;
  path: string;
  icon: string; // SVG path string or type
  badge?: string;
}

export const TOOLS: ToolMeta[] = [
  {
    id: 'speaker-cleaner',
    title: 'Speaker Cleaner Engine',
    shortName: 'Speaker Cleaner',
    description: 'Generates a 60-second multi-frequency 165Hz–240Hz acoustic sound sequence to help dislodge water droplets and particulate debris from speaker grilles.',
    path: '/speaker-cleaner/',
    icon: 'speaker-wave',
    badge: 'Primary Tool'
  },
  {
    id: 'water-eject',
    title: 'Water Eject Audio Emitter',
    shortName: 'Water Eject',
    description: 'High-amplitude low-frequency pulsed audio profile specialized for expelling trapped liquid drops from mobile phone speaker cavities.',
    path: '/water-eject/',
    icon: 'droplet',
    badge: 'Popular'
  },
  {
    id: 'speaker-test',
    title: 'Speaker Diagnostic Test',
    shortName: 'Speaker Test',
    description: 'Interactive audio suite featuring left, right, and full stereo channel checks plus full-spectrum frequency response verification.',
    path: '/speaker-test/',
    icon: 'chart-bar'
  },
  {
    id: 'left-speaker-test',
    title: 'Left Channel Speaker Test',
    shortName: 'Left Speaker Test',
    description: 'Isolates and outputs 440 Hz test tone strictly to the left speaker channel to verify balance and volume output.',
    path: '/left-speaker-test/',
    icon: 'arrow-left'
  },
  {
    id: 'right-speaker-test',
    title: 'Right Channel Speaker Test',
    shortName: 'Right Speaker Test',
    description: 'Isolates and outputs 440 Hz test tone strictly to the right speaker channel to verify balance and channel integrity.',
    path: '/right-speaker-test/',
    icon: 'arrow-right'
  },
  {
    id: 'stereo-speaker-test',
    title: 'Stereo Balance Test',
    shortName: 'Stereo Test',
    description: 'Sweeps sound smoothly between left and right channels to test spatial stereo imaging and speaker separation.',
    path: '/stereo-speaker-test/',
    icon: 'arrows-right-left'
  },
  {
    id: 'frequency-test',
    title: 'Audio Frequency Response Test',
    shortName: 'Frequency Test',
    description: 'Interactive frequency generator allowing manual selection from 20 Hz up to 20,000 Hz to evaluate speaker performance limits.',
    path: '/frequency-test/',
    icon: 'adjustments-horizontal'
  }
];
