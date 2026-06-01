import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award } from "lucide-react";
import GeometricBackground from "@/components/ui/geometric";

gsap.registerPlugin(ScrollTrigger);

const CERTIFICATIONS = [
  {
    title: "Full-Stack Web Development",
    issuer: "Coursera / Meta",
    date: "2024",
    description: "Comprehensive program covering React, Node.js, databases, and deployment pipelines for production applications.",
  },
  {
    title: "Java Programming Masterclass",
    issuer: "Udemy",
    date: "2023",
    description: "Advanced Java concepts including OOP, collections, streams, multithreading, and enterprise application patterns.",
  },
];

export function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cert-title",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".cert-title",
            start: "top 80%",
          },
        }
      );

      // 3D fold-out reveal for certification cards
      gsap.fromTo(
        ".cert-card",
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
            trigger: ".cert-cards",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative"
    >
      <GeometricBackground className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          {/* Header */}
          <div className="flex items-center gap-6 cert-title mb-12 md:mb-16">
            <div className="w-12 h-px bg-stroke" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight font-semibold">
              Certifications
            </h2>
          </div>

          {/* Cards */}
          <div className="cert-cards grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="cert-card group relative bg-surface/50 border border-stroke rounded-3xl p-8 md:p-10 backdrop-blur-sm transition-all duration-300 hover:border-stroke/60"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Award className="w-6 h-6 text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl text-text-primary font-semibold mb-2">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-base text-text-primary/80 mb-4">
                  {cert.issuer}
                </p>

                {/* Date */}
                <p className="text-sm text-muted mb-4">
                  {cert.date}
                </p>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </GeometricBackground>
    </section>
  );
}
