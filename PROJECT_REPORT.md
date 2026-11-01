# PUNJAB COLLEGE OF TECHNICAL EDUCATION, LUDHIANA
## DEPARTMENT OF COMPUTER APPLICATIONS
### CLOUD COMPUTING PROJECT REPORT

---

**PROJECT TITLE:**  
# THRIFT DAKAITS — ARCHIVAL STREETWEAR & VINTAGE E-COMMERCE PLATFORM

**Submitted By:**  
[Your Name / Ghansham]  
**Roll No:** [Your Roll No / 2446557]  

**Submitted To:**  
Ms. Chhayadeep Kaur  

**Subject:** Cloud Computing  
**Academic Session:** 2024–2027  

---

## INDEX

| S. No. | Contents | Page No. |
| :---: | :--- | :---: |
| 1 | Acknowledgement | 3 |
| 2 | Abstract | 4 |
| 3 | Introduction | 5 |
| 4 | Technology Stack | 6 |
| 5 | Key Features | 7 |
| 6 | Implementation | 8 |
| 7 | Visual Results | 9–15 |
| 8 | Deployment | 16 |
| 9 | Conclusion & Future Scope | 17 |
| 10 | Reference Links | 18 |

---

## 1. ACKNOWLEDGEMENT

I would like to express my sincere gratitude to **Punjab College of Technical Education, Ludhiana**, for providing me with the opportunity, infrastructure, and technical resources to complete this Cloud Computing project on **Thrift Dakaits — Archival Streetwear & Vintage E-Commerce Platform**.

I am profoundly thankful to my project guide, **Ms. Chhayadeep Kaur**, for her valuable guidance, continuous encouragement, and constructive critique throughout the planning and execution phases of this project. Her technical insights helped me understand modern cloud hosting architectures, client-side performance engineering, and how to present technical work in a rigorous and structured format.

I would also like to extend my appreciation to the faculty members of the Department of Computer Applications, my peers, and fellow students who offered continuous feedback and testing support during the local development, version control integration, and cloud deployment pipelines.

Finally, I express my heartfelt gratitude to my family for their unwavering encouragement, patience, and moral support throughout my academic journey.

<br>

**[Your Name / Ghansham]**  
Roll No.: [Your Roll No / 2446557]  
Department of Computer Applications  
Punjab College of Technical Education, Ludhiana  

---

## 2. ABSTRACT

**Thrift Dakaits** is an interactive, modern archival fashion and vintage streetwear e-commerce web platform designed to preserve and exhibit rare garments from the 1990s and early 2000s under the sustainable philosophy of *"Giving clothes a second chance."* Unlike conventional online stores that rely on static product grids, this project bridges interactive 3D WebGL graphics, physical simulation, and cloud hosting architectures to deliver an editorial-grade digital retail experience.

The platform demonstrates how static assets, client-side rendering engines, and modern Continuous Deployment (CD) workflows powered by Git, GitHub, and Cloud-based Edge Hosting (Vercel) can deliver ultra-low latency, globally distributed web applications without traditional server-maintenance overhead. Key technical highlights include a Three.js WebGL 3D storefront with real-time post-processing shaders (bloom and film grain), a custom physics-driven garment rack featuring a damped harmonic oscillator (pendulum swing dynamics), an archival 50/50 split-screen Product Detail Page (PDP) with real-time metric inspection, and an interactive state-managed shopping basket.

From a Cloud Computing perspective, the project serves as an end-to-end case study in modern serverless static hosting, content delivery networks (CDNs), immutable version tracking, and zero-downtime automated deployment pipelines accessible through a global public URL.

### Project Objectives
- Build a responsive, high-performance web platform tailored for archival apparel curation.
- Implement advanced interactive computer graphics using Three.js and custom GLSL shader pipelines in a standard web browser without external plugins.
- Incorporate mathematical harmonic spring and pendulum physics for tangible digital product discovery.
- Demonstrate cloud-native static website deployment using modern version control (Git & GitHub) and global edge cloud distribution (Vercel).
- Provide a responsive, accessible user interface optimized across mobile, tablet, and widescreen desktop displays.

---

## 3. INTRODUCTION

### Project Background
In the contemporary apparel and digital retail landscape, sustainable fashion and archival vintage curation have become central to modern youth culture. However, traditional e-commerce web templates are often rigid, static, and disconnected from the tangible and historical essence of curated garments. Potential customers require both rigorous archival verification (measurements, condition grading, fabric provenance) and engaging visual presentation.

**Thrift Dakaits** addresses this design challenge by combining archival storytelling with advanced web technologies. The web application serves as a centralized platform presenting curated collections—ranging from 2004 Nike Total 90 training apparel to 1990s Carhartt workwear jackets—in a tactile, high-density format accessible across all standard web browsers and devices.

### Project Goals
1. **Design an Editorial Aesthetic:** Establish a bold visual identity featuring royal blue backdrops, maximalist typography (Syne, Clash Display, Aspekta), and high-contrast color styling.
2. **Interactive 3D Visuals:** Embed an interactive Three.js 3D viewport featuring post-processed lighting bloom and stochastic film grain.
3. **Realistic Product Physics:** Replicate a physical showroom garment rack using damped pendulum oscillation algorithms based on dragging velocity and trackpad inertia.
4. **Archival Transparency:** Provide detailed condition ratings, exact pit-to-pit and length measurements, fabric specifications, and authenticity reports for vintage items.
5. **Cloud Deployment:** Implement continuous deployment on a global edge cloud network ensuring 99.99% availability, HTTPS encryption, and sub-second asset delivery.

### Scope
The current scope encompasses a client-side public-facing archival web store complete with product discovery, 3D graphics rendering, interactive rack browsing, dynamic variant selection, spec inspection, and client-side basket management. Real-time online credit-card processing, user database authentication, and warehouse inventory ERP systems remain modular features reserved for future cloud backend integration.

---

## 4. TECHNOLOGY STACK

The following table summarizes the technological components, frameworks, and cloud services utilized in developing and hosting the platform:

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Markup & Semantics** | HTML5 | Provides structured semantic markup, accessibility attributes (ARIA), and metadata. |
| **Styling & Layout** | CSS3 (Modern Vanilla) | Utilizes CSS Custom Properties, Flexbox, CSS Grid, Fluid Clamp Typography, and Compositing Layers (`will-change`, `transform: translateZ`). |
| **Client-Side Interactivity** | JavaScript (ES6+) | Drives DOM event synchronization, state containers, stepper arithmetic, and cart persistence. |
| **3D Graphics & Shaders** | Three.js (r128) + GLSL | Powers the WebGL scene, custom UV-scaled vertex/fragment shaders, and camera matrices. |
| **Post-Processing** | EffectComposer & Shaders | Implements `UnrealBloomPass` for lighting illumination and `FilmPass` for archival photographic grain. |
| **Motion & Physics** | GSAP 3 & ScrollTrigger | Manages multi-stage animation timelines, variant transitions, and drawer sliders. |
| **Smooth Scrolling** | Lenis v1.1.18 | Ensures normalized, inertia-based smooth scrolling synchronized with browser repaint cycles. |
| **Version Control** | Git & GitHub | Distributed version control tracking file revisions and managing remote code synchronization. |
| **Cloud Hosting** | Vercel Edge Network | Provides cloud static site hosting, global CDN edge caching, SSL/TLS certificates, and automated Git CI/CD deployments. |
| **Assets & Media** | Optimized Web Formats (PNG/JPG/SVG) | Pre-processed cutout product flatlays, side-profile transparent views, and vector icons. |

---

## 5. KEY FEATURES

### 1. Interactive 3D WebGL Hero Canvas
Introduces Thrift Dakaits with high-impact typography and an interactive WebGL viewport rendered via Three.js. Includes custom aspect-ratio UV coordinate scaling, film grain simulation, dynamic bloom luminosity, and mathematical `mix-blend-mode: difference` overlay tracking for 1:1 subpixel typography inversion.

### 2. Hang Rail Showcase with Damped Pendulum Physics
A digital recreation of an authentic physical clothing rack. Garments hang from a metallic overhead rod and react dynamically to user dragging and flicking. An underlying harmonic spring oscillator calculates angular velocity, stiffness, mass, and damping coefficients to produce realistic sway angles (`--rk-sw`) and natural recoils.

### 3. Dual-Perspective Garment Interaction
Users can seamlessly toggle between a profile hanger view and an expanded front flatlay view on hover or swipe, enabling instant visual inspection of silhouettes and authentic details.

### 4. 50/50 Split-Screen Archival Product Detail Page (PDP)
A focused modal view providing exhaustive technical and vintage specifications:
- **Archival Spec Sheet:** Accurate pit-to-pit chest measurements, collar-to-hem length, tag sizing, and verified historical era (e.g., A/W 2004).
- **Condition Grading:** Numerical vintage authentication grading (e.g., 9.5/10) with defect transparency.
- **Accordion Modules:** Expandable technical details covering hardware, wash codes, materials, and dispatch information.

### 5. Multi-Stage Variant Switcher
A synchronized GSAP timeline coordinates seamless background color crossfades, dynamic SVG brand emblem updates, scaled image transitions, and staggered typography shifts without page reloading.

### 6. Interactive Slide-Out Basket (Cart Drawer)
Maintains shopping basket state with real-time subtotal computation, quantity increment/decrement steppers, item removal actions, badge counters, and an accessible royal blue translucent backdrop.

### 7. Responsive Cross-Device Architecture
Constructed with fluid clamp scaling (`clamp(48px, 9.2vw, 110px)`) and adaptive layouts that provide seamless user experiences across mobile smartphones, iPads/tablets, laptops, and ultra-wide desktop monitors.

---

## 6. IMPLEMENTATION

### Implementation Overview
Development commenced with defining the archival design system (`DESIGN.md`) specifying colors, fluid typography scales, and content boundaries. The layout structure was authored in HTML5 with clean component boundaries. Modern CSS was then structured into modular sections covering reset, custom properties, hero staging, hang rail physics, PDP overlay, and the cart drawer.

Three.js and post-processing pipelines were implemented to handle real-time rendering. The harmonic pendulum physics loop was integrated into the GSAP ticker to calculate physical inertia on each animation frame. Finally, Lenis smooth scrolling was linked to GSAP ScrollTrigger to ensure stutter-free scrolling before connecting the codebase to GitHub and Vercel.

### Development Steps
1. **Information Architecture & Wireframing:** Map out the three primary views: Hero Showcase, Hang Rail Carousel, and 50/50 Split PDP.
2. **Semantic HTML5 Construction:** Structure DOM containers, dialog overlays, and ARIA accessibility roles.
3. **Design System & Styling:** Build responsive CSS rules using CSS variables, flexbox, grid, and hardware-accelerated stacking contexts.
4. **Three.js & Shader Integration:** Build WebGL renderer, load photographic textures with cover UV calculations, and apply bloom and grain passes.
5. **Physical Harmonic Simulation:** Implement a spring-damping equation:
   $$\text{Force} = -k \cdot \theta, \quad a = \frac{\text{Force}}{m}, \quad v = (v + a) \cdot d$$
6. **Cart State Architecture:** Implement pure JavaScript state handlers managing items, quantities, and UI re-renders.
7. **Cross-Browser & Hardware Optimization:** Audit canvas frame rates (60 FPS target), layout shifts, and mobile touch events.
8. **Cloud Deployment:** Initialize local Git repository, commit files, push to GitHub remote, and link to Vercel's cloud build pipeline.

### Testing & Quality Assurance
- **Cross-Browser Testing:** Verified across Google Chrome, Mozilla Firefox, Microsoft Edge, and Apple Safari.
- **Performance & Frame Rate Auditing:** Maintained continuous 60 FPS animation during active garment dragging and canvas rendering.
- **Responsive Testing:** Inspected on standard breakpoints (375px, 768px, 1024px, 1440px, and 1920px).
- **State Validation:** Verified cart edge cases (zero items, quantity increment/decrement bounds, and pricing accuracy).

---

## 7. VISUAL RESULTS

### FIGURE 1: 3D HERO VIEWPORT & DISPLAY TYPOGRAPHY
*Figure: Hero Section of Thrift Dakaits platform featuring Royal Blue canvas, Three.js 3D viewport, and difference-blended typography.*

