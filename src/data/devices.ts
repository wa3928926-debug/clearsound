export interface DeviceInfo {
  brand: string;
  model: string;
  slug: string;
  category: 'iphone' | 'samsung' | 'xiaomi' | 'google-pixel' | 'ipad' | 'laptop';
  title: string;
  description: string;
  year: number;
  speakerLayout: string;
  waterRating: string;
  cleaningTips: string[];
  troubleshooting: string[];
  indexable: boolean;
}

export const DEVICES: DeviceInfo[] = [
  // iPhone Models
  {
    brand: 'Apple',
    model: 'iPhone 17',
    slug: 'iphone-17',
    category: 'iphone',
    title: 'iPhone 17 Speaker Cleaner – Clean & Water Eject Sound Tool',
    description: 'Use our browser-based speaker cleaning sound tool tailored for iPhone 17. Safely eject moisture and dust using acoustic resonance.',
    year: 2025,
    speakerLayout: 'Dual stereo speaker system with bottom-firing multi-hole grille and top earpiece transducer.',
    waterRating: 'IP68 certified under IEC standard 60529 (maximum depth of 6 meters up to 30 minutes).',
    cleaningTips: [
      'Remove any MagSafe case or thick cover before running the sound sequence.',
      'Tilt your iPhone 17 slightly downward so the bottom speaker ports face downward towards a absorbent lint-free microfiber cloth.',
      'Set your system volume to approximately 80% to 100% for maximum acoustic vibration force.'
    ],
    troubleshooting: [
      'If sound remains muffled, ensure the earpiece acoustic mesh is free of compacted pocket lint.',
      'Allow the device to dry naturally in a well-ventilated area for 1–2 hours after running 2–3 cleaner cycles.',
      'Do not insert paper towels, cotton swabs, or sharp metal pins into the speaker ports.'
    ],
    indexable: true
  },
  {
    brand: 'Apple',
    model: 'iPhone 16 Pro',
    slug: 'iphone-16-pro',
    category: 'iphone',
    title: 'iPhone 16 Pro Speaker Cleaner – Eject Water & Dust With Audio',
    description: 'Clean water droplets and micro-debris from your iPhone 16 Pro speaker grilles using low-frequency sound wave technology.',
    year: 2024,
    speakerLayout: 'Precision-machined bottom speaker openings + integrated high-excursion top earpiece speaker.',
    waterRating: 'IP68 certified (6 meters up to 30 minutes).',
    cleaningTips: [
      'Remove protective cases that may trap moisture around the bottom Lightning/USB-C frame.',
      'Gently shake off surface water before starting the 165Hz–240Hz acoustic cycle.',
      'Run the Water Eject audio mode first, followed by the Speaker Balance Test.'
    ],
    troubleshooting: [
      'If the top earpiece speaker sounds crackly, run the Left Speaker Test to isolate the top channel.',
      'Avoid exposing the device to direct hairdryer heat or compressed air cans.'
    ],
    indexable: true
  },
  {
    brand: 'Apple',
    model: 'iPhone 15',
    slug: 'iphone-15',
    category: 'iphone',
    title: 'iPhone 15 Speaker Cleaner – Remove Moisture & Restore Clarity',
    description: 'Fix muffled audio on iPhone 15 with our client-side Web Audio speaker eject tool.',
    year: 2023,
    speakerLayout: 'Bottom USB-C speaker acoustic mesh + top stereo earpiece output.',
    waterRating: 'IP68 water resistant.',
    cleaningTips: [
      'Position iPhone 15 vertically with speakers pointing down.',
      'Run the 60-second audio cleaning sequence twice for best results.'
    ],
    troubleshooting: [
      'Check if headphone mode is stuck due to moisture inside the USB-C port.'
    ],
    indexable: true
  },
  {
    brand: 'Apple',
    model: 'iPhone 14',
    slug: 'iphone-14',
    category: 'iphone',
    title: 'iPhone 14 Speaker Cleaner – Audio Water Eject Tool',
    description: 'Clear trapped water and dust from iPhone 14 dual speakers with low-frequency audio waves.',
    year: 2022,
    speakerLayout: 'Stereo setup with bottom speaker grille and front top earpiece acoustic port.',
    waterRating: 'IP68 water resistance.',
    cleaningTips: [
      'Keep the volume between 75% and 90%.',
      'Wipe escaping moisture from the speaker mesh with a clean cloth.'
    ],
    troubleshooting: [
      'If volume is low, verify that Reduce Loud Sounds is disabled in iOS Settings > Sound & Haptics.'
    ],
    indexable: true
  },
  {
    brand: 'Apple',
    model: 'iPhone 13',
    slug: 'iphone-13',
    category: 'iphone',
    title: 'iPhone 13 Speaker Cleaning Tool – Web Audio Ejector',
    description: 'Acoustically loosen moisture and dust particles from your iPhone 13 speakers.',
    year: 2021,
    speakerLayout: 'Redesigned narrow top earpiece cutout + bottom right speaker ports.',
    waterRating: 'IP68 water resistance.',
    cleaningTips: [
      'Place phone face down at a slight angle on a dry surface.'
    ],
    troubleshooting: [
      'Clean stubborn dry debris with an ultra-soft toothbrush.'
    ],
    indexable: true
  },

  // Samsung Models
  {
    brand: 'Samsung',
    model: 'Galaxy S25 Ultra',
    slug: 'galaxy-s25-ultra',
    category: 'samsung',
    title: 'Samsung Galaxy S25 Ultra Speaker Cleaner – Eject Water & Dust',
    description: 'Optimize audio output and clear moisture from Samsung Galaxy S25 Ultra quad-tuned stereo speakers.',
    year: 2025,
    speakerLayout: 'AKG-tuned stereo sound with bottom laser-slotted speaker port and top acoustic slit.',
    waterRating: 'IP68 rating (up to 1.5 meters of fresh water for up to 30 minutes).',
    cleaningTips: [
      'Remove S-Pen to allow ventilation around lower frame if water entered.',
      'Elevate the phone slightly so the bottom speaker vent points down.',
      'Run the 165Hz–240Hz progression tone sequence.'
    ],
    troubleshooting: [
      'Ensure Dolby Atmos mode is enabled for full-spectrum speaker testing after cleaning.',
      'If low frequencies sound distorted, let the phone dry for 30 minutes before re-testing.'
    ],
    indexable: true
  },
  {
    brand: 'Samsung',
    model: 'Galaxy S24',
    slug: 'galaxy-s24',
    category: 'samsung',
    title: 'Samsung Galaxy S24 Speaker Cleaner – Audio Moisture Removal',
    description: 'Safely expel trapped moisture from Galaxy S24 speakers using browser-generated sound waves.',
    year: 2024,
    speakerLayout: 'Stereo speaker arrangement with bottom main acoustic port.',
    waterRating: 'IP68 water resistant.',
    cleaningTips: [
      'Turn media volume up to 90% and press Start on the ClearSound engine.'
    ],
    troubleshooting: [
      'Wipe moisture escaping from the speaker slit immediately.'
    ],
    indexable: true
  },
  {
    brand: 'Samsung',
    model: 'Galaxy S23',
    slug: 'galaxy-s23',
    category: 'samsung',
    title: 'Galaxy S23 Speaker Cleaning & Water Eject Sound Tool',
    description: 'Clear muffled sound on Samsung S23 with high-amplitude low frequency tones.',
    year: 2023,
    speakerLayout: 'Bottom grille speaker + top bezel earpiece.',
    waterRating: 'IP68 water resistance.',
    cleaningTips: [
      'Perform 2 consecutive 60-second cleaning cycles for heavy water exposure.'
    ],
    troubleshooting: [
      'Verify phone media volume slider is at maximum.'
    ],
    indexable: true
  },
  {
    brand: 'Samsung',
    model: 'Galaxy A55',
    slug: 'galaxy-a55',
    category: 'samsung',
    title: 'Galaxy A55 Speaker Cleaner – Remove Dust & Water',
    description: 'Free Galaxy A55 speaker grills from trapped water and micro dust using Web Audio API.',
    year: 2024,
    speakerLayout: 'Stereo speakers with bottom speaker port and upper display slit.',
    waterRating: 'IP67 water resistance.',
    cleaningTips: [
      'Hold the device vertically over a paper towel while sound is playing.'
    ],
    troubleshooting: [
      'Run the Left/Right balance test to ensure both speakers produce equal volume.'
    ],
    indexable: true
  },

  // Xiaomi Models
  {
    brand: 'Xiaomi',
    model: 'Redmi Note 14 Pro',
    slug: 'redmi-note-14-pro',
    category: 'xiaomi',
    title: 'Redmi Note 14 Pro Speaker Cleaner – Sound Water Ejector',
    description: 'Clean dual stereo speakers on Redmi Note 14 Pro using targeted acoustic vibrations.',
    year: 2024,
    speakerLayout: 'Symmetrical dual stereo speakers located on top and bottom device frames.',
    waterRating: 'IP68 / IP69K dust & water resistance.',
    cleaningTips: [
      'Because the device has top AND bottom speaker cutouts, rotate the phone halfway through the cleaning cycle.',
      'Set volume to 85% to prevent clipping distortion.'
    ],
    troubleshooting: [
      'Check if Game Turbo audio enhancement alters frequency playback during testing.'
    ],
    indexable: true
  },
  {
    brand: 'Xiaomi',
    model: 'Xiaomi 14',
    slug: 'xiaomi-14',
    category: 'xiaomi',
    title: 'Xiaomi 14 Speaker Cleaner – Eject Water Drop Sound',
    description: 'Restore crystal clear sound on Xiaomi 14 using low-frequency audio tone sweeps.',
    year: 2024,
    speakerLayout: 'Stereo setup with bottom speaker chamber and earpiece outlet.',
    waterRating: 'IP68 water rating.',
    cleaningTips: [
      'Run the 165 Hz to 240 Hz sequence, wiping any moisture droplets from the frame.'
    ],
    troubleshooting: [
      'Allow natural drying if phone was submerged in chlorinated or soapy water.'
    ],
    indexable: true
  },

  // Google Pixel Models
  {
    brand: 'Google',
    model: 'Pixel 10',
    slug: 'pixel-10',
    category: 'google-pixel',
    title: 'Google Pixel 10 Speaker Cleaner – Clear Water & Dust Audio',
    description: 'Browser-based acoustic cleaner designed for Google Pixel 10 stereo speaker system.',
    year: 2025,
    speakerLayout: 'Bottom-firing speaker port paired with front-facing top earpiece transducer.',
    waterRating: 'IP68 water and dust protection.',
    cleaningTips: [
      'Place Pixel 10 on a flat towel leaning forward at a 45-degree angle.',
      'Initiate the sound sequence and monitor for water droplets emerging from the bottom port.'
    ],
    troubleshooting: [
      'Disable Adaptive Sound in Pixel Settings during cleaning to preserve raw frequency tone playback.'
    ],
    indexable: true
  },
  {
    brand: 'Google',
    model: 'Pixel 9 Pro',
    slug: 'pixel-9-pro',
    category: 'google-pixel',
    title: 'Pixel 9 Pro Speaker Cleaner – Sound Waves Eject Water',
    description: 'Safely clear liquid from Pixel 9 Pro speaker grilles using client-side Web Audio API tones.',
    year: 2024,
    speakerLayout: 'Stereo setup with bottom right speaker cutout + top earpiece.',
    waterRating: 'IP68 rating.',
    cleaningTips: [
      'Run Water Eject mode first, followed by Speaker Test for sound verification.'
    ],
    troubleshooting: [
      'If audio sounds low, check that media volume is turned all the way up.'
    ],
    indexable: true
  },
  {
    brand: 'Google',
    model: 'Pixel 8',
    slug: 'pixel-8',
    category: 'google-pixel',
    title: 'Pixel 8 Speaker Cleaner – Eject Dust & Water Drop Audio',
    description: 'Fix muffled sound output on Google Pixel 8 using acoustic vibration frequency cycles.',
    year: 2023,
    speakerLayout: 'Stereo speaker arrangement with bottom speaker cutout.',
    waterRating: 'IP68 rated.',
    cleaningTips: [
      'Keep volume elevated and let the 60-second timer complete uninterrupted.'
    ],
    troubleshooting: [
      'Inspect speaker mesh under bright light to check for visible lint buildup.'
    ],
    indexable: true
  },

  // iPad Models
  {
    brand: 'Apple',
    model: 'iPad Pro 13-inch',
    slug: 'ipad-pro-13',
    category: 'ipad',
    title: 'iPad Pro 13-inch Speaker Cleaner – Quad Speaker Audio Eject',
    description: 'Clean trapped moisture and dust from iPad Pro quad-speaker grilles using custom frequency sweeps.',
    year: 2024,
    speakerLayout: 'Four-speaker audio system (two top speakers, two bottom speakers).',
    waterRating: 'Not officially IP rated. Avoid liquid immersion.',
    cleaningTips: [
      'Since iPad Pro features 4 separate speaker openings, lay the iPad horizontally and rotate after each cycle.',
      'Run the Stereo Speaker Test after cleaning to check balance across all four corner speakers.'
    ],
    troubleshooting: [
      'Ensure Smart Keyboard or Magic Keyboard cover is detached during cleaning.'
    ],
    indexable: true
  },
  {
    brand: 'Apple',
    model: 'iPad Air 11-inch',
    slug: 'ipad-air-11',
    category: 'ipad',
    title: 'iPad Air Speaker Cleaner – Audio Tone Cleaning Tool',
    description: 'Dislodge surface dust and moisture from iPad Air landscape stereo speakers.',
    year: 2024,
    speakerLayout: 'Landscape stereo speakers (two speaker grilles on top and bottom edges).',
    waterRating: 'Standard consumer enclosure. No liquid IP rating.',
    cleaningTips: [
      'Position iPad vertically on one edge to assist gravity drainage.'
    ],
    troubleshooting: [
      'Do not compress speaker mesh with cotton swabs.'
    ],
    indexable: true
  },

  // Laptop Models
  {
    brand: 'Apple',
    model: 'MacBook Air M3',
    slug: 'macbook-air-m3',
    category: 'laptop',
    title: 'MacBook Air Speaker Cleaner – Keyboard & Hinge Speaker Sound',
    description: 'Clear dust build-up and improve audio clarity on MacBook Air M3 speakers using sound vibrations.',
    year: 2024,
    speakerLayout: 'Four-speaker sound system integrated inside the hinge display gap.',
    waterRating: 'Not water resistant. Immediately power off if liquid spilled.',
    cleaningTips: [
      'Open laptop display to 110 degrees.',
      'Do not apply direct liquids. Use acoustic vibration to loosen micro dust particles near hinge vents.'
    ],
    troubleshooting: [
      'If liquid spill occurred, turn off the laptop immediately and seek hardware repair.'
    ],
    indexable: true
  },
  {
    brand: 'Dell',
    model: 'Dell XPS 13',
    slug: 'dell-xps-13',
    category: 'laptop',
    title: 'Dell XPS 13 Speaker Cleaner – Dual Bottom Speaker Tool',
    description: 'Use targeted audio frequency tones to test and clean Dell XPS 13 bottom-firing stereo speakers.',
    year: 2024,
    speakerLayout: 'Dual 2W bottom-firing stereo speaker openings on side edges.',
    waterRating: 'Standard laptop enclosure.',
    cleaningTips: [
      'Place laptop on a hard desk surface rather than soft bedding while running the sound cleaner.'
    ],
    troubleshooting: [
      'Verify Waves MaxxAudio or Realtek driver settings are set to full volume.'
    ],
    indexable: true
  }
];

export function getDeviceBySlug(category: string, slug: string): DeviceInfo | undefined {
  return DEVICES.find(d => d.category === category && d.slug === slug);
}

export function getDevicesByCategory(category: string): DeviceInfo[] {
  return DEVICES.filter(d => d.category === category);
}
