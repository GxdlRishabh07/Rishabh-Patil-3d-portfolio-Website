import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SocialConnect } from "../components/ui/connect-with-us";

export function Footer() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.to(".marquee-inner", {
        xPercent: -50,
        ease: "none",
        duration: 40,
        repeat: -1,
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="relative w-full overflow-hidden bg-black pt-16 md:pt-20 pb-8 md:pb-12">
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
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Top gradient fade to blend with previous section */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between gap-16 md:gap-32">
        {/* Marquee */}
        <div ref={marqueeRef} className="w-full overflow-hidden flex whitespace-nowrap opacity-50 mix-blend-overlay">
          <div className="marquee-inner flex">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex">
                {Array.from({ length: 10 }).map((_, j) => (
                  <span
                    key={j}
                    className="text-8xl md:text-9xl font-display italic text-transparent stroke-text pr-8"
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
        <div className="flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-4xl md:text-6xl text-text-primary tracking-tight mb-8">
            Let's create something <br />
            <span className="font-display italic text-accent">extraordinary.</span>
          </h2>
          
          <SocialConnect className="mb-4" />

          <a
            href="mailto:patilrishabh50@gmail.com"
            className="group relative rounded-full text-base px-8 py-4 bg-text-primary text-bg hover:bg-bg hover:text-text-primary transition-all duration-300 hover:scale-105 inline-flex items-center"
          >
            <div className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            <span className="relative z-10 font-medium">patilrishabh50@gmail.com</span>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10 mt-auto">
          {/* Availability */}
          <div className="flex items-center gap-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <span className="text-sm text-text-primary">Available for projects</span>
          </div>

          <div className="text-xs text-muted">
            © {new Date().getFullYear()} Rishabh Patil. Built with React & Vite.
          </div>
        </div>
      </div>
    </footer>
  );
}