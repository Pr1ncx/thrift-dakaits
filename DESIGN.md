---
design_tokens:
  colors:
    primary: "#0d1943"
    secondary: "#1a1a4e"
    neutral_high: "#1f2937"
    background: "#ffffff"
    border: "#e5e7eb"
    surface: "transparent"
    accent_pink: "#e6b8b8"
    accent_yellow: "#fdf699"
    accent_navy: "#1226aa"
    accent_plum: "#3b1728"

  typography:
    families:
      primary: "'news-gothic-std', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
      accent: "'neue-kabel', 'Syne', 'Plus Jakarta Sans', sans-serif"
    scales:
      display_h1: { size: "18px", weight: "400", line_height: "23.4px", family: "primary", color: "#1a1a4e" }
      body:       { size: "16px", weight: "400", line_height: "24px",   family: "primary", color: "#1f2937" }
      input_btn:  { size: "16px", weight: "400", line_height: "24px",   family: "primary", color: "#1a1a4e" }
      h3_section: { size: "11px", weight: "900", line_height: "16.5px", family: "accent",  color: "#0d1943", uppercase: true }
      h2_label:   { size: "11px", weight: "700", line_height: "14.3px", family: "primary", color: "#0d1943", uppercase: true }
      paragraph:  { size: "10px", weight: "400", line_height: "15px",   family: "primary", color: "#0d1943" }
      macro_cutout: { size: "clamp(8rem, 22vw, 24rem)", weight: "900", line_height: "0.85", family: "accent" }
      hero_banner:  { size: "clamp(2.25rem, 4.5vw, 4rem)", weight: "500", line_height: "1.1", family: "primary" }

  spacing:
    base_unit: "4px"
    sub_unit: "2px"
    gutters: "10px"
    max_content_well: "732px"
    margins:
      h1_bottom: "6px"
      h3_bottom: "14px"
      link_adjust: "-1px"
    paddings:
      button: "8px 0px"
      h3: "0px 0px 8px"

  boundaries:
    radius:
      default: "0px"
    shadows:
      default: "none"
---

# BLOK — Archival Thrift Store Design System

## Layout Rationale

### Grid & Flexbox Architecture

| Layer | Behavior |
|---|---|
| **Full-Bleed Visual Stages** | Hero split, 6-item lineup, 50/50 PDP split → `100vw` |
| **Reading Well** | Spec sheets, editorial, descriptions → `max-width: 732px`, left-aligned |
| **Interactive Flex Controls** | `display: inline-flex; align-items: center; gap: 10px; padding: 8px 0;` |

### Component Blueprints

- **H1**: 18px / weight 400 / margin-bottom 6px / #1a1a4e
- **H2 Labels**: 11px / weight 700 / line-height 14.3px / news-gothic-std / #0d1943
- **H3 Section**: 11px / weight 900 / line-height 16.5px / neue-kabel / padding-bottom 8px / margin-bottom 14px / #0d1943
- **Paragraph (P)**: 10px / weight 400 / line-height 15px / #0d1943
- **Buttons/Inputs**: 16px / line-height 24px (WCAG tap target compliance)

### Do's and Don'ts

✅ **DO**: Use `news-gothic-std` (Inter fallback) for all functional UI/body  
✅ **DO**: Use `neue-kabel` (Syne fallback) for H3 headers and macro display cutouts  
✅ **DO**: Maintain `0px border-radius` and `box-shadow: none` across all elements  

❌ **DON'T**: Exceed `732px` for primary reading wells  
❌ **DON'T**: Introduce drop shadows or border-radius  

## Motion Pipeline

- **Lenis** → Smooth scroll with `lerp: 0.1`
- **GSAP ScrollTrigger** → Parallax, pinning, scrub-based animations
- **Archival Cascade** → `opacity: 0, y: 40` → `opacity: 1, y: 0, stagger: 0.12`
- **PDP Variant Switch** → Synchronized timeline: bg crossfade → image scale → text cascade
- **Cart Drawer** → `xPercent: 0, duration: 0.6, ease: power4.out` + blue backdrop fade
