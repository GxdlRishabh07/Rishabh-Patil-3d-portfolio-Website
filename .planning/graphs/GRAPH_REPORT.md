# Graph Report - PFORTLIO  (2026-06-18)

## Corpus Check
- 37 files · ~1,829,262 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 245 nodes · 226 edges · 48 communities detected
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.83)
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
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
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

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 20 edges
2. `dependencies` - 18 edges
3. `devDependencies` - 17 edges
4. `compilerOptions` - 16 edges
5. `cn()` - 9 edges
6. `gsap` - 8 edges
7. `framer-motion` - 6 edges
8. `Project Documentation` - 6 edges
9. `scripts` - 5 edges
10. `NeuralNoise Component` - 4 edges

## Surprising Connections (you probably didn't know these)
- `cn()` --calls--> `clsx`  [INFERRED]
  src/lib/utils.ts → package.json
- `GeometricBackground Component` --references--> `Project Documentation`  [INFERRED]
  src/components/ui/geometric.tsx → CLAUDE.md
- `Favicon` --semantically_similar_to--> `Hero Graphic`  [INFERRED] [semantically similar]
  public/favicon.svg → src/assets/hero.png
- `Favicon` --semantically_similar_to--> `Vite Logo`  [INFERRED] [semantically similar]
  public/favicon.svg → src/assets/vite.svg
- `NeuralNoise Component` --references--> `Project Documentation`  [INFERRED]
  src/components/ui/neural-noise.tsx → CLAUDE.md

## Hyperedges (group relationships)
- **UI Components Using Utility** — selectedworks_selectedworks, navbar_navbar, hlsvideo_hlsvideo, utils_cn [EXTRACTED 1.00]
- **Single Page Portfolio Composition** — src_app_tsx, sections_hero_hero, sections_about_about, sections_education_education, sections_certifications_certifications, sections_selectedworks_selectedworks, sections_contactsection_contactsection, sections_footer_footer [EXTRACTED 1.00]
- **GSAP ScrollTrigger Animation Pattern** — src_sections_hero_tsx, src_sections_selectedworks_tsx, src_sections_education_tsx, src_sections_about_tsx, src_sections_certifications_tsx, src_sections_footer_tsx [EXTRACTED 1.00]
- **Components Using GeometricBackground** — sections_selectedworks_selectedworks, sections_education_education, sections_about_about, sections_certifications_certifications [EXTRACTED 1.00]
- **Animation Libraries Usage** — pfortlio_package_dependencies_gsap, pfortlio_package_dependencies_framer_motion, pfortlio_package_dependencies_studio_freight_lenis [EXTRACTED 1.00]
- **Images Scroll Animation Demo** — demo_demoone, images_scrolling_animation_images_scrolling_animation, images_scrolling_animation_sticky_card_001 [EXTRACTED 1.00]
- **Background Effects Components** — neuralnoise_neuralnoise, geometric_geometricbackground, geometric_elegantshape [EXTRACTED 1.00]

## Communities

### Community 0 - "Community 0"
Cohesion: 0.11
Nodes (16): LoadingScreen(), LoadingScreenProps, words, framer-motion, gsap, @studio-freight/lenis, About(), Certifications() (+8 more)

### Community 1 - "Community 1"
Cohesion: 0.09
Nodes (22): compilerOptions, allowImportingTsExtensions, baseUrl, erasableSyntaxOnly, ignoreDeprecations, jsx, lib, module (+14 more)

### Community 2 - "Community 2"
Cohesion: 0.11
Nodes (17): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, moduleResolution, noEmit (+9 more)

### Community 3 - "Community 3"
Cohesion: 0.12
Nodes (17): devDependencies, autoprefixer, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, postcss (+9 more)

### Community 4 - "Community 4"
Cohesion: 0.14
Nodes (14): dependencies, class-variance-authority, @gsap/react, hls.js, lenis, lucide-react, motion, @radix-ui/react-label (+6 more)

### Community 5 - "Community 5"
Cohesion: 0.18
Nodes (11): Project Documentation, ElegantShape Component, GeometricBackground Component, Knowledge Graph Visualization, Instrument Serif Display Font, Inter Body Font, Rishabh Patil Portfolio Title, createProgram Function (+3 more)

### Community 6 - "Community 6"
Cohesion: 0.29
Nodes (6): HLSVideo(), HLSVideoProps, NAV_LINKS, Navbar(), cn(), clsx

### Community 7 - "Community 7"
Cohesion: 0.2
Nodes (9): name, private, scripts, build, dev, lint, preview, type (+1 more)

### Community 8 - "Community 8"
Cohesion: 0.22
Nodes (4): FrontOverlay(), Overlay(), ScrollyCanvas(), IntroSequence()

### Community 9 - "Community 9"
Cohesion: 0.25
Nodes (7): directed, graph, hyperedges, hyperedges, links, multigraph, nodes

### Community 11 - "Community 11"
Cohesion: 0.4
Nodes (2): ContactSection(), Contact2Props

### Community 12 - "Community 12"
Cohesion: 0.4
Nodes (4): edges, nodes, timestamp, version

### Community 13 - "Community 13"
Cohesion: 0.4
Nodes (4): background.smoothImageRendering, editor.cursorSmoothCaretAnimation, terminal.integrated.smoothScrolling, workbench.list.smoothScrolling

### Community 14 - "Community 14"
Cohesion: 0.67
Nodes (4): Community Hubs Concept, God Nodes Concept, Knowledge Gaps Concept, Surprising Connections Concept

### Community 15 - "Community 15"
Cohesion: 0.67
Nodes (2): files, references

### Community 16 - "Community 16"
Cohesion: 0.67
Nodes (2): permissions, allow

### Community 17 - "Community 17"
Cohesion: 0.67
Nodes (2): graphify, enabled

### Community 18 - "Community 18"
Cohesion: 0.67
Nodes (1): PARALLAX_ITEMS

### Community 19 - "Community 19"
Cohesion: 0.67
Nodes (1): ENTRIES

### Community 20 - "Community 20"
Cohesion: 0.67
Nodes (3): Favicon, Hero Graphic, Vite Logo

### Community 21 - "Community 21"
Cohesion: 0.67
Nodes (3): DemoOne Component, ImagesScrollingAnimation Component, StickyCard_001 Component

### Community 28 - "Community 28"
Cohesion: 1.0
Nodes (2): Contact, ContactForm

### Community 29 - "Community 29"
Cohesion: 1.0
Nodes (2): SocialConnect, Contact Sections Info Component

### Community 36 - "Community 36"
Cohesion: 1.0
Nodes (1): ESLint Configuration

### Community 37 - "Community 37"
Cohesion: 1.0
Nodes (1): Vite Configuration

### Community 38 - "Community 38"
Cohesion: 1.0
Nodes (1): main

### Community 39 - "Community 39"
Cohesion: 1.0
Nodes (1): Explorations

### Community 40 - "Community 40"
Cohesion: 1.0
Nodes (1): Stats

### Community 41 - "Community 41"
Cohesion: 1.0
Nodes (1): Journal

### Community 42 - "Community 42"
Cohesion: 1.0
Nodes (1): Security Standards (OWASP)

### Community 43 - "Community 43"
Cohesion: 1.0
Nodes (1): Navbar

### Community 44 - "Community 44"
Cohesion: 1.0
Nodes (1): HLSVideo

### Community 45 - "Community 45"
Cohesion: 1.0
Nodes (1): LoadingScreen

### Community 46 - "Community 46"
Cohesion: 1.0
Nodes (1): ParallaxComponent

### Community 47 - "Community 47"
Cohesion: 1.0
Nodes (1): Label Form Component

### Community 48 - "Community 48"
Cohesion: 1.0
Nodes (1): Contact2

### Community 49 - "Community 49"
Cohesion: 1.0
Nodes (1): Button Component with Variants

### Community 50 - "Community 50"
Cohesion: 1.0
Nodes (1): Textarea Form Component

### Community 51 - "Community 51"
Cohesion: 1.0
Nodes (1): Input Form Component

### Community 52 - "Community 52"
Cohesion: 1.0
Nodes (1): cn

### Community 53 - "Community 53"
Cohesion: 1.0
Nodes (1): InternSphere

### Community 54 - "Community 54"
Cohesion: 1.0
Nodes (1): TideWave Andaman

### Community 55 - "Community 55"
Cohesion: 1.0
Nodes (1): Developer Portfolio

### Community 56 - "Community 56"
Cohesion: 1.0
Nodes (1): Profile Picture

### Community 57 - "Community 57"
Cohesion: 1.0
Nodes (1): Social Icons Spritesheet

### Community 58 - "Community 58"
Cohesion: 1.0
Nodes (1): React Logo

### Community 59 - "Community 59"
Cohesion: 1.0
Nodes (1): neuro_shape GLSL Function

### Community 60 - "Community 60"
Cohesion: 1.0
Nodes (1): Projects Array

## Knowledge Gaps
- **141 isolated node(s):** `Contact2Props`, `tsBuildInfoFile`, `target`, `lib`, `module` (+136 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 11`** (5 nodes): `ContactSection()`, `contact-2.tsx`, `ContactSection.tsx`, `Contact2()`, `Contact2Props`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 15`** (3 nodes): `files`, `references`, `tsconfig.json`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 16`** (3 nodes): `settings.local.json`, `permissions`, `allow`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 17`** (3 nodes): `graphify`, `enabled`, `config.json`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 18`** (3 nodes): `Explorations()`, `PARALLAX_ITEMS`, `Explorations.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 19`** (3 nodes): `ENTRIES`, `Journal()`, `Journal.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 28`** (2 nodes): `Contact`, `ContactForm`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 29`** (2 nodes): `SocialConnect`, `Contact Sections Info Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 36`** (1 nodes): `ESLint Configuration`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 37`** (1 nodes): `Vite Configuration`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 38`** (1 nodes): `main`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 39`** (1 nodes): `Explorations`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 40`** (1 nodes): `Stats`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 41`** (1 nodes): `Journal`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 42`** (1 nodes): `Security Standards (OWASP)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 43`** (1 nodes): `Navbar`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 44`** (1 nodes): `HLSVideo`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 45`** (1 nodes): `LoadingScreen`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 46`** (1 nodes): `ParallaxComponent`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 47`** (1 nodes): `Label Form Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 48`** (1 nodes): `Contact2`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 49`** (1 nodes): `Button Component with Variants`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 50`** (1 nodes): `Textarea Form Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 51`** (1 nodes): `Input Form Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 52`** (1 nodes): `cn`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 53`** (1 nodes): `InternSphere`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 54`** (1 nodes): `TideWave Andaman`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 55`** (1 nodes): `Developer Portfolio`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 56`** (1 nodes): `Profile Picture`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 57`** (1 nodes): `Social Icons Spritesheet`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 58`** (1 nodes): `React Logo`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 59`** (1 nodes): `neuro_shape GLSL Function`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 60`** (1 nodes): `Projects Array`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Community 4` to `Community 0`, `Community 6`, `Community 7`?**
  _High betweenness centrality (0.091) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Community 3` to `Community 7`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Why does `gsap` connect `Community 0` to `Community 4`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `cn()` (e.g. with `SocialConnect()` and `clsx`) actually correct?**
  _`cn()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Contact2Props`, `tsBuildInfoFile`, `target` to the rest of the system?**
  _141 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.11 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.09 - nodes in this community are weakly interconnected._