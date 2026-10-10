import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SpotlightGradientBg } from "@/components/ui/spotlight-gradient";
import { TextReveal } from "@/components/ui/cascade-text";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ── SVG Tech Logos ──────────────────────────────────────────────────────────

const CppLogo = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#00599C" d="M64 14L14 43v58l50 29 50-29V43L64 14z" />
    <path fill="#004482" d="M64 20L20 45v50l44 25 44-25V45L64 20z" />
    <path fill="#FFF" d="M80 61h-8v-8h-6v8h-8v6h8v8h6v-8h8v-6zm18 0h-8v-8h-6v8h-8v6h8v8h6v-8h8v-6z" />
    <path fill="#FFF" d="M50 78c-8.8 0-16-7.2-16-16s7.2-16 16-16c4.9 0 9.3 2.2 12.2 5.8l-4.7 3.8c-2-2.5-5.1-4-7.5-4-5.8 0-10 4.7-10 10.4s4.2 10.4 10 10.4c2.4 0 5.5-1.5 7.5-4l4.7 3.8c-2.9 3.6-7.3 5.8-12.2 5.8z" />
  </svg>
);

const JsLogo = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <rect width="128" height="128" fill="#F7DF1E" rx="16" />
    <path d="M75 100c0 5.5-2.5 9-8 10-4.5.5-9-.5-11-2.5v-11c2.5 2 5.5 3 8 3 3 0 4.5-1 4.5-3.5V54h14.5v46zm33.5-3.5c0 6.5-4 10-10 11-5 .5-9.5-1-12-3.5l5.5-8.5c2 1.5 4.5 2.5 6.5 2.5 2.5 0 3.5-1 3.5-2.5s-1-2-4.5-3.5c-7-3-10-6.5-10-12 0-7 5.5-11 12.5-11 4.5 0 8.5 1 11 3v10c-2-2-5-3-7.5-3-3 0-4 1-4 2s1 1.5 4.5 3c7.5 3 10.5 6 10.5 12.5z" fill="#000" />
  </svg>
);

const TsLogo = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <rect width="128" height="128" fill="#3178C6" rx="16" />
    <path d="M40 50h48v12H68v46H52V62H40V50z" fill="#FFF" />
    <path d="M108 72c0-3.5-3-6-8-7l-6-1.5c-6.5-1.5-10.5-4-10.5-9 0-6.5 5.5-11 14-11 6 0 10.5 2 13 4.5l-4 9c-2-1.5-5-3-9-3-3 0-5 1-5 2.5s1.5 2 5.5 3l6 1.5c7.5 2 11.5 5 11.5 10 0 7-6 11.5-15 11.5-7 0-12.5-2.5-15.5-5.5l4-9.5c3 2.5 7 4 11.5 4 4 0 6.5-1.5 6.5-3z" fill="#FFF" />
  </svg>
);

const ReactLogo = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8 sm:w-10 sm:h-10">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const NextjsLogo = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <circle cx="64" cy="64" r="64" fill="#000" stroke="rgba(255,255,255,0.15)" strokeWidth="4"/>
    <path d="M102.5 98.7L59.2 41.5H51.7V87.2H58.5V49.8L95.5 99.2c2.4-2.1 4.7-4.4 7-6.7z" fill="url(#nextjs-grad-skills)"/>
    <rect x="85.3" y="41.5" width="6.8" height="45.7" fill="#FFF"/>
    <defs>
      <linearGradient id="nextjs-grad-skills" x1="51.7" y1="41.5" x2="102.5" y2="98.7" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFF"/>
        <stop offset="1" stopColor="#FFF" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);

const TailwindLogo = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#38BDF8" d="M64 36c-16 0-26 8-30 24 6-8 14-11 24-9 6 1.2 10 5.3 14.6 10C80 68.6 89 78 108 78c16 0 26-8 30-24-6 8-14 11-24 9-6-1.2-10-5.3-14.6-10C92 45.4 83 36 64 36zm-44 32C4 68-6 76-10 92c6-8 14-11 24-9 6 1.2 10 5.3 14.6 10 7.4 7.6 16.4 17 35.4 17 16 0 26-8 30-24-6 8-14 11-24 9-6-1.2-10-5.3-14.6-10C48 77.4 39 68 20 68z" transform="translate(8, 0) scale(0.85)"/>
  </svg>
);

const CssLogo = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#1572B6" d="M19.6 14.2l9.7 108.8 34.7 9.6 34.7-9.6 9.7-108.8h-88.8z"/>
    <path fill="#33A9DC" d="M64 123.6V21.6h37.2l-3.5 38.6H64v19.4h17.5l-1.8 20.1-15.7 4.2v9.7z"/>
    <path fill="#FFF" d="M64 41h-23.4l1.6 18.2H64V41zm0 38.8H48.4l-1.1-12.4H36.1l3.3 36.6 24.6 6.8V79.8z"/>
  </svg>
);

