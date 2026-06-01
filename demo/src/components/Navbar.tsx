import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";

const NAV_LINKS = ["Home", "About", "Work", "Resume"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <nav
        className={cn(
          "inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300",
          scrolled ? "shadow-md shadow-black/10" : ""
        )}
      >
        {/* Logo */}
        <a
          href="/"
          className="group relative flex items-center justify-center w-9 h-9 rounded-full overflow-hidden shrink-0 transition-transform duration-300 hover:scale-110"
        >
          <div className="absolute inset-0 accent-gradient group-hover:rotate-180 transition-transform duration-700" />
          <div className="absolute inset-[1px] bg-bg rounded-full flex items-center justify-center">
            <span className="font-display italic text-[13px] text-text-primary leading-none">
              RP
            </span>
          </div>
        </a>

        {/* Divider */}
        <div className="hidden md:block w-px h-5 bg-stroke mx-3" />
        <div className="block md:hidden w-px h-5 bg-stroke mx-2" />

        {/* Links */}
        <ul className="flex items-center gap-1 sm:gap-2">
          {NAV_LINKS.map((link, i) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={cn(
                  "text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-200",
                  i === 0
                    ? "text-text-primary bg-stroke/50"
                    : "text-muted hover:text-text-primary hover:bg-stroke/50"
                )}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="hidden md:block w-px h-5 bg-stroke mx-3" />
        <div className="block md:hidden w-px h-5 bg-stroke mx-2" />

        {/* Say hi Button */}
        <a
          href="#contact"
          className="group relative inline-flex items-center rounded-full text-xs sm:text-sm h-8 sm:h-9"
        >
          <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative flex items-center gap-1.5 px-3 sm:px-4 h-full bg-surface rounded-full backdrop-blur-md text-text-primary">
            Say hi <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </a>
      </nav>
    </div>
  );
}