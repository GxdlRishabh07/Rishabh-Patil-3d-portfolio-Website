'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { useLenis } from 'lenis/react';

interface ScrollXCarouselContextValue {
  scrollYProgress: MotionValue<number>;
}

const ScrollXCarouselContext =
  React.createContext<ScrollXCarouselContextValue | null>(null);

function useScrollXCarousel() {
  const context = React.useContext(ScrollXCarouselContext);
  if (!context) {
    throw new Error('useScrollXCarousel must be used within a ScrollXCarousel');
  }
  return context;
}

/**
 * ScrollXCarousel — Lenis-aware horizontal scroll carousel.
 *
 * Framer Motion's useScroll({ target }) reads *native* scrollY which is always
 * 0 when Lenis smooth-scroll is active (Lenis intercepts wheel/touch and sets
 * transform instead of actually scrolling the document). We therefore compute
 * scrollYProgress manually from the Lenis "scroll" event, mirroring the exact
 * same pattern used in ScrollyCanvas.tsx.
 */
export function ScrollXCarousel({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const carouselRef = React.useRef<HTMLDivElement>(null);

  // Manual Lenis-driven progress (0 → 1)
  const scrollYProgress = useMotionValue(0);
  const lenis = useLenis();

  React.useEffect(() => {
    if (!lenis) return;

    const updateProgress = () => {
      const el = carouselRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const totalScrollable = el.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      // rect.top is 0 when el's top is at viewport top; goes negative as we scroll
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      scrollYProgress.set(progress);
    };

    lenis.on('scroll', updateProgress);
    // Sync immediately in case page is already scrolled (e.g. browser back)
    updateProgress();

    return () => {
      lenis.off('scroll', updateProgress);
    };
  }, [lenis, scrollYProgress]);

  return (
    <ScrollXCarouselContext.Provider value={{ scrollYProgress }}>
      <div
        ref={carouselRef}
        className={cn('relative w-screen max-w-full', className)}
        {...props}
      >
        {children}
      </div>
    </ScrollXCarouselContext.Provider>
  );
}

export function ScrollXCarouselContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('sticky overflow-hidden w-full top-0 left-0', className)}
      {...props}
    />
  );
}

export function ScrollXCarouselWrap({
  className,
  style,
  xRagnge = ['-0%', '-80%'],
  ...props
}: HTMLMotionProps<'div'> & { xRagnge?: unknown[] }) {
  const { scrollYProgress } = useScrollXCarousel();
  const x = useTransform(scrollYProgress, [0, 1], xRagnge);

  return (
    <motion.div
      className={cn('w-fit', className)}
      style={{ x, ...style }}
      {...props}
    />
  );
}

export function ScrollXCarouselProgress({
  className,
  style,
  progressStyle,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { progressStyle?: string }) {
  const { scrollYProgress } = useScrollXCarousel();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div className={cn('max-w-screen overflow-hidden', className)} {...props}>
      <motion.div
        className={cn('origin-left', progressStyle)}
        style={{ scaleX, ...style }}
      />
    </div>
  );
}
