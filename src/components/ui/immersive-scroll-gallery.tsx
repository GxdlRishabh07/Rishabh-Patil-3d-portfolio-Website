"use client";

import { useRef } from "react";
import React from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// Types
interface iIPictureInput {
  src: string;
  scale?: MotionValue<number> | null;
}

interface iIPicture {
  src: string;
  scale: MotionValue<number>;
}

interface iImmersiveScrollGalleryProps {
  images?: iIPictureInput[]; // Optional custom images array
  className?: string; // Optional className for container customization
}

// Constants
const DEFAULT_IMAGES: iIPictureInput[] = [
  {
    src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    scale: null,
  },
  {
    src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop",
    scale: null,
  },
  {
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    scale: null,
  },
  {
    src: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=1200&auto=format&fit=crop",
    scale: null,
  },
  {
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    scale: null,
  },
  {
    src: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",
    scale: null,
  },
  {
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    scale: null,
  },
];

const IMAGE_STYLES = [
  "w-[25vw] h-[25vh]",
  "w-[35vw] h-[30vh] -top-[30vh] left-[5vw]",
  "w-[20vw] h-[55vh] -top-[15vh] -left-[25vw]",
  "w-[25vw] h-[25vh] left-[27.5vw]",
  "w-[20vw] h-[30vh] top-[30vh] left-[5vw]",
  "w-[30vw] h-[25vh] top-[27.5vh] -left-[22.5vw]",
  "w-[15vw] h-[15vh] top-[22.5vh] left-[25vw]",
];

/**
 * ImmersiveScrollGallery Component
 *
 * A scroll-based image zoom effect component that creates a parallax-like experience.
 * Images scale up as the user scrolls, creating an immersive visual effect.
 *
 * @param {ImmersiveScrollGalleryProps} props - Component props
 * @returns {JSX.Element} Rendered component
 */
const ImmersiveScrollGallery: React.FC<iImmersiveScrollGalleryProps> = ({
  images = DEFAULT_IMAGES,
  className = "",
}) => {
  // Refs
  const container = useRef<HTMLDivElement | null>(null);

  // Scroll and transform hooks
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Transform values
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const opacityImage = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const opacitySection2 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  // Assign scales to images
  const pictures: iIPicture[] = images.map((img, index) => {
    return {
      src: img.src,
      scale: [scale4, scale5, scale6, scale5, scale6, scale8, scale9][
        index % 7
      ],
    };
  });

  return (
    <div ref={container} className={`relative h-[200vh] ${className}`}>
      <div className="sticky top-0 h-[100vh] overflow-hidden flex items-center justify-center">
        {/* Zooming Images */}
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale, opacity: opacityImage }}
              className="absolute flex items-center justify-center w-full h-full top-0 pointer-events-none"
            >
              <div className={`relative ${IMAGE_STYLES[index]}`}>
                <img
                  src={src}
                  alt={`Zoom image ${index + 1}`}
                  className="object-cover w-full h-full rounded-lg shadow-2xl border border-white/5"
                />
              </div>
            </motion.div>
          );
        })}

        {/* Content Section */}
        <motion.div
          style={{
            opacity: opacitySection2,
            scale: useTransform(scrollYProgress, [0.6, 0.8], [0.8, 1]),
          }}
          className="w-full h-full flex items-center justify-center max-w-4xl mx-auto p-8 relative z-10"
        >
          <h1
            className="text-text-primary text-2xl md:text-4xl font-light py-4 text-center leading-relaxed"
          >
            I focus on designing clean, elegant interfaces and writing robust, high-performance code. By combining aesthetic design with modern engineering practices, I craft premium digital experiences that respond smoothly and captivate users.
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default ImmersiveScrollGallery;
