"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface ProjectItem {
  title: string
  src: string
  category?: string
  link?: string
  linkLabel?: string
}

const defaultProjects: ProjectItem[] = [
  {
    title: "Project 1",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center",
  },
  {
    title: "Project 2",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center",
  },
  {
    title: "Project 3",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop&crop=center",
  },
  {
    title: "Project 4",
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop&crop=center",
  },
  {
    title: "Project 5",
    src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&h=300&fit=crop&crop=center",
  },
]

const StickyCard_001 = ({
  i,
  title,
  category,
  src,
  link,
  linkLabel,
  progress,
  range,
  targetScale,
}: {
  i: number
  title: string
  category?: string
  src: string
  link?: string
  linkLabel?: string
  progress: import("framer-motion").MotionValue<number>
  range: [number, number]
  targetScale: number
}) => {
  const container = useRef<HTMLDivElement>(null)

  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div ref={container} className="sticky top-0 flex items-start justify-center px-4 sm:px-6 lg:px-8 h-screen pt-4 sm:pt-10 lg:pt-12">
      <motion.div
        style={{
          scale,
          top: `calc(2vh + ${i * 20 + 90}px)`,
        }}
        className="rounded-2xl sm:rounded-3xl lg:rounded-4xl relative flex origin-top flex-col overflow-hidden border border-white/10 border-t-white/25 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)]
                   h-[230px] w-[90vw] max-w-[360px]
                   sm:h-[330px] sm:w-[500px] sm:max-w-none
                   md:h-[430px] md:w-[720px] 
                   lg:h-[530px] lg:w-[880px]
                   group bg-surface/40 backdrop-blur-md"
      >
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full block relative cursor-pointer overflow-hidden"
          >
            <img src={src || "/placeholder.svg"} alt={title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            
            {/* Top info badge scrim */}
            <div className="absolute top-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-b from-black/85 via-black/40 to-transparent z-10 flex items-center justify-between pointer-events-none">
              <div>
                {category && (
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#89AACC] mb-1 block font-medium">
                    {category}
                  </span>
                )}
                <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white tracking-[-0.02em]">
                  {title}
                </h3>
              </div>
            </div>

            {/* Bottom action link */}
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 flex items-end justify-end pointer-events-none">
              <span className="inline-flex items-center gap-1.5 text-white text-xs sm:text-sm font-semibold tracking-wide bg-white/10 group-hover:bg-white/20 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/20 border-t-white/30 backdrop-blur-md transition-all shadow-xl active:scale-95">
                <span>{linkLabel || "View Project"}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </a>
        ) : (
          <div className="w-full h-full relative">
            <img src={src || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
            <div className="absolute top-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-b from-black/85 via-black/40 to-transparent z-10">
              {category && (
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#89AACC] mb-1 block font-medium">
                  {category}
                </span>
              )}
              <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white tracking-[-0.02em]">
                {title}
              </h3>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}

interface ImagesScrollingAnimationProps {
  projectsList?: ProjectItem[]
}

const ImagesScrollingAnimation = ({ projectsList }: ImagesScrollingAnimationProps) => {
  const container = useRef<HTMLDivElement>(null)
  const list = projectsList || defaultProjects
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  return (
    <main
      ref={container}
      className="relative flex w-full flex-col items-center justify-center 
                                   pb-[15vh] pt-0 
                                   sm:pb-[25vh] sm:pt-0 
                                   lg:pb-[30vh] lg:pt-0"
    >
      {list.map((project, i) => {
        const targetScale = Math.max(0.6, 1 - (list.length - i - 1) * 0.08)
        const step = 1 / list.length
        return (
          <StickyCard_001
            key={`p_${i}`}
            i={i}
            title={project.title}
            category={project.category}
            src={project.src}
            link={project.link}
            linkLabel={project.linkLabel}
            progress={scrollYProgress}
            range={[i * step, 1]}
            targetScale={targetScale}
          />
        )
      })}
    </main>
  )
}

export { ImagesScrollingAnimation, StickyCard_001 }
