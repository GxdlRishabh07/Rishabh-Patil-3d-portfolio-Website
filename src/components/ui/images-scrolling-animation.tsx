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
  src,
  link,
  linkLabel,
  progress,
  range,
  targetScale,
}: {
  i: number
  title: string
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
          top: `calc(2vh + ${i * 18 + 100}px)`,
        }}
        className="rounded-2xl sm:rounded-3xl lg:rounded-4xl relative flex origin-top flex-col overflow-hidden border border-white/10 shadow-2xl
                   h-[220px] w-[90vw] max-w-[340px]
                   sm:h-[320px] sm:w-[480px] sm:max-w-none
                   md:h-[420px] md:w-[680px] 
                   lg:h-[520px] lg:w-[850px]
                   group"
      >
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full block relative cursor-pointer overflow-hidden"
          >
            <img src={src || "/placeholder.svg"} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/25 md:bg-black/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end md:items-center justify-center pb-4 sm:pb-6 md:pb-0">
              <span className="text-white text-xs sm:text-sm font-semibold tracking-wider bg-black/75 md:bg-white/15 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/20 backdrop-blur-md md:backdrop-blur-sm transition-all hover:bg-white/25 shadow-xl active:scale-95">
                {linkLabel || "View Project GitHub"}
              </span>
            </div>
          </a>
        ) : (
          <img src={src || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
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
