import { useEffect, useState } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

export function Overlay({ containerScroll }: { containerScroll: MotionValue<number> }) {
  const [hasPassed1, setHasPassed1] = useState(false);

  useEffect(() => {
    return containerScroll.on("change", (latest) => {
      // Once scrolled past Section 1 fade-out (0.25), lock it to hidden
      if (latest > 0.25) setHasPassed1(true);

      // Reset when scrolling back to the very top
      if (latest < 0.02) {
        setHasPassed1(false);
      }
    });
  }, [containerScroll]);

  // Section 1 (0% scroll): Center
  const opacity1Raw = useTransform(containerScroll, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(containerScroll, [0, 0.25], ["0vh", "-10vh"]);

  // Section 2 (30% scroll): Left aligned (side text) - fades away faster to prevent overlap
  const opacity2 = useTransform(containerScroll, [0.2, 0.28, 0.38, 0.46], [0, 1, 1, 0]);
  const y2 = useTransform(containerScroll, [0.2, 0.46], ["10vh", "-10vh"]);

  // Section 3 (60% scroll): Right aligned (side text) - fades away at the end
  const opacity3 = useTransform(containerScroll, [0.5, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(containerScroll, [0.5, 0.85], ["10vh", "-10vh"]);

  return (
    <div className="absolute inset-0 pointer-events-none z-30 text-white font-sans overflow-hidden">
      {/* Section 1 */}
      <motion.div 
        style={{ opacity: hasPassed1 ? 0 : opacity1Raw, y: y1 }}
        className="absolute inset-0 flex items-center justify-center p-8"
      >
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-center drop-shadow-2xl">
          Rishabh Patil.<br/>
          <span className="text-2xl md:text-5xl font-medium text-gray-300">Creative Developer.</span>
        </h1>
      </motion.div>

      {/* Section 2 */}
      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-start p-8 md:p-24"
      >
        <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-left max-w-2xl drop-shadow-2xl">
          I build digital experiences.
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-end p-8 md:p-24"
      >
        <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-right max-w-2xl drop-shadow-2xl">
          Bridging design and engineering.
        </h2>
      </motion.div>
    </div>
  );
}
