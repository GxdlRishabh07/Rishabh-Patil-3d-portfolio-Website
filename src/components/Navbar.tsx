import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#education-and-experience" },
  { label: "WORK", href: "#work" },
  { label: "CONTACT", href: "#contact" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [introHeight, setIntroHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight * 4.8 : 2000
  );

  useEffect(() => {
    const handleResize = () => setIntroHeight(window.innerHeight * 4.8);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > introHeight);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check scroll state immediately on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [introHeight]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        scrolled || isOpen
          ? "bg-bg/90 backdrop-blur-md border-b border-stroke/20 py-3.5 sm:py-4"
          : "bg-transparent py-4 sm:py-6 md:py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Name / Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsOpen(false);
          }}
          className="text-xs sm:text-sm md:text-base font-bold tracking-[0.25em] text-white hover:opacity-80 transition-all duration-300 uppercase"
        >
          RISHABH PATIL
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[13px] font-semibold tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-300 uppercase"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <span className="h-3 w-[1px] block bg-white/20 transition-colors duration-300" />

          {/* Resume link */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[13px] font-semibold tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-300 uppercase"
          >
            RESUME <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-white hover:opacity-80 transition-all duration-300 w-10 h-10 flex items-center justify-center -mr-2 rounded-lg active:scale-95 cursor-pointer"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "fixed inset-0 h-[100dvh] bg-black/95 backdrop-blur-2xl z-40 flex flex-col justify-between pt-20 sm:pt-24 px-6 sm:px-8 pb-10 transition-all duration-300 md:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <ul className="flex flex-col gap-1 mt-2">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold tracking-[0.2em] text-white/70 active:text-white hover:text-white transition-colors duration-200 flex items-center min-h-[50px] py-3 border-b border-stroke/20 uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-4 mt-auto">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-between text-sm font-semibold tracking-[0.2em] text-text-primary bg-surface/80 border border-stroke/50 rounded-xl px-5 py-3.5 hover:bg-stroke active:scale-[0.98] transition-all duration-200 uppercase"
          >
            <span>VIEW RESUME</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <p className="text-[11px] text-white/40 tracking-wider text-center uppercase font-mono">
            Rishabh Patil • Full-Stack Developer
          </p>
        </div>
      </div>
    </header>
  );
}