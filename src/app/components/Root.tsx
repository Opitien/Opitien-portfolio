import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { MusicPlayer } from "./MusicPlayer";
import { Footer } from "./Footer";
import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router";

export function Root() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden transition-colors duration-500">
      {/* Subtle Grain overlay for texture */}
      <div className="grain-overlay opacity-[0.03] pointer-events-none"></div>

      <Navbar />
      <MusicPlayer />

      <main className="flex-1 relative z-10 pt-20 pb-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}