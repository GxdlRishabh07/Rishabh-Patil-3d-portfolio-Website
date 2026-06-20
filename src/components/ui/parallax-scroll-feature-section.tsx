import { useRef } from "react"
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from "lucide-react"

interface SectionData {
  id: number
  title: string
  description: string
  imageUrl: string
  reverse: boolean
}

const sections: SectionData[] = [
  {
    id: 1,
    title: "Feature 1",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab maxime sequi, pariatur illum, adipisci ullam optio quod tempora necessitatibus consectetur eaque deleniti id totam possimus unde dolorum inventore incidunt. Ea.",
    imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80',
    reverse: false
  },
  {
    id: 2,
    title: "Feature 2",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab maxime sequi, pariatur illum, adipisci ullam optio quod tempora necessitatibus consectetur eaque deleniti id totam possimus unde dolorum inventore incidunt. Ea.",
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80',
    reverse: true
  },
  {
    id: 3,
    title: "Feature 3",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab maxime sequi, pariatur illum, adipisci ullam optio quod tempora necessitatibus consectetur eaque deleniti id totam possimus unde dolorum inventore incidunt. Ea.",
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
    reverse: false
  }
]

/**
 * ParallaxSectionItem — each feature section gets its OWN component so that
 * useRef / useScroll / useTransform hooks are called at the top level of a
 * component, not inside a .map() callback (which violates Rules of Hooks).
 */
function ParallaxSectionItem({ section }: { section: SectionData }) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  })

  const opacity    = useTransform(scrollYProgress, [0, 0.7], [0, 1])
  const clipPath   = useTransform(scrollYProgress, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])
  const translateY = useTransform(scrollYProgress, [0, 1], [-50, 0])

  return (
    <div
      ref={ref}
      className={`h-screen flex items-center justify-center md:gap-40 gap-20 ${section.reverse ? 'flex-row-reverse' : ''}`}
    >
      {/* Text — slides up */}
      <motion.div style={{ y: translateY }}>
        <div className="text-6xl max-w-sm">{section.title}</div>
        <motion.p style={{ y: translateY }} className="text-white/70 max-w-sm mt-10">
          {section.description}
        </motion.p>
      </motion.div>

      {/* Image — left-to-right clip-path wipe */}
      <motion.div
        style={{ opacity, clipPath }}
        className="relative"
      >
        <img
          src={section.imageUrl}
          className="size-80 object-cover"
          alt={`Section ${section.id}`}
        />
      </motion.div>
    </div>
  )
}

export const Component = () => {
  return (
    <div>
      <div className="min-h-screen w-screen flex flex-col items-center justify-center">
        <h1 className="text-6xl max-w-2xl text-center">PARALLAX SCROLL FEATURE SECTION</h1>
        <p className="mt-20 flex items-center gap-1.5 text-sm">
          SCROLL <ArrowDown size={15} />
        </p>
      </div>

      <div className="flex flex-col md:px-0 px-10">
        {sections.map((section) => (
          <ParallaxSectionItem key={section.id} section={section} />
        ))}
      </div>

      <div className="min-h-screen w-screen flex flex-col items-center justify-center">
        <h1 className="text-8xl">The End</h1>
      </div>
    </div>
  )
}