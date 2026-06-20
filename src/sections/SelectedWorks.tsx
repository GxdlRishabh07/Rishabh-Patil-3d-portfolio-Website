import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ImagesScrollingAnimation } from "@/components/ui/images-scrolling-animation";

const WORKS = [
  {
    title: "InternSphere",
    category: "Full-Stack Java App",
    image: "/internsphere.png",
    colSpan: "md:col-span-6",
    displayType: "showcase",
    tech: ["Java", "Spring Boot", "React", "PostgreSQL"],
    github: "#",
    live: "#"
  },
  {
    title: "TideWave Andaman",
    category: "React SPA & Node.js",
    image: "/tidewave.jpg",
    colSpan: "md:col-span-6",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
    live: "#"
  },
];

export function SelectedWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="work" ref={sectionRef} className="relative bg-black w-full overflow-visible">
      {/* Top and Bottom black fade overlays to blend seamlessly */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />

      <div className="pt-12 pb-10 md:pt-16 md:pb-14 relative z-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-6 md:mb-8"
          >
            <div className="max-w-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-stroke" />
                <span className="text-xs text-muted uppercase tracking-[0.3em]">
                  Selected Work
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight mb-4">
                Featured <span className="font-display italic text-accent">projects</span>
              </h2>
              <p className="text-sm md:text-base text-muted">
                A selection of projects I've worked on, from concept to launch.
              </p>
            </div>

            <button className="hidden md:inline-flex group relative rounded-full items-center gap-2 text-sm px-6 py-3 bg-surface text-text-primary transition-all duration-300">
              <div className="absolute -inset-[1px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center gap-2 bg-surface px-6 py-3 rounded-full -m-[12px] group-hover:bg-bg transition-colors">
                View all work <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </motion.div>

          {/* Stacked Cards Scrolling Animation */}
          <div className="mt-4 w-full">
            <ImagesScrollingAnimation
              projectsList={WORKS.map((work) => ({
                title: work.title,
                category: work.category,
                src: work.image,
              }))}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
