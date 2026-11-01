/* ═══════════════════════════════════════════════════════════
   THRIFT DAKAITS — Premium Branded Thrift & Streetwear
   Motion Architecture: Lenis + GSAP + ScrollTrigger
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ─── Thrift Dakaits Product Catalog ───────────────────────
  const PRODUCTS = [
    {
      id: 'thrift-nike-t90',
      name: 'Nike Total 90 Track Jacket',
      variant: 'Midnight Navy / Neon Volt · 2004 Total 90',
      shortVariant: 'Nike T90 Jacket',
      price: 179.0,
      stageBg: '#23344d',
      emblemLeft: '#c8ff00',
      emblemRight: '#121e30',
      sideImg: 'assets/product-nike-t90-side.png',
      frontImg: 'assets/product-nike-t90-front.png',
      cutoutImg: 'assets/product-nike-t90-front.png',
      lifestyleImg: 'assets/thrift-product-8.jpg',
      lineupImg: 'assets/product-nike-t90-side.jpg',
      dots: ['#23344d', '#c8ff00'],
      offsetY: '20px',
      descP1: 'An authentic 2000s Nike Total 90 football training jacket preserved in pristine vintage condition. Features the iconic embroidered T90 circular chest medallion, contrast volt collar lining, and breathable athletic mesh interior:',
      bullets: [
        'Chest / Pit-to-Pit: 22.5" (relaxed athletic fit)',
        'Length: 28.5" collar to bottom hem',
        'Tag Size: Men\'s M (true to size)',
        'Era: Autumn/Winter 2004 (Total 90 golden era)',
      ],
      descP2: 'Carefully hand-sourced by the Thrift Dakaits team. Each vintage item undergoes deep eco-sanitization and meticulous stitch-inspection to guarantee 100% authenticity and wearable longevity.',
      specs: 'Material: 100% Ripstop Nylon Shell · Lining: Polyester Airflow Mesh · Hardware: Full front zipper with branded Nike pull · Pockets: Dual zip-secured hand pockets.',
      condition: 'Condition Grade: 9.5/10 (Excellent Vintage). Original neck label, wash codes, and T90 embroidery fully intact with zero rips or fabric pulls.',
    },
    {
      id: 'thrift-adidas-climacool',
      name: 'Adidas ClimaCool Mock-Neck Pullover',
      variant: 'Obsidian / Heather Grey · Thumbhole Tech',
      shortVariant: 'Adidas ClimaCool',
      price: 149.0,
      stageBg: '#d8dbdd',
      emblemLeft: '#1f2429',
      emblemRight: '#4f575e',
      sideImg: 'assets/product-adidas-side.png',
      frontImg: 'assets/product-adidas-front.png',
      cutoutImg: 'assets/product-adidas-front.png',
      lifestyleImg: 'assets/thrift-product-1.jpg',
      lineupImg: 'assets/product-adidas-side.png',
      dots: ['#1f2429', '#9ea4a9'],
      offsetY: '45px',
      descP1: 'Late-2000s Adidas performance training pullover featuring ergonomic sleeve panelling, integrated cuff thumbholes, and signature 3-stripes ribbing running down the torso flanks:',
      bullets: [
        'Chest / Pit-to-Pit: 20.0" (contoured athletic stretch)',
        'Length: 27.0" shoulder to bottom hem',
        'Tag Size: Men\'s S/P (fits S–slim M)',
        'Tech: ClimaCool moisture-wicking technical weave',
      ],
      descP2: 'Preserved with crisp heat-pressed Adidas chest logo and original factory wash tag. Engineered for cold-weather layering or vintage Y2K streetwear styling.',
      specs: 'Material: 100% Technical ClimaCool Polyester · Collar: Raised mock turtleneck · Cuffs: Extended cuffs with thumbholes · Origin: Made in China (Official Adidas Licenced).',
      condition: 'Condition Grade: 9/10. Elasticity completely responsive; no stains, snags, or collar warping.',
    },
    {
      id: 'thrift-puma-polo',
      name: 'Puma Classic Piqué Performance Polo',
      variant: 'Pure White / Core Black · Athletic Fit',
      shortVariant: 'Puma Piqué Polo',
      price: 119.0,
      stageBg: '#ebebeb',
      emblemLeft: '#000000',
      emblemRight: '#ffffff',
      sideImg: 'assets/product-puma-side.png',
      frontImg: 'assets/product-puma-front.png',
      cutoutImg: 'assets/product-puma-front.png',
      lifestyleImg: 'assets/thrift-product-3.jpg',
      lineupImg: 'assets/product-puma-side.png',
      dots: ['#ffffff', '#000000'],
      offsetY: '10px',
      descP1: 'Timeless Puma sportswear polo shirt crafted from breathable cotton-poly piqué knit. Features raised ribbed knit collar, tonal button placket, and high-density embroidered leaping cat chest emblem:',
      bullets: [
        'Chest / Pit-to-Pit: 19.5" (standard fit)',
        'Length: 28.0" collar to hem',
        'Tag Size: Men\'s S',
        'Details: Embroidered Puma Cat chest logo + woven side-tab label',
      ],
      descP2: 'A versatile wardrobe essential. Pristine white fabric with structural collar ribbing that sits sharp under jackets or over vintage denim.',
      specs: 'Material: 60% Cotton, 40% Polyester Piqué · Collar: Ribbed polo collar with dual-button placket · Branding: Contrast embroidered black Puma cat.',
      condition: 'Condition Grade: 9/10 (Crisp Vintage). Bright white with zero yellowing; all original buttons intact.',
    },
    {
      id: 'thrift-nike-running',
      name: 'Nike Running Dri-FIT Technical Tee',
      variant: 'Heather Charcoal / Reflective Swoosh',
      shortVariant: 'Nike Dri-FIT Tee',
      price: 99.0,
      stageBg: '#383a3f',
      emblemLeft: '#e5e7eb',
      emblemRight: '#1f2937',
      sideImg: 'assets/product-nike-tee-side.png',
      frontImg: 'assets/product-nike-tee-front.png',
      cutoutImg: 'assets/product-nike-tee-front.png',
      lifestyleImg: 'assets/thrift-product-6.jpg',
      lineupImg: 'assets/product-nike-tee-side.png',
      dots: ['#2e3034', '#c5cbd3'],
      offsetY: '40px',
      descP1: 'Ultra-lightweight Nike Running technical t-shirt engineered with zonal ventilation mesh across the chest and back. Features 3M reflective chest bars and reflective heat-transfer Swoosh for low-light visibility:',
      bullets: [
        'Chest / Pit-to-Pit: 23.5" (relaxed boxy drape)',
        'Length: 29.5" shoulder to hem',
        'Tag Size: Men\'s XL (TG / EG)',
        'Fabric: 91% Recycled Polyester, 9% Certified Organic Cotton',
      ],
      descP2: 'Breathable, featherweight grid knit with taped interior collar seams. Sourced from the Thrift Dakaits activewear archive.',
      specs: 'Material: 91% Recycled Poly, 9% Organic Cotton · Technology: Nike Dri-FIT Moisture Management · Details: 3M Reflective chest bars & Swoosh.',
      condition: 'Condition Grade: 9/10. Heat-sealed inner neck branding crisp; zero fabric pulls or loose hems.',
    },
    {
      id: 'thrift-polo-ralph-lauren',
      name: 'Polo Ralph Lauren Custom Fit Striped Polo',
      variant: 'Vintage Ecru / Navy Horizontal Micro-Stripe',
      shortVariant: 'Ralph Lauren Polo',
      price: 129.0,
      stageBg: '#e8e2d8',
      emblemLeft: '#16233b',
      emblemRight: '#ded7cb',
      sideImg: 'assets/product-ralph-lauren-side.png',
      frontImg: 'assets/product-ralph-lauren-front.png',
      cutoutImg: 'assets/product-ralph-lauren-front.png',
      lifestyleImg: 'assets/thrift-item-4.jpg',
      lineupImg: 'assets/product-ralph-lauren-side.png',
      dots: ['#16233b', '#e8e2d8'],
      offsetY: '15px',
      descP1: 'Authentic vintage Polo Ralph Lauren custom fit short-sleeve piqué polo in classic ecru cream with horizontal navy micro-stripes. Features ribbed contrast navy under-collar, dual pearlized buttons, and signature baby-blue embroidered pony on left chest:',
      bullets: [
        'Chest / Pit-to-Pit: 21.0" (custom tailored fit)',
        'Length: 29.5" front hem / 31.0" dropped tennis tail',
        'Tag Size: Men\'s L (Custom Fit)',
        'Era: Mid-2000s Ralph Lauren Corp archive',
      ],
      descP2: '100% combed cotton piqué with tennis-tail split vented hem. Sourced by Thrift Dakaits and preserved in outstanding vintage shape.',
      specs: 'Material: 100% Combed Cotton Piqué · Collar: Ribbed fold-over collar with contrast backing · Embroidery: Signature Ralph Lauren polo player.',
      condition: 'Condition Grade: 9/10 (Superb Vintage). Crisp fabric, fully intact navy contrast undercollar, zero thread pulls.',
    },
    {
      id: 'thrift-carhartt-detroit',
      name: 'Vintage Carhartt Washed Detroit Jacket',
      variant: 'Washed Charcoal Black / Dark Brown Corduroy Collar',
      shortVariant: 'Carhartt Detroit Jacket',
      price: 189.0,
      stageBg: '#242426',
      emblemLeft: '#d4a373',
      emblemRight: '#1a1a1a',
      sideImg: 'assets/product-detroit-jacket-side.png',
      frontImg: 'assets/product-detroit-jacket-front.png',
      cutoutImg: 'assets/product-detroit-jacket-front.png',
      lifestyleImg: 'assets/product-detroit-jacket-front.jpg',
      lineupImg: 'assets/product-detroit-jacket-side.png',
      dots: ['#242426', '#d4a373'],
      offsetY: '25px',
      descP1: 'An iconic 1990s Carhartt Detroit work jacket crafted from heavyweight 12oz ring-spun duck canvas with a soft blanket-lined interior and contrast dark brown corduroy collar. Naturally distressed with authentic vintage streetwear patina:',
      bullets: [
        'Chest / Pit-to-Pit: 24.5" (authentic boxy chore silhouette)',
        'Length: 26.5" collar to bottom hem',
        'Tag Size: Men\'s L (Made in USA)',
        'Details: Heavy 12oz washed duck canvas, corduroy collar, heavy brass zipper',
      ],
      descP2: 'A timeless staple in vintage workwear and modern streetwear. Features heavy-duty brass zipper, zippered left chest pocket, dual welt hand pockets, and adjustable snap cuffs.',
      specs: 'Material: 100% Heavy Cotton Duck Canvas · Collar: 100% Cotton Corduroy · Lining: Blanket Weave · Hardware: Heavy Carhartt Brass Zip.',
      condition: 'Condition Grade: 9.3/10 (Superb Vintage Patina). Clean natural wash fade; zero holes, tears, or zipper flaws.',
    },
  ];

  // ─── Application State ───────────────────────────────────
  const state = {
    currentView: 'home', // 'home' | 'pdp'
    activeProductIndex: 0, // Default to Nike Total 90 Track Jacket
    pdpImageMode: 0, // 0 = Full Garment view, 1 = Authentic Tag/Detail Closeup
    quantity: 1,
    cart: [],
    cartOpen: false,
    lenis: null,
  };

  // ─── DOM References ──────────────────────────────────────
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const els = {
    // Floating Cart Trigger
    floatingCartBtn: $('#floating-cart-btn'),
    headerCartCount: $('#header-cart-count'),
    curtainBg: $('#curtain-bg'),

    // Hero Tilted Frame
    viewHero: $('#view-hero'),
    heroFrame: $('#hero-store-frame'),

    // Collection (Hang Rail Showcase)
    viewCollection: $('#view-collection'),
    rackViewport: $('#rack-viewport'),
    rackActiveTitle: $('#rk-active-title'),
    rackActiveCta: $('#rk-active-cta'),

    // PDP
    viewPdp: $('#view-pdp'),
    pdpLeft: $('#pdp-left'),
    pdpEmblem: $('#pdp-emblem'),
    pdpStage: $('#pdp-stage'),
    pdpImage: $('#pdp-image'),
    pdpPrev: $('#pdp-prev'),
    pdpNext: $('#pdp-next'),
    pdpPrice: $('#pdp-price'),
    pdpTitle: $('#pdp-title'),
    pdpSubtitle: $('#pdp-subtitle'),
    pdpDesc: $('#pdp-desc'),
    pdpVariants: $('#pdp-variants'),
    qtyMinus: $('#qty-minus'),
    qtyPlus: $('#qty-plus'),
    pdpQty: $('#pdp-qty'),
    pdpAddCart: $('#pdp-add-cart'),
    pdpBack: $('#pdp-back'),
    pdpAccordions: $('#pdp-accordions'),

    // Cart Drawer
    cartBackdrop: $('#cart-backdrop'),
    cartDrawer: $('#cart-drawer'),
    cartDrawerCount: $('#cart-drawer-count'),
    cartClose: $('#cart-close'),
    cartBody: $('#cart-body'),
    cartEmpty: $('#cart-empty'),
    cartFoot: $('#cart-foot'),
    cartSubtotal: $('#cart-subtotal'),
    cartCheckout: $('#cart-checkout'),
  };

  // ─── Lenis Smooth Scroll Pipeline ────────────────────────
  function initLenis() {
    if (typeof Lenis === 'undefined') return;

    state.lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });

    state.lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      state.lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Fix hero height to actual viewport height to prevent overlap with next section
    function fixHeroHeight() {
      const hero = document.getElementById('view-hero');
      if (hero) {
        hero.style.height = window.innerHeight + 'px';
      }
    }
    fixHeroHeight();
    window.addEventListener('resize', fixHeroHeight, { passive: true });
  }

  // ─── Background (Permanent Royal Blue Hero, No Curtain Transition) ──
  function initCurtainScroll() {
    // Permanent background active via styles.css; scroll transitions disabled as requested
  }

  // ─── Hero Difference Overlay Clip Synchronizer ───────────
  function updateHeroDiffClip() {
    const media = document.getElementById('hero-store-frame');
    const container = document.querySelector('.framer-1rb3rmm');
    const overlay = document.getElementById('framer-diff-overlay');
    if (!media || !container || !overlay) return;

    const mRect = media.getBoundingClientRect();
    const cRect = container.getBoundingClientRect();

    const topInset = Math.max(0, mRect.top - cRect.top);
    const rightInset = Math.max(0, cRect.right - mRect.right);
    const bottomInset = Math.max(0, cRect.bottom - mRect.bottom);
    const leftInset = Math.max(0, mRect.left - cRect.left);

    overlay.style.clipPath = `inset(${topInset.toFixed(1)}px ${rightInset.toFixed(1)}px ${bottomInset.toFixed(1)}px ${leftInset.toFixed(1)}px)`;

    // Synchronize exact position of overlay titles with base titles for 1:1 subpixel alignment
    const baseTop = document.querySelector('.framer-1rb3rmm > .framer-title-top');
    const baseBottom = document.querySelector('.framer-1rb3rmm > .framer-title-bottom');
    const diffTop = overlay.querySelector('.framer-title-top');
    const diffBottom = overlay.querySelector('.framer-title-bottom');

    if (baseTop && diffTop) {
      const bTopRect = baseTop.getBoundingClientRect();
      diffTop.style.position = 'absolute';
      diffTop.style.top = (bTopRect.top - cRect.top) + 'px';
      diffTop.style.left = (bTopRect.left - cRect.left) + 'px';
      diffTop.style.width = bTopRect.width + 'px';
      diffTop.style.margin = '0';
    }

    if (baseBottom && diffBottom) {
      const bBotRect = baseBottom.getBoundingClientRect();
      diffBottom.style.position = 'absolute';
      diffBottom.style.top = (bBotRect.top - cRect.top) + 'px';
      diffBottom.style.left = (bBotRect.left - cRect.left) + 'px';
      diffBottom.style.width = bBotRect.width + 'px';
      diffBottom.style.margin = '0';
    }
  }

  // ─── Three.js Canvas Storefront with Bloom, Film Grain & 3D Parallax ───
  function initHeroThreeScene() {
    const container = document.getElementById('hero-three-container');
    if (!container || typeof THREE === 'undefined') return;

    const width = container.clientWidth || 480;
    const height = container.clientHeight || 614;

    // 1. Scene & Deep Obsidian Background (#0A0A0A)
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5);

    // 3. Renderer with high color precision
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. Storefront Shader Material (Archival B&W + Dynamic Aspect Ratio Cover)
    const uniforms = {
      u_texture: { value: null },
      u_uvScale: { value: new THREE.Vector2(1, 1) },
      u_uvOffset: { value: new THREE.Vector2(0, 0) }
    };

    const storeMaterial = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: `
        varying vec2 v_uv;
        void main() {
          v_uv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D u_texture;
        uniform vec2 u_uvScale;
        uniform vec2 u_uvOffset;
        varying vec2 v_uv;

        void main() {
          vec2 uv = v_uv * u_uvScale + u_uvOffset;
          vec4 color = texture2D(u_texture, uv);
          gl_FragColor = vec4(color.rgb, 1.0);
        }
      `
    });

    // 5. Plane Mesh filling the camera view at z=0
    let planeMesh = null;
    const imgAspect = 1024 / 575;

    function updatePlaneGeometry() {
      const vFOV = THREE.MathUtils.degToRad(camera.fov);
      const visibleHeight = 2 * Math.tan(vFOV / 2) * camera.position.z;
      const visibleWidth = visibleHeight * camera.aspect;

      if (!planeMesh) {
        const geo = new THREE.PlaneGeometry(visibleWidth, visibleHeight, 32, 32);
        planeMesh = new THREE.Mesh(geo, storeMaterial);
        scene.add(planeMesh);
      } else {
        planeMesh.geometry.dispose();
        planeMesh.geometry = new THREE.PlaneGeometry(visibleWidth, visibleHeight, 32, 32);
      }

      // Calculate object-fit: cover for UV scaling
      const canvasAspect = visibleWidth / visibleHeight;
      if (canvasAspect > imgAspect) {
        const scaleY = imgAspect / canvasAspect;
        uniforms.u_uvScale.value.set(1.0, scaleY);
        uniforms.u_uvOffset.value.set(0.0, (1.0 - scaleY) / 2.0);
      } else {
        const scaleX = canvasAspect / imgAspect;
        uniforms.u_uvScale.value.set(scaleX, 1.0);
        uniforms.u_uvOffset.value.set((1.0 - scaleX) / 2.0, 0.0);
      }
    }

    // Load storefront texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('assets/thrift-dakaits-storefront.jpg', (tex) => {
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
      uniforms.u_texture.value = tex;
    });

    updatePlaneGeometry();

    // 6. Post-Processing Pipeline: Bloom + FilmPass Grain
    let composer = null;
    let bloomPass = null;

    if (typeof THREE.EffectComposer !== 'undefined' && typeof THREE.RenderPass !== 'undefined') {
      composer = new THREE.EffectComposer(renderer);
      const renderPass = new THREE.RenderPass(scene, camera);
      composer.addPass(renderPass);

      // UnrealBloomPass: slightly glow the white storefront lights & signage
      if (typeof THREE.UnrealBloomPass !== 'undefined') {
        bloomPass = new THREE.UnrealBloomPass(
          new THREE.Vector2(width, height),
          0.38, // bloom strength (refined glow on storefront lights)
          0.35, // radius
          0.72  // threshold
        );
        composer.addPass(bloomPass);
      }

      // FilmPass: fine-grained stochastic film grain
      if (typeof THREE.FilmPass !== 'undefined') {
        const filmPass = new THREE.FilmPass(
          0.32,  // noise intensity (fine grain)
          0.02,  // scanline intensity
          648,   // scanline count
          false  // monochromatic
        );
        composer.addPass(filmPass);
      }
    }

    // 7. Static Setup (No mouse parallax or idle motion)
    if (planeMesh) {
      planeMesh.rotation.set(0, 0, 0);
      planeMesh.position.set(0, 0, 0);
    }

    // 8. Animation Loop & Resize
    let isVisible = true;
    let animId = null;
    let lastTime = performance.now();

    function onResize() {
      const w = container.clientWidth || 480;
      const h = container.clientHeight || 614;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
      renderer.setPixelRatio(dpr);

      updatePlaneGeometry();

      if (composer) {
        composer.setSize(w, h);
      }
      if (bloomPass) {
        bloomPass.resolution.set(w, h);
      }
    }

    function animate(currentTime) {
      if (!isVisible) return;
      animId = requestAnimationFrame(animate);

      const delta = (currentTime - lastTime) * 0.001;
      lastTime = currentTime;

      // Keep planeMesh 100% static in position and rotation
      if (composer) {
        composer.render(delta);
      } else {
        renderer.render(scene, camera);
      }
    }

    onResize();
    animId = requestAnimationFrame(animate);

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !animId) {
            lastTime = performance.now();
            animId = requestAnimationFrame(animate);
          }
        });
      }, { threshold: 0.05 });
      observer.observe(container);
    }

    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('orientationchange', onResize, { passive: true });
  }

  // ─── Hero Storefront Setup ────────────────────────────────
  function initHero() {
    updateHeroDiffClip();
    initHeroThreeScene();
    window.addEventListener('resize', updateHeroDiffClip);
    window.addEventListener('orientationchange', updateHeroDiffClip);

    // Clicking the storefront image smoothly scrolls down to the collection
    if (els.heroFrame) {
      els.heroFrame.addEventListener('click', () => {
        if (state.lenis) state.lenis.scrollTo('#view-collection', { duration: 1.2 });
        else if (els.viewCollection) els.viewCollection.scrollIntoView({ behavior: 'smooth' });
      });
    }

    const btnCollection = $('#hero-btn-collection');
    const btnArchive = $('#hero-btn-archive');
    if (btnCollection) {
      btnCollection.addEventListener('click', (e) => {
        e.preventDefault();
        if (state.lenis) state.lenis.scrollTo('#view-collection', { duration: 1.2 });
        else if (els.viewCollection) els.viewCollection.scrollIntoView({ behavior: 'smooth' });
      });
    }
    if (btnArchive) {
      btnArchive.addEventListener('click', (e) => {
        e.preventDefault();
        if (state.lenis) state.lenis.scrollTo('#view-collection', { duration: 1.2 });
        else if (els.viewCollection) els.viewCollection.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }

  // ─── Render Collection Lineup (Hang Rail Showcase Items) ──
  function renderLineup() {
    const rack = els.rackViewport || $('#rack-viewport');
    if (!rack) return;
    rack.innerHTML = '';

    PRODUCTS.forEach((prod, idx) => {
      const itemEl = document.createElement('div');
      itemEl.className = 'rk-item';
      itemEl.setAttribute('role', 'button');
      itemEl.setAttribute('tabindex', '0');
      itemEl.dataset.idx = idx;
      itemEl.dataset.name = prod.name;
      itemEl.dataset.price = `$${prod.price.toFixed(2)}`;
      itemEl.style.setProperty('--rk-sw', '0deg');

      itemEl.innerHTML = `
        <div class="rk-garment">
          <div class="rk-view" data-rk-pos="0">
            <img src="${prod.sideImg}" alt="${prod.name} – side" loading="eager" decoding="async">
          </div>
          <div class="rk-view" data-rk-pos="1">
            <img src="${prod.frontImg}" alt="${prod.name} – front" loading="eager" decoding="async">
          </div>
        </div>
        <div class="rk-tag rk-tag-single" aria-hidden="true">
          <div class="rk-tag-inner">
            <span class="rk-tag-face rk-tag-front">$${Math.round(prod.price)}</span>
          </div>
        </div>
      `;

      rack.appendChild(itemEl);
    });

    // Stagger reveal on scroll
    gsap.from('.rk-item', {
      opacity: 0,
      y: 40,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.08,
      scrollTrigger: {
        trigger: els.viewCollection,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }

  // ─── Hang Rail Showcase with Inertia & Pendulum Spring Physics ──
  function initPendulumRack() {
    const rack = els.rackViewport || $('#rack-viewport');
    const items = $$('.rk-item');
    if (!rack || items.length === 0) return;

    // Track state for horizontal dragging
    const trackState = {
      isDown: false,
      startX: 0,
      scrollLeft: 0,
      dragDistance: 0,
      velocityX: 0,
      lastX: 0,
      lastTime: 0,
    };

    // Pendulum physics state per garment
    const garments = Array.from(items).map((el, i) => ({
      el,
      angle: 0,
      angularVelocity: 0,
      mass: 1.0 + (i % 3) * 0.1,
      stiffness: 0.072,
      damping: 0.915,
    }));

    function updateActiveCaption(idx) {
      const prod = PRODUCTS[idx];
      if (!prod) return;
      state.activeProductIndex = idx;
      if (els.rackActiveTitle) {
        els.rackActiveTitle.innerHTML = `<p>${prod.name} — $${prod.price.toFixed(2)}</p>`;
      }
      if (els.rackActiveCta) {
        els.rackActiveCta.innerHTML = `<span>Shop ${prod.shortVariant}</span><span class="btn__arrow">→</span>`;
      }
    }

    // Hover, Leave & Click on Garments
    garments.forEach((g) => {
      // Hover -> Expand to front view (.rk-live) with realistic spring swing
      g.el.addEventListener('mouseenter', () => {
        if (!trackState.isDown) {
          garments.forEach((other) => {
            if (other !== g) other.el.classList.remove('rk-live');
          });
          g.el.classList.add('rk-live');

          // Realistic physical spring impulse
          g.angularVelocity += (Math.random() > 0.5 ? 5.2 : -5.2);

          const idx = parseInt(g.el.dataset.idx, 10);
          updateActiveCaption(idx);
        }
      });

      // Mouse leave -> Contract back to side view with recoil swing
      g.el.addEventListener('mouseleave', () => {
        g.el.classList.remove('rk-live');
        // Recoil damping impulse
        g.angularVelocity += (g.angularVelocity > 0 ? -2.6 : 2.6);
      });

      // Direct click -> Open 50/50 split PDP
      g.el.addEventListener('click', () => {
        if (trackState.dragDistance < 8) {
          const idx = parseInt(g.el.dataset.idx, 10);
          openPDP(idx);
        }
      });
    });

    // Wire up caption CTA
    if (els.rackActiveCta) {
      els.rackActiveCta.addEventListener('click', (e) => {
        e.preventDefault();
        openPDP(state.activeProductIndex);
      });
    }

    // Set initial caption
    updateActiveCaption(0);

    // Drag / Swipe on Rack
    rack.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button') || e.target.closest('a')) return;
      trackState.isDown = true;
      trackState.startX = e.pageX - rack.offsetLeft;
      trackState.scrollLeft = rack.scrollLeft;
      trackState.lastX = e.pageX;
      trackState.lastTime = performance.now();
      trackState.dragDistance = 0;
      trackState.velocityX = 0;
      rack.classList.add('is-dragging');
      rack.setPointerCapture(e.pointerId);

      // Un-live items while dragging for clean pan
      garments.forEach((g) => g.el.classList.remove('rk-live'));
    });

    rack.addEventListener('pointermove', (e) => {
      if (!trackState.isDown) return;
      const now = performance.now();
      const dt = Math.max(now - trackState.lastTime, 6);
      const x = e.pageX - rack.offsetLeft;
      const walk = (x - trackState.startX) * 1.3;
      const dx = e.pageX - trackState.lastX;
      trackState.dragDistance += Math.abs(dx);

      const instantVel = (dx / dt) * 16.67;
      trackState.velocityX = trackState.velocityX * 0.4 + instantVel * 0.6;

      rack.scrollLeft = trackState.scrollLeft - walk;

      // Inertia swing force on garments
      const maxSwing = 26;
      const swingForce = -Math.max(-maxSwing, Math.min(maxSwing, trackState.velocityX * 1.4));
      garments.forEach((g, idx) => {
        const lag = 1 - (idx * 0.03);
        g.angularVelocity += (swingForce * lag - g.angle) * 0.22;
      });

      trackState.lastX = e.pageX;
      trackState.lastTime = now;
    });

    function endDrag(e) {
      if (!trackState.isDown) return;
      trackState.isDown = false;
      rack.classList.remove('is-dragging');

      if (trackState.dragDistance < 8) {
        const item = e.target.closest('.rk-item');
        if (item && typeof item.dataset.idx !== 'undefined') {
          openPDP(parseInt(item.dataset.idx, 10));
        }
      }
    }

    rack.addEventListener('pointerup', endDrag);
    rack.addEventListener('pointercancel', endDrag);

    // Trackpad / Horizontal Wheel Support
    rack.addEventListener('wheel', (e) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : (e.shiftKey ? e.deltaY : 0);
      if (Math.abs(delta) > 1) {
        rack.scrollLeft += delta;
        const wheelSwing = Math.max(-18, Math.min(18, -delta * 0.4));
        garments.forEach((g, idx) => {
          g.angularVelocity += wheelSwing * (1 - idx * 0.02) * 0.15;
        });
      }
    }, { passive: true });

    // GSAP Ticker Physics Loop: Damped Harmonic Oscillator
    gsap.ticker.add(() => {
      // Smooth coasting scroll
      if (!trackState.isDown && Math.abs(trackState.velocityX) > 0.1) {
        rack.scrollLeft -= trackState.velocityX;
        trackState.velocityX *= 0.93;
        if (Math.abs(trackState.velocityX) < 0.05) trackState.velocityX = 0;
      }

      // Harmonic swing physics per garment
      garments.forEach((g) => {
        const restoringForce = -g.stiffness * g.angle;
        g.angularVelocity = (g.angularVelocity + restoringForce / g.mass) * g.damping;
        g.angle += g.angularVelocity;

        if (Math.abs(g.angle) < 0.006 && Math.abs(g.angularVelocity) < 0.006) {
          g.angle = 0;
          g.angularVelocity = 0;
        }

        // Apply --rk-sw CSS variable matching inspo!
        g.el.style.setProperty('--rk-sw', `${g.angle.toFixed(2)}deg`);
      });
    });
  }

  // ─── Render PDP Variant Switcher Cards ───────────────────
  function renderPDPVariants() {
    els.pdpVariants.innerHTML = '';

    PRODUCTS.forEach((prod, prodIdx) => {
      const card = document.createElement('div');
      card.className = `variant ${prodIdx === state.activeProductIndex ? 'active' : ''}`;
      card.dataset.index = prodIdx;
      card.title = `${prod.name} (${prod.shortVariant})`;

      card.innerHTML = `
        <div class="variant__thumb" style="background:${prod.stageBg}; border-radius:4px; overflow:hidden; padding:3px;">
          <img src="${prod.cutoutImg}" alt="${prod.variant}" style="width:100%; height:100%; object-fit:contain; border-radius:2px;" />
        </div>
        <div style="display:flex; justify-content:center; margin-top:4px;">
          <span class="variant__dot" style="background:${prod.dots[0]}; border:1px solid rgba(0,0,0,0.15); margin-right:-4px; z-index:2;"></span>
          <span class="variant__dot" style="background:${prod.dots[1]}; border:1px solid rgba(0,0,0,0.15); z-index:1;"></span>
        </div>
      `;

      card.addEventListener('click', () => {
        switchVariant(prodIdx);
      });

      els.pdpVariants.appendChild(card);
    });
  }

  // ─── PDP Open / Close Transitions ────────────────────────
  function openPDP(productIndex) {
    state.currentView = 'pdp';
    state.activeProductIndex = productIndex;
    state.pdpImageMode = 0; // default to flatlay view
    state.quantity = 1;
    els.pdpQty.textContent = '1';

    // Populate PDP content
    updatePDPContent(productIndex, false);
    renderPDPVariants();

    // Show PDP
    els.viewPdp.classList.add('open');
    els.viewPdp.setAttribute('aria-hidden', 'false');
    document.body.classList.add('pdp-active');

    // Pause smooth scroll during PDP overlay
    if (state.lenis) state.lenis.stop();

    // GSAP Archival Cascade Entrance
    const tl = gsap.timeline();
    tl.fromTo(
      els.viewPdp,
      { opacity: 0 },
      { opacity: 1, duration: 0.45, ease: 'power2.out' }
    )
      .fromTo(
        els.pdpStage,
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 0.55, ease: 'power3.out' },
        '-=0.2'
      )
      .fromTo(
        '.pdp__well > *',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.08,
        },
        '-=0.3'
      );
  }

  function closePDP() {
    const tl = gsap.timeline({
      onComplete: () => {
        els.viewPdp.classList.remove('open');
        els.viewPdp.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('pdp-active');
        state.currentView = 'home';
        if (state.lenis) state.lenis.start();
      },
    });

    tl.to(els.viewPdp, {
      opacity: 0,
      duration: 0.35,
      ease: 'power2.in',
    });
  }

  // ─── PDP Synchronized Variant Switcher Timeline ──────────
  function switchVariant(productIndex) {
    if (productIndex === state.activeProductIndex) return;

    state.activeProductIndex = productIndex;
    state.pdpImageMode = 0; // reset to full garment
    const product = PRODUCTS[productIndex];

    // Synchronized GSAP Master Timeline (matching 0:11 in video)
    const tl = gsap.timeline();

    // 1. Crossfade Left Stage Background Color
    tl.to(els.pdpLeft, {
      backgroundColor: product.stageBg,
      duration: 0.6,
      ease: 'power2.inOut',
    });

    // 2. Update Dynamic Top-Left Emblem Colors
    tl.to(
      ':root',
      {
        '--emblem-bg-left': product.emblemLeft,
        '--emblem-bg-right': product.emblemRight,
        duration: 0.45,
        ease: 'power2.inOut',
      },
      0
    );

    // 3. Crossfade & Scale Product Cutout Image
    tl.to(
      els.pdpImage,
      {
        opacity: 0,
        scale: 0.94,
        duration: 0.22,
        ease: 'power2.in',
        onComplete: () => {
          updatePDPContent(productIndex, true);
        },
      },
      0
    ).to(els.pdpImage, {
      opacity: 1,
      scale: 1,
      duration: 0.45,
      ease: 'power3.out',
    });

    // 4. Cascade Right-Hand Spec Sheet Text Block
    tl.to(
      [els.pdpTitle, els.pdpSubtitle, els.pdpDesc],
      {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          updatePDPText(product);
        },
      },
      0.1
    ).to([els.pdpTitle, els.pdpSubtitle, els.pdpDesc], {
      opacity: 1,
      y: 0,
      duration: 0.45,
      ease: 'power3.out',
    });

    // Update active highlight on variant cards
    $$('.variant').forEach((card) => {
      const idx = parseInt(card.dataset.index, 10);
      if (idx === productIndex) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
  }

  function updatePDPText(product) {
    els.pdpTitle.textContent = product.name;
    els.pdpSubtitle.textContent = product.variant;
    els.pdpPrice.textContent = `$${product.price.toFixed(2)}`;

    let bulletsHtml = product.bullets.map((b) => `<li>${b}</li>`).join('');
    els.pdpDesc.innerHTML = `
      <p>${product.descP1}</p>
      <ul>${bulletsHtml}</ul>
      <p>${product.descP2}</p>
    `;

    // Update accordions
    const accordionBodies = $$('.accordion__body p');
    if (accordionBodies.length >= 2) {
      accordionBodies[0].textContent = product.specs;
      accordionBodies[1].textContent = product.condition;
    }
  }

  function updatePDPContent(productIndex, imageOnly) {
    const product = PRODUCTS[productIndex];

    // Left visual stage background
    els.pdpLeft.style.backgroundColor = product.stageBg;
    document.documentElement.style.setProperty('--emblem-bg-left', product.emblemLeft);
    document.documentElement.style.setProperty('--emblem-bg-right', product.emblemRight);

    // Image source based on mode (Full view vs Tag Detail Closeup)
    if (state.pdpImageMode === 1 && product.lifestyleImg) {
      els.pdpImage.src = product.lifestyleImg;
      els.pdpImage.style.objectFit = 'cover';
      els.pdpStage.style.width = '88%';
      els.pdpStage.style.maxWidth = '520px';
      els.pdpStage.style.height = 'auto';
    } else {
      els.pdpImage.src = product.cutoutImg;
      els.pdpImage.style.objectFit = 'contain';
      els.pdpStage.style.width = '70%';
      els.pdpStage.style.maxWidth = '460px';
      els.pdpStage.style.height = 'auto';
    }

    if (!imageOnly) {
      updatePDPText(product);
    }
  }

  // ─── PDP Full Garment vs. Tag/Detail Closeup Toggle ───────
  function togglePDPImageMode() {
    state.pdpImageMode = state.pdpImageMode === 0 ? 1 : 0;

    gsap.to(els.pdpImage, {
      opacity: 0,
      scale: 0.95,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        updatePDPContent(state.activeProductIndex, true);
        gsap.to(els.pdpImage, {
          opacity: 1,
          scale: 1,
          duration: 0.45,
          ease: 'power3.out',
        });
      },
    });
  }

  // ─── Cart Drawer System ──────────────────────────────────
  function addToCart() {
    const product = PRODUCTS[state.activeProductIndex];
    const existing = state.cart.find((item) => item.id === product.id);

    if (existing) {
      existing.qty += state.quantity;
    } else {
      state.cart.push({
        id: product.id,
        name: product.name,
        variant: product.shortVariant,
        price: product.price,
        stageBg: product.stageBg,
        cutoutImg: product.cutoutImg,
        dotColor: product.dots[0],
        qty: state.quantity,
      });
    }

    updateCartUI();
    openCart();
  }

  function removeFromCart(productId) {
    state.cart = state.cart.filter((item) => item.id !== productId);
    updateCartUI();
  }

  function updateCartItemQty(productId, delta) {
    const item = state.cart.find((i) => i.id === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      removeFromCart(productId);
    } else {
      updateCartUI();
    }
  }

  function updateCartUI() {
    const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    // Header badge
    els.headerCartCount.textContent = totalItems;
    if (totalItems > 0) {
      els.headerCartCount.classList.add('visible');
    } else {
      els.headerCartCount.classList.remove('visible');
    }

    // Drawer header count
    els.cartDrawerCount.textContent = `(${totalItems})`;

    // Items list
    if (state.cart.length === 0) {
      els.cartEmpty.style.display = 'block';
      els.cartFoot.style.display = 'none';
      els.cartBody.innerHTML = '';
      els.cartBody.appendChild(els.cartEmpty);
    } else {
      els.cartEmpty.style.display = 'none';
      els.cartFoot.style.display = 'block';
      els.cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;

      els.cartBody.innerHTML = '';
      state.cart.forEach((item) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
          <div class="cart-item__thumb" style="background:${item.stageBg}; border-radius:4px; overflow:hidden;">
            <img src="${item.cutoutImg}" alt="${item.variant}" style="width:85%; height:85%; object-fit:contain; border-radius:2px;" />
          </div>
          <div class="cart-item__info">
            <button class="cart-item__remove" data-remove="${item.id}">Remove from basket</button>
            <h3 class="cart-item__name">${item.name}</h3>
            <div class="cart-item__variant">
              <span class="cart-item__dot" style="background:${item.dotColor}; border:1px solid rgba(0,0,0,0.15);"></span>
              <span>${item.variant}</span>
            </div>
            <div class="cart-item__price">Price: $${item.price.toFixed(2)}</div>
            <div class="stepper">
              <button class="stepper__btn" data-minus="${item.id}" aria-label="Decrease quantity">−</button>
              <span class="stepper__val">${item.qty}</span>
              <button class="stepper__btn" data-plus="${item.id}" aria-label="Increase quantity">+</button>
            </div>
          </div>
        `;
        els.cartBody.appendChild(itemEl);
      });

      // Item listeners
      $$('[data-remove]').forEach((btn) => {
        btn.addEventListener('click', () => removeFromCart(btn.dataset.remove));
      });
      $$('[data-minus]').forEach((btn) => {
        btn.addEventListener('click', () => updateCartItemQty(btn.dataset.minus, -1));
      });
      $$('[data-plus]').forEach((btn) => {
        btn.addEventListener('click', () => updateCartItemQty(btn.dataset.plus, 1));
      });
    }
  }

  function openCart() {
    state.cartOpen = true;
    document.body.classList.add('cart-active');
    els.cartBackdrop.style.pointerEvents = 'auto';

    // Slide drawer in + fade translucent royal blue backdrop (matching 0:14 in video)
    gsap.to(els.cartBackdrop, {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
    });

    gsap.to(els.cartDrawer, {
      x: 0,
      duration: 0.6,
      ease: 'power4.out',
    });
  }

  function closeCart() {
    state.cartOpen = false;

    gsap.to(els.cartDrawer, {
      x: '100%',
      duration: 0.5,
      ease: 'power3.inOut',
    });

    gsap.to(els.cartBackdrop, {
      opacity: 0,
      duration: 0.35,
      ease: 'power2.in',
      onComplete: () => {
        els.cartBackdrop.style.pointerEvents = 'none';
        document.body.classList.remove('cart-active');
      },
    });
  }

  // ─── Event Listeners ─────────────────────────────────────
  function bindEvents() {
    // PDP Stepper
    els.qtyMinus.addEventListener('click', () => {
      if (state.quantity > 1) {
        state.quantity--;
        els.pdpQty.textContent = state.quantity;
      }
    });
    els.qtyPlus.addEventListener('click', () => {
      state.quantity++;
      els.pdpQty.textContent = state.quantity;
    });

    // Add to cart
    els.pdpAddCart.addEventListener('click', addToCart);

    // Close PDP
    els.pdpBack.addEventListener('click', closePDP);

    // Full garment vs Tag closeup navigation arrows
    els.pdpPrev.addEventListener('click', togglePDPImageMode);
    els.pdpNext.addEventListener('click', togglePDPImageMode);

    // Cart open / close
    if (els.floatingCartBtn) {
      els.floatingCartBtn.addEventListener('click', () => {
        if (state.cartOpen) closeCart();
        else openCart();
      });
    }
    els.cartClose.addEventListener('click', closeCart);
    els.cartBackdrop.addEventListener('click', closeCart);

    // Checkout button
    els.cartCheckout.addEventListener('click', () => {
      alert('Proceeding to checkout with ' + state.cart.length + ' Thrift Dakaits piece(s)! WhatsApp: +91 7986729527');
    });

    if (els.collectionCta) {
      els.collectionCta.addEventListener('click', () => {
        openPDP(0);
      });
    }


    // Keyboard ESC to close overlay
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (state.cartOpen) closeCart();
        else if (state.currentView === 'pdp') closePDP();
      }
    });
  }

  // ─── App Initialization ──────────────────────────────────
  function init() {
    gsap.registerPlugin(ScrollTrigger);

    initLenis();
    initCurtainScroll();
    initHero();
    renderLineup();
    initPendulumRack();
    renderPDPVariants();
    bindEvents();

    // Ensure cart drawer is offscreen initially
    gsap.set(els.cartDrawer, { x: '100%' });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
