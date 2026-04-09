import { Code, Palette, Zap, Globe, Cpu, Heart } from "lucide-react";
import { motion } from "motion/react";
import { useSEO } from "../../../utils/useSEO";
import { getSEOConfig } from "../../../utils/seo";
import { Link } from "react-router";

const skills = [
  "React", "TypeScript", "Next.js", "Tailwind CSS", 
  "Node.js", "Supabase", "Git", "Figma", 
  "Framer Motion", "Vite", "Product Strategy"
];

export function About() {
  useSEO(getSEOConfig("about"));

  return (
    <div className="min-h-screen py-24 px-6 lg:px-24 bg-background">
      <div className="max-w-5xl mx-auto space-y-24">
        
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-brand-teal"></span>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-teal">
              The Story
            </span>
          </div>
          
          <h1 className="text-foreground leading-tight tracking-tighter">
            Bridging the gap <br />
            between <span className="text-brand-teal">design</span> & logic.
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Bio Content */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg dark:prose-invert"
            >
              <p className="text-xl text-muted-foreground leading-relaxed">
                I'm Opitien Ejiro, a <span className="text-foreground font-medium">Creative Developer</span> based in Lagos. 
                With a background in both design and engineering, I specialize in building 
                highly interactive, performant, and accessible digital products.
              </p>
              
              <div className="h-[1px] w-12 bg-border my-8" />

              <p className="text-muted-foreground">
                My approach is rooted in the belief that modern web experiences should be 
                both functional and visceral. I don't just write code; I craft systems 
                that prioritize human experience and narrative.
              </p>

              <p className="text-muted-foreground">
                Whether it's a high-impact branding site for a creative studio or a 
                complex SaaS dashboard, I bring the same level of obsession for detail, 
                motion, and technical excellence.
              </p>
            </motion.div>

            {/* Core Values */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-muted flex items-center justify-center rounded-lg">
                  <Zap className="w-5 h-5 text-brand-teal" />
                </div>
                <h3 className="text-lg font-bold">Performance First</h3>
                <p className="text-sm text-muted-foreground">
                  Optimization isn't an afterthought. I build with speed and efficiency as core requirements.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-10 h-10 bg-muted flex items-center justify-center rounded-lg">
                  <Palette className="w-5 h-5 text-brand-teal" />
                </div>
                <h3 className="text-lg font-bold">Design Sentient</h3>
                <p className="text-sm text-muted-foreground">
                  I speak the language of design, ensuring every pixel and transition is intentional.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar / Stats */}
          <aside className="lg:col-span-5 space-y-12">
            
            {/* Image Box */}
            <div className="relative aspect-square bg-muted overflow-hidden group">
              <img
                src="/images/profile.jpg"
                alt="Opitien Ejiro"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 border-[20px] border-background/50" />
            </div>

            {/* Skills Card */}
            <div className="p-8 bg-card border border-border space-y-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-background text-foreground border border-border text-xs font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability Widget */}
            <div className="p-8 bg-brand-teal/5 border border-brand-teal/20 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
              <p className="text-xs font-mono uppercase tracking-widest text-brand-teal">
                Open for full-time & contract roles
              </p>
            </div>

          </aside>
        </div>

        {/* Closing Quote */}
        <div className="py-24 border-t border-border text-center space-y-8">
          <Heart className="w-8 h-8 text-brand-teal mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter max-w-3xl mx-auto">
            Let's build something <span className="text-brand-teal">remarkable</span> together.
          </h2>
          <Link to="/contact">
            <button className="px-12 py-5 bg-foreground text-background font-bold text-lg hover:bg-brand-teal transition-all">
              Initiate Conversation
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
