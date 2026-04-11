import { Link } from "react-router";
import { Home, MessageCircle, MoveRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export function NotFound() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse tracking for the large 404
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for tracking
  const springConfig = { damping: 25, stiffness: 150 };
  const tx = useSpring(useTransform(mouseX, [0, 1500], [-30, 30]), springConfig);
  const ty = useSpring(useTransform(mouseY, [0, 1000], [-30, 30]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative min-h-[90vh] overflow-hidden bg-background text-foreground flex flex-col items-center justify-center p-8 md:p-12 lg:p-24">
      {/* Premium Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-brand-cyan/10 blur-[150px] rounded-full mix-blend-soft-light opacity-50" />
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-brand-teal/5 blur-[180px] rounded-full mix-blend-soft-light opacity-30" />
        
        {/* Fine Grain Overlay matching Root layout */}
        <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay" 
             style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      </div>

      {/* Extreme Background Text - matching Home.tsx style */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none select-none overflow-hidden">
        <motion.div 
          style={{ x: tx, y: ty }}
          className="text-[40vw] font-black text-foreground/[0.03] tracking-tighter leading-none"
        >
          404
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 w-full max-w-5xl"
      >
        <div className="flex flex-col items-center gap-12 text-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-[1px] bg-brand-cyan"></span>
                <span className="font-mono text-xs uppercase tracking-[0.5em] text-brand-cyan">
                  Access Denied
                </span>
                <span className="w-8 h-[1px] bg-brand-cyan"></span>
              </div>
              
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95] max-w-3xl mb-12">
                LOST IN THE <br />
                <span className="text-brand-teal italic">ARCHITECTURE.</span>
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-light leading-relaxed mb-16">
                The content you requested has either moved to a new dimension 
                or never existed in this project's scope.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-10 w-full"
          >
            <Link
              to="/"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative flex items-center gap-4 px-10 py-5 bg-foreground text-background rounded-sm transition-all duration-500 hover:pr-14 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3 font-medium tracking-wide first-letter:uppercase">
                <Home className="w-4 h-4" />
                Back to orbit
                <MoveRight className="w-5 h-5 absolute -right-8 opacity-0 group-hover:right-[-4px] group-hover:opacity-100 transition-all duration-500" />
              </span>
              <div className="absolute inset-0 bg-brand-teal translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>

            <Link
              to="/contact"
              className="group flex items-center gap-3 text-foreground/60 hover:text-foreground font-medium transition-all"
            >
              <MessageCircle className="w-5 h-5 text-brand-cyan/60 group-hover:text-brand-cyan group-hover:rotate-12 transition-transform" />
              <span className="border-b border-transparent group-hover:border-brand-cyan/30 pb-0.5">Report System Fragment</span>
            </Link>
          </motion.div>
        </div>

        {/* Console-style Footer */}
        <div className="mt-40 pt-10 border-t border-border/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground/30">
          <div className="flex gap-8">
            <span>Path: {window.location.pathname}</span>
            <span>Ref: 0x404_VOID</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="animate-pulse text-brand-teal">●</span>
            <span>System Active</span>
          </div>
        </div>
      </motion.div>

      {/* Fine Scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%]" />
    </div>
  );
}

export default NotFound;


