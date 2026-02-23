import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { motion } from "motion/react";
import { useSEO } from "../../../utils/useSEO";
import { getSEOConfig } from "../../../utils/seo";

// Images
const IMAGES = {
    retro: "https://images.unsplash.com/photo-1669216202494-1fe1d0205ea5?q=80&w=1080",
    portfolio: "https://images.unsplash.com/photo-1695634621375-0b66a9d5d1bc?q=80&w=1080",
    cyberpunk: "https://images.unsplash.com/photo-1627827963179-a8bb14121eb4?q=80&w=1080"
};

const projects = [
  {
    id: 1,
    title: "RetroWave Music",
    subtitle: "Streaming Platform",
    description: "A nostalgic music streaming app with 80s aesthetics and modern functionality.",
    tags: ["React", "TypeScript", "Tailwind"],
    image: IMAGES.retro,
    featured: true
  },
  {
    id: 2,
    title: "Minimal Portfolio",
    subtitle: "Personal Site",
    description: "Pixel art inspired portfolio with smooth page transitions.",
    tags: ["Next.js", "Framer Motion"],
    image: IMAGES.portfolio,
    featured: false
  },
  {
    id: 3,
    title: "Neon Analytics",
    subtitle: "Data Dashboard",
    description: "Cyberpunk-inspired data visualization dashboard.",
    tags: ["React", "D3.js"],
    image: IMAGES.cyberpunk,
    featured: false
  }
];

export function Works() {
  useSEO(getSEOConfig("works"));
  return (
    <div className="min-h-screen py-20 px-6 lg:px-12 bg-[#F5F3ED]">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Header */}
        <div className="border-b-4 border-[#2C2C2C] pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
                <h1 className="retro-heading text-6xl md:text-8xl text-[#2C2C2C] tracking-tighter leading-none mb-2">
                    SELECTED<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5D9B99] to-[#2C2C2C]">WORKS</span>
                </h1>
                <p className="font-mono text-sm uppercase tracking-widest text-[#2C2C2C]/60 mt-4">
                    // A collection of digital artifacts
                </p>
            </div>
            <div className="flex gap-4">
                 <div className="w-4 h-4 bg-[#D17654] rounded-full animate-pulse"></div>
                 <div className="w-4 h-4 bg-[#5D9B99] rounded-full animate-pulse delay-75"></div>
                 <div className="w-4 h-4 bg-[#C5979D] rounded-full animate-pulse delay-150"></div>
            </div>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {projects.map((project, index) => (
                <motion.div 
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`${project.featured ? "lg:col-span-2" : "lg:col-span-1"} group cursor-pointer`}
                >
                    {/* Monitor Frame */}
                    <div className="relative bg-[#2C2C2C] p-3 rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] transform transition-transform duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-[#444] rounded-t-xl mx-4 mt-1"></div>
                        
                        {/* Screen */}
                        <div className="relative aspect-video bg-black rounded-lg overflow-hidden border border-[#111]">
                            {/* Scanlines */}
                            <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-40"></div>
                            
                            {/* Image */}
                            <ImageWithFallback
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 filter contrast-125 saturate-0 group-hover:saturate-100"
                            />

                            {/* Glare */}
                            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
                        </div>

                        {/* Monitor controls */}
                        <div className="flex justify-between items-center px-4 py-2">
                             <div className="flex gap-1">
                                <div className="w-1 h-1 bg-[#555] rounded-full"></div>
                                <div className="w-1 h-1 bg-[#555] rounded-full"></div>
                             </div>
                             <div className="w-8 h-1 bg-[#333] rounded-full"></div>
                        </div>
                    </div>

                    {/* Text Info */}
                    <div className="mt-8 flex justify-between items-start border-t border-[#2C2C2C]/10 pt-6">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-[#D17654] font-mono text-xs uppercase tracking-wider">0{index + 1}</span>
                                <h3 className="retro-heading text-3xl md:text-4xl text-[#2C2C2C] group-hover:text-[#5D9B99] transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                            <p className="font-mono text-sm text-[#2C2C2C]/50 uppercase tracking-widest mb-4">
                                {project.subtitle}
                            </p>
                            <p className="text-[#2C2C2C]/70 max-w-md leading-relaxed text-lg">
                                {project.description}
                            </p>
                        </div>
                        
                        <div className="hidden md:flex flex-col items-end gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="font-mono text-xs border border-[#2C2C2C]/20 px-2 py-1 rounded text-[#2C2C2C]/60">
                                    {tag}
                                </span>
                            ))}
                            <button title="View Project Details" className="mt-4 w-10 h-10 border border-[#2C2C2C] rounded-full flex items-center justify-center hover:bg-[#2C2C2C] hover:text-white transition-colors">
                                <ArrowUpRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}