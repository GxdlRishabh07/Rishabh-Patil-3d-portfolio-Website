import { motion } from "framer-motion";

const STATS = [
  { value: "200+", label: "Concurrent Users" },
  { value: "90%", label: "Lighthouse Score" },
  { value: "<200ms", label: "Response Times" },
];

export function Stats() {
  return (
    <section className="bg-bg py-16 md:py-24 border-t border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-stroke">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center text-center pt-8 md:pt-0 first:pt-0"
            >
              <div className="text-6xl md:text-7xl lg:text-8xl font-display italic text-text-primary tracking-tighter mb-4">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}