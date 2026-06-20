import { motion, MotionValue, useTransform } from "framer-motion";

export function FrontOverlay({ containerScroll }: { containerScroll: MotionValue<number> }) {
  // Move upward from the very bottom (50vh) to the center (0vh) over a much longer scroll distance
  // This reduces the speed while keeping the start and end points exactly where you want them.
  const y = useTransform(containerScroll, [0, 0.5, 0.6], ["50vh", "0vh", "-15vh"]);
  
  // Fade in to be fully visible at the center (0.5), then disappear
  const opacity = useTransform(containerScroll, [0, 0.3, 0.5, 0.6], [0, 0.8, 1, 0]);
  
  return (
    <div className="absolute inset-0 pointer-events-none z-30 text-white font-sans overflow-hidden">
      <motion.div 
        style={{ opacity, y }}
        className="absolute inset-0 flex items-center justify-center p-8"
      >
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-center drop-shadow-lg">
          Hi This is Rishabh Patil
        </h1>
      </motion.div>
    </div>
  );
}
