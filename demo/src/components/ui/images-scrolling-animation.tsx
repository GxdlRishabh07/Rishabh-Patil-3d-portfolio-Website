"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ReactLenis } from "lenis/react"
import { useRef } from "react"

const projects = [
  {
    title: "Project 1",
    category: "Design & Concept",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center",
  },
  {
    title: "Project 2",
    category: "Frontend Development",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center",
  },
  {
    title: "Project 3",
    category: "Full Stack Platform",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop&crop=center",
  },
  {
    title: "Project 4",
    category: "Systems Integration",
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop&crop=center",
  },
  {
    title: "Project 5",
    category: "Mobile Application",
    src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&h=300&fit=crop&crop=center",
  },
]

const StickyCard_001 = ({
  i,
  title,
  category,
  src,
  progress,
  range,
  targetScale,
}: {
  i: number
  title: string
  category: string
  src: string
  progress: any
  range: [number, number]
  targetScale: number
}) => {
  const container = useRef<HTMLDivElement>(null)
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div ref={container} className="sticky top-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 h-[75vh] sm:h-screen">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 20 + 160}px)`,
        }}
        className="rounded-3xl border border-stroke overflow-hidden relative flex origin-top flex-col group cursor-pointer
                   h-[220px] w-[300px] 
                   sm:h-[320px] sm:w-[480px] 
                   md:h-[400px] md:w-[680px] 
                   lg:h-[480px] lg:w-[800px] shadow-2xl bg-surface/50 backdrop-blur-sm"
      >
        {/* Background Image */}
        <img 
          src={src || "/placeholder.svg"} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        
        {/* Halftone Overlay */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-multiply z-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "4px 4px",
          }}
        />

        {/* Hover Darken & Details */}
        <div className="absolute inset-0 bg-bg/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-md z-20 flex flex-col items-center justify-center p-6 text-center">
          <div className="relative inline-flex items-center rounded-full p-[1px] overflow-hidden mb-4">
            <div className="absolute inset-0 accent-gradient animate-gradient-shift bg-[length:200%_auto]" />
            <div className="relative bg-white text-bg px-6 py-2 rounded-full font-medium text-sm flex items-center gap-2">
              View — <span className="font-display italic text-base">{title}</span>
            </div>
          </div>
          <p className="text-text-primary/70 text-sm uppercase tracking-widest font-medium">
            {category}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

const ImagesScrollingAnimation = ({ 
  projectsList 
}: { 
  projectsList?: { title: string; category: string; src: string }[] 
}) => {
  const container = useRef<HTMLDivElement>(null)
  const list = projectsList || projects
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  return (
    <ReactLenis root>
      <main
        ref={container}
        className="relative flex w-full flex-col items-center justify-center pb-[20vh] pt-[5vh]"
      >
        {list.map((project, i) => {
          const targetScale = Math.max(0.65, 1 - (list.length - i - 1) * 0.05)
          const step = 1 / list.length
          return (
            <StickyCard_001
              key={`p_${i}`}
              i={i}
              title={project.title}
              category={project.category}
              src={project.src}
              progress={scrollYProgress}
              range={[i * step * 0.85, 1]}
              targetScale={targetScale}
            />
          )
        })}
      </main>
    </ReactLenis>
  )
}

export { ImagesScrollingAnimation, StickyCard_001 }