const JavaLogo = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#5382A1" d="M47 88c-12 1-22 3-22 6 0 4 17 7 39 7s39-3 39-7c0-3-10-5-22-6 7 2 13 4 13 6 0 3-13 6-30 6s-30-3-30-6c0-2 6-4 13-6z"/>
    <path fill="#E76F00" d="M72 63c6-7 9-16 6-25-1-2-1-3-2-5 0 0-1 2-2 3-5 9-7 19-3 29 0 0 1-1 1-2zm-12 5c4-5 6-12 4-19-1-2-1-3-2-5 0 0-1 2-2 3-4 7-5 14-2 22 0 0 1-1 2-1z"/>
    <path fill="#5382A1" d="M89 79c3-1 6-1 8-2 9-3 15-8 15-13 0-8-12-14-31-16 0 0 2 2 3 3 13 2 21 6 21 11 0 4-6 7-16 9-3 1-7 1-11 2 4 2 8 4 11 6z"/>
  </svg>
);

const SpringBootLogo = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#6DB33F" d="M110 32c-1.5-1.5-4-1.5-5.5 0l-12 12c-15-13-37-13-52 0L28 32c-1.5-1.5-4-1.5-5.5 0-1.5 1.5-1.5 4 0 5.5l11.5 11.5C21 62 20 83 33 98l-9 9c-1.5 1.5-1.5 4 0 5.5 1.5 1.5 4 1.5 5.5 0l9-9c16 13 38 12 53-1l12 12c1.5 1.5 4 1.5 5.5 0 1.5-1.5 1.5-4 0-5.5l-12-12c12-16 11-37-2-51l11-11c1.5-1.5 1.5-4 0-5.5zM64 96c-18 0-32-14-32-32s14-32 32-32 32 14 32 32-14 32-32 32z"/>
    <path fill="#6DB33F" d="M78 48c-10-8-24-6-32 3-8 10-6 24 3 32 10 8 24 6 32-3 8-10 6-24-3-32zm-6 26c-6 6-15 5-21-1s-5-15 1-21 15-5 21 1 5 15-1 21z"/>
  </svg>
);

const NodeLogo = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#339933" d="M64 8l52 30v60L64 128 12 98V38L64 8z"/>
    <path fill="#FFF" d="M64 36c-15 0-24 9-24 22 0 14 10 20 20 22l6 1c5 1 8 3 8 6s-4 5-9 5c-6 0-11-3-14-6l-4 8c4 4 11 6 18 6 16 0 25-9 25-22 0-13-9-19-20-22l-6-1c-5-1-8-3-8-6s3-5 8-5c5 0 9 2 12 5l4-8c-4-4-10-6-16-6z"/>
  </svg>
);

const PostgresLogo = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#336791" d="M64 12C36 12 16 34 16 64c0 24 13 43 32 50V98c-12-6-20-19-20-34 0-22 16-40 36-40s36 18 36 40c0 15-8 28-20 34v16c19-7 32-26 32-50 0-30-20-52-48-52z"/>
    <circle cx="64" cy="64" r="14" fill="#336791"/>
  </svg>
);

const SqlLogo = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="#4E85BF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 32c0-8.8 21.5-16 48-16s48 7.2 48 16M16 32v32c0 8.8 21.5 16 48 16s48-7.2 48-16V32M16 64v32c0 8.8 21.5 16 48 16s48-7.2 48-16V64" />
    <ellipse cx="64" cy="32" rx="48" ry="16" fill="#1e293b" opacity="0.4" />
  </svg>
);

const MongoLogo = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#47A248" d="M64 8c-3 8-15 32-15 52 0 25 12 45 15 54 3-9 15-29 15-54 0-20-12-44-15-52z"/>
    <path fill="#499D4A" d="M64 8v106c3-9 15-29 15-54 0-20-12-44-15-52z"/>
    <path fill="#FFF" opacity="0.3" d="M64 22c-1 4-6 24-6 38 0 18 6 34 6 38V22z"/>
  </svg>
);

const GitLogo = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#F05032" d="M122.7 57.3L70.7 5.3c-4.4-4.4-11.6-4.4-16 0L42.2 17.8l20.4 20.4c4.7-1.6 10.2-.5 13.9 3.2 3.7 3.7 4.8 9.2 3.2 13.9l19.7 19.7c4.7-1.6 10.2-.5 13.9 3.2 5.5 5.5 5.5 14.5 0 20s-14.5 5.5-20 0c-3.9-3.9-4.9-9.6-3.1-14.4l-18.4-18.4v26.7c1.7 1 3.2 2.4 4.3 4.1 3.9 5.8 2.3 13.7-3.5 17.6-5.8 3.9-13.7 2.3-17.6-3.5-3.9-5.8-2.3-13.7 3.5-17.6 1.7-1.1 3.6-1.8 5.6-2V63.9c-2-.3-3.9-1-5.6-2.1-5.8-3.9-7.4-11.8-3.5-17.6 1.1-1.7 2.6-3.1 4.3-4.1L37.2 22.8 5.3 54.7c-4.4 4.4-4.4 11.6 0 16l52 52c4.4 4.4 11.6 4.4 16 0l49.4-49.4c4.4-4.4 4.4-11.6 0-16z"/>
  </svg>
);

// ── Skills Datasets ─────────────────────────────────────────────────────────

const SKILLS_ROW_1 = [
  { name: "React", logo: <ReactLogo /> },
  { name: "Next.js", logo: <NextjsLogo /> },
  { name: "TypeScript", logo: <TsLogo /> },
  { name: "JavaScript", logo: <JsLogo /> },
  { name: "Tailwind CSS", logo: <TailwindLogo /> },
  { name: "C++", logo: <CppLogo /> },
  { name: "CSS3", logo: <CssLogo /> },
];

const SKILLS_ROW_2 = [
  { name: "Java", logo: <JavaLogo /> },
  { name: "Spring Boot", logo: <SpringBootLogo /> },
  { name: "Node.js", logo: <NodeLogo /> },
  { name: "PostgreSQL", logo: <PostgresLogo /> },
  { name: "MongoDB", logo: <MongoLogo /> },
  { name: "SQL", logo: <SqlLogo /> },
  { name: "Git", logo: <GitLogo /> },
];

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);
  const row1InnerRef = useRef<HTMLDivElement>(null);
  const row2InnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !track1Ref.current || !track2Ref.current) return;

    const ctx = gsap.context(() => {
      // 1. Header 3D Scroll Reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 35, transformPerspective: 1000, rotateX: 6 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // 2. Continuous Ambient Infinite Loop (Drifts serenely even when stationary)
      const tween1 = gsap.to(row1InnerRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 34,
        ease: "none",
      });

      const tween2 = gsap.fromTo(
        row2InnerRef.current,
        { xPercent: -50 },
        {
          xPercent: 0,
          repeat: -1,
          duration: 34,
          ease: "none",
        }
      );

      // 3. Smooth ScrollTrigger Scrubbed Parallax
      // Linked directly to Lenis scroll tick loop for silky smooth response
      gsap.fromTo(
        track1Ref.current,
        { x: 140 },
        {
          x: -360,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );

      gsap.fromTo(
        track2Ref.current,
        { x: -360 },
        {
          x: 140,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );

      // 4. Dynamic Velocity Skew & Acceleration
      // Cards dynamically tilt with velocity when scrolling fast, and spring back on rest
      const pills = gsap.utils.toArray<HTMLElement>(".skill-pill");
      const skewSetter = gsap.quickSetter(pills, "skewX", "deg");
      const clamp = gsap.utils.clamp(-6, 6);
      const proxy = { skew: 0 };

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const vel = self.getVelocity();
          const targetSkew = clamp(vel / -300);

          if (Math.abs(targetSkew) > Math.abs(proxy.skew)) {
            proxy.skew = targetSkew;
            gsap.to(proxy, {
              skew: 0,
              duration: 0.85,
              ease: "power3.out",
              overwrite: true,
              onUpdate: () => skewSetter(proxy.skew),
            });
          }

          // Smoothly boost drift speed proportional to scroll velocity
          const boost = Math.min(Math.abs(vel) / 200, 3.5);
          const dir = self.direction; // 1 for scrolling down, -1 for scrolling up
          gsap.to(tween1, {
            timeScale: (1 + boost) * (dir === 1 ? 1 : -0.7),
            duration: 0.25,
            overwrite: true,
            onComplete: () => {
              gsap.to(tween1, { timeScale: 1, duration: 1.2, ease: "power2.out" });
            },
          });

          gsap.to(tween2, {
            timeScale: (1 + boost) * (dir === 1 ? 1 : -0.7),
            duration: 0.25,
            overwrite: true,
            onComplete: () => {
              gsap.to(tween2, { timeScale: 1, duration: 1.2, ease: "power2.out" });
            },
          });
        },
      });

      // 5. Interactive Hover Slowdown
      const container = containerRef.current;
      if (container) {
        const handleMouseEnter = () => {
          gsap.to([tween1, tween2], { timeScale: 0.25, duration: 0.6, ease: "power2.out" });
        };
        const handleMouseLeave = () => {
          gsap.to([tween1, tween2], { timeScale: 1, duration: 0.8, ease: "power2.out" });
        };
        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          container.removeEventListener("mouseenter", handleMouseEnter);
          container.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative bg-bg w-full overflow-visible">
      <SpotlightGradientBg overflowHidden={false} className="py-16 sm:py-24 md:py-32">
        <div ref={headerRef} className="max-w-[1200px] w-full mx-auto px-5 sm:px-10 lg:px-16 mb-10 sm:mb-16">
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="w-8 sm:w-12 h-px bg-stroke" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight font-semibold flex flex-wrap items-center gap-x-1">
              <TextReveal
                as="span"
                text="Skills"
                fontSize="inherit"
                color="hsl(0, 0%, 96%)"
                hoverColor="hsl(0, 0%, 65%)"
                direction="up"
                staggerDelay={33}
                duration={300}
                style={{ padding: "0 0.04em 0 0", lineHeight: "inherit", fontWeight: "inherit" }}
              />
              <span style={{ lineHeight: "inherit" }}>&amp;</span>
              <TextReveal
                as="span"
                text="Expertise"
                fontSize="inherit"
                color="hsl(0, 0%, 96%)"
                hoverColor="hsl(0, 0%, 65%)"
                direction="down"
                staggerDelay={30}
                duration={300}
                className="font-display italic"
                style={{ padding: "0 0 0 0.04em", lineHeight: "inherit", fontWeight: "inherit" }}
              />
            </h2>
          </div>
        </div>

        {/* GSAP Scroll-Triggered Smooth Scrolling Tracks Container */}
        <div 
          ref={containerRef}
          className="flex flex-col space-y-4 sm:space-y-6 md:space-y-8 py-6 sm:py-10 w-full relative z-10 overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)"
          }}
        >
          {/* Row 1 - Frontend & Core Technologies */}
          <div ref={track1Ref} className="flex will-change-transform">
            <div ref={row1InnerRef} className="flex shrink-0 whitespace-nowrap will-change-transform">
              {Array.from({ length: 4 }).map((_, setIdx) => (
                <div key={`set-1-${setIdx}`} className="flex shrink-0 items-center">
                  {SKILLS_ROW_1.map((skill) => (
                    <div
                      key={`r1-${setIdx}-${skill.name}`}
                      className="skill-pill flex items-center gap-3 sm:gap-4 bg-white/[0.035] hover:bg-white/[0.08] border border-white/[0.08] border-t-white/[0.22] rounded-2xl px-4 py-2.5 sm:px-6 sm:py-3.5 mx-2 sm:mx-3 transition-colors duration-300 backdrop-blur-xl shadow-[0_10px_25px_-10px_rgba(0,0,0,0.5)] select-none hover:-translate-y-0.5 group cursor-default will-change-transform"
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                        {skill.logo}
                      </div>
                      <span className="text-sm sm:text-base md:text-lg font-semibold text-text-primary tracking-[-0.01em]">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Backend, Database & Infrastructure */}
          <div ref={track2Ref} className="flex will-change-transform">
            <div ref={row2InnerRef} className="flex shrink-0 whitespace-nowrap will-change-transform">
              {Array.from({ length: 4 }).map((_, setIdx) => (
                <div key={`set-2-${setIdx}`} className="flex shrink-0 items-center">
                  {SKILLS_ROW_2.map((skill) => (
                    <div
                      key={`r2-${setIdx}-${skill.name}`}
                      className="skill-pill flex items-center gap-3 sm:gap-4 bg-white/[0.035] hover:bg-white/[0.08] border border-white/[0.08] border-t-white/[0.22] rounded-2xl px-4 py-2.5 sm:px-6 sm:py-3.5 mx-2 sm:mx-3 transition-colors duration-300 backdrop-blur-xl shadow-[0_10px_25px_-10px_rgba(0,0,0,0.5)] select-none hover:-translate-y-0.5 group cursor-default will-change-transform"
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                        {skill.logo}
                      </div>
                      <span className="text-sm sm:text-base md:text-lg font-semibold text-text-primary tracking-[-0.01em]">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom divider line matching portfolio aesthetic */}
        <div className="max-w-[1200px] w-full mx-auto px-5 sm:px-10 lg:px-16 mt-12 sm:mt-20">
          <div className="w-full h-[1px] bg-stroke/30" />
        </div>
      </SpotlightGradientBg>
    </section>
  );
}
