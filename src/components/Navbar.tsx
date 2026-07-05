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
          ? "bg-bg/85 backdrop-blur-md border-b border-stroke/20 py-4"
          : "bg-transparent py-6 md:py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Name / Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsOpen(false);
          }}
          className={cn(
            "text-sm sm:text-base font-bold tracking-[0.25em] hover:opacity-80 transition-all duration-300 uppercase",
            scrolled || isOpen ? "text-white" : "text-black"
          )}
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
                  className={cn(
                    "text-[13px] font-semibold tracking-[0.2em] transition-colors duration-300 uppercase",
                    scrolled || isOpen ? "text-white/70 hover:text-white" : "text-black/60 hover:text-black"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <span className={cn(
            "h-3 w-[1px] block transition-colors duration-300",
            scrolled || isOpen ? "bg-white/20" : "bg-black/20"
          )} />

          {/* Resume link */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-1 text-[13px] font-semibold tracking-[0.2em] transition-colors duration-300 uppercase",
              scrolled || isOpen ? "text-white/70 hover:text-white" : "text-black/60 hover:text-black"
            )}
          >
            RESUME <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "block md:hidden hover:opacity-80 transition-all duration-300 w-12 h-12 flex items-center justify-center -mr-3",
            scrolled || isOpen ? "text-white" : "text-black"
          )}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "fixed inset-0 top-[60px] bg-black/95 backdrop-blur-xl z-40 flex flex-col justify-start px-8 py-12 transition-all duration-300 md:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <ul className="flex flex-col mb-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold tracking-[0.2em] text-muted hover:text-text-primary transition-colors duration-300 block py-4 uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Divider */}
        <div className="h-[1px] bg-stroke/60 w-full mb-8" />

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="inline-flex items-center justify-between text-base font-semibold tracking-[0.2em] text-text-primary bg-surface border border-stroke/40 rounded-lg px-5 py-3 hover:bg-stroke transition-colors duration-300 uppercase"
        >
          <span>VIEW RESUME</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}