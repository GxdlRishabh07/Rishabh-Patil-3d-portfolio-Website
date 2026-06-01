import { useState, useEffect } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Education } from "./sections/Education";
import { Certifications } from "./sections/Certifications";
import { SelectedWorks } from "./sections/SelectedWorks";
import { ContactSection } from "./sections/ContactSection";
import { Footer } from "./sections/Footer";
import { ReactLenis, useLenis } from "lenis/react";
import { motion, useScroll } from "framer-motion";
import gsap from "gsap";

function AppContent({ isLoading }: { isLoading: boolean }) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    
    // Connect GSAP ticker to Lenis frame loop for perfect animation synchronization
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(update);
    
    // Intercept all anchor link clicks for premium smooth scroll animation
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (
        anchor &&
        anchor.hash &&
        anchor.hash.startsWith("#") &&
        anchor.getAttribute("href") !== "#"
      ) {
        if (document.querySelector(anchor.hash)) {
          e.preventDefault();
          lenis.scrollTo(anchor.hash, {
            offset: -80, // slightly offset to account for navbar blur spacing
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // premium exponential deceleration
          });
        }
      }
    };
    
    document.addEventListener("click", handleAnchorClick, { capture: true });
    return () => {
      gsap.ticker.remove(update);
      document.removeEventListener("click", handleAnchorClick, { capture: true });
    };
  }, [lenis]);

  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Premium Glassmorphic Top Scroll Progress Indicator */}
      {!isLoading && (
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="fixed top-0 left-0 right-0 h-[4px] accent-gradient origin-left z-[100] shadow-[0_2px_10px_rgba(78,133,191,0.4)]"
        />
      )}

      <main className={`w-full bg-bg transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <Hero />
        <About />
        <Education />
        <Certifications />
        <SelectedWorks />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Ensure we're at the top on reload after loading screen
      window.scrollTo(0, 0);
    }
  }, [isLoading]);

  return (
    <ReactLenis 
      root 
      autoRaf={false}
      options={{ 
        duration: 1.2, 
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // premium exponential deceleration
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5
      }}
    >
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <AppContent isLoading={isLoading} />
    </ReactLenis>
  );
}

export default App;