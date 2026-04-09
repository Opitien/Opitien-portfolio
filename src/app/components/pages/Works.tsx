import { ArrowUpRight, Terminal } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { motion } from "motion/react";
import { useSEO } from "../../../utils/useSEO";
import { getSEOConfig } from "../../../utils/seo";
import { Link } from "react-router";
import projects from "../../../data/projects";

export function Works() {
  useSEO(getSEOConfig("works"));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="min-h-screen py-24 px-6 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-brand-teal"></span>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-teal">
              Selected Projects
            </span>
          </div>
          
          <h1 className="text-foreground leading-tight tracking-tighter">
            Bringing ideas to life <br />
            through <span className="text-brand-teal">code</span> & design.
          </h1>
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="group"
            >
              <Link to={`/works/${project.slug}`} className="block space-y-6">
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-muted border border-border">
                  <ImageWithFallback
                    src={project.image || "/images/placeholder.jpg"}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-background/90 backdrop-blur-md flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                      <ArrowUpRight className="w-6 h-6 text-foreground" />
                    </div>
                  </div>

                  {/* Top Left Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-background/80 backdrop-blur-md border border-border text-[10px] font-mono uppercase tracking-widest">
                      {project.tags[0]}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight group-hover:text-brand-teal transition-colors">
                      {project.title}
                    </h2>
                    <span className="text-xs font-mono text-muted-foreground">0{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground border border-border px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Professional CTA */}
        <div className="pt-24 border-t border-border flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="text-3xl font-bold tracking-tighter">
            Have a project in mind?
          </h3>
          <Link to="/contact">
            <button className="px-12 py-5 bg-foreground text-background font-bold text-lg hover:bg-brand-teal transition-all hover:scale-105 active:scale-95">
              Let's Collaborate
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
