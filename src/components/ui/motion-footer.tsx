import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SocialConnect } from "@/components/ui/connect-with-us";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * CurtainFooter
 *
 * Implements the "cinematic curtain reveal" scroll effect from the reference
 * component — scoped ONLY to the ContactSection → Footer transition.
 *
 * How it works:
 *  1. The wrapper div sits in normal document flow with `h-screen` and
 *     `clip-path: polygon(...)` — this acts as a viewport-sized window/curtain.
 *  2. The actual <footer> inside is `position: fixed; bottom: 0` so it sticks
 *     to the bottom of the viewport.
 *  3. As you scroll, the clip-path wrapper scrolls into view, revealing the
 *     fixed footer underneath it — like a curtain lifting to expose a stage.
 *  4. The fixed position means this has ZERO effect on any other section.
 */
export function CurtainFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !wrapperRef.current) return;

    const ctx = gsap.context(() => {
      // Marquee scroll animation
      if (marqueeRef.current) {
        gsap.to(".curtain-marquee-inner", {
          xPercent: -50,
          ease: "none",
          duration: 40,
          repeat: -1,
        });
      }

      // Staggered content reveal as footer enters the clipped viewport
      gsap.fromTo(
        [headingRef.current, bottomBarRef.current],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 40%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    /*
     * CURTAIN WRAPPER — sits in normal flow, has clip-path.
     * h-screen so it occupies one full viewport height of scroll space.
     * The clip-path clips everything to the wrapper's bounding box.
     */
    <div
      ref={wrapperRef}
      className="relative h-screen w-full bg-black"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {/*
       * FIXED FOOTER — stays pinned to bottom of viewport.
       * Only visible through the clip-path window above.
       * As the wrapper scrolls into view, more of the footer is revealed.
       */}
      <footer className="fixed bottom-0 left-0 w-full h-screen overflow-hidden bg-black text-white flex flex-col justify-between">

        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260422_112520_ee819691-f2e8-4c54-bb77-3fb72c84eaa5.mp4"
            className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-black/50" />
          {/* ── Blend gradient: tall enough to dissolve into ContactSection ── */}
          {/* Primary: full black → transparent over top 70% */}
          <div className="absolute top-0 left-0 right-0 h-[70%] bg-gradient-to-b from-black via-black to-transparent pointer-events-none z-10" />
          {/* Secondary: reinforces the upper half */}
          <div className="absolute top-0 left-0 right-0 h-[45%] bg-black pointer-events-none z-10" />
        </div>

        {/* Scrolling Marquee */}
        <div
          ref={marqueeRef}
          className="relative z-10 w-full overflow-hidden flex whitespace-nowrap opacity-50 mix-blend-overlay pt-16"
        >
          <div className="curtain-marquee-inner flex">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex">
                {Array.from({ length: 10 }).map((_, j) => (
                  <span
                    key={j}
                    className="text-8xl md:text-9xl font-display italic text-transparent pr-8"
                    style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
                  >
                    BUILDING THE FUTURE •{" "}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Area */}
        <div
          ref={headingRef}
          className="relative z-10 flex flex-col items-center justify-center text-center px-6 flex-1"
        >
          <h2 className="text-4xl md:text-6xl text-white tracking-tight mb-8">
            Let's create something <br />
            <span className="font-display italic text-accent">extraordinary.</span>
          </h2>

          <SocialConnect className="mb-4" />

          <a
            href="mailto:patilrishabh50@gmail.com"
            className="group relative rounded-full text-base px-8 py-4 bg-white text-black hover:bg-black hover:text-white border border-white/20 transition-all duration-300 hover:scale-105 inline-flex items-center"
          >
            <span className="relative z-10 font-medium">patilrishabh50@gmail.com</span>
          </a>
        </div>

        {/* Bottom Bar */}
        <div
          ref={bottomBarRef}
          className="relative z-10 max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6 py-8 border-t border-white/10"
        >
          {/* Availability Indicator */}
          <div className="flex items-center gap-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </div>
            <span className="text-sm text-white/80">Available for projects</span>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-4 text-xs text-white/50">
            <span>© {new Date().getFullYear()} Rishabh Patil. Built with React &amp; Vite.</span>
            <a href="/admin" className="hover:text-accent transition-colors">Admin Login</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 group"
            aria-label="Back to top"
          >
            <svg
              className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
}
