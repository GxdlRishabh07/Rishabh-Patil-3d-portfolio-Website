import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SpotlightGradientBg } from "@/components/ui/spotlight-gradient";
import { TextReveal } from "@/components/ui/cascade-text";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 3D slide and fade in for title
      gsap.fromTo(
        ".about-title",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".about-title",
            start: "top 85%",
          },
        }
      );

      // Staggered 3D pop up for content columns
      gsap.fromTo(
        ".about-content",
        { 
          opacity: 0, 
          y: 40, 
          rotateX: 8, 
          scale: 0.98,
          transformPerspective: 1000, 
          transformOrigin: "top center" 
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-content",
            start: "top 85%",
          },
        }
      );

      // 3D rotation reveal for profile photo card
      gsap.fromTo(
        ".about-image-container",
        { 
          opacity: 0, 
          scale: 0.9, 
          rotateY: -25, 
          y: 50,
          transformPerspective: 1000 
        },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-image-container",
            start: "top 85%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="relative"
    >
      <SpotlightGradientBg className="py-14 sm:py-20 md:py-32">
        {/* Top gradient fade to blend with hero */}
        <div className="absolute top-0 left-0 right-0 h-44 sm:h-64 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none z-10" />
        
        <div className="relative max-w-[1200px] mx-auto px-5 sm:px-10 lg:px-16 z-10">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 items-center">
            
            {/* Content Block */}
            <div className="lg:w-2/3 flex flex-col gap-6 sm:gap-10 items-start text-left">
              <div className="flex items-center gap-3 sm:gap-6 about-title">
                <div className="w-8 sm:w-12 h-px bg-white/20" />
                <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-text-primary tracking-[-0.03em] flex flex-wrap items-center">
                  <TextReveal
                    as="span"
                    text="About"
                    fontSize="inherit"
                    color="hsl(210, 24%, 98%)"
                    hoverColor="hsl(215, 14%, 70%)"
                    direction="up"
                    staggerDelay={40}
                    duration={320}
                    style={{ padding: "0 0.05em 0 0", lineHeight: "inherit" }}
                  />{" "}
                  <TextReveal
                    as="span"
                    text="Me"
                    fontSize="inherit"
                    color="hsl(210, 24%, 98%)"
                    hoverColor="hsl(212, 54%, 75%)"
                    direction="up"
                    staggerDelay={40}
                    duration={320}
                    className="font-display italic"
                    style={{ padding: "0 0.05em", lineHeight: "inherit" }}
                  />
                </h2>
              </div>

              <div className="about-content space-y-4 sm:space-y-6">
                <p className="text-lg sm:text-xl md:text-2xl text-text-primary/95 leading-relaxed font-normal text-pretty">
                  I'm a dedicated <span className="font-semibold text-white px-[0.1em] border-b border-white/20">MCA student</span> at <span className="font-semibold text-white px-[0.1em] border-b border-white/20">MIT-WPU</span> with a strong passion for <span className="font-semibold text-white px-[0.1em] border-b border-white/20">full-stack web development</span> and a proven ability to leverage multiple <span className="font-semibold text-white px-[0.1em] border-b border-white/20">AI models</span> to solve complex problems.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-muted leading-relaxed text-pretty">
                  I have successfully delivered numerous freelance projects, deploying them with high quality and real-world impact. I’m driven to grow, innovate, and bring significant value to every project I pursue.
                </p>
              </div>

              <div className="about-content grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4 w-full">
                <div className="text-left p-5 sm:p-6 rounded-2xl bg-white/[0.025] border border-white/[0.08] border-t-white/[0.18] shadow-xl backdrop-blur-md transition-all duration-300 hover:border-white/15">
                  <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#89AACC] mb-3 block font-medium">Philosophy</span>
                  <p className="text-xs sm:text-sm text-text-primary/80 leading-relaxed text-pretty">
                    Continuous learning and purposeful innovation. I strive to bridge technology and human experience through robust full-stack architectures and the strategic use of modern AI models to build real-world products.
                  </p>
                </div>
                <div className="text-left p-5 sm:p-6 rounded-2xl bg-white/[0.025] border border-white/[0.08] border-t-white/[0.18] shadow-xl backdrop-blur-md transition-all duration-300 hover:border-white/15">
                  <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#89AACC] mb-3 block font-medium">Current Focus</span>
                  <p className="text-xs sm:text-sm text-text-primary/80 leading-relaxed text-pretty">
                    Master of Computer Applications at MIT-WPU, preparing for top software engineering engineering roles while engineering high-impact web and backend solutions.
                  </p>
                </div>
              </div>

              <div className="about-content pt-2">
                <motion.a
                  href="#contact"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2.5 sm:gap-3 text-sm sm:text-base text-white/90 hover:text-white border-b border-white/25 pb-1 hover:border-[#89AACC] transition-all duration-200 group font-medium"
                >
                  <span>Let's discuss your next project</span>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#89AACC] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                    <path d="M3.64645 11.3536L11.3536 3.64645M11.3536 3.64645H3.5V2.5H12.5V11.5H11.3536V3.64645Z" fill="currentColor"/>
                  </svg>
                </motion.a>
              </div>
            </div>

            <div className="lg:w-1/3 about-content flex justify-center lg:justify-end w-full mt-6 sm:mt-8 lg:mt-0">
              <div className="relative group about-image-container w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] mx-auto lg:mx-0">
                {/* Ambient backdrop glow */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#1e3a8a]/30 via-[#4E85BF]/20 to-transparent opacity-0 group-hover:opacity-60 blur-3xl transition-opacity duration-700 rounded-3xl" />
                
                <div className="relative p-2 rounded-3xl bg-white/[0.03] border border-white/10 border-t-white/20 shadow-2xl backdrop-blur-xl">
                  <div 
                    className="relative overflow-hidden aspect-[3/4] rounded-2xl flex items-center justify-center bg-black/40"
                    style={{
                      maskImage: "radial-gradient(ellipse at 50% 45%, black 90%, transparent 100%)",
                      WebkitMaskImage: "radial-gradient(ellipse at 50% 45%, black 90%, transparent 100%)"
                    }}
                  >
                    <img 
                      src="/new-profile.png" 
                      alt="Rishabh Patil" 
                      className="w-full h-full object-cover object-[45%_center] transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Minimal metadata corner stamp */}
                  <div className="pt-2 px-1 pb-1 flex items-center justify-between text-[10px] font-mono tracking-wider text-white/50 uppercase">
                    <span>RP // 2025</span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      AVAILABLE
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </SpotlightGradientBg>
    </section>
  );
}