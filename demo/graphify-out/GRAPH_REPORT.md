# Graph Report - .  (2026-06-01)

## Corpus Check
- 47 files · ~272,117 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 192 nodes · 158 edges · 52 communities (20 shown, 32 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.79)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_TypeScript App Config|TypeScript App Config]]
- [[_COMMUNITY_Section Components|Section Components]]
- [[_COMMUNITY_TypeScript Node Config|TypeScript Node Config]]
- [[_COMMUNITY_Production Dependencies|Production Dependencies]]
- [[_COMMUNITY_Dev Dependencies|Dev Dependencies]]
- [[_COMMUNITY_Core Components & Utils|Core Components & Utils]]
- [[_COMMUNITY_Package Scripts|Package Scripts]]
- [[_COMMUNITY_Animation Components|Animation Components]]
- [[_COMMUNITY_Loading Screen|Loading Screen]]
- [[_COMMUNITY_Claude Settings|Claude Settings]]
- [[_COMMUNITY_Assets|Assets]]
- [[_COMMUNITY_Explorations Section|Explorations Section]]
- [[_COMMUNITY_Journal Section|Journal Section]]
- [[_COMMUNITY_Contact UI Components|Contact UI Components]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
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

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 20 edges
2. `compilerOptions` - 16 edges
3. `cn()` - 10 edges
4. `scripts` - 5 edges
5. `Navbar()` - 3 edges
6. `SocialConnect()` - 3 edges
7. `paths` - 2 edges
8. `clsx` - 2 edges
9. `permissions` - 2 edges
10. `Hero()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Favicon` --semantically_similar_to--> `Hero Graphic`  [INFERRED] [semantically similar]
  public/favicon.svg → src/assets/hero.png
- `Favicon` --semantically_similar_to--> `Vite Logo`  [INFERRED] [semantically similar]
  public/favicon.svg → src/assets/vite.svg
- `cn()` --calls--> `clsx`  [INFERRED]
  /Users/rishabhpatil/Desltop/Rishabh Patil/PFORTLIO/src/lib/utils.ts → package.json
- `ElegantShape()` --calls--> `cn()`  [INFERRED]
  src/components/ui/geometric.tsx → /Users/rishabhpatil/Desltop/Rishabh Patil/PFORTLIO/src/lib/utils.ts
- `GeometricBackground()` --calls--> `cn()`  [INFERRED]
  src/components/ui/geometric.tsx → /Users/rishabhpatil/Desltop/Rishabh Patil/PFORTLIO/src/lib/utils.ts

## Hyperedges (group relationships)
- **UI Components Using Utility** — selectedworks_selectedworks, navbar_navbar, hlsvideo_hlsvideo, utils_cn [EXTRACTED 1.00]

## Communities (52 total, 32 thin omitted)

### Community 0 - "TypeScript App Config"
Cohesion: 0.09
Nodes (22): compilerOptions, allowImportingTsExtensions, baseUrl, erasableSyntaxOnly, ignoreDeprecations, jsx, lib, module (+14 more)

### Community 1 - "Section Components"
Cohesion: 0.14
Nodes (8): About(), CERTIFICATIONS, ContactSection(), EDUCATION, Footer(), SelectedWorks(), WORKS, SocialConnect()

### Community 2 - "TypeScript Node Config"
Cohesion: 0.11
Nodes (17): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, moduleResolution, noEmit (+9 more)

### Community 3 - "Production Dependencies"
Cohesion: 0.12
Nodes (17): dependencies, class-variance-authority, framer-motion, gsap, @gsap/react, hls.js, lenis, lucide-react (+9 more)

### Community 4 - "Dev Dependencies"
Cohesion: 0.12
Nodes (17): devDependencies, autoprefixer, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, postcss (+9 more)

### Community 5 - "Core Components & Utils"
Cohesion: 0.19
Nodes (10): HLSVideo(), HLSVideoProps, NAV_LINKS, Navbar(), clsx, cn(), Hero(), ROLES (+2 more)

### Community 6 - "Package Scripts"
Cohesion: 0.20
Nodes (9): name, private, scripts, build, dev, lint, preview, type (+1 more)

### Community 9 - "Loading Screen"
Cohesion: 0.50
Nodes (3): LoadingScreen(), LoadingScreenProps, words

### Community 11 - "Assets"
Cohesion: 0.67
Nodes (3): Favicon, Hero Graphic, Vite Logo

## Knowledge Gaps
- **118 isolated node(s):** `tsBuildInfoFile`, `target`, `lib`, `module`, `types` (+113 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **32 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Production Dependencies` to `Core Components & Utils`, `Package Scripts`?**
  _High betweenness centrality (0.118) - this node is a cross-community bridge._
- **Why does `cn()` connect `Core Components & Utils` to `Section Components`?**
  _High betweenness centrality (0.101) - this node is a cross-community bridge._
- **Why does `clsx` connect `Core Components & Utils` to `Production Dependencies`?**
  _High betweenness centrality (0.087) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `cn()` (e.g. with `SocialConnect()` and `ElegantShape()`) actually correct?**
  _`cn()` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `tsBuildInfoFile`, `target`, `lib` to the rest of the system?**
  _119 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `TypeScript App Config` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._
- **Should `Section Components` be split into smaller, more focused modules?**
  _Cohesion score 0.1437908496732026 - nodes in this community are weakly interconnected._