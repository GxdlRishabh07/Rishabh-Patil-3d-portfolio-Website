import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PARALLAX_ITEMS = [
  { id: 1, src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600", rotate: -2, yOffset: 0 },
  { id: 2, src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600", rotate: 3, yOffset: 100 },
  { id: 3, src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600", rotate: 1, yOffset: 50 },
  { id: 4, src: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&q=80&w=600", rotate: -4, yOffset: -50 },
  { id: 5, src: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=600", rotate: 2, yOffset: 80 },
  { id: 6, src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600", rotate: -1, yOffset: 20 },
];

export function Explorations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !pinRef.current || !leftColRef.current || !rightColRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the center content
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: pinRef.current,
        pinSpacing: false,
      });

      // Parallax columns
      gsap.to(leftColRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(rightColRef.current, {
        yPercent: -80,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[300vh] bg-bg overflow-hidden">
      {/* Layer 1: Pinned Center */}
      <div
        ref={pinRef}
        className="absolute inset-0 h-screen z-10 flex flex-col items-center justify-center pointer-events-none"
      >
        <div className="flex flex-col items-center text-center px-4">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs text-muted uppercase tracking-[0.3em]">
              Explorations
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-text-primary tracking-tight mb-6">
            Visual <span className="font-display italic text-accent">playground</span>
          </h2>
          <p className="text-sm md:text-base text-muted max-w-sm mb-10">
            A collection of visual experiments, unused concepts, and creative explorations.
          </p>
          <button className="pointer-events-auto group relative rounded-full items-center gap-2 text-sm px-6 py-3 bg-surface text-text-primary transition-all duration-300">
            <div className="absolute -inset-[1px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 bg-surface px-6 py-3 rounded-full -m-[12px] group-hover:bg-bg transition-colors">
              Follow on Dribbble
            </span>
          </button>
        </div>
      </div>

      {/* Layer 2: Parallax Columns */}
      <div className="absolute inset-0 z-20 pointer-events-none pt-[100vh]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-2 gap-12 md:gap-40 h-full relative">
          
          {/* Left Column */}
          <div ref={leftColRef} className="flex flex-col gap-24 md:gap-48 relative top-[20vh]">
            {PARALLAX_ITEMS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="w-full aspect-square max-w-[320px] mx-auto relative pointer-events-auto rounded-3xl overflow-hidden group cursor-pointer"
                style={{ transform: `rotate(${item.rotate}deg) translateY(${item.yOffset}px)` }}
              >
                <img
                  src={item.src}
                  alt={`Exploration ${item.id}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div ref={rightColRef} className="flex flex-col gap-32 md:gap-64 mt-[30vh]">
            {PARALLAX_ITEMS.slice(3, 6).map((item) => (
              <div
                key={item.id}
                className="w-full aspect-square max-w-[320px] mx-auto relative pointer-events-auto rounded-3xl overflow-hidden group cursor-pointer"
                style={{ transform: `rotate(${item.rotate}deg) translateY(${item.yOffset}px)` }}
              >
                <img
                  src={item.src}
                  alt={`Exploration ${item.id}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}