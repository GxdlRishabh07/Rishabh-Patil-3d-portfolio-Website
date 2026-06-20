import React from "react";
import { cn } from "@/lib/utils";

interface SpotlightGradientBgProps {
  children?: React.ReactNode;
  className?: string;
  overflowHidden?: boolean;
}

export function SpotlightGradientBg({ children, className, overflowHidden = true }: SpotlightGradientBgProps) {
  return (
    <div className={cn("relative w-full bg-black", overflowHidden && "overflow-hidden", className)}>
      {/* Spotlight background gradient with very soft opacity (25%) */}
      <div 
        className="absolute inset-0 pointer-events-none select-none opacity-25"
        style={{
          background: "radial-gradient(ellipse at 50% 60%, rgb(20, 62, 148) 0%, rgb(6, 22, 64) 45%, rgb(0, 0, 0) 90%)",
        }}
      />

      {/* Top and Bottom black fade overlays to blend seamlessly with surrounding black sections */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-[2]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-[2]" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
