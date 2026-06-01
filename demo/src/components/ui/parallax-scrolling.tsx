import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

export function ParallaxComponent() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current?.querySelector('[data-parallax-layers]');

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 0
        }
      });

      const layers = [
        { layer: "1", yPercent: 70 },
        { layer: "2", yPercent: 55 },
        { layer: "3", yPercent: 40 },
        { layer: "4", yPercent: 10 }
      ];

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
          {
            yPercent: layerObj.yPercent,
            ease: "none"
          },
          idx === 0 ? undefined : "<"
        );
      });
    }

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Clean up GSAP and ScrollTrigger instances
      ScrollTrigger.getAll().forEach(st => st.kill());
      if (triggerElement) gsap.killTweensOf(triggerElement);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="parallax relative w-full bg-bg" ref={parallaxRef}>
      <section className="parallax__header relative h-[150vh]">
        <div className="parallax__visuals sticky top-0 h-screen overflow-hidden">
          <div className="parallax__black-line-overflow absolute inset-0 z-10 bg-black/30 mix-blend-overlay"></div>
          <div data-parallax-layers className="parallax__layers absolute inset-0 w-full h-[130%] -top-[15%]">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
              loading="eager" 
              data-parallax-layer="1" 
              alt="Layer 1" 
              className="parallax__layer-img absolute inset-0 w-full h-full object-cover z-0" 
            />
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000" 
              loading="eager" 
              data-parallax-layer="2" 
              alt="Layer 2" 
              className="parallax__layer-img absolute inset-0 w-full h-full object-cover z-10 opacity-90" 
            />
            <div data-parallax-layer="3" className="parallax__layer-title absolute inset-0 flex items-center justify-center z-20">
              <h2 className="parallax__title text-7xl md:text-9xl lg:text-[12rem] font-display italic text-text-primary mix-blend-difference drop-shadow-2xl tracking-tighter">Parallax</h2>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&q=80&w=2000" 
              loading="eager" 
              data-parallax-layer="4" 
              alt="Layer 4" 
              className="parallax__layer-img absolute inset-0 w-full h-full object-cover z-30 mix-blend-lighten opacity-60" 
            />
          </div>
          <div className="parallax__fade absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-bg to-transparent z-40"></div>
        </div>
      </section>
      <section className="parallax__content relative flex justify-center items-center py-32 bg-bg z-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="160" viewBox="0 0 160 160" fill="none" className="osmo-icon-svg text-text-primary w-24 h-24">
          <path d="M94.8284 53.8578C92.3086 56.3776 88 54.593 88 51.0294V0H72V59.9999C72 66.6273 66.6274 71.9999 60 71.9999H0V87.9999H51.0294C54.5931 87.9999 56.3777 92.3085 53.8579 94.8283L18.3431 130.343L29.6569 141.657L65.1717 106.142C67.684 103.63 71.9745 105.396 72 108.939V160L88.0001 160L88 99.9999C88 93.3725 93.3726 87.9999 100 87.9999H160V71.9999H108.939C105.407 71.9745 103.64 67.7091 106.12 65.1938L106.142 65.1716L141.657 29.6568L130.343 18.3432L94.8284 53.8578Z" fill="currentColor"></path>
        </svg>
      </section>
    </div>
  );
}