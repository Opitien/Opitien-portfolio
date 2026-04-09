import { Link, useParams } from "react-router";
import { ArrowLeft, ExternalLink, Github, Globe, Code, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import projects, { Project } from "../../../data/projects";
import { useSEO } from "../../../utils/useSEO";

export function WorkDetails() {
  const params = useParams();
  const slug = params.slug;
  const project: Project | undefined = projects.find((p) => p.slug === slug);

  useSEO({
    title: project ? `${project.title} — Opitien Ejiroghene` : "Project — Opitien Ejiroghene",
    description: project ? project.description : "Project details",
    ogImage: project?.image,
    ogUrl: project ? `https://opitien.work/projects/${project.slug}` : undefined,
    twitterImage: project?.image,
    canonicalUrl: project ? `https://opitien.work/projects/${project.slug}` : undefined,
  });

  if (!project) {
    return (
      <div className="min-h-screen py-24 px-6 lg:px-24 bg-background flex items-center justify-center">
        <div className="max-w-md text-center space-y-8">
          <h2 className="text-4xl font-bold tracking-tighter">Project not found</h2>
          <p className="text-muted-foreground">The project you're looking for doesn't exist or has been moved.</p>
          <Link to="/works">
            <button className="px-8 py-4 bg-foreground text-background font-medium hover:bg-brand-teal transition-all">
              Return to Works
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 px-6 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Navigation */}
        <Link to="/works" className="inline-flex items-center gap-2 group text-muted-foreground hover:text-foreground transition-all">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="font-mono text-xs uppercase tracking-widest font-medium">Back to Works</span>
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-foreground leading-none tracking-tighter">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-end gap-4">
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noreferrer" className="w-12 h-12 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all">
                <Github size={20} />
              </a>
            )}
            {project.external && (
              <a href={project.external} target="_blank" rel="noreferrer" className="px-8 h-12 bg-foreground text-background flex items-center justify-center gap-2 font-medium hover:bg-brand-teal transition-all">
                Live Site <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Visual Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-video bg-muted border border-border overflow-hidden"
        >
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <ImageWithFallback
              src={project.image || "/images/placeholder.jpg"}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>

        {/* Details Grid */}
        <div className="grid lg:grid-cols-12 gap-16 pt-16 border-t border-border">
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-brand-teal">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-muted border border-border text-xs font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-8 space-y-12">
            <div className="grid sm:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-lg font-bold">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every project brings unique hurdles. For {project.title}, the focus was on creating 
                  a seamless blend of performance and visual narrative, ensuring the user's journey 
                  is as intuitive as it is aesthetically pleasing.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold">Strategy & Execution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Leveraging modern tools like {project.tags[0]} and {project.tags[1]}, I developed 
                  a robust architecture that supports both the creative vision and the technical 
                  requirements of the project.
                </p>
              </div>
            </div>

            {/* Next Project CTA */}
            <div className="p-12 bg-muted border border-border flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Next Project</p>
                <h4 className="text-2xl font-bold tracking-tight">Explore more of my work</h4>
              </div>
              <Link to="/works">
                <button className="px-8 py-4 bg-foreground text-background font-medium hover:bg-brand-teal transition-all flex items-center gap-2">
                  All Projects <ArrowUpRight size={16} />
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default WorkDetails;
