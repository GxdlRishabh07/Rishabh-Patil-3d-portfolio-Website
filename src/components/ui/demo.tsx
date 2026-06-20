"use client";

import AuroraBackground from "@/components/ui/aurora-background";
import type { AuroraBackgroundProps } from "@/components/ui/aurora-background";

export const AuroraBackgroundDemo = () => {
  const demoProps: AuroraBackgroundProps = {
    gradientColors: [
      "var(--aurora-color1, rgba(30, 58, 138, 0.3))",
      "var(--aurora-color2, rgba(79, 70, 229, 0.2))",
    ],
    pulseDuration: 8,
    starCount: 80,
  };

  return (
    <AuroraBackground {...demoProps} className="px-4 py-8">
      <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-50 to-gray-400 tracking-tight text-center">
        Aurora UI
      </h1>
      <p className="mt-4 text-lg text-gray-300 max-w-xl text-center">
        A shimmering canvas of light to power your next interface.
      </p>
    </AuroraBackground>
  );
};

export default AuroraBackgroundDemo;