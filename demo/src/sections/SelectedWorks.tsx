import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";
import GeometricBackground from "@/components/ui/geometric";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WORKS = [
  {
    title: "InternSphere",
    category: "Full-Stack Java App",
    image: "/internsphere.png",
    colSpan: "md:col-span-6",
    displayType: "showcase",
  },
  {
    title: "TideWave Andaman",
    category: "React SPA & Node.js",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
    colSpan: "md:col-span-6",
  },
];

export function SelectedWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 3D slide and fade in for bento grid cards on scroll
      gsap.fromTo(
        ".work-card",
        {
          opacity: 0,
          y: 60,
          rotateX: 12,
          scale: 0.96,
          transformPerspective: 1000,
          transformOrigin: "top center",
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".work-grid",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="relative">
      <GeometricBackground className="py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16"
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

          {/* Bento Grid */}
          <div className="work-grid grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
            {WORKS.map((work, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className={cn(
                  "work-card group relative bg-surface border border-stroke rounded-3xl overflow-hidden aspect-[16/9]",
                  work.colSpan
                )}
              >
                {/* Background Image */}
                <img
                  src={work.image}
                  alt={work.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Halftone Overlay */}
                {work.displayType !== "showcase" && (
                  <div
                    className="absolute inset-0 opacity-20 mix-blend-multiply z-10"
                    style={{
                      backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                      backgroundSize: "4px 4px",
                    }}
                  />
                )}

                {/* Hover Darken */}
                <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-lg z-20 flex flex-col items-center justify-center p-6 text-center">
                  <div className="relative inline-flex items-center rounded-full p-[1px] overflow-hidden mb-4">
                    <div className="absolute inset-0 accent-gradient animate-gradient-shift bg-[length:200%_auto]" />
                    <div className="relative bg-white text-bg px-6 py-2 rounded-full font-medium text-sm flex items-center gap-2">
                      View — <span className="font-display italic text-base">{work.title}</span>
                    </div>
                  </div>
                  <p className="text-text-primary/70 text-sm uppercase tracking-widest">
                    {work.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </GeometricBackground>
    </section>
  );
}
