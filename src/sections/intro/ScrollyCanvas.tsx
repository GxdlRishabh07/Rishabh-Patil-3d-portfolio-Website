import { useEffect, useRef, useState, useCallback } from "react";
import { useMotionValue, useTransform } from "framer-motion";
import { useLenis } from "lenis/react";
import { Overlay } from "./Overlay";

const FRAME_COUNT = 240;

function getFramePath(index: number): string {
  const frameNum = Math.max(1, Math.min(Math.round(index), FRAME_COUNT));
  const padded = frameNum.toString().padStart(3, "0");
  return `/frames/ezgif-frame-${padded}.jpg`;
}

export function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const lastDrawnIndexRef = useRef<number>(1);
  const rafIdRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lenis-driven scroll progress (0 → 1) — avoids the Framer Motion useScroll
  // vs. Lenis virtual-scroll mismatch that breaks on Vercel production builds.
  const scrollProgress = useMotionValue(0);
  const frameIndex = useTransform(scrollProgress, [0, 1], [1, FRAME_COUNT]);

  const currentTargetIndexRef = useRef<number>(1);
  const scheduleRenderRef = useRef<((idx: number) => void) | null>(null);

  // ── Lenis scroll listener ────────────────────────────────────────────────
  // We subscribe to Lenis' own scroll events so the progress value stays in
  // perfect sync with the smooth-scroll position rather than native scrollY.
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const updateProgress = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalScrollableHeight = container.offsetHeight - window.innerHeight;
      if (totalScrollableHeight <= 0) return;

      // How far has the top of the container scrolled past the viewport top?
      // rect.top starts at 0 (element at top of viewport) and decreases as we scroll.
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollableHeight));
      scrollProgress.set(progress);
    };

    // Run on every Lenis tick (fires even during smooth scroll coasting)
    lenis.on("scroll", updateProgress);

    // Also update immediately on mount in case page is already scrolled
    updateProgress();

    return () => {
      lenis.off("scroll", updateProgress);
    };
  }, [lenis, scrollProgress]);

  // ── Priority-based image loader ──────────────────────────────────────────
  const loadSingleFrame = useCallback((index: number, onLoaded?: () => void) => {
    if (index < 1 || index > FRAME_COUNT) return;
    if (imagesRef.current[index]) return; // Already requested or loaded

    const img = new Image();
    img.decoding = "async";
    img.src = getFramePath(index);
    img.onload = () => {
      imagesRef.current[index] = img;
      onLoaded?.();
      // If this newly loaded image is close to what we currently want, redraw immediately
      const currentTarget = Math.round(currentTargetIndexRef.current);
      if (Math.abs(currentTarget - index) <= 2) {
        scheduleRenderRef.current?.(currentTarget);
      }
    };
    img.onerror = () => {
      imagesRef.current[index] = null;
    };
    imagesRef.current[index] = img;
  }, []);

  // ── Multi-tier fast image preloading ─────────────────────────────────────
  useEffect(() => {
    imagesRef.current = new Array(FRAME_COUNT + 1).fill(null);

    // Tier 1: Load frame 1 immediately for instant paint
    loadSingleFrame(1, () => {
      setIsLoaded(true);
    });

    // Tier 2: Preload initial active window (frames 2–35)
    const initialBatchSize = 35;
    for (let i = 2; i <= initialBatchSize; i++) {
      loadSingleFrame(i);
    }

    // Tier 3: Stream remaining frames in 20-frame bursts
    let currentBurstIndex = initialBatchSize + 1;
    let timerId: ReturnType<typeof setTimeout> | null = null;

    const loadNextBurst = () => {
      if (currentBurstIndex > FRAME_COUNT) return;

      const burstSize = 20;
      const end = Math.min(currentBurstIndex + burstSize, FRAME_COUNT + 1);
      for (let i = currentBurstIndex; i < end; i++) {
        loadSingleFrame(i);
      }
      currentBurstIndex = end;

      if (currentBurstIndex <= FRAME_COUNT) {
        timerId = setTimeout(loadNextBurst, 25);
      }
    };

    timerId = setTimeout(loadNextBurst, 50);

    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [loadSingleFrame]);

  // ── Main canvas render loop ──────────────────────────────────────────────
  useEffect(() => {
    if (!isLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const drawFrame = (targetIndex: number) => {
      const roundedIndex = Math.max(1, Math.min(Math.round(targetIndex), FRAME_COUNT));

      let imgToDraw = imagesRef.current[roundedIndex];
      let frameUsed = roundedIndex;

      if (!imgToDraw || !imgToDraw.complete || imgToDraw.naturalWidth === 0) {
        let found = false;
        for (let offset = 1; offset <= 30; offset++) {
          const prev = roundedIndex - offset;
          if (prev >= 1 && imagesRef.current[prev]?.complete && (imagesRef.current[prev]?.naturalWidth ?? 0) > 0) {
            imgToDraw = imagesRef.current[prev];
            frameUsed = prev;
            found = true;
            break;
          }
          const next = roundedIndex + offset;
          if (next <= FRAME_COUNT && imagesRef.current[next]?.complete && (imagesRef.current[next]?.naturalWidth ?? 0) > 0) {
            imgToDraw = imagesRef.current[next];
            frameUsed = next;
            found = true;
            break;
          }
        }

        if (!found) {
          const lastImg = imagesRef.current[lastDrawnIndexRef.current];
          if (lastImg && lastImg.complete && lastImg.naturalWidth > 0) {
            imgToDraw = lastImg;
            frameUsed = lastDrawnIndexRef.current;
          }
        }
      }

      if (!imgToDraw || !imgToDraw.complete || imgToDraw.naturalWidth === 0) {
        return;
      }

      lastDrawnIndexRef.current = frameUsed;

      // object-fit: cover math
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const canvasRatio = canvasWidth / canvasHeight;
      const imgWidth = imgToDraw.naturalWidth || 1920;
      const imgHeight = imgToDraw.naturalHeight || 1080;
      const imgRatio = imgWidth / imgHeight;

      let drawWidth: number;
      let drawHeight: number;
      let offsetX: number;
      let offsetY: number;

      if (canvasRatio > imgRatio) {
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imgRatio;
        offsetX = 0;
        offsetY = (canvasHeight - drawHeight) / 2;
      } else {
        drawHeight = canvasHeight;
        drawWidth = canvasHeight * imgRatio;
        offsetY = 0;
        offsetX = (canvasWidth - drawWidth) / 2;
      }

      ctx.drawImage(imgToDraw, offsetX, offsetY, drawWidth, drawHeight);
    };

    const scheduleRender = (idx: number) => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      rafIdRef.current = requestAnimationFrame(() => {
        drawFrame(idx);
        rafIdRef.current = null;
      });
    };
    scheduleRenderRef.current = scheduleRender;

    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const newWidth = Math.round(window.innerWidth * dpr);
      const newHeight = Math.round(window.innerHeight * dpr);

      if (canvas.width !== newWidth || canvas.height !== newHeight) {
        canvas.width = newWidth;
        canvas.height = newHeight;
      }

      scheduleRender(frameIndex.get());
    };

    window.addEventListener("resize", handleResize, { passive: true });
    handleResize();

    // Subscribe to frame index changes
    const unsubscribe = frameIndex.on("change", (latest) => {
      currentTargetIndexRef.current = latest;
      const rounded = Math.round(latest);

      // Proactively preload upcoming frames
      for (let ahead = 1; ahead <= 25; ahead++) {
        const nextIdx = rounded + ahead;
        if (nextIdx <= FRAME_COUNT && !imagesRef.current[nextIdx]) {
          loadSingleFrame(nextIdx);
        }
      }
      // Buffer behind for upward scroll
      for (let behind = 1; behind <= 10; behind++) {
        const prevIdx = rounded - behind;
        if (prevIdx >= 1 && !imagesRef.current[prevIdx]) {
          loadSingleFrame(prevIdx);
        }
      }
      scheduleRender(latest);
    });

    return () => {
      scheduleRenderRef.current = null;
      unsubscribe();
      window.removeEventListener("resize", handleResize);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [isLoaded, frameIndex, loadSingleFrame]);

  return (
    <div ref={containerRef} className="h-[500vh] relative bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        {/* Canvas for cinematic video frame playback */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover relative z-0 pointer-events-none will-change-transform"
        />

        {/* Left vignette gradient for text legibility */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 md:w-1/2 bg-gradient-to-r from-black/85 sm:from-black/75 via-black/50 sm:via-black/35 to-transparent pointer-events-none z-10" />

        {/* Bottom gradient to blend into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none z-10" />

        {/* Storytelling text overlay synced to scroll progress */}
        <Overlay containerScroll={scrollProgress} />
      </div>
    </div>
  );
}
