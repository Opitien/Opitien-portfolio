import { useState, useEffect, useRef } from "react";
import { Play, Pause, SkipForward, Volume2, ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

/* PLAYLIST */
const playlist = [
  { title: "The Mountain", src: "/audio/track1.mp3" },
  { title: "Lounge Session", src: "/audio/track2.mp3" },
  { title: "Synth Path", src: "/audio/track3.mp3" },
];

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [volume, setVolume] = useState(75);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  /* LOAD TRACK */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = playlist[currentTrack].src;
    audio.load();

    if (isPlaying) {
      audio.play().catch(() => {});
    }

    setTrackProgress(0);
  }, [currentTrack]);

  /* PLAY / PAUSE */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  /* AUTO NEXT TRACK */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      setCurrentTrack((prev) => (prev + 1) % playlist.length);
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  /* TRACK PROGRESS */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (!audio.duration) return;

      const percentage = (audio.currentTime / audio.duration) * 100;
      setTrackProgress(percentage);
    };

    audio.addEventListener("timeupdate", updateProgress);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  /* VOLUME */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume / 100;
  }, [volume]);

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <>
      <audio ref={audioRef} preload="metadata" />

      <motion.div
        initial={{ x: "calc(100% - 40px)" }}
        animate={{ x: isOpen ? 0 : "calc(100% - 40px)" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-10 right-0 z-[60] flex items-center"
      >
        {/* Toggle Tab */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-24 bg-foreground text-background flex flex-col items-center justify-center gap-4 group"
          aria-label="Toggle Player"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest [writing-mode:vertical-lr] font-bold group-hover:text-brand-teal transition-colors">
            Audio
          </span>
          {isOpen ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>

        {/* Player Body */}
        <div className="bg-background border border-border border-r-0 p-6 w-72 shadow-2xl backdrop-blur-xl bg-background/90">
          <div className="space-y-6">
            
            {/* Track Info */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand-teal font-bold">
                  {isPlaying ? "Playing" : "Paused"}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground uppercase">
                  0{currentTrack + 1}/0{playlist.length}
                </span>
              </div>
              <h4 className="font-bold tracking-tight truncate">
                {playlist[currentTrack].title}
              </h4>
              
              {/* Simple Progress bar */}
              <div className="h-[2px] w-full bg-border relative overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-foreground"
                  style={{ width: `${trackProgress}%` }}
                />
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={togglePlay}
                className="w-12 h-12 bg-foreground text-background flex items-center justify-center rounded-full hover:bg-brand-teal transition-all"
              >
                {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
              </button>

              <button
                onClick={nextTrack}
                className="w-10 h-10 border border-border flex items-center justify-center rounded-full hover:border-foreground transition-all"
              >
                <SkipForward size={18} />
              </button>

              <div className="flex items-center gap-2 flex-1">
                <Volume2 size={14} className="text-muted-foreground" />
                <div className="h-1 flex-1 bg-border relative rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-full bg-foreground/30" style={{ width: `${volume}%` }} />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="absolute inset-0 w-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </>
  );
}
