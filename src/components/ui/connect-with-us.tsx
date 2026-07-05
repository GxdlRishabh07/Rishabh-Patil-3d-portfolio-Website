import React from 'react';
import { cn } from "@/lib/utils";

export const SocialConnect = ({ className }: { className?: string }) => {
  const socials = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/rishabh_patil.07/",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-white">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      hoverClass: "hover:bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] hover:shadow-[0_0_20px_rgba(225,48,108,0.6)]"
    },
    {
      name: "GitHub",
      href: "https://github.com/GxdlRishabh07",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
        </svg>
      ),
      hoverClass: "hover:bg-[#333] hover:shadow-[0_0_20px_rgba(51,51,51,0.6)]"
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/rishabh-patil-799380272",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
        </svg>
      ),
      hoverClass: "hover:bg-[#0077b5] hover:shadow-[0_0_20px_rgba(0,119,181,0.6)]"
    }
  ];

  return (
    <div className={cn("flex flex-col items-center justify-center py-8 w-full", className)}>
      <div className="relative w-full max-w-lg">
        <div 
          className="rounded-2xl bg-gradient-to-br from-surface/40 to-bg/60 border border-stroke/50 shadow-xl backdrop-blur-2xl overflow-hidden p-5 transition-all duration-500 hover:scale-[1.01]"
          style={{
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.15)'
          }}
        >
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {socials.map((social) => (
              <a 
                key={social.name}
                href={social.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center no-underline transition-all duration-300"
              >
                <div className={cn(
                  "relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 shadow-md backdrop-blur-sm border border-white/5 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105",
                  social.hoverClass
                )}>
                  {/* Smaller Icon */}
                  {React.cloneElement(social.icon as React.ReactElement<{ className?: string }>, { className: "h-5 w-5 md:h-6 md:w-6 text-white transition-all duration-300" })}
                  {/* Internal Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span className="mt-2 text-white font-medium opacity-40 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all duration-300 text-[10px] md:text-xs uppercase tracking-wider">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Custom Shake Animation */}
      <style>{`
        @keyframes custom-shake {
          0%, 100% { transform: translateX(0) rotate(0); }
          20% { transform: translateX(-3px) rotate(-3deg); }
          40% { transform: translateX(3px) rotate(3deg); }
          60% { transform: translateX(-3px) rotate(-3deg); }
          80% { transform: translateX(3px) rotate(3deg); }
        }
        .group:hover svg {
          animation: custom-shake 0.5s;
        }
      `}</style>
    </div>
  );
};
