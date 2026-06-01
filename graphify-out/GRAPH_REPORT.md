# Graph Report - PFORTLIO  (2026-06-01)

## Corpus Check
- 64 files · ~543,676 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 258 nodes · 252 edges · 46 communities detected
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 21 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 54|Community 54]]
- [[_COMMUNITY_Community 55|Community 55]]
- [[_COMMUNITY_Community 56|Community 56]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_Community 58|Community 58]]
- [[_COMMUNITY_Community 59|Community 59]]
- [[_COMMUNITY_Community 60|Community 60]]
- [[_COMMUNITY_Community 61|Community 61]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 20 edges
2. `dependencies` - 17 edges
3. `devDependencies` - 17 edges
4. `compilerOptions` - 16 edges
5. `cn()` - 14 edges
6. `App Root Component` - 9 edges
7. `Shared Design Tokens (bg, text-primary, muted, stroke, accent, surface)` - 9 edges
8. `Education Section` - 8 edges
9. `Certifications Section` - 7 edges
10. `GeometricBackground Animated Component` - 7 edges

## Surprising Connections (you probably didn't know these)
- `cn()` --calls--> `clsx`  [INFERRED]
  src/lib/utils.ts → package.json
- `NPM Dependencies Stack` --references--> `Framer Motion Viewport Animations`  [INFERRED]
  package.json → src/sections/SelectedWorks.tsx
- `Instrument Serif Display Font` --conceptually_related_to--> `Shared Design Tokens (bg, text-primary, muted, stroke, accent, surface)`  [INFERRED]
  index.html → src/App.tsx
- `Inter Body Font` --conceptually_related_to--> `Shared Design Tokens (bg, text-primary, muted, stroke, accent, surface)`  [INFERRED]
  index.html → src/App.tsx
- `Favicon` --semantically_similar_to--> `Hero Graphic`  [INFERRED] [semantically similar]
  public/favicon.svg → src/assets/hero.png

## Hyperedges (group relationships)
- **UI Components Using Utility** — selectedworks_selectedworks, navbar_navbar, hlsvideo_hlsvideo, utils_cn [EXTRACTED 1.00]

## Communities

### Community 0 - "Community 0"
Cohesion: 0.1
Nodes (32): About Section, App Root Component, Background Video Overlay Pattern, Certifications Records Array, Certifications Section, Contact2 UI Component, Contact Section, GeometricBackground Demo Example (+24 more)

### Community 1 - "Community 1"
Cohesion: 0.11
Nodes (11): LoadingScreen(), LoadingScreenProps, words, About(), Certifications(), ContactSection(), EDUCATION, Footer() (+3 more)

### Community 2 - "Community 2"
Cohesion: 0.12
Nodes (12): HLSVideo(), HLSVideoProps, handleScroll(), NAV_LINKS, Navbar(), cn(), Hero(), ROLES (+4 more)

### Community 3 - "Community 3"
Cohesion: 0.09
Nodes (22): compilerOptions, allowImportingTsExtensions, baseUrl, erasableSyntaxOnly, ignoreDeprecations, jsx, lib, module (+14 more)

### Community 4 - "Community 4"
Cohesion: 0.11
Nodes (17): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, moduleResolution, noEmit (+9 more)

### Community 5 - "Community 5"
Cohesion: 0.12
Nodes (17): dependencies, class-variance-authority, clsx, framer-motion, gsap, @gsap/react, hls.js, lucide-react (+9 more)

### Community 6 - "Community 6"
Cohesion: 0.12
Nodes (17): devDependencies, autoprefixer, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, postcss (+9 more)

### Community 7 - "Community 7"
Cohesion: 0.2
Nodes (9): name, private, scripts, build, dev, lint, preview, type (+1 more)

### Community 8 - "Community 8"
Cohesion: 0.22
Nodes (3): Contact(), ContactForm(), ContactSections()

### Community 9 - "Community 9"
Cohesion: 0.5
Nodes (1): DemoOne()

### Community 10 - "Community 10"
Cohesion: 0.5
Nodes (2): Contact2(), Contact2Props

### Community 11 - "Community 11"
Cohesion: 0.67
Nodes (1): Stats()

### Community 12 - "Community 12"
Cohesion: 0.67
Nodes (1): NeuralNoise()

### Community 13 - "Community 13"
Cohesion: 0.67
Nodes (1): ParallaxComponent()

### Community 14 - "Community 14"
Cohesion: 0.67
Nodes (1): StickyCard_001()

### Community 15 - "Community 15"
Cohesion: 0.67
Nodes (1): ENTRIES

### Community 16 - "Community 16"
Cohesion: 0.67
Nodes (2): files, references

### Community 17 - "Community 17"
Cohesion: 0.67
Nodes (2): permissions, allow

### Community 18 - "Community 18"
Cohesion: 0.67
Nodes (1): PARALLAX_ITEMS

### Community 19 - "Community 19"
Cohesion: 0.67
Nodes (3): Favicon, Hero Graphic, Vite Logo

### Community 20 - "Community 20"
Cohesion: 1.0
Nodes (2): Contact, ContactForm

### Community 21 - "Community 21"
Cohesion: 1.0
Nodes (2): SocialConnect, Contact Sections Info Component

### Community 22 - "Community 22"
Cohesion: 1.0
Nodes (2): TypeScript Project References Composition, Vite Build and TypeScript Configuration

### Community 39 - "Community 39"
Cohesion: 1.0
Nodes (1): ESLint Configuration

### Community 40 - "Community 40"
Cohesion: 1.0
Nodes (1): Vite Configuration

### Community 41 - "Community 41"
Cohesion: 1.0
Nodes (1): main

### Community 42 - "Community 42"
Cohesion: 1.0
Nodes (1): Explorations

### Community 43 - "Community 43"
Cohesion: 1.0
Nodes (1): Stats

### Community 44 - "Community 44"
Cohesion: 1.0
Nodes (1): Journal

### Community 45 - "Community 45"
Cohesion: 1.0
Nodes (1): Security Standards (OWASP)

### Community 46 - "Community 46"
Cohesion: 1.0
Nodes (1): Navbar

### Community 47 - "Community 47"
Cohesion: 1.0
Nodes (1): HLSVideo

### Community 48 - "Community 48"
Cohesion: 1.0
Nodes (1): LoadingScreen

### Community 49 - "Community 49"
Cohesion: 1.0
Nodes (1): ParallaxComponent

### Community 50 - "Community 50"
Cohesion: 1.0
Nodes (1): Label Form Component

### Community 51 - "Community 51"
Cohesion: 1.0
Nodes (1): Contact2

### Community 52 - "Community 52"
Cohesion: 1.0
Nodes (1): Button Component with Variants

### Community 53 - "Community 53"
Cohesion: 1.0
Nodes (1): Textarea Form Component

### Community 54 - "Community 54"
Cohesion: 1.0
Nodes (1): Input Form Component

### Community 55 - "Community 55"
Cohesion: 1.0
Nodes (1): cn

### Community 56 - "Community 56"
Cohesion: 1.0
Nodes (1): InternSphere

### Community 57 - "Community 57"
Cohesion: 1.0
Nodes (1): TideWave Andaman

### Community 58 - "Community 58"
Cohesion: 1.0
Nodes (1): Developer Portfolio

### Community 59 - "Community 59"
Cohesion: 1.0
Nodes (1): Profile Picture

### Community 60 - "Community 60"
Cohesion: 1.0
Nodes (1): Social Icons Spritesheet

### Community 61 - "Community 61"
Cohesion: 1.0
Nodes (1): React Logo

## Knowledge Gaps
- **134 isolated node(s):** `Contact2Props`, `tsBuildInfoFile`, `target`, `lib`, `module` (+129 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 9`** (4 nodes): `demo.tsx`, `demo.tsx`, `DemoOne()`, `GeometricBackgroundExample()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 10`** (4 nodes): `contact-2.tsx`, `contact-2.tsx`, `Contact2()`, `Contact2Props`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 11`** (3 nodes): `Stats.tsx`, `Stats()`, `Stats.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 12`** (3 nodes): `neural-noise.tsx`, `neural-noise.tsx`, `NeuralNoise()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 13`** (3 nodes): `parallax-scrolling.tsx`, `parallax-scrolling.tsx`, `ParallaxComponent()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 14`** (3 nodes): `images-scrolling-animation.tsx`, `images-scrolling-animation.tsx`, `StickyCard_001()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 15`** (3 nodes): `ENTRIES`, `Journal()`, `Journal.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 16`** (3 nodes): `files`, `references`, `tsconfig.json`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 17`** (3 nodes): `settings.local.json`, `permissions`, `allow`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 18`** (3 nodes): `Explorations()`, `PARALLAX_ITEMS`, `Explorations.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 20`** (2 nodes): `Contact`, `ContactForm`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 21`** (2 nodes): `SocialConnect`, `Contact Sections Info Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 22`** (2 nodes): `TypeScript Project References Composition`, `Vite Build and TypeScript Configuration`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 39`** (1 nodes): `ESLint Configuration`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 40`** (1 nodes): `Vite Configuration`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 41`** (1 nodes): `main`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 42`** (1 nodes): `Explorations`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 43`** (1 nodes): `Stats`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 44`** (1 nodes): `Journal`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 45`** (1 nodes): `Security Standards (OWASP)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 46`** (1 nodes): `Navbar`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 47`** (1 nodes): `HLSVideo`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 48`** (1 nodes): `LoadingScreen`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 49`** (1 nodes): `ParallaxComponent`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 50`** (1 nodes): `Label Form Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 51`** (1 nodes): `Contact2`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 52`** (1 nodes): `Button Component with Variants`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 53`** (1 nodes): `Textarea Form Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 54`** (1 nodes): `Input Form Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 55`** (1 nodes): `cn`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 56`** (1 nodes): `InternSphere`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 57`** (1 nodes): `TideWave Andaman`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 58`** (1 nodes): `Developer Portfolio`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 59`** (1 nodes): `Profile Picture`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 60`** (1 nodes): `Social Icons Spritesheet`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 61`** (1 nodes): `React Logo`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Community 5` to `Community 7`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._
- **Why does `cn()` connect `Community 2` to `Community 1`, `Community 5`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **Why does `clsx` connect `Community 5` to `Community 2`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `cn()` (e.g. with `clsx` and `SocialConnect()`) actually correct?**
  _`cn()` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Contact2Props`, `tsBuildInfoFile`, `target` to the rest of the system?**
  _134 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.11 - nodes in this community are weakly interconnected._