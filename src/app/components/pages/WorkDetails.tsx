import { Link, useParams } from "react-router";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
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
    ogImage: project ? project.image : undefined,
    ogUrl: project ? `https://opitien.dev/projects/${project.slug}` : undefined,
    twitterImage: project ? project.image : undefined,
    canonicalUrl: project ? `https://opitien.dev/projects/${project.slug}` : undefined,
  });

  if (!project) {
    return (
      <div className="min-h-screen py-20 px-6 lg:px-12 bg-[#F5F3ED]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Project not found</h2>
          <p className="mb-6">The project you requested could not be located.</p>
          <Link to="/works" className="retro-button inline-flex items-center gap-2">
            <ArrowLeft /> Back to Works
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6 lg:px-12 bg-[#F5F3ED]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="retro-heading text-5xl lg:text-7xl text-[#2C2C2C] tracking-tighter">
              {project.title}
            </h1>
            <p className="font-mono text-sm text-[#2C2C2C]/60 mt-2">{project.subtitle}</p>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/works" className="font-mono text-sm text-[#2C2C2C]/60 hover:text-[#5D9B99]">
              <ArrowLeft /> Back
            </Link>
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noreferrer" className="px-3 py-2 border rounded-md inline-flex items-center gap-2">
                <Github /> Repo
              </a>
            )}
            {project.external && (
              <a href={project.external} target="_blank" rel="noreferrer" className="px-3 py-2 border rounded-md inline-flex items-center gap-2">
                <ExternalLink /> Visit
              </a>
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-12 gap-12 items-start"
        >
          <div className="lg:col-span-7">
            <div className="relative border-2 border-[#2C2C2C] rounded-xl overflow-hidden">
              <ImageWithFallback src={project.image} alt={project.title} className="w-full h-[480px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border-2 border-[#2C2C2C] p-6 font-mono text-sm shadow-[4px_4px_0px_#2C2C2C]">
              <h3 className="uppercase tracking-widest border-b-2 border-[#2C2C2C] pb-2 mb-4">Overview</h3>
              <p className="text-[#2C2C2C]/80 leading-relaxed">{project.description}</p>
            </div>

            <div className="bg-white border-2 border-[#2C2C2C] p-6 font-mono text-sm shadow-[4px_4px_0px_#2C2C2C]">
              <h3 className="uppercase tracking-widest border-b-2 border-[#2C2C2C] pb-2 mb-4">Tech</h3>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((t) => (
                  <span key={t} className="px-3 py-1 bg-[#2C2C2C] text-[#F5F3ED] font-mono text-xs uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default WorkDetails;