```
+--------------------------------------------------------------------------+
|  THRIFT                                                            ( 0 ) |
|                                                                          |
|                  +-----------------------------------+                   |
|                  |     THREE.JS 3D CANVAS VIEWPORT   |                   |
|                  |     (Bloom & Film Grain Shader)   |                   |
|                  +-----------------------------------+                   |
|                                                                          |
|                                                                  DAKAITS |
|  GIVING CLOTHES A SECOND CHANCE...       [LET'S WORK TOGETHER] [ARCHIVE] |
+--------------------------------------------------------------------------+
```

---

### FIGURE 2: HANG RAIL COLLECTION & HARMONIC OSCILLATOR
*Figure: Dynamic Hang Rail Showcase displaying vintage items suspended from overhead metallic rod with swing physics and price tags.*

```
+--------------------------------------------------------------------------+
|                       NEW COLLECTION | PREMIUM STREETWEAR                |
|  ======================================================================  |
|         |           |           |            |             |             |
|       [\\]        [ | ]       [ / ]       [  |  ]        [\\]            |
|      Nike T90    Adidas      Puma Polo    Nike Tee     Carhartt          |
|      $179.00     $149.00      $119.00      $99.00       $189.00          |
|                                                                          |
|               NIKE RUNNING DRI-FIT TECHNICAL TEE — $99.00                |
|                        [ SHOP DRI-FIT TEE -> ]                           |
+--------------------------------------------------------------------------+
```

---

### FIGURE 3: 50/50 SPLIT-SCREEN PRODUCT DETAIL PAGE (PDP)
*Figure: Archival Product Detail Page modal showing high-density spec sheet, measurements, and synchronized color variant switcher.*

```
+------------------------------------+-------------------------------------+
| [TD 2026]                          | $179.00                             |
|                                    | NIKE TOTAL 90 TRACK JACKET          |
|                                    | Midnight Navy / Neon Volt · 2004    |
|             +------------+         |                                     |
|             |            |         | - Pit-to-Pit: 22.5"                 |
|             |  GARMENT   |         | - Length: 28.5" collar to hem       |
|             |   CUTOUT   |         | - Condition Grade: 9.5/10           |
|             |            |         |                                     |
|             +------------+         | [T90] [Clima] [Puma] [Tee] [Detroit]|
|                                    | [- 1 +]  [ ADD TO BASKET -> ]       |
|  <- Previous View    Next View ->  | > Item Specifications        [+]    |
+------------------------------------+-------------------------------------+
```

---

### FIGURE 4: SLIDE-OUT SHOPPING BASKET DRAWER
*Figure: Interactive Cart Drawer with live item calculation, quantity steppers, and translucent royal blue backdrop.*

```
+---------------------------------------------------+----------------------+
|                                                   | CART (2)         [X] |
|                                                   |----------------------|
|                                                   | [IMG] Nike T90       |
|                 TRANSLUCENT                       |       Qty: 1  $179   |
|               BLURRED BACKDROP                    |----------------------|
|                                                   | [IMG] Adidas Mock    |
|                                                   |       Qty: 1  $149   |
|                                                   |----------------------|
|                                                   | Subtotal:    $328.00 |
|                                                   | [ GO TO CHECKOUT ->] |
+---------------------------------------------------+----------------------+
```

---

### FIGURE 5: RESPONSIVE MOBILE VIEW
*Figure: Mobile-optimized viewport displaying touch-draggable rack, collapsed navigation, and stacked PDP specs.*

```
+-----------------------------+
| THRIFT              [ (1) ] |
|                             |
|       +-------------+       |
|       | 3D STORE    |       |
|       +-------------+       |
|                     DAKAITS |
|                             |
| NEW COLLECTION              |
| ====[ ROD ]================ |
|   |         |         |     |
| [Nike]   [Adidas]   [Puma]  |
|                             |
| [ SHOP THE COLLECTION -> ]  |
+-----------------------------+
```

---

## 8. DEPLOYMENT

### Cloud Deployment Overview
Cloud deployment replaces traditional single-server hosting with distributed serverless Edge Networks. When a website is deployed to a cloud platform like Vercel, static HTML, CSS, JavaScript, and image assets are distributed across a globally dispersed network of Point of Presence (PoP) edge nodes. This architecture ensures minimal latency, automatic SSL encryption, protection against traffic spikes, and continuous integration with Git repositories.

