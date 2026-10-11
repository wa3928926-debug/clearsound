# ClearSound – Browser-Based Speaker Cleaner & Audio Utilities

ClearSound is an independent, production-ready, client-side web application built with **Astro**, **TypeScript**, **HTML5**, **CSS3**, and the **Web Audio API**. It provides browser-based audio tools designed to help dislodge moisture droplets and fine dust particles from mobile phone, tablet, and laptop speakers using controlled acoustic sound wave frequencies.

---

## 🌟 Key Features

- **100% Client-Side Web Audio Engine**: Synthesizes pure sine waves, sawtooth sweeps, and frequency bursts dynamically in the browser using `AudioContext`, `OscillatorNode`, `GainNode`, and `StereoPannerNode`. No audio data is uploaded or recorded.
- **Primary Tool – Speaker Cleaner**: 60-second frequency progression (165 Hz to 240 Hz) designed for physical air displacement.
- **Water Eject Audio Emitter**: Pulsed low-frequency burst profile (155 Hz to 210 Hz) for liquid expulsion.
- **Speaker Diagnostic Suite**: Interactive channel isolation for **Left Speaker**, **Right Speaker**, **Stereo Balance**, and **Frequency Sweep** (20 Hz - 15 kHz).
- **Interactive Frequency Generator**: Manual tone testing from 20 Hz to 20,000 Hz.
- **Programmatic Device SEO**: Dynamic model-specific routes for iPhone, Samsung Galaxy, Xiaomi, Google Pixel, iPad, and Laptops with unique specs and cleaning guidance.
- **AdSense & GA4 Ready**: Zero CLS reserved advertisement slots and configurable Google Analytics 4 integration.
- **Accessible & Responsive**: Modern UI with high-contrast colors, touch-friendly 48px+ touch targets, keyboard focus rings, and `prefers-reduced-motion` compliance.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher (v24.x recommended)
- **npm**: v9.x or higher

### Installation

```bash
# Install project dependencies
npm install
```

### Local Development

Start the Astro local development server:

```bash
npm run dev
# or
npx astro dev
```

Open your browser at `http://localhost:4321/` to preview the site.

---

## 🛠️ Production Build & Verification

To test TypeScript types and generate static SSG output:

```bash
# Type check and build production distribution
npm run build

# Preview production build locally
npm run preview
```

The output will be saved in the `./dist/` directory ready for deployment.

---

## 🌐 Environment Variables

Create a `.env` file in the project root (see `.env.example`):

```env
PUBLIC_SITE_URL=https://clearsound.app
PUBLIC_GA_ID=G-XXXXXXXXXX
PUBLIC_ADSENSE_ID=ca-pub-0000000000000000
```

- `PUBLIC_SITE_URL`: Domain URL used for canonical link and sitemap generation.
- `PUBLIC_GA_ID`: Optional Google Analytics 4 measurement ID.
- `PUBLIC_ADSENSE_ID`: Optional Google AdSense publisher ID.

---

## 📱 Adding a New Device (Programmatic SEO)

Adding a new device automatically generates its static page route and sitemap entry.

Open `src/data/devices.ts` and add a new entry to the `DEVICES` array:

```typescript
{
  brand: 'Apple',
  model: 'iPhone 17 Pro Max',
  slug: 'iphone-17-pro-max',
  category: 'iphone',
  title: 'iPhone 17 Pro Max Speaker Cleaner & Water Eject Tool',
  description: 'Clean your iPhone 17 Pro Max speakers using Web Audio frequency vibrations.',
  year: 2025,
  speakerLayout: 'Bottom multi-slot grille + top earpiece stereo transducer.',
  waterRating: 'IP68 water resistant (6 meters up to 30 minutes).',
  cleaningTips: [
    'Remove protective case before cleaning.',
    'Hold device at a 45-degree angle pointing down.'
  ],
  troubleshooting: [
    'Allow device to dry for 30 minutes after cleaning.'
  ],
  indexable: true
}
```

The route `/iphone/iphone-17-pro-max/` will automatically generate during `npm run build`.

---

## 🎵 Changing Audio Frequencies & Sound Profiles

Frequency sequences are defined centrally in `src/data/frequencies.ts`:

- `CLEANER_FREQUENCY_SEQUENCE`: Step progression for the primary speaker cleaner.
- `WATER_EJECT_SEQUENCE`: Pulsed frequency steps for water ejection.
- `SPEAKER_TEST_PROFILES`: Test tones and pan settings for channel balance checks.

You can modify frequencies, durations, or wave types (`sine`, `sawtooth`, `square`, `triangle`) in `src/data/frequencies.ts`.

---

## ⚡ Deployment

### Cloudflare Pages

1. Connect your Git repository to **Cloudflare Pages**.
2. Set Build Settings:
   - **Framework Preset**: Astro
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
3. Add Environment Variables (`PUBLIC_SITE_URL`).

---

## 🔒 Security & Privacy

- 100% Client-Side Web Audio API execution.
- No user microphone recording or audio uploads.
- Zero external dependencies on heavy JS frameworks.
