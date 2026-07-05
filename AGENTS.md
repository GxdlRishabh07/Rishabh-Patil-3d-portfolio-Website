# AGENTS.md

## Project Overview

Premium personal portfolio for Rishabh Patil (Full-Stack Developer, Pune, India). Single-page React app with heavy GSAP scroll-driven 3D animations, smooth scrolling via Lenis, and a dark atmospheric design language.

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | React 19 + TypeScript (strict, ES2023) |
| Build | Vite 8 + `@vitejs/plugin-react` |
| Styling | Tailwind CSS v4 + `tailwindcss-animate` |
| Animations | GSAP 3 (ScrollTrigger), Framer Motion, Lenis (smooth scroll) |
| UI primitives | Radix UI, class-variance-authority (CVA) |
| Icons | Lucide React |
| Video | HLS.js |
| Routing | React Router DOM 7 |
| Utilities | `clsx` + `tailwind-merge` (via `cn()` in `src/lib/utils.ts`) |

## Commands

```bash
pnpm dev          # Vite dev server
pnpm build        # tsc -b && vite build (type-check + production bundle)
pnpm lint         # ESLint flat config
pnpm preview      # Preview production build locally
```

No test runner is configured.

## Directory Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI primitives (shadcn-style: button, input, label, textarea)
│   │   ├── contact-2.tsx
│   │   ├── connect-with-us.tsx
│   │   ├── geometric.tsx       # Animated background shapes
│   │   ├── neural-noise.tsx
│   │   ├── images-scrolling-animation.tsx
│   │   └── parallax-scrolling.tsx
│   ├── HLSVideo.tsx
│   ├── LoadingScreen.tsx       # Counter + word reveal loading animation
│   └── Navbar.tsx              # Glassmorphic nav with scroll detection
├── sections/            # Page sections (single-page layout)
│   ├── Hero.tsx                # Video bg, role rotation, GSAP entrance
│   ├── About.tsx               # 3D GSAP scroll cards
│   ├── Education.tsx
│   ├── Certifications.tsx
│   ├── SelectedWorks.tsx       # Bento grid portfolio
│   ├── ContactSection.tsx
│   └── Footer.tsx              # Marquee, CTA, social links
├── lib/
│   └── utils.ts         # cn() utility
├── App.tsx              # Root: Lenis + GSAP ticker sync, section composition
├── index.css            # Tailwind v4 @theme tokens, CSS custom properties
└── main.tsx             # Entry point
```

## Architecture & Patterns

### Section-Based Layout

All content lives in `src/sections/` as self-contained components. `App.tsx` composes them vertically. Anchor navigation (`#about`, `#work`, `#contact`) for scroll-to.

### Animation Pattern

- **GSAP ScrollTrigger**: 3D perspective transforms on scroll (rotateX, rotateY, scale). Each section registers its own `gsap.registerPlugin(ScrollTrigger)` and cleans up via `ctx.revert()` in `useEffect` return.
- **Lenis**: Smooth scrolling, synced to GSAP ticker with `autoRaf={false}`.
- **Framer Motion**: Lightweight hover/tap/enter animations on individual elements.

### Component Composition

- UI primitives in `src/components/ui/` follow shadcn conventions: Radix + CVA + `cn()`.
- `"use client"` directive present in some UI components (carryover from Next.js patterns — works in Vite but not required).

### Styling

- Tailwind v4 with `@theme` block in `src/index.css` for design tokens.
- CSS custom properties for HSL palette values.
- Dark theme by default: `--color-bg: hsl(0, 0%, 4%)`.
- Accent gradient: `linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)`.
- Fonts: **Inter** (body) + **Instrument Serif** (display), preloaded in `index.html`.

### State Management

Local component state only (`useState`, `useRef`, `useEffect`). No global state library.

## Code Style

- **Path aliases**: `@/*` maps to `src/*`.
- **Strict TypeScript**: `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, `verbatimModuleSyntax`.
- **Immutability**: Always create new objects, never mutate existing ones.
- **Functions**: Keep under 50 lines. Prefer early returns over deep nesting.
- **Files**: Keep under 800 lines. Extract utilities from large modules.
- **Constants**: Use named constants for magic numbers/thresholds.
- **Class merging**: Use `cn()` for conditional Tailwind classes.

## Key Conventions

1. Register GSAP plugins locally per component, not globally.
2. Always clean up GSAP contexts in `useEffect` cleanup (`ctx.revert()`).
3. Use `requestAnimationFrame` or GSAP ticker for animation loops, not `setInterval`/`setTimeout`.
4. Compositor-friendly properties only for animations: `transform`, `opacity`, `filter`. Avoid `width`, `height`, `margin`.
5. Images: prefer AVIF/WebP, explicit `width`/`height`, `loading="lazy"` below the fold.
