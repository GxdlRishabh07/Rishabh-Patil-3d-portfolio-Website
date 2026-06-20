"use client";

import React from "react";
import { cn } from "@/lib/utils";

export default function GeometricBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("relative w-full overflow-hidden bg-black", className)}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
