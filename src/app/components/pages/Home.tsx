import { Link } from "react-router";
import { ArrowRight, Terminal } from "lucide-react";
import { motion } from "motion/react";
import { useSEO } from "../../../utils/useSEO";
import { getSEOConfig } from "../../../utils/seo";

export function Home() {
  useSEO(getSEOConfig("home"));
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 lg:px-12 py-12 lg:py-0 overflow-hidden relative">
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10">
        
        {/* Left: Text content (spanning 7 cols) */}
        <motion.div 
          className="lg:col-span-7 space-y-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2C2C2C] text-white border border-[#2C2C2C]">
              <Terminal size={12} />
              <span className="font-mono text-xs uppercase tracking-wider">
                System Online
              </span>
            </div>
            
            <h1 className="retro-heading text-[12vw] lg:text-[8rem] leading-[0.85] text-[#2C2C2C] tracking-tighter mix-blend-difference">
              OPITIEN<br/><span className="text-[#D17654]">EJIRO</span>
            </h1>
            
            <div className="h-1 w-24 bg-[#D17654] my-6"></div>

            <p className="font-mono text-lg md:text-xl text-[#2C2C2C]/80 max-w-lg leading-relaxed border-l-2 border-[#5D9B99]/30 pl-6">
              Creative Developer &<br/>
              Interface Designer
            </p>
          </div>

          <div className="flex flex-wrap gap-6 pt-4">
            <Link to="/works">
              <button className="retro-button group flex items-center gap-3 bg-[#2C2C2C] text-[#F5F3ED] hover:bg-[#D17654] hover:text-white border-none shadow-[4px_4px_0px_#5D9B99]">
                <span className="font-bold">INITIALIZE PROJECTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            
            <Link to="/about">
              <button className="retro-button outline border-2 border-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-[#F5F3ED] shadow-[4px_4px_0px_rgba(0,0,0,0.1)]">
                READ_ME.TXT
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right: Visual (spanning 5 cols) - Asymmetrical */}
        <div className="lg:col-span-5 relative h-[400px] lg:h-[600px] flex items-center justify-center lg:justify-end">
          {/* Abstract geometric composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full max-w-md aspect-square"
          >
            {/* Monitor Frame */}
            <div className="absolute inset-0 border-2 border-[#2C2C2C] rounded-lg rotate-3 z-10"></div>
            <div className="absolute inset-0 bg-[#5D9B99]/10 -rotate-3 z-0 backdrop-blur-sm"></div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -right-10 w-32 h-32 bg-[#D17654] rounded-full mix-blend-multiply opacity-80"
            />
            
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 -left-10 w-40 h-40 bg-[#5D9B99] rounded-full mix-blend-multiply opacity-80"
            />

            {/* Code Snippet Visual */}
            <div className="absolute inset-8 bg-[#fff] border border-[#2C2C2C] p-6 shadow-xl z-20 overflow-hidden flex flex-col">
              <div className="flex gap-2 mb-4 border-b border-[#eee] pb-2">
                <div className="w-3 h-3 rounded-full bg-[#D17654]"></div>
                <div className="w-3 h-3 rounded-full bg-[#E5C185]"></div>
                <div className="w-3 h-3 rounded-full bg-[#5D9B99]"></div>
              </div>
              <div className="font-mono text-xs text-[#2C2C2C]/60 space-y-1">
                <p><span className="text-[#D17654]">const</span> portfolio = <span className="text-[#5D9B99]">new</span> Creative();</p>
                <p>portfolio.<span className="text-[#D17654]">init</span>(<span className="text-[#5D9B99]">'retro-mode'</span>);</p>
                <p className="pl-4 text-[#2C2C2C]/40">// Loading assets...</p>
                <div className="mt-4 w-full bg-[#eee] h-1 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    className="h-full bg-[#2C2C2C]"
                  />
                </div>
              </div>
              
              {/* Scanline overlay on monitor */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-20 right-[10%] font-mono text-[200px] leading-none text-[#2C2C2C]/[0.02] pointer-events-none select-none">
        01
      </div>
    </div>
  );
}