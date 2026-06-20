"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AuroraBackgroundProps {
  /** Extra wrapper classes */
  className?: string;
  /** Content to render on top of the background */
  children?: React.ReactNode;
  /** Number of “star” points */
  starCount?: number;
  /** Two CSS-variable backed colors for the radial overlays */
  gradientColors?: [string, string];
  /** Pulse animation duration in seconds */
  pulseDuration?: number;
  /** ARIA label for the animated background */
  ariaLabel?: string;
}

export const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  className = "",
  children,
  starCount = 50,
  gradientColors = [
    "var(--aurora-color1, rgba(30, 58, 138, 0.3))",
    "var(--aurora-color2, rgba(78, 133, 191, 0.2))",
  ],
  pulseDuration = 10,
  ariaLabel = "Animated aurora background",
}) => {
  const [colorA, colorB] = gradientColors;

  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={cn(
        "relative flex flex-col w-full min-h-screen items-center justify-center bg-black text-slate-50 overflow-hidden",
        className
      )}
    >
      {/* Background layers (hidden from screen readers) */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Pulsing radial gradients */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              radial-gradient(circle, ${colorA} 0%, transparent 80%),
              radial-gradient(circle, ${colorB} 0%, transparent 80%)
            `,
            backgroundSize: "100% 100%",
            animation: `aurora-pulse ${pulseDuration}s infinite`,
          }}
        />

        {/* Blurred color blobs matched to website color palette */}
        <motion.div
          className="absolute inset-0 mix-blend-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Blue / Navy blob */}
          <motion.div
            className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-900/60 rounded-full filter blur-3xl opacity-40"
            animate={{
              x: [-50, 50, -50],
              y: [-20, 20, -20],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
          {/* Steel Blue blob matching the website's accent gradient */}
          <motion.div
            className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#4E85BF]/40 rounded-full filter blur-3xl opacity-40"
            animate={{
              x: [50, -50, 50],
              y: [20, -20, 20],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
          {/* Indigo blob */}
          <motion.div
            className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-indigo-950/50 rounded-full filter blur-3xl opacity-30"
            animate={{
              x: [20, -20, 20],
              y: [-30, 30, -30],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Twinkling stars */}
        {Array.from({ length: starCount }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            initial={{
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
              opacity: 0,
            }}
            animate={{
              opacity: [0, Math.random() * 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">{children}</div>
    </div>
  );
};

export default AuroraBackground;
