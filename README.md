# LEOVAN — The Digital Persona | Cinematic 3D Developer Portfolio

Official developer portfolio for **LEOVAN, also known as Mohammad Sofandi** — an independent Web & App Developer from Sukagumiwang, Indramayu, Jawa Barat, Indonesia.

> **CREATING BEYOND THE SCREEN.**  
> **FROM CURIOSITY TO CREATION.**  
> **A MIND BEHIND THE CODE.**

---

## 1. Key Features

- **Cinematic Character Awakening Intro (`THE DIGITAL PERSONA — AWAKENING`)**: 6-scene interactive opening sequence featuring the exact LEOVAN character artwork, comic-style dialogue greeting, identity reveal (`LEOVAN, also known as Mohammad Sofandi`), and coordinated Hero construction, with instant **Skip Intro**, **Replay Intro**, and `?autostart=1` / `prefers-reduced-motion` support.
- **2.5D Character Parallax Engine**: Multi-layered depth composition using the original user-provided LEOVAN character illustration across all six routes with unique framing, diagonal crimson slashes, and mouse-responsive parallax.
- **3D LV Monogram & Spatial Universe (Three.js)**: Extruded 8-part composite `THREE.Group` LV monogram with studio `RoomEnvironment` PBR reflections, warm/cool + crimson rim lighting, instanced geometric shards, software-WebGL (`isSoftwareGl`) frame pacing, and automatic SVG fallback.
- **Six Complete Routes**:
  - `/` — **Home**: Awakening Intro, Hero Experience, and full interactive universe overview.
  - `/about` — **Behind The Code**: Authentic Indonesian biography, Personal Information Dossier, and `01`–`04` Personal Journey.
  - `/stack` — **The Arsenal**: Interactive category filters and real-time search across 67 technologies explored & studied across 7 categories.
  - `/projects` — **The Archive**: 3D tilt showcase cards for `PROJECT 001: LEOVAN | TOOLS` (`https://leovan.my.id`) and `PROJECT 002: LEOVAN | AI` (`https://leovandyz.web.id`).
  - `/achievements` — **Beyond Development & Off The Grid**: `MOBILE LEGENDS: BANG BANG` — `IMMORTAL` rank showcase and comic-inspired personal dossier (`MIE AYAM`, `ES TEH`, `SPIDER-MAN`, `MOBILE LEGENDS`).
  - `/contact` — **Let's Connect**: Direct email (`vannn626@gmail.com`) with `mailto:` and interactive **Copy Email** confirmation, GitHub (`vannn626-afk`), and official WhatsApp Channel.
- **Procedural Web Audio SFX**: Optional, user-controlled UI sound system (muted by default, persisted in `localStorage`, zero external audio dependencies).
- **SEO & Structured Data**: Next.js Metadata API, OpenGraph, Twitter Cards, Schema.org `Person` JSON-LD, `/sitemap.xml`, `/robots.txt`, and SVG favicon.

---

## 2. Local Development Instructions

```bash
# 1. Install dependencies
npm install

# 2. Run unit tests
npx --yes tsx --test lib/portfolio-logic.test.ts

# 3. Start local development server on port 3000
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 3. Production Build & Vercel Deployment

```bash
# Verify production build
npm run build

# Start production server
npm start
```

### Deploying to Vercel
1. Push this repository to GitHub (`https://github.com/vannn626-afk`).
2. Import the project in the Vercel Dashboard.
3. Framework Preset is automatically detected as **Next.js**.
4. Assign your custom production domain (`https://leovan.my.id`).
5. Click **Deploy**.
