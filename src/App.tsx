import { useState, useEffect, lazy, Suspense } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { IntroSequence } from "./sections/IntroSequence";
import { About } from "./sections/About";
import { EducationAndExperience } from "./sections/EducationAndExperience";
import { Skills } from "./sections/Skills";
import { SelectedWorks } from "./sections/SelectedWorks";
import { ContactSection } from "./sections/ContactSection";
import { CurtainFooter } from "./components/ui/motion-footer";
import { ReactLenis, useLenis } from "lenis/react";
import { Navbar } from "./components/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Routes, Route } from "react-router-dom";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AdminPage = lazy(() => import("./pages/AdminPage").then(module => ({ default: module.AdminPage })));

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

  // When loading completes, immediately refresh Lenis and ScrollTrigger dimensions
  useEffect(() => {
    if (!isLoading && lenis) {
      const timer = setTimeout(() => {
        lenis.resize();
        ScrollTrigger.refresh();
        window.dispatchEvent(new Event("resize"));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isLoading, lenis]);

  return (
    <>
      {!isLoading && <Navbar />}
      <main className={`w-full bg-bg transition-opacity duration-1000 ${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <IntroSequence />
        <About />
        <EducationAndExperience />
        <Skills />
        <SelectedWorks />
        <ContactSection />
        <CurtainFooter />
      </main>
    </>
  );
}

function HomeRoute() {
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
    
    // Cleanup on unmount to ensure scroll is restored
    return () => {
      document.body.style.overflow = "unset";
    };
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeRoute />} />
      <Route path="/admin" element={
        <Suspense fallback={<div className="h-screen w-full bg-black" />}>
          <AdminPage />
        </Suspense>
      } />
    </Routes>
  );
}

export default App;