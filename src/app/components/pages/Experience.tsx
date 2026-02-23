import { motion } from "motion/react";
import { useSEO } from "../../../utils/useSEO";
import { getSEOConfig } from "../../../utils/seo";

const experiences = [
  {
    company: "Bravax Technology Limited",
    role: "Senior Frontend Developer",
    duration: "Jan 2026 — Present",
    description: "I build and optimize full-stack web applications, delivering responsive, user-centered interfaces. I collaborate with designers and product teams, implement SEO and accessibility best practices, and manage version control, deployment, and testing to ensure reliable, scalable applications.",
    tech: ["Node.js", "MongoDB", "Express", "React.js", "Next.js", "TypeScript", "Figma","Framer"]
  },
  {
    company: "South Circle",
    role: "Frontend Developer (Internship)",
    duration: "July 2025 — Dec 2025",
    description: "During my internship as a Developer at South Circle, I built and optimized web applications using React.js, Next.js, TypeScript, and Node.js, improving performance and SEO. I collaborated with UX/UI designers in Figma to deliver user-centered experiences and managed version control, deployment, and testing to ensure reliable, scalable applications.",
    tech: ["Node.js", "MongoDB", "Express", "React.js", "Next.js", "TypeScript", "Figma"]
  },
  {
    company: "Freelance",
    role: "Web Developer",
    duration: "Jan 2023 — June 2025",
    description: "As a freelance designer, I built responsive websites in Wix CMS, translating brand concepts into engaging digital experiences. I created custom graphics, applied SEO and modern design principles, and improved user experience through intuitive layouts and clear navigation.",
    tech: ["HTML/CSS", "JavaScript", "Wix CMS"]
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