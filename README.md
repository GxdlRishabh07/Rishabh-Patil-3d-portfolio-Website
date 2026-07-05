# Rishabh Patil — Personal Portfolio

> A premium, cinematic personal portfolio built with React 19, Vite, GSAP, Framer Motion, and Tailwind CSS v4.

![Portfolio Preview](./public/new-profile.jpg)

---

## ✨ Features

- **Cinematic Intro Sequence** — 128-frame scroll-driven canvas animation
- **3D GSAP Scroll Animations** — perspective transforms synced to scroll via GSAP ScrollTrigger + Lenis
- **Premium Glassmorphic Navbar** — dynamically switches color modes based on scroll depth
- **Stacked Card Projects** — sticky scroll with scale-depth illusion
- **Aurora & Spotlight Backgrounds** — GPU-accelerated ambient effects
- **Marquee Text Animations** — infinite velocity-aware scrolling text
- **Contact Form with Supabase** — form submissions stored in Supabase DB
- **Admin Dashboard** — protected `/admin` route with auth, role-based access, and message management
- **Fully Responsive** — mobile-first with dedicated mobile layouts

---

## 🛠️ Tech Stack

| Layer | Tools |
|-------|-------|
| Framework | React 19 + TypeScript (strict) |
| Build | Vite 8 + `@vitejs/plugin-react` |
| Styling | Tailwind CSS v4 |
| Animations | GSAP 3 (ScrollTrigger) + Framer Motion + Lenis |
| UI Primitives | Radix UI, class-variance-authority (CVA) |
| Backend | Supabase (Auth + PostgreSQL) |
| Icons | Lucide React |
| Routing | React Router DOM v7 |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and [pnpm](https://pnpm.io/) installed

### 1. Clone the repo
```bash
git clone https://github.com/GxdlRishabh07/PFORTLIO.git
cd PFORTLIO
```

### 2. Install dependencies
```bash
pnpm install
```

### 3. Configure environment variables
Copy the example file and fill in your Supabase credentials:
```bash
cp .env.example .env.local
```

Open `.env.local` and add your values:
```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> You can find these in your [Supabase Dashboard](https://supabase.com) → Project Settings → API.

### 4. Start the dev server
```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI primitives
│   ├── LoadingScreen.tsx
│   └── Navbar.tsx
├── sections/            # Page sections
│   ├── intro/           # Scroll canvas intro
│   ├── About.tsx
│   ├── EducationAndExperience.tsx
│   ├── SelectedWorks.tsx
│   ├── Skills.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── pages/
│   └── AdminPage.tsx    # Protected admin dashboard
├── lib/
│   ├── supabase.ts      # Supabase client
│   └── utils.ts         # cn() utility
├── App.tsx              # Root: Lenis + GSAP setup, routing
└── index.css            # Tailwind v4 design tokens
```

---

## 📦 Build for Production

```bash
pnpm build
```

Preview the production build:
```bash
pnpm preview
```

---

## 🔗 Projects Featured

| Project | Tech | Link |
|---------|------|------|
| **InternSphere** | Java, Spring Boot, React, PostgreSQL | [GitHub](https://github.com/GxdlRishabh07/InternSphere-) |
| **TideWave Andaman** | React, Node.js, Express, MongoDB | [Live Site](https://tidewave-andaman.vercel.app/) |

---

## 📬 Contact

- **Email:** patilrishabh50@gmail.com
- **GitHub:** [@GxdlRishabh07](https://github.com/GxdlRishabh07)
- **Location:** Pune, India

---

© 2025 Rishabh Patil. Built with React & Vite.
