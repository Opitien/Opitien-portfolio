import { useState, useEffect, useRef } from "react";
import { Play, Pause, SkipForward, Volume2 } from "lucide-react";
import { motion } from "motion/react";

/* ✅ ADD PLAYLIST */
const playlist = [
  { title: "The Mountain Retro", src: "/audio/track1.mp3" },
  { title: "Bransboynd Retro Lounge", src: "/audio/track2.mp3" },
  { title: "Tunetank Synthwave Retro 80s music", src: "/audio/track3.mp3" },
];

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [volume, setVolume] = useState(75);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isFolded, setIsFolded] = useState(false); // ✅ NEW

  const audioRef = useRef<HTMLAudioElement | null>(null);

  /* ---------------- LOAD TRACK ---------------- */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = playlist[currentTrack].src;
    audio.load();

    if (isPlaying) audio.play();

    setTrackProgress(0);
  }, [currentTrack]);

  /* ---------------- PLAY / PAUSE ---------------- */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) audio.play();
    else audio.pause();
  }, [isPlaying]);

  /* ---------------- AUTO NEXT ---------------- */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => nextTrack();

    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, [currentTrack]);

  /* ---------------- PROGRESS ---------------- */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      const percentage = (audio.currentTime / audio.duration) * 100;
      setTrackProgress(percentage || 0);
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, []);

  /* ---------------- VOLUME ---------------- */
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
  };

  return (
    <>
      <audio ref={audioRef} />

      {/* ✅ FOLDABLE CONTAINER */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          x: isFolded ? 220 : 0, // slide out
        }}
        transition={{ delay: 0.5, type: "spring", stiffness: 120, damping: 18 }}
        className="fixed bottom-10 right-0 z-40 hidden md:flex flex-col items-end gap-2"
      >
        {/* ✅ EDGE TOGGLE TAB */}
        <button
          onClick={() => setIsFolded(!isFolded)}
          className="absolute -left-6 top-1/2 -translate-y-1/2 w-6 h-16 
                     bg-[#d0d0d0] border border-[#888] 
                     flex items-center justify-center 
                     hover:bg-white transition-colors"
        >
          {isFolded ? "◀" : "▶"}
        </button>

        {/* Player Unit (UNCHANGED UI) */}
        <div className="bg-[#e8e6df] border border-[#b0b0b0] p-1 rounded-sm shadow-[4px_4px_0px_rgba(0,0,0,0.2)] w-64">

          {/* Screen */}
          <div className="bg-[#2c2c2c] p-3 mb-3 border-4 border-[#d0d0d0] rounded-sm relative overflow-hidden">
            <div className="scanlines opacity-20"></div>
            <div className="flex items-center gap-3">

              {/* Vinyl */}
              <div className="relative w-8 h-8 shrink-0">
                <motion.div
                  animate={{ rotate: isPlaying ? 360 : 0 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full rounded-full bg-[#111] border border-[#333] flex items-center justify-center"
                >
                  <div className="w-3 h-3 bg-[#d17654] rounded-full border border-white/20"></div>
                </motion.div>
              </div>

              {/* Text */}
              <div className="overflow-hidden w-full">
                <div className="whitespace-nowrap font-mono text-[10px] text-[#5D9B99] uppercase tracking-wider">
                  {isPlaying
                    ? `Now Playing: ${playlist[currentTrack].title} —`
                    : "Ready to play"}
                </div>

                <div className="w-full bg-[#333] h-1 mt-1 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#d17654]"
                    style={{ width: `${trackProgress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="grid grid-cols-4 gap-2 px-1 pb-1">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="col-span-1 h-8 bg-[#d0d0d0] border-b-2 border-[#888] active:border-b-0 active:translate-y-[2px] flex items-center justify-center text-[#2c2c2c] hover:bg-white transition-colors"
            >
              {isPlaying ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" />}
            </button>

            <button
              onClick={nextTrack}
              title="Next Track"
              className="col-span-1 h-8 bg-[#d0d0d0] border-b-2 border-[#888] active:border-b-0 active:translate-y-[2px] flex items-center justify-center text-[#2c2c2c] hover:bg-white transition-colors"
            >
              <SkipForward size={12} fill="currentColor" />
            </button>

            <div className="col-span-2 flex items-center gap-1 px-1">
              <Volume2 size={10} className="text-[#555]" />
              <div className="flex-1 h-1 bg-[#ccc] relative">
                <div
                  className="absolute top-0 left-0 h-full bg-[#5D9B99]"
                  style={{ width: `${volume}%` }}
                />
                <input title="Volume"
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

        <div className="w-24 h-24 absolute -bottom-12 -right-12 border-4 border-[#2c2c2c]/10 rounded-full pointer-events-none"></div>
      </motion.div>
    </>
  );
}