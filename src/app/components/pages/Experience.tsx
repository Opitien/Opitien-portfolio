import { motion } from "motion/react";
import { useSEO } from "../../../utils/useSEO";
import { getSEOConfig } from "../../../utils/seo";

const experiences = [
  {
    company: "TechCorp Studios",
    role: "Senior Frontend Developer",
    duration: "2023 — Present",
    description: "Leading frontend architecture. optimizing render cycles. implementing design systems.",
    tech: ["React", "TypeScript", "WebGL"]
  },
  {
    company: "Digital Waves",
    role: "Frontend Developer",
    duration: "2021 — 2023",
    description: "Developed interactive UIs. Improved performance by 40%. Collaborated with UX team.",
    tech: ["Vue", "Sass", "Jest"]
  },
  {
    company: "StartupLab",
    role: "Junior Developer",
    duration: "2019 — 2021",
    description: "Full-stack experimentation. Database management. API integration.",
    tech: ["Node.js", "MongoDB", "Express"]
  },
  {
    company: "Freelance",
    role: "Web Developer",
    duration: "2018 — 2019",
    description: "Created custom websites for small businesses and startups. Focused on clean design and user experience.",
    tech: ["HTML/CSS", "JavaScript", "WordPress"]
  }
];

export function Experience() {
  useSEO(getSEOConfig("experience"));
  return (
    <div className="min-h-screen py-20 px-6 lg:px-12 bg-[#F5F3ED] font-mono">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-20 border-b-2 border-[#2C2C2C] pb-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#2C2C2C] mb-2">
                <span className="text-[#D17654] mr-4">&gt;</span>EXPERIENCE_LOG
            </h1>
            <p className="text-[#2C2C2C]/60 text-sm uppercase tracking-widest pl-12">
                // System.loadHistory(user="OPITIEN_EJIRO")
            </p>
        </div>

        <div className="relative border-l-2 border-[#2C2C2C]/20 ml-4 md:ml-12 space-y-16">
            {experiences.map((exp, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-8 md:pl-12"
                >
                    {/* Node */}
                    <div className="absolute -left-[9px] top-2 w-4 h-4 bg-[#F5F3ED] border-2 border-[#D17654] rounded-full"></div>
                    
                    <div className="grid md:grid-cols-12 gap-4 items-start">
                        <div className="md:col-span-3 text-sm text-[#2C2C2C]/50 pt-1">
                            {exp.duration}
                        </div>
                        <div className="md:col-span-9">
                            <h3 className="text-2xl font-bold text-[#2C2C2C] mb-1 hover:text-[#5D9B99] transition-colors cursor-default">
                                {exp.company}
                            </h3>
                            <div className="text-[#5D9B99] text-sm uppercase tracking-wider mb-4 border-b border-[#2C2C2C]/10 pb-2 inline-block">
                                {exp.role}
                            </div>
                            <p className="text-[#2C2C2C]/80 leading-relaxed mb-4 max-w-2xl">
                                {exp.description}
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                {exp.tech.map(t => (
                                    <span key={t} className="text-xs border border-[#2C2C2C]/20 px-2 py-1 text-[#2C2C2C]/60 hover:bg-[#2C2C2C] hover:text-white transition-colors cursor-default">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </div>
  );
}