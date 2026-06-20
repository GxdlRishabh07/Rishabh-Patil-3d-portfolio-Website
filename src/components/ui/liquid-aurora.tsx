import React from "react";
import { cn } from "@/lib/utils";

interface LiquidAuroraProps {
  children?: React.ReactNode;
  className?: string;
}

export function LiquidAurora({ children, className }: LiquidAuroraProps) {
  return (
    <div className={cn("liquid-aurora-section relative w-full overflow-hidden", className)}>
      {/* Three animated morphing blobs */}
      <div className="liquid-shape shape-1" />
      <div className="liquid-shape shape-2" />
      <div className="liquid-shape shape-3" />

      {/* Top & bottom black fades so the section blends with surrounding bg */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black via-black/60 to-transparent pointer-events-none z-[2]" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-[2]" />

      {/* Content sits on top */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
