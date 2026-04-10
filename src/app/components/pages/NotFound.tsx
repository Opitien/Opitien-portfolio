import { Link } from "react-router";
import { ArrowLeft, Home, MessageCircle, SignalLow } from "lucide-react";
import { motion } from "framer-motion";

export function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground flex flex-col items-center justify-center p-6 lg:p-12">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-cyan/5 blur-[120px] rounded-full animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-teal/5 blur-[120px] rounded-full animate-float" style={{ animationDelay: '-3s' }} />
        
        {/* Subtle Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', 
            backgroundSize: '48px 48px' 
          }} 
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-3xl w-full text-center space-y-16"
      >
        <div className="space-y-8">
          {/* Decorative Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-cyan/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 rounded-2xl bg-card border border-border shadow-2xl backdrop-blur-xl">
                <SignalLow className="w-12 h-12 text-brand-cyan animate-pulse" />
              </div>
            </div>
          </motion.div>
          
          {/* Main Error Heading */}
          <div className="space-y-4">
            <h1 className="text-[120px] md:text-[180px] font-bold tracking-tighter leading-none select-none glitch-text" data-text="404">
              404
            </h1>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight bg-gradient-to-b from-foreground to-foreground/50 bg-clip-text text-transparent">
              Coordinates Lost
            </h2>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed font-light">
            The digital path you seek is no longer active. 
            It may have been moved, deleted, or never existed in this reality.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/"
            className="group relative px-10 py-5 bg-foreground text-background font-medium rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-foreground/10"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Home className="w-5 h-5" />
              Return to Base
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-teal opacity-0 group-hover:opacity-10 transition-opacity" />
          </Link>
          
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 border border-border bg-card/50 hover:bg-card hover:border-brand-cyan/30 text-foreground font-medium rounded-full transition-all backdrop-blur-sm group shadow-sm"
          >
            <MessageCircle className="w-5 h-5 text-brand-cyan transition-transform group-hover:rotate-12" />
            Report an Anomaly
          </Link>
        </div>

        {/* Status Trace */}
        <div className="pt-8 border-t border-border/50">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 flex items-center justify-center gap-4">
            <span>Status: Error_Not_Found</span>
            <span className="w-1 h-1 bg-brand-cyan rounded-full animate-ping" />
            <span>Trace: {window.location.pathname}</span>
          </div>
        </div>
      </motion.div>

      {/* Retro Scanline Effect (subtle) */}
      <div className="absolute inset-0 pointer-events-none scanlines opacity-[0.02]" />
    </div>
  );
}

export default NotFound;
