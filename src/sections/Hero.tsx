import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Navbar } from "../components/Navbar";
import { LiquidAurora } from "@/components/ui/liquid-aurora";

const ROLES = ["Full-Stack", "Backend", "Frontend", "React"];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      ).fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
        0.3
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <LiquidAurora className="w-full h-screen">
      {/* Subtle dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-black/40 z-[3] pointer-events-none" />

      <div ref={containerRef} className="relative w-full h-full">
      <Navbar />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 pt-20">
        <div className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8">
          PROFESSIONAL SUMMARY
        </div>

        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          Rishabh Patil
        </h1>

        <div className="blur-in text-xl md:text-2xl text-text-primary mb-8 font-medium">
          A{" "}
          <span
            key={roleIndex}
            className="font-display italic inline-block animate-role-fade-in text-accent"
          >
            {ROLES[roleIndex]}
          </span>{" "}
          Developer based in Pune.
        </div>

        <p className="blur-in text-sm md:text-base text-muted max-w-md mb-12">
          Results-driven Full-Stack Software Developer with proven expertise in designing, developing, and deploying scalable web applications.
        </p>

        <div className="blur-in flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
          <a href="#work" className="group relative rounded-full text-sm px-7 py-3.5 bg-text-primary text-bg hover:bg-bg hover:text-text-primary transition-all duration-300 hover:scale-105">
            <div className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            <span className="relative z-10 font-medium">See Works</span>
          </a>
          
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="group relative rounded-full text-sm px-7 py-3.5 border border-stroke bg-surface text-text-primary hover:border-accent hover:text-accent transition-all duration-300 hover:scale-105">
            <span className="relative z-10 font-medium">Download Resume</span>
          </a>

          <a href="mailto:patilrishabh50@gmail.com" className="group relative rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-bg text-text-primary hover:border-transparent hover:scale-105 transition-all duration-300">
            <div className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            <span className="relative z-10 bg-bg px-7 py-3.5 rounded-full block -m-[14px] font-medium group-hover:bg-transparent transition-colors">
              Reach out...
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 blur-in">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">SCROLL</span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-text-primary animate-scroll-down" />
        </div>
      </div>
      </div>
    </LiquidAurora>
  );
}