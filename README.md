# THRIFT DAKAITS — Premium Branded Thrift & Streetwear

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://thrift-dakaits.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **"Give Clothes A Second Chance."**  
> An archival e-commerce experience curated for rare streetwear and iconic 90s–2000s vintage apparel. Built with interactive 3D WebGL visuals, real-time pendulum physics, and high-density archival spec sheets.

🔗 **Live Deployment:** [https://thrift-dakaits.vercel.app/](https://thrift-dakaits.vercel.app/)

---

## 🌟 Key Features

### 1. Noah Gray-Inspired 3D Hero
- **Three.js WebGL Scene**: Custom GLSL shader material with dynamic aspect ratio cover and real-time lighting.
- **Post-Processing Pipeline**: `EffectComposer` with `UnrealBloomPass` for subtle signage glow and `FilmPass` for stochastic film grain.
- **Difference Overlay Sync**: High-impact editorial typography with mathematical `mix-blend-mode: difference` inversion tracking the 3D storefront bounding box.

### 2. Hang Rail Showcase with Pendulum Physics
- **Physical Spring Dynamics**: Damped harmonic oscillator simulating real physical weight, inertia, and swing angles (`--rk-sw`) when dragging or hovering garments.
- **Interactive Perspectives**: Seamless transition between profile side view and expanded flatlay front view.
- **Authentic Swing Tags**: 3D transform price tags that react to motion and drag velocity.

### 3. 50/50 Split Archival Product Detail Page (PDP)
- **High-Density Spec Sheet**: Archival breakdown including pit-to-pit measurements, era verification, condition grade (e.g. 9.5/10), and fabric composition.
- **Synchronized Variant Switcher**: Multi-stage GSAP animation coordinating background crossfades, emblem color shifts, and staggered typography transitions.
- **Dual Perspective Viewer**: Toggle between full garment view and macro authentic detail / lifestyle closeups.

### 4. Slide-Out Cart Drawer & Responsive Layout
- Full cart state management (add, update quantities, remove items, dynamic pricing).
- Translucent backdrop blur with smooth GSAP slide animations.
- Fully responsive across desktop, tablet, and mobile screens.

---

## 🛠️ Tech Stack

- **Core**: HTML5, Vanilla CSS3 (Custom Properties & Fluid Clamp Typography), JavaScript (ES6+)
- **3D & Graphics**: [Three.js](https://threejs.org/) (WebGL, ShaderMaterial, EffectComposer, UnrealBloomPass, FilmPass)
- **Smooth Scrolling**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Motion & Timelines**: [GSAP 3](https://greensock.com/gsap/) + [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Typography**: Clash Display, Syne, Inter, JetBrains Mono
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

### Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Pr1ncx/thrift-dakaits.git
   cd thrift-dakaits
   ```

2. **Serve locally:**
   You can serve the directory with any local static server:
   ```bash
   # Using npx serve:
   npx serve -l 3000 .
   ```
   Or use VS Code's **Live Server** extension.

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

---

## 🌐 Live Link

Check out the live deployment on Vercel:  
👉 **[https://thrift-dakaits.vercel.app/](https://thrift-dakaits.vercel.app/)**

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