### Deployment Procedure
1. **Repository Setup:** Local Git repository initialized on branch `main` and verified with clean staging via `.gitignore`.
2. **GitHub Remote Synchronization:** Remote repository created and authenticated using the GitHub CLI (`gh`):
   ```bash
   git remote add origin https://github.com/Pr1ncx/thrift-dakaits.git
   git push -u origin main
   ```
3. **Cloud Build & Edge Linking:** Project connected to Vercel's global edge network via git integration.
4. **Static Optimization & Caching:** Assets configured with immutable edge caching headers for sub-second load times.
5. **DNS & SSL Provisioning:** Automatic HTTPS certification provisioned through Let's Encrypt / Vercel Edge TLS certificates.
6. **Live URL Verification:** Full functional audit conducted on the live public production URL across multiple client networks.

### Project Deployment Details
- **Hosting Platform:** Vercel Global Edge Network
- **Deployment Status:** Active & Deployed
- **Live Website URL:** [https://thrift-dakaits.vercel.app/](https://thrift-dakaits.vercel.app/)
- **GitHub Repository:** [https://github.com/Pr1ncx/thrift-dakaits](https://github.com/Pr1ncx/thrift-dakaits)
- **Deployment Date:** 1 November 2026
- **Continuous Integration:** Automated Git Push-to-Deploy

---

## 9. CONCLUSION & FUTURE SCOPE

### Conclusion
The **Thrift Dakaits** project successfully illustrates how modern web engineering, mathematical physics simulation, and cloud computing architectures can be combined to build a state-of-the-art e-commerce platform. By moving beyond traditional static product grids and incorporating Three.js 3D shaders, real-time pendulum dynamics, and archival spec transparency, the platform establishes an engaging and authentic medium for vintage apparel commerce.

From a cloud computing perspective, this project validates the agility, cost-efficiency, and resilience of modern cloud-native workflows: source code managed via GitHub automatically triggers edge-level deployments on Vercel, eliminating the overhead of dedicated virtual servers while ensuring worldwide accessibility and zero-downtime scalability.

### Future Scope
1. **Serverless Payment Gateway:** Integrate secure Stripe or Razorpay API webhooks via Vercel Serverless Edge Functions for live online transactions.
2. **Cloud Database & Headless CMS:** Integrate Supabase or MongoDB Atlas to dynamically fetch archival garments, stock statuses, and condition logs.
3. **Cloud Authentication:** Implement OAuth 2.0 (Google / GitHub login) for user profiles, order tracking, and wishlist synchronization.
4. **Augmented Reality (AR) Try-On:** Expand the Three.js pipeline to support WebXR/ARKit model previews allowing customers to project garments in true 3D scale.
5. **Real-Time Notification Queues:** Integrate cloud-based messaging (Twilio / SendGrid / WhatsApp Business API) for instant dispatch and order updates.

---

## 10. REFERENCE LINKS

The following official documentation, academic papers, and technical specifications were referenced throughout the development and cloud deployment of this project:

- **HTML5 Specification:** [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- **CSS3 Flexible Box & Grid Layouts:** [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- **Three.js WebGL Documentation:** [https://threejs.org/docs/](https://threejs.org/docs/)
- **GreenSock Animation Platform (GSAP 3):** [https://gsap.com/docs/v3/](https://gsap.com/docs/v3/)
- **Lenis Smooth Scroll Engine:** [https://github.com/darkroomengineering/lenis](https://github.com/darkroomengineering/lenis)
- **Git Version Control System:** [https://git-scm.com/doc](https://git-scm.com/doc)
- **GitHub CLI & Remote Repository Docs:** [https://docs.github.com/](https://docs.github.com/)
- **Vercel Cloud Edge Deployment:** [https://vercel.com/docs](https://vercel.com/docs)
- **NIST Cloud Computing Standards:** [https://www.nist.gov/itl/cloud-computing](https://www.nist.gov/itl/cloud-computing)

### Official Project Links
- **Live Deployment URL:** [https://thrift-dakaits.vercel.app/](https://thrift-dakaits.vercel.app/)
- **GitHub Repository:** [https://github.com/Pr1ncx/thrift-dakaits](https://github.com/Pr1ncx/thrift-dakaits)
