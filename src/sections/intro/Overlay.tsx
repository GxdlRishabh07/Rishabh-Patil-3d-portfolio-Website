import { useEffect, useState } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface OverlayProps {
  containerScroll: MotionValue<number>;
}

export function Overlay({ containerScroll }: OverlayProps) {
  // ── Lock mechanism: once the name fades out past 0.16, lock it to hidden ─
  const [hasPassedName, setHasPassedName] = useState(false);

  useEffect(() => {
    return containerScroll.on("change", (latest) => {
      // Once scrolled past Stage 1 threshold (0.16), lock the name to hidden
      if (latest >= 0.16) {
        setHasPassedName(true);
      } 
      // Only unlock when user scrolls back to the very top (< 0.01)
      else if (latest < 0.01) {
        setHasPassedName(false);
      }
    });
  }, [containerScroll]);

  // ── Stage 1: Hero Identity (0% - 15% scroll) ──────────────────────────────
  const opacity1Raw = useTransform(containerScroll, [0, 0.08, 0.15], [1, 0.8, 0]);
  const y1 = useTransform(containerScroll, [0, 0.15], ["0px", "-24px"]);
  const display1 = useTransform(containerScroll, (v) => {
    return v >= 0.16 ? "none" : "flex";
  });

  // ── Stage 2: Engineering & Aesthetics (22% - 44% scroll) ──────────────────
  const opacity2 = useTransform(containerScroll, [0.22, 0.26, 0.38, 0.44], [0, 1, 1, 0]);
  const y2 = useTransform(containerScroll, [0.22, 0.26, 0.44], ["24px", "0px", "-24px"]);
  const display2 = useTransform(containerScroll, (v) => {
    return v < 0.20 || v > 0.46 ? "none" : "flex";
  });

  // ── Stage 3: Core Philosophy (50% - 70% scroll) ───────────────────────────
  const opacity3 = useTransform(containerScroll, [0.50, 0.54, 0.64, 0.70], [0, 1, 1, 0]);
  const y3 = useTransform(containerScroll, [0.50, 0.54, 0.70], ["24px", "0px", "-24px"]);
  const display3 = useTransform(containerScroll, (v) => {
    return v < 0.48 || v > 0.72 ? "none" : "flex";
  });

  // ── Stage 4: Welcome & Transition (76% - 88% scroll) ──────────────────────
  const opacity4 = useTransform(containerScroll, [0.76, 0.80, 0.84, 0.88], [0, 1, 1, 0]);
  const y4 = useTransform(containerScroll, [0.76, 0.80, 0.88], ["24px", "0px", "-24px"]);
  const display4 = useTransform(containerScroll, (v) => {
    return v < 0.74 || v > 0.90 ? "none" : "flex";
  });

  // ── Scroll Indicator (only visible at the top, fades out quickly) ─────────
  const scrollIndicatorOpacity = useTransform(containerScroll, [0, 0.04], [1, 0]);
  const scrollIndicatorY = useTransform(containerScroll, [0, 0.04], ["0px", "8px"]);

  return (
    <div className="absolute inset-0 pointer-events-none z-20 font-sans overflow-hidden select-none">
      {/* 
        Unified Left Reading Zone:
        Positioned in the dark negative space to the left of Rishabh, leaving the subject unobstructed.
      */}
      <div className="absolute inset-0 flex items-center px-5 sm:px-12 md:px-16 lg:px-24">
        <div className="relative w-full max-w-lg lg:max-w-xl">
          
          {/* ── STAGE 1: Hero Identity (Locked out once scrolled past) ── */}
          <motion.div
            style={{ 
              opacity: hasPassedName ? 0 : opacity1Raw, 
              y: y1,
              display: hasPassedName ? "none" : display1,
              pointerEvents: "none"
            }}
            className="flex flex-col items-start text-left"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-3 sm:mb-4 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono tracking-wider sm:tracking-widest text-white/90 uppercase">
                Full-Stack Developer • Pune, India
              </span>
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] mb-3 sm:mb-4">
              RISHABH <span className="font-display italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#89AACC] to-[#4E85BF]">PATIL</span>
            </h1>

            {/* Tagline */}
            <p className="text-xs sm:text-base md:text-lg text-white/80 max-w-md font-light tracking-wide leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              Architecting high-performance web systems and immersive digital experiences.
            </p>
          </motion.div>

          {/* ── STAGE 2: Engineering & Aesthetics ── */}
          <motion.div
            style={{ 
              opacity: opacity2, 
              y: y2,
              display: display2,
              pointerEvents: "none"
            }}
            className="absolute inset-0 flex flex-col justify-center items-start text-left"
          >
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#89AACC] mb-2 sm:mb-2.5 drop-shadow-md">
              01 / Focus
            </span>
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-2 sm:mb-3 drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
              Crafting Scalable, Fluid Digital Products.
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-white/75 font-light leading-relaxed max-w-md drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              Delivering clean backend architectures paired with responsive, 60fps interactive frontends.
            </p>
          </motion.div>

          {/* ── STAGE 3: Core Philosophy ── */}
          <motion.div
            style={{ 
              opacity: opacity3, 
              y: y3,
              display: display3,
              pointerEvents: "none"
            }}
            className="absolute inset-0 flex flex-col justify-center items-start text-left"
          >
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#89AACC] mb-2 sm:mb-2.5 drop-shadow-md">
              02 / Philosophy
            </span>
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-2 sm:mb-3 drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
              Bridging Deep Logic & Intuitive Design.
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-white/75 font-light leading-relaxed max-w-md drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              From Java, Spring Boot, and PostgreSQL distributed systems to fine-tuned GSAP and React motion layers.
            </p>
          </motion.div>

          {/* ── STAGE 4: Welcome & Exploration ── */}
          <motion.div
            style={{ 
              opacity: opacity4, 
              y: y4,
              display: display4,
              pointerEvents: "none"
            }}
            className="absolute inset-0 flex flex-col justify-center items-start text-left"
          >
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#89AACC] mb-2 sm:mb-2.5 drop-shadow-md">
              03 / Welcome
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-2 sm:mb-3 drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
              Welcome to my <span className="font-display italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#89AACC] to-[#4E85BF]">World</span>.
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-white/80 font-light leading-relaxed max-w-md drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              Explore my journey, technical background, and selected works below.
            </p>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll Prompt (Top Only — cleanly anchored at the bottom with zero collisions) ── */}
      <motion.div
        style={{ 
          opacity: scrollIndicatorOpacity, 
          y: scrollIndicatorY,
          pointerEvents: "none"
        }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 sm:gap-2 pointer-events-none"
      >
        <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.3em] text-white/50">
          Scroll
        </span>
        <div className="w-4 h-7 sm:w-5 sm:h-8 rounded-full border border-white/20 flex items-start justify-center p-1 backdrop-blur-xs bg-black/20">
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white/70" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
