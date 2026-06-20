import { SpotlightGradientBg } from "@/components/ui/spotlight-gradient";
import { ScrollVelocity } from "@/components/ui/scroll-velocity";
import { TextReveal } from "@/components/ui/cascade-text";

// SVG Logo Components
const CppLogo = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#00599C" d="M64 14L14 43v58l50 29 50-29V43L64 14z" />
    <path fill="#004482" d="M64 20L20 45v50l44 25 44-25V45L64 20z" />
    <path fill="#FFF" d="M80 61h-8v-8h-6v8h-8v6h8v8h6v-8h8v-6zm18 0h-8v-8h-6v8h-8v6h8v8h6v-8h8v-6z" />
    <path fill="#FFF" d="M50 78c-8.8 0-16-7.2-16-16s7.2-16 16-16c4.9 0 9.3 2.2 12.2 5.8l-4.7 3.8c-2-2.5-5.1-4-7.5-4-5.8 0-10 4.7-10 10.4s4.2 10.4 10 10.4c2.4 0 5.5-1.5 7.5-4l4.7 3.8c-2.9 3.6-7.3 5.8-12.2 5.8z" />
  </svg>
);

const JsLogo = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <rect width="128" height="128" fill="#F7DF1E" rx="16" />
    <path d="M75 100c0 5.5-2.5 9-8 10-4.5.5-9-.5-11-2.5v-11c2.5 2 5.5 3 8 3 3 0 4.5-1 4.5-3.5V54h14.5v46zm33.5-3.5c0 6.5-4 10-10 11-5 .5-9.5-1-12-3.5l5.5-8.5c2 1.5 4.5 2.5 6.5 2.5 2.5 0 3.5-1 3.5-2.5s-1-2-4.5-3.5c-7-3-10-6.5-10-12 0-7 5.5-11 12.5-11 4.5 0 8.5 1 11 3v10c-2-2-5-3-7.5-3-3 0-4 1-4 2s1 1.5 4.5 3c7.5 3 10.5 6 10.5 12.5z" fill="#000" />
  </svg>
);

const ReactLogo = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8 sm:w-10 sm:h-10">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const CssLogo = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#1572B6" d="M19.6 14.2l9.7 108.8 34.7 9.6 34.7-9.6 9.7-108.8h-88.8z"/>
    <path fill="#33A9DC" d="M64 123.6V21.6h37.2l-3.5 38.6H64v19.4h17.5l-1.8 20.1-15.7 4.2v9.7z"/>
    <path fill="#FFF" d="M64 41h-23.4l1.6 18.2H64V41zm0 38.8H48.4l-1.1-12.4H36.1l3.3 36.6 24.6 6.8V79.8z"/>
  </svg>
);

const NextjsLogo = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <circle cx="64" cy="64" r="64" fill="#000" stroke="rgba(255,255,255,0.15)" strokeWidth="4"/>
    <path d="M102.5 98.7L59.2 41.5H51.7V87.2H58.5V49.8L95.5 99.2c2.4-2.1 4.7-4.4 7-6.7z" fill="url(#nextjs-grad)"/>
    <rect x="85.3" y="41.5" width="6.8" height="45.7" fill="#FFF"/>
    <defs>
      <linearGradient id="nextjs-grad" x1="51.7" y1="41.5" x2="102.5" y2="98.7" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFF"/>
        <stop offset="1" stopColor="#FFF" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);

const SqlLogo = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="#4E85BF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 32c0-8.8 21.5-16 48-16s48 7.2 48 16M16 32v32c0 8.8 21.5 16 48 16s48-7.2 48-16V32M16 64v32c0 8.8 21.5 16 48 16s48-7.2 48-16V64" />
    <ellipse cx="64" cy="32" rx="48" ry="16" fill="#1e293b" opacity="0.4" />
  </svg>
);

const SKILLS = [
  { name: "C++", logo: <CppLogo /> },
  { name: "JavaScript", logo: <JsLogo /> },
  { name: "React", logo: <ReactLogo /> },
  { name: "CSS", logo: <CssLogo /> },
  { name: "Next.js", logo: <NextjsLogo /> },
  { name: "SQL", logo: <SqlLogo /> },
];

export function Skills() {
  return (
    <section id="skills" className="relative bg-black w-full overflow-visible">
      <SpotlightGradientBg overflowHidden={false} className="py-24 md:py-32">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-16 mb-16">
          <div className="flex items-center gap-6">
            <div className="w-12 h-px bg-stroke" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight font-semibold flex flex-wrap items-center gap-x-1">
              <TextReveal
                as="span"
                text="Skills"
                fontSize="inherit"
                color="hsl(0, 0%, 96%)"
                hoverColor="hsl(0, 0%, 65%)"
                direction="up"
                staggerDelay={33}
                duration={300}
                style={{ padding: "0 0.04em 0 0", lineHeight: "inherit", fontWeight: "inherit" }}
              />
              <span style={{ lineHeight: "inherit" }}>&amp;</span>
              <TextReveal
                as="span"
                text="Expertise"
                fontSize="inherit"
                color="hsl(0, 0%, 96%)"
                hoverColor="hsl(0, 0%, 65%)"
                direction="down"
                staggerDelay={30}
                duration={300}
                className="font-display italic"
                style={{ padding: "0 0 0 0.04em", lineHeight: "inherit", fontWeight: "inherit" }}
              />
            </h2>
          </div>
        </div>

        {/* Scrolling Velocity Tracks */}
        <div className="flex flex-col space-y-6 md:space-y-8 py-10 w-full relative z-10">
          {/* Row 1 - Left direction */}
          <ScrollVelocity velocity={1.5}>
            {SKILLS.map((skill) => (
              <div
                key={`left-${skill.name}`}
                className="flex items-center gap-4 bg-surface/50 border border-stroke rounded-2xl px-6 py-4 mx-3 sm:mx-4 hover:border-accent/40 hover:bg-stroke/40 transition-all duration-300 backdrop-blur-sm select-none"
              >
                {skill.logo}
                <span className="text-lg sm:text-xl md:text-2xl font-semibold text-text-primary tracking-wide">
                  {skill.name}
                </span>
              </div>
            ))}
          </ScrollVelocity>

          {/* Row 2 - Right direction */}
          <ScrollVelocity velocity={-1.5}>
            {[...SKILLS].reverse().map((skill) => (
              <div
                key={`right-${skill.name}`}
                className="flex items-center gap-4 bg-surface/50 border border-stroke rounded-2xl px-6 py-4 mx-3 sm:mx-4 hover:border-accent/40 hover:bg-stroke/40 transition-all duration-300 backdrop-blur-sm select-none"
              >
                {skill.logo}
                <span className="text-lg sm:text-xl md:text-2xl font-semibold text-text-primary tracking-wide">
                  {skill.name}
                </span>
              </div>
            ))}
          </ScrollVelocity>
        </div>

        {/* Bottom divider line matching portfolio aesthetic */}
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-16 mt-20">
          <div className="w-full h-[1px] bg-stroke/30" />
        </div>
      </SpotlightGradientBg>
    </section>
  );
}
