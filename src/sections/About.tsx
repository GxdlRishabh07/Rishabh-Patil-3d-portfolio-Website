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
                <div className="w-8 sm:w-12 h-px bg-stroke" />
                <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-text-primary tracking-tight flex flex-wrap items-center">
                  <TextReveal
                    as="span"
                    text="About"
                    fontSize="inherit"
                    color="hsl(0, 0%, 96%)"
                    hoverColor="hsl(0, 0%, 65%)"
                    direction="up"
                    staggerDelay={40}
                    duration={320}
                    style={{ padding: "0 0.05em 0 0", lineHeight: "inherit" }}
                  />{" "}
                  <TextReveal
                    as="span"
                    text="Me"
                    fontSize="inherit"
                    color="hsl(0, 0%, 96%)"
                    hoverColor="hsl(0, 0%, 70%)"
                    direction="up"
                    staggerDelay={40}
                    duration={320}
                    className="font-display italic"
                    style={{ padding: "0 0.05em", lineHeight: "inherit" }}
                  />
                </h2>
              </div>

              <div className="about-content space-y-4 sm:space-y-6">
                <p className="text-lg sm:text-xl md:text-2xl text-text-primary/90 leading-relaxed font-medium">
                  I'm a dedicated <span className="font-extrabold text-text-primary px-[0.1em]">MCA student</span> at <span className="font-extrabold text-text-primary px-[0.1em]">MIT-WPU</span> with a strong passion for <span className="font-extrabold text-text-primary px-[0.1em]">full-stack web development</span> and a proven ability to leverage multiple <span className="font-extrabold text-text-primary px-[0.1em]">AI models</span> to solve complex problems.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-muted leading-relaxed">
                  I have successfully delivered numerous <span className="font-bold text-text-primary px-[0.08em]">freelance projects</span>, deploying them with high quality and real-world impact. I’m driven to grow, innovate, and bring significant value to every project I pursue.
                </p>
              </div>

              <div className="about-content grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-stroke/50 w-full">
                <div className="text-left">
                  <h4 className="text-xs text-muted uppercase tracking-[0.2em] mb-2.5 sm:mb-4">Philosophy</h4>
                  <p className="text-xs sm:text-sm text-text-primary/80 leading-relaxed">
                    As a passionate MCA student at MIT-WPU, I believe in the power of continuous learning and purposeful innovation. I strive to bridge technology and human experience through full-stack web development and the strategic use of AI models. While I am early in my professional journey, I bring a fresh perspective, a commitment to excellence, and a drive to create real-world impact through every project I take on. I am excited to collaborate, grow, and deliver innovative solutions that make a difference.
                  </p>
                </div>
                <div className="text-left">
                  <h4 className="text-xs text-muted uppercase tracking-[0.2em] mb-2.5 sm:mb-4">Current Focus</h4>
                  <p className="text-xs sm:text-sm text-text-primary/80 leading-relaxed">
                    Currently pursuing my Master of Computer Applications at MIT WPU, while delivering high-impact freelance projects for real-world clients.
                  </p>
                </div>
              </div>

              <div className="about-content pt-2">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2.5 sm:gap-3 text-sm sm:text-base text-accent border-b border-accent/30 pb-1 hover:border-accent transition-all duration-300"
                >
                  Let's discuss your next project
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                    <path d="M3.64645 11.3536L11.3536 3.64645M11.3536 3.64645H3.5V2.5H12.5V11.5H11.3536V3.64645Z" fill="currentColor"/>
                  </svg>
                </motion.a>
              </div>
            </div>

            <div className="lg:w-1/3 about-content flex justify-center lg:justify-end w-full mt-4 sm:mt-8 lg:mt-0">
              <div className="relative group about-image-container w-full max-w-[240px] sm:max-w-[280px] md:max-w-[340px] mx-auto lg:mx-0">
                <div className="absolute -inset-4 accent-gradient opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-500 rounded-full" />
                <div 
                  className="relative overflow-hidden aspect-[3/4] flex items-center justify-center"
                  style={{
                    maskImage: "radial-gradient(ellipse at 50% 45%, black 85%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(ellipse at 50% 45%, black 85%, transparent 100%)"
                  }}
                >
                  <img 
                    src="/new-profile.png" 
                    alt="Rishabh Patil" 
                    className="w-full h-full object-cover object-[45%_center] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </SpotlightGradientBg>
    </section>
  );
}