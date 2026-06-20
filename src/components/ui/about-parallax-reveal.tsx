import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface SectionParallaxRevealProps {
  children: React.ReactNode
}

/**
 * SectionParallaxReveal
 *
 * A reusable wrapper that applies the parallax-scroll-feature-section
 * animation pattern strictly to the section it wraps — zero full-page effect.
 *
 * Currently used for two transitions:
 *  1. Professional Summary (Hero) → About Me
 *  2. Get in Touch (ContactSection) → Footer
 *
 * Animations (identical to the reference component):
 *  - clipPath  "inset(0 100% 0 0)" → "inset(0 0% 0 0)"  left-to-right wipe
 *  - opacity    0 → 1                                     fade-in
 *  - translateY -50px → 0                                 upward slide
 *
 * useScroll is targeted at the wrapper div, so the trigger is 100%
 * scoped to each individual section — no bleed to the rest of the page.
 */
export function SectionParallaxReveal({ children }: SectionParallaxRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center start"]
  })

  // ── Exact same transforms as the reference component ─────────────────────
  // Left-to-right clip-path wipe
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.65],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  )

  // Opacity fade-in
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1])

  // Upward slide
  const translateY = useTransform(scrollYProgress, [0, 0.85], [-50, 0])
  // ─────────────────────────────────────────────────────────────────────────

  return (
    <div ref={containerRef} className="bg-black">
      {/* Outer: clip-path wipe + fade */}
      <motion.div
        style={{ clipPath, opacity, willChange: "clip-path, opacity" }}
      >
        {/* Inner: translateY slide */}
        <motion.div
          style={{ y: translateY, willChange: "transform" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}
