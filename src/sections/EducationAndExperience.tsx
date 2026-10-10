import { useRef } from "react";
import { GraduationCap, Briefcase, Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { SpotlightGradientBg } from "@/components/ui/spotlight-gradient";
import {
  ScrollXCarousel,
  ScrollXCarouselContainer,
  ScrollXCarouselWrap,
  ScrollXCarouselProgress,
} from "@/components/ui/scroll-x-carousel";
import {
  CardHoverReveal,
  CardHoverRevealContent,
  CardHoverRevealMain,
} from "@/components/ui/reveal-on-hover";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { TextReveal } from "@/components/ui/cascade-text";

const ITEMS = [
  {
    id: "exp-1",
    type: "Experience",
    title: "Freelance Full-Stack Developer",
    organization: "Self-Employed",
    location: "Pune, India",
    period: "2023 — Present",
    description: "Designed and developed end-to-end web applications for clients. Implemented responsive UIs using React.js and robust backend services with Node.js and Java Spring Boot. Managed database schemas using PostgreSQL.",
    current: true,
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "edu-1",
    type: "Education",
    title: "Master of Computer Applications",
    organization: "MIT World Peace University",
    location: "Pune, India",
    period: "2024 — Present",
    description: "I am currently pursuing a Master of Computer Applications (MCA) at MIT World Peace University (MIT-WPU). I am focused on becoming a software developer, with a long-term goal of securing a role at a MAANG-level company. My primary areas of study include Data Structures and Algorithms (DSA), Core Java, web development, and AI integration. I am also building a major project, InternSphere, to strengthen my technical skills and placement profile.",
    current: true,
    imageUrl: "/mitwpu.jpg",
  },
  {
    id: "exp-2",
    type: "Experience",
    title: "Freelancer 3d-Portfolio Website",
    organization: "Tech Solutions Inc.",
    location: "Remote",
    period: "2023",
    description: "Collaborated with the development team to build features for a SaaS platform. Optimized React components for performance, reducing load times by 15%. Assisted in writing RESTful APIs in Node.js.",
    current: false,
    imageUrl: "/code.jpg",
  },
  {
    id: "edu-2",
    type: "Education",
    title: "Bachelor of Science in Computer Science",
    organization: "University of Pune",
    location: "Pune, India",
    period: "2020 — 2024",
    description: "Foundation in programming, data structures, algorithms, and software development lifecycle. Graduated with distinction.",
    current: false,
    imageUrl: "/unipune.jpg",
  },
];

export function EducationAndExperience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY;
    const sectionStart = scrollTop + rect.top;
    const scrollRange = window.innerHeight * 1.2; // 220vh - 100vh = 120vh
    const currentScrollPos = scrollTop - sectionStart;
    const step = scrollRange / 3;

    let targetIndex;
    if (direction === "right") {
      targetIndex = Math.min(3, Math.round(currentScrollPos / step) + 1);
    } else {
      targetIndex = Math.max(0, Math.round(currentScrollPos / step) - 1);
    }

    const targetScrollY = sectionStart + targetIndex * step;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  };

  return (
    <section id="education-and-experience" ref={containerRef} className="relative">
      <SpotlightGradientBg overflowHidden={false}>
        
        {/* Desktop / Tablet Horizontal Scroll */}
        <div className="hidden md:block">
          <ScrollXCarousel className="h-[220vh]">
            <ScrollXCarouselContainer className="h-dvh flex flex-col justify-center gap-10 py-12">

            {/* Header */}
            <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-16">
              <div className="flex items-center gap-6">
                <div className="w-12 h-px bg-stroke" />
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight font-semibold flex flex-wrap items-center gap-x-1">
                  <TextReveal
                    as="span"
                    text="Education"
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
                    text="Experience"
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

            {/* Edge fades for horizontal scroll premium look */}
            <div className="pointer-events-none w-[8vw] h-[70vh] absolute left-0 bottom-[15vh] z-20 bg-[linear-gradient(90deg,#000_15%,transparent)] hidden md:block" />
            <div className="pointer-events-none w-[8vw] h-[70vh] absolute right-0 bottom-[15vh] z-20 bg-[linear-gradient(270deg,#000_15%,transparent)] hidden md:block" />

            {/* Carousel Wrap */}
            <ScrollXCarouselWrap
              xRagnge={["0%", "-60%"]}
              className="flex space-x-6 px-6 md:px-16"
            >
              {ITEMS.map((item) => (
                <CardHoverReveal
                  key={item.id}
                  className="min-w-[85vw] sm:min-w-[70vw] md:min-w-[42vw] xl:min-w-[32vw] aspect-[4/5] rounded-3xl border border-white/[0.08] border-t-white/[0.2] bg-[hsl(220,18%,6%)]/80 overflow-hidden relative group shadow-[0_25px_50px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl"
                >
                  <CardHoverRevealMain>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover filter brightness-[0.55] group-hover:brightness-[0.35] transition-all duration-500"
                    />
                  </CardHoverRevealMain>

                  {/* Initial visible overlay */}
                  <div className="absolute inset-x-6 bottom-6 p-6 rounded-2xl bg-black/60 border border-white/10 border-t-white/20 backdrop-blur-xl transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-6 shadow-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={cn(
                        "text-xs px-2.5 py-0.5 rounded-full font-medium border border-white/10",
                        item.type === "Education" ? "bg-indigo-500/20 text-indigo-300" : "bg-emerald-500/20 text-emerald-300"
                      )}>
                        {item.type}
                      </Badge>
                      {item.current && (
                        <Badge className="bg-emerald-500/15 text-emerald-300 border border-emerald-500/20 text-xs px-2.5 py-0.5 rounded-full font-medium">
                          Active
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-[-0.02em] leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/80 font-medium text-sm font-display italic">
                      {item.organization}
                    </p>
                  </div>

                  {/* Hover details content */}
                  <CardHoverRevealContent className="inset-0 absolute p-6 md:p-8 bg-[hsl(220,20%,4%)]/92 backdrop-blur-2xl border border-white/10 border-t-white/25 rounded-3xl flex flex-col justify-between transition-all duration-500 ease-in-out shadow-2xl">
                    <div className="space-y-4 md:space-y-6">
                      <div className="flex items-center justify-between">
                        <Badge className={cn(
                          "text-xs px-3 py-1 rounded-full font-semibold border border-white/10",
                          item.type === "Education" ? "bg-indigo-500/20 text-indigo-300" : "bg-emerald-500/20 text-emerald-300"
                        )}>
                          {item.type}
                        </Badge>
                        <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center border border-white/10 shadow-inner">
                          {item.type === "Education" ? (
                            <GraduationCap className="w-5 h-5 text-indigo-400" />
                          ) : (
                            <Briefcase className="w-5 h-5 text-emerald-400" />
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-[-0.02em]">
                          {item.title}
                        </h3>
                        <p className="text-base md:text-lg text-white/90 font-medium font-display italic">
                          {item.organization}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-4 text-xs md:text-sm text-white/60">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-white/40" />
                          {item.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-white/40" />
                          {item.period}
                        </span>
                      </div>

                      <p className="text-xs md:text-sm text-white/80 leading-relaxed font-light text-pretty">
                        {item.description}
                      </p>
                    </div>

                    {item.current && (
                      <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-300 bg-emerald-500/15 px-4 py-1.5 rounded-full w-fit border border-emerald-500/25">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Currently Active
                      </div>
                    )}
                  </CardHoverRevealContent>
                </CardHoverReveal>
              ))}
            </ScrollXCarouselWrap>

            {/* Navigation Buttons */}
            <div className="absolute inset-x-0 bottom-[30vh] z-30 pointer-events-none flex justify-between px-4 md:px-8">
              <button
                onClick={() => handleScroll("left")}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/60 hover:bg-black/90 border border-white/15 border-t-white/30 text-white flex items-center justify-center transition-all cursor-pointer shadow-2xl backdrop-blur-xl group pointer-events-auto active:scale-95"
                aria-label="Previous item"
              >
                <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 transition-transform group-hover:-translate-x-0.5" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/60 hover:bg-black/90 border border-white/15 border-t-white/30 text-white flex items-center justify-center transition-all cursor-pointer shadow-2xl backdrop-blur-xl group pointer-events-auto active:scale-95"
                aria-label="Next item"
              >
                <ChevronRight className="w-6 h-6 md:w-7 md:h-7 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Scroll Progress Indicator */}
            <ScrollXCarouselProgress
              className="bg-stroke/30 mx-auto w-[200px] h-1 rounded-full overflow-hidden"
              progressStyle="size-full bg-accent rounded-full"
            />
            </ScrollXCarouselContainer>
          </ScrollXCarousel>
        </div>

        {/* Mobile Vertical Stack */}
        <div className="md:hidden flex flex-col gap-8 px-5 sm:px-6 py-14 sm:py-20 w-full relative z-10">
          <div className="flex flex-col gap-2 mb-2">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.2em]">Career & Academics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl text-text-primary tracking-tight font-semibold flex flex-wrap items-center gap-x-1">
              <TextReveal
                as="span"
                text="Education"
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
                text="Experience"
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

          <div className="flex flex-col gap-5 sm:gap-6">
            {ITEMS.map((item) => (
              <div
                key={item.id}
                className="w-full min-h-[380px] sm:min-h-[440px] rounded-2xl sm:rounded-3xl border border-white/[0.08] border-t-white/[0.2] bg-[hsl(220,18%,6%)]/80 overflow-hidden relative shadow-2xl flex flex-col justify-between backdrop-blur-xl"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[0.25]"
                />
                
                {/* Gradient scrim for guaranteed readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none" />
                
                <div className="relative h-full p-5 sm:p-8 flex flex-col justify-between z-10">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge className={cn(
                        "text-[11px] sm:text-xs px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full font-semibold border border-white/10",
                        item.type === "Education" ? "bg-indigo-500/20 text-indigo-300" : "bg-emerald-500/20 text-emerald-300"
                      )}>
                        {item.type}
                      </Badge>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/[0.05] flex items-center justify-center border border-white/10 backdrop-blur-md shadow-inner">
                        {item.type === "Education" ? (
                          <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
                        ) : (
                          <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                        )}
                      </div>
                    </div>

                    <div className="space-y-1 sm:space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-[-0.02em] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-base sm:text-lg text-white/90 font-medium font-display italic">
                        {item.organization}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-white/60">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/40" />
                        {item.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/40" />
                        {item.period}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light line-clamp-4 sm:line-clamp-5 pt-1 text-pretty">
                      {item.description}
                    </p>
                  </div>

                  {item.current && (
                    <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-emerald-300 bg-emerald-500/15 px-3.5 py-1.5 rounded-full w-fit border border-emerald-500/25 backdrop-blur-md mt-4">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Currently Active
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </SpotlightGradientBg>
    </section>
  );
}
