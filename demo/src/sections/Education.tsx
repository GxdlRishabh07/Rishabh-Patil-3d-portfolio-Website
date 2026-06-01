import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import GeometricBackground from "@/components/ui/geometric";

gsap.registerPlugin(ScrollTrigger);

const EDUCATION = [
  {
    degree: "Master of Computer Applications",
    school: "MIT World Peace University",
    location: "Pune, India",
    period: "2024 — Present",
    description: "Specializing in full-stack development, distributed systems, and cloud architecture. Coursework includes advanced algorithms, database design, and software engineering.",
    current: true,
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of Pune",
    location: "Pune, India",
    period: "2020 — 2024",
    description: "Foundation in programming, data structures, algorithms, and software development lifecycle. Graduated with distinction.",
    current: false,
  },
];

export function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".edu-title",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".edu-title",
            start: "top 80%",
          },
        }
      );

      // 3D fold-out reveal for education cards
      gsap.fromTo(
        ".edu-card",
        { 
          opacity: 0, 
          y: 60, 
          rotateX: 12, 
          scale: 0.95,
          transformPerspective: 1000, 
          transformOrigin: "top center" 
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".edu-cards",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative"
    >
      <GeometricBackground className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          {/* Header */}
          <div className="flex items-center gap-6 edu-title mb-12 md:mb-16">
            <div className="w-12 h-px bg-stroke" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight font-semibold">
              Education
            </h2>
          </div>

          {/* Cards */}
          <div className="edu-cards grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="edu-card group relative bg-surface/80 border border-stroke rounded-3xl p-8 md:p-10 backdrop-blur-sm transition-all duration-300 hover:border-stroke/60"
              >
                {/* Current badge */}
                {edu.current && (
                  <div className="absolute top-6 right-6">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      Currently Enrolled
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>

                {/* Degree */}
                <h3 className="text-xl md:text-2xl text-text-primary font-semibold mb-2">
                  {edu.degree}
                </h3>

                {/* School */}
                <p className="text-base text-text-primary/80 mb-4">
                  {edu.school}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-4">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </GeometricBackground>
    </section>
  );
}
