import { Link } from "react-router";
import { ArrowRight, Terminal, Globe, Code } from "lucide-react";
import { motion } from "motion/react";
import { useSEO } from "../../../utils/useSEO";
import { getSEOConfig } from "../../../utils/seo";

export function Home() {
  useSEO(getSEOConfig("home"));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  } as const;

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 lg:px-24 py-12 lg:py-0 overflow-hidden relative">

      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] bg-brand-cyan/20 blur-[128px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-[20%] w-[400px] h-[400px] bg-brand-teal/20 blur-[128px] rounded-full animate-pulse delay-1000" />
      </div>

      <motion.div
        className="max-w-7xl w-full mx-auto grid lg:grid-cols-12 gap-12 items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* LEFT CONTENT */}
        <div className="lg:col-span-8 flex flex-col justify-center space-y-12">

          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-brand-teal"></span>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-teal">
                Available for New Challenges
              </span>
            </div>

            <h1 className="text-foreground leading-[1.05] tracking-tight">
              Crafting <span className="text-brand-teal">exceptional</span> <br />
              digital experiences.
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            I'm a <span className="text-foreground font-medium">Creative Developer</span> specializing in
            building performant, accessible, and visually stunning web applications
            that drive impact and tell stories through motion and design.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-6 pt-4">
            <Link to="/works">
              <button className="group relative px-8 py-4 bg-foreground text-background font-medium overflow-hidden transition-all hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center gap-3">
                  View Selected Works
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-brand-teal translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </button>
            </Link>

            <Link to="/about">
              <button className="group px-8 py-4 border border-foreground/10 hover:border-foreground/40 transition-all font-medium flex items-center gap-3 hover:scale-105 active:scale-95">
                More About Me
              </button>
            </Link>
          </motion.div>

          {/* Core Stack Summary */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 opacity-40 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2 group">
              <Globe className="w-6 h-6" />
              <span className="font-mono text-[10px] uppercase tracking-widest whitespace-nowrap">Frontend Architecture</span>
            </div>
            <div className="flex items-center gap-2 group">
              <Code className="w-6 h-6" />
              <span className="font-mono text-[10px] uppercase tracking-widest whitespace-nowrap">Interactive Motion</span>
            </div>
            <div className="flex items-center gap-2 group">
              <Terminal className="w-6 h-6" />
              <span className="font-mono text-[10px] uppercase tracking-widest whitespace-nowrap">Product Strategy</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT VISUAL - REFINED & PROFESSIONAL */}
        <motion.div
          className="lg:col-span-4 relative group"
          variants={itemVariants}
        >
          <div className="relative aspect-[4/5] bg-card border border-border overflow-hidden">
            {/* Minimal Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(var(--foreground) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            />

            <img
              src="/images/profile.jpg"
              alt="Opitien Ejiro"
              className="w-full h-full rounded-sm object-cover filter contrast-[1.05] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
            />

            {/* Floating Info Overlay */}
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/80 backdrop-blur-md border border-border space-y-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p className="font-mono text-[10px] uppercase tracking-widest text-brand-teal">Current Location</p>
              <p className="text-sm font-medium">Delta, Nigeria</p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 border border-border -z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-border -z-10 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
        </motion.div>
      </motion.div>

      {/* Background Decorative Text */}
      <div className="absolute -bottom-10 -right-20 text-[20vw] font-black text-foreground/[0.02] pointer-events-none select-none tracking-tighter uppercase whitespace-nowrap">
        Developer
      </div>
    </div>
  );
}
