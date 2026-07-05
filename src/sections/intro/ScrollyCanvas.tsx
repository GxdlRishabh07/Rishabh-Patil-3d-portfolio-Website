import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { Overlay } from "./Overlay";

// Based on the public/sequence directory having frame_000 to frame_127
const FRAME_COUNT = 128;  

function getCurrentFrame(index: number) {
  // Pad with leading zeros up to 3 digits
  const paddedIndex = Math.max(0, Math.min(index, FRAME_COUNT - 1)).toString().padStart(3, '0');
  return `/sequence/frame_${paddedIndex}_delay-0.063s.png`;
}

export function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // 500vh container ref for a long cinematic scroll
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    let loadedCount = 0;
    const initialLoadCount = Math.min(10, FRAME_COUNT);
    const imgs = new Array(FRAME_COUNT);
    
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      imgs[i] = img;
      
      const loadImg = () => {
        img.src = getCurrentFrame(i);
        img.onload = () => {
          loadedCount++;
          if (loadedCount === initialLoadCount) {
            setIsLoaded(true);
          }
        };
      };

      if (i < initialLoadCount) {
        loadImg();
      } else {
        // Defer loading the remaining frames to improve initial load time
        if (typeof window !== "undefined" && "requestIdleCallback" in window) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any).requestIdleCallback(() => loadImg(), { timeout: 2000 });
        } else {
          setTimeout(loadImg, 500 + i * 20);
        }
      }
    }
    imagesRef.current = imgs;
  }, []);

  useEffect(() => {
    if (!isLoaded || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const render = (index: number) => {
      const img = imagesRef.current[Math.round(index)];
      if (!img || !img.complete || img.naturalWidth === 0) return;
      
      // Calculate object-fit: cover logic
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const canvasRatio = canvasWidth / canvasHeight;
      const imgRatio = img.width / img.height;
      let drawWidth, drawHeight, offsetX, offsetY;

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

      // Clear the canvas cleanly so transparent images remain transparent
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Initial render
    render(0);

    // Render on frame change
    const unsubscribe = frameIndex.on("change", (latest) => {
      requestAnimationFrame(() => render(latest));
    });

    const handleResize = () => {
      // Don't apply devicePixelRatio as it can cause performance issues and coordinate mismatches with object-fit logic
      // if not handled properly. Using logical pixels for simplicity and speed.
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      render(frameIndex.get());
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, [isLoaded, frameIndex]);

  return (
    <div ref={containerRef} className="h-[500vh] relative bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        <canvas 
          ref={canvasRef}
          className="w-full h-full object-cover relative z-0 pointer-events-none"
        />
        <Overlay containerScroll={scrollYProgress} />
      </div>
    </div>
  );
}
