import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform } from "framer-motion";
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

  // 500vh container for smooth, cinematic scroll progression
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress (0 to 1) to frames 1 to 240
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

  // Priority-based image loader
  const loadSingleFrame = useCallback((index: number, onLoaded?: () => void) => {
    if (index < 1 || index > FRAME_COUNT) return;
    if (imagesRef.current[index]) return; // Already requested or loaded

    const img = new Image();
    img.decoding = "async";
    img.src = getFramePath(index);
    img.onload = () => {
      imagesRef.current[index] = img;
      onLoaded?.();
    };
    img.onerror = () => {
      // Mark as null on error to avoid repeated attempts
      imagesRef.current[index] = null;
    };
    imagesRef.current[index] = img;
  }, []);

  // Multi-tier progressive image preloading
  useEffect(() => {
    imagesRef.current = new Array(FRAME_COUNT + 1).fill(null);

    // Tier 1: Load frame 1 immediately for instant paint
    loadSingleFrame(1, () => {
      setIsLoaded(true);
    });

    // Tier 2: Immediately preload initial active window (frames 2 to 25)
    const initialBatchSize = 25;
    for (let i = 2; i <= initialBatchSize; i++) {
      loadSingleFrame(i);
    }

    // Tier 3: Progressively buffer the remaining frames in idle chunks
    let currentIdleIndex = initialBatchSize + 1;
    let idleHandle: number | null = null;
    let timeoutHandle: ReturnType<typeof setTimeout> | null = null;

    const loadNextChunk = () => {
      if (currentIdleIndex > FRAME_COUNT) return;

      const chunkSize = 8;
      const end = Math.min(currentIdleIndex + chunkSize, FRAME_COUNT + 1);
      for (let i = currentIdleIndex; i < end; i++) {
        loadSingleFrame(i);
      }
      currentIdleIndex = end;

      if (currentIdleIndex <= FRAME_COUNT) {
        scheduleNextBatch();
      }
    };

    const scheduleNextBatch = () => {
      if (typeof window !== "undefined" && "requestIdleCallback" in window) {
        idleHandle = (window as unknown as { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(
          () => loadNextChunk(),
          { timeout: 800 }
        );
      } else {
        timeoutHandle = setTimeout(loadNextChunk, 40);
      }
    };

    scheduleNextBatch();

    return () => {
      if (idleHandle !== null && typeof window !== "undefined" && "cancelIdleCallback" in window) {
        (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(idleHandle);
      }
      if (timeoutHandle) {
        clearTimeout(timeoutHandle);
      }
    };
  }, [loadSingleFrame]);

  // Main canvas render loop
  useEffect(() => {
    if (!isLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    // Use alpha: false for direct GPU blit optimization
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const drawFrame = (targetIndex: number) => {
      const roundedIndex = Math.max(1, Math.min(Math.round(targetIndex), FRAME_COUNT));
      
      // Look for the requested frame or find the closest loaded frame
      let imgToDraw = imagesRef.current[roundedIndex];
      let frameUsed = roundedIndex;

      if (!imgToDraw || !imgToDraw.complete || imgToDraw.naturalWidth === 0) {
        // Look outward for nearest loaded frame
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

        // If still not found, fallback to last successfully drawn frame
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

      // Accelerated object-fit: cover math
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
        // Keep character nicely centered on narrower portrait viewports
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

    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;
      
      const newWidth = Math.round(displayWidth * dpr);
      const newHeight = Math.round(displayHeight * dpr);

      if (canvas.width !== newWidth || canvas.height !== newHeight) {
        canvas.width = newWidth;
        canvas.height = newHeight;
      }

      scheduleRender(frameIndex.get());
    };

    window.addEventListener("resize", handleResize, { passive: true });
    handleResize();

    // Subscribe to scroll frame index changes
    const unsubscribe = frameIndex.on("change", (latest) => {
      const rounded = Math.round(latest);
      // Proactively ensure upcoming frames are loading if scrolled ahead
      for (let ahead = 1; ahead <= 12; ahead++) {
        const nextIdx = rounded + ahead;
        if (nextIdx <= FRAME_COUNT && !imagesRef.current[nextIdx]) {
          loadSingleFrame(nextIdx);
        }
      }
      scheduleRender(latest);
    });

    return () => {
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

        {/* Ambient left vignette gradient to ensure perfect legibility for text zone without obscuring subject */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 md:w-1/2 bg-gradient-to-r from-black/85 sm:from-black/75 via-black/50 sm:via-black/35 to-transparent pointer-events-none z-10" />

        {/* Ambient bottom gradient to blend seamlessly into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none z-10" />

        {/* Storytelling text overlay synced to scroll progress */}
        <Overlay containerScroll={scrollYProgress} />
      </div>
    </div>
  );
}

