import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const VIDEO_SRC =
  "/Change_red_to_blue_1080p_20260922012531_gwr_video_mvp.mp4";

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [showWelcome, setShowWelcome] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const completedRef = useRef(false);

  const handleFinish = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    setIsExiting(true);

    // Allow the 800ms fade-out transition before unmounting
    setTimeout(() => {
      onComplete();
    }, 800);
  }, [onComplete]);

  // Video time tracking
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      // Climax happens at ~7.6s when the animation completes
      if (videoRef.current.currentTime >= 7.6 && !showWelcome) {
        setShowWelcome(true);
      }
    }
  };

  const handleEnded = () => {
    setShowWelcome(true);
    // Hold on the final frame with "Welcome to my portfolio" for 1.8 seconds before transition
    setTimeout(() => {
      handleFinish();
    }, 1800);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const nextState = !videoRef.current.muted;
      videoRef.current.muted = nextState;
      setIsMuted(nextState);
    }
  };

  useEffect(() => {
    // Attempt automatic playback
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser rejects autoplay with audio, guarantee muted autoplay
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => {});
        });
      }
    }

    // Safety fallback: if video is delayed or fails on slow networks, advance after 12s
    const safetyTimer = setTimeout(() => {
      handleFinish();
    }, 12000);

    return () => {
      clearTimeout(safetyTimer);
    };
  }, [handleFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden select-none"
    >
      {/* Anime Loading Video */}
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        autoPlay
        playsInline
        muted={isMuted}
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      {/* Subtle cinematic ambient vignette overlay */}
      <div className="absolute inset-0 pointer-events-none bg-radial-[ellipse_at_center,_transparent_50%,_rgba(0,0,0,0.6)_100%]" />

      {/* Top Left Branding */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-10 z-30 pointer-events-none"
      >
        <span className="text-[11px] sm:text-xs text-white/50 uppercase tracking-[0.25em] font-medium drop-shadow-md">
          Rishabh Patil
        </span>
      </motion.div>

      {/* Top Right Skip Button */}
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        onClick={handleFinish}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-10 z-30 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/40 hover:bg-black/75 border border-white/15 hover:border-white/35 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-white/75 hover:text-white transition-all backdrop-blur-md flex items-center gap-1.5 group cursor-pointer shadow-lg active:scale-95"
        aria-label="Skip intro video"
      >
        <span>Skip</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </motion.button>

      {/* Bottom Right Audio Toggle */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        onClick={toggleMute}
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-10 z-30 p-2.5 sm:p-3 rounded-full bg-black/40 hover:bg-black/75 border border-white/15 hover:border-white/35 text-white/75 hover:text-white transition-all backdrop-blur-md cursor-pointer shadow-lg active:scale-95"
        aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
        title={isMuted ? "Sound is muted (click to unmute)" : "Sound is playing"}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </motion.button>

      {/* "Welcome to my portfolio" Climax Reveal */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.94, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -15, filter: "blur(6px)" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-12 sm:bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 text-center pointer-events-none z-20 px-5 sm:px-10 py-2.5 sm:py-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 shadow-[0_15px_50px_rgba(0,0,0,0.85)] max-w-[94vw]"
          >
            <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-display italic text-white tracking-wide drop-shadow-[0_2px_25px_rgba(255,255,255,0.45)] whitespace-nowrap">
              Welcome to my portfolio
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
