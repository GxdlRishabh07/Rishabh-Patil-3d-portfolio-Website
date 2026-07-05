# 🌌 Portfolio Project Documentation (GEMINI.md)

Welcome to the **Premium Personal Portfolio** developer manual. This document serves as the project-local instruction layer and blueprint for this codebase. It details the purpose, mechanics, and usage of every tool, library, component, and design system token in this repository.

---

## 🛠️ Complete Technology Stack

Here is the breakdown of all tools, packages, and frameworks utilized in the portfolio, including why they were selected and what they are used for:

### Core Framework & Build Tooling
*   **React 19 (TypeScript, ES2023)**: The core UI library. Leverages strict typing (`tsconfig.json`), modern hooks (`useState`, `useRef`, `useEffect`, `useCallback`), and code splitting (`lazy`, `Suspense`) for high performance.
*   **Vite 8**: The frontend build tool and dev server. Configured with `@vitejs/plugin-react` for Fast Refresh and `@tailwindcss/vite` for compiles. Offers rapid hot-module replacement (HMR) and optimized rollup production bundles.
*   **TypeScript 6**: Imposes strict static analysis (`noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`) to guarantee type safety and compile-time correctness across all TSX components.

### Animation & Motion Suite
*   **GSAP 3 & ScrollTrigger (`gsap`, `@gsap/react`)**: The industry standard for high-performance scroll-driven and timeline animations. Used in the `About` section to orchestrate 3D entrances, tilts, and staggers synced to scroll progress.
*   **Lenis Smooth Scroll (`lenis`, `@studio-freight/lenis`)**: Provides a premium, fluid scrolling experience across all browsers and devices. It is synchronized with the GSAP ticker loop in `App.tsx` (`autoRaf={false}`) to ensure scroll trigger calculations align perfectly with the render cycles.
*   **Framer Motion 12 (`framer-motion`, `motion`)**: Powerhouse for declarative React animations. Used for:
    *   Dynamic canvas frame interpolation in `ScrollyCanvas`.
    *   Marquee velocity calculations in `ScrollVelocity`.
    *   Wipe transitions (`clipPath` masks) in `SectionParallaxReveal`.
    *   Loading screen fades, word rotations, progress trackers, and UI card details.

### Styling & UI Primitives
*   **Tailwind CSS v4**: The modern utility-first CSS framework. Written with standard `@import "tailwindcss"` and extended with `@theme` configurations inside `src/index.css` (defining custom display typography, brand colors, keyframes, and custom fluid shapes).
*   **tailwindcss-animate**: Tailwind plugin that adds lightweight, high-performance transitions and utilities (like fades, slides, and zooms).
*   **Radix UI & Class Variance Authority (CVA)**: Primitive libraries supporting accessible UI design, matching shadcn-style modular architectures.
*   **Lucide React**: Provides the SVG icon library used throughout navigation, badges, and lists.

### Backend & Database (Supabase)
*   **Supabase Client (`@supabase/supabase-js`)**: Integrates the database layer and authentication mechanisms.
    *   **Supabase DB**: Stores contact messages in a `contacts` table (Name, Email, Subject, Message).
    *   **Supabase Auth**: Manages admin access, login, and registration procedures in the dashboard.
    *   **Supabase Admin Management**: Tracks administrative user verification status in the `approved_admins` table.

---

## 📁 Repository Structure & Components

```
PFORTLIO/
├── .gemini/
│   └── GEMINI.md              # [THIS FILE] Local documentation & instructions
├── public/
│   ├── sequence/              # 128 frames for the cinematic scroll sequence (frame_000 to frame_127)
│   ├── resume.pdf             # Rishabh Patil's resume
│   └── mitwpu.jpg / code.jpg  # Local project & institution assets
├── src/
│   ├── components/
│   │   ├── ui/                # Atomic UI Primitives (shadcn/cva-style layouts)
│   │   │   ├── about-parallax-reveal.tsx       # Reusable clipping wipe transition wrapper
│   │   │   ├── aurora-background.tsx           # Liquid, morphing aurora background colors
│   │   │   ├── badge.tsx / button.tsx          # Reusable structural widgets
│   │   │   ├── cascade-text.tsx (`TextReveal`)  # Character-stagger hover color effect
│   │   │   ├── connect-with-us.tsx             # Contact branding details
│   │   │   ├── contact-2.tsx                   # Contact form and detail items
│   │   │   ├── elegant-carousel.tsx            # Decorative carousel components
│   │   │   ├── images-scrolling-animation.tsx # Stacked overlapping vertical card scroll
│   │   │   ├── input.tsx / label.tsx           # Standard form controls
│   │   │   ├── neural-noise.tsx                # Canvas-based analog noise grid background
│   │   │   ├── reveal-on-hover.tsx             # Overlay-to-detail hover transitions
│   │   │   ├── scroll-velocity.tsx             # Infinite acceleration-aware text marquee
│   │   │   ├── scroll-x-carousel.tsx           # Horizontal scrolling container bounds
│   │   │   ├── sign-in-card-2.tsx              # Admin authentication interface
│   │   │   └── spotlight-gradient.tsx          # Mouse-linked spotlight ambient light mask
│   │   ├── HLSVideo.tsx       # Adaptive video player powered by hls.js
│   │   ├── LoadingScreen.tsx  # Interactive loading percentage count + word sequence
│   │   └── Navbar.tsx         # Floating header; dynamically switches color modes based on scroll height
│   ├── lib/
│   │   ├── supabase.ts        # Supabase client instantiation
│   │   └── utils.ts           # Core cn() class utility (merges tailwind classes cleanly)
│   ├── pages/
│   │   └── AdminPage.tsx      # Admin dashboard; manages admins, approves status, lists/deletes submissions
│   ├── sections/
│   │   ├── intro/
│   │   │   ├── Overlay.tsx         # Subtitles positioned over the scroll image canvas
│   │   │   └── ScrollyCanvas.tsx   # Canvas-based frame-rendering engine
│   │   ├── About.tsx          # Personal philosophy, focus areas, 3D GSAP animations
│   │   ├── Certifications.tsx # Educational certifications & courses
│   │   ├── ContactSection.tsx # Contact wrapping element on aurora bg
│   │   ├── EducationAndExperience.tsx  # Carousel-style academic & professional history
│   │   ├── IntroSequence.tsx  # Scrolly canvas intro coordinator
│   │   ├── SelectedWorks.tsx  # Projects showcase wrapper
│   │   ├── Skills.tsx         # Left & right scrolling technologies marquee
│   │   └── Footer.tsx         # Dynamic marquee and footer links
│   ├── App.tsx                # Application shell: syncs Lenis and GSAP, configures routing
│   ├── index.css              # Main stylesheets: Tailwind v4 config, custom keyframes, morphing shapes
│   └── main.tsx               # App mount node entrypoint
```

---

## ⚙️ Core Architectural Patterns & Animations

### 1. Unified Scroll Loop (Lenis + GSAP Ticker)
To prevent scroll-driven animations from looking jittery, the global Lenis instance runs with `autoRaf={false}` inside `App.tsx`. Its rendering sequence is hooked directly into GSAP's high-precision tick cycle:
```typescript
const update = (time: number) => {
  lenis.raf(time * 1000);
};
gsap.ticker.add(update);
```
All anchor clicks (`#about`, `#work`, etc.) are intercepted, executing a custom exponential ease scroll:
$$\text{easing}(t) = \min(1, 1.001 - 2^{-10t})$$

### 2. High-Performance Canvas Image Sequence Scrolling (`ScrollyCanvas`)
The opening sequence uses Framer Motion's `useScroll` and `useTransform` to bind scroll progress of a `500vh` container to a sequence of 128 frames (from `/sequence/frame_***_delay-0.063s.png`).
*   To optimize initial loading, the first 10 frames are loaded immediately, and the remaining 118 are deferred using `requestIdleCallback` (or timed fallbacks).
*   Frames are drawn to an HTML5 `<canvas>` using logical coordinates with `object-fit: cover` scale calculations.
*   Canvas rendering is restricted to `requestAnimationFrame` on frame-index changes to minimize layout thrashing.

### 3. GSAP 3D Scroll Animations & Lifecycle Context
Sections like `About.tsx` utilize GSAP ScrollTrigger to manipulate 3D properties (`rotateX`, `rotateY`, `transformPerspective`, `scale`, and `y`) as elements scroll into view.
*   **Crucial Rule**: To prevent memory leaks, ghost triggers, or duplicate events, all ScrollTrigger instances are registered within a `gsap.context()` block in `useEffect`, and reverted clean during cleanup:
    ```typescript
    useEffect(() => {
      const ctx = gsap.context(() => {
        // ... ScrollTrigger animations
      }, sectionRef);
      return () => ctx.revert();
    }, []);
    ```

### 4. Stacked Overlapping Cards (`SelectedWorks`)
Features a vertical scroll stacked-card effect. As the user scrolls, preceding project cards stick to the viewport, while subsequent cards slide over them.
*   Each card scale factor shrinks slightly as more cards overlay, calculated dynamically:
    $$\text{Scale} = \max(0.6, 1 - (\text{Total} - i - 1) \times 0.08)$$
*   This delivers a layered depth illusion without heavy WebGL overhead.

### 5. Supabase Form & Admin Management
*   **Database Write**: Forms submitted in the `ContactSection` insert fields into the `contacts` table.
*   **Dashboard Auth & Permissions (`AdminPage.tsx`)**:
    *   Utilizes Supabase Auth for authentication.
    *   **Super Admin** (`patilrishabh50@gmail.com`) holds total override access: can view, pause, or remove other administrators (`approved_admins` table) and permanently delete contact logs from the database (`contacts` table).
    *   **Sub-Admins** must have their email pre-approved and set to `active` status in the DB. They can view entries, but can only hide messages locally (saved to their browser `localStorage`).

---

## 🎨 Theme Tokens & Design Rules

*   **Design Palette (Dark Cinematic)**:
    *   `--color-bg`: `hsl(0, 0%, 4%)` (Deep Black)
    *   `--color-surface`: `hsl(0, 0%, 8%)` (Dark Charcoal)
    *   `--color-stroke`: `hsl(0, 0%, 12%)` (Soft Border Zinc)
    *   `--color-text-primary`: `hsl(0, 0%, 96%)` (Clean White)
    *   `--color-muted`: `hsl(0, 0%, 53%)` (Steel Grey)
    *   `--color-accent`: `hsl(0, 0%, 96%)`
    *   `Accent Gradient`: `linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)` (Steel Blue to Slate Blue)
*   **Glassmorphism Specs**: Card layers use translucent surface bounds to appear premium:
    `bg-surface/50 border border-stroke backdrop-blur-sm`
*   **Typography**:
    *   **Body**: `Inter` (sans-serif)
    *   **Display**: `Instrument Serif` (serif, italic variant used for stylized headings like *Me*, *Experience*, *Expertise*, and *projects*).

---

## 🛠️ Verification & Commands

All updates must be locally verified before shipping:

```bash
pnpm dev          # Run Vite development server
pnpm build        # Perform TypeScript check & compile production assets
pnpm lint         # Run ESLint check
pnpm preview      # Preview the compiled production build locally
```
