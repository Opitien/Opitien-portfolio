import { motion } from "motion/react";
import { useSEO } from "../../../utils/useSEO";
import { getSEOConfig } from "../../../utils/seo";

const experiences = [
  {
    company: "The Big Dev Studio",
    role: "Senior Developer & CTO",
    duration: "Jan 2026 — Present",
    description:
      "Leading technical strategy and full-stack development. Delivering high-performance web applications with a focus on scalability, SEO, and exceptional user experience. Managing the end-to-end lifecycle of digital products for ambitious brands.",
    tech: ["Node.js", "MongoDB", "Express", "React.js", "Next.js", "TypeScript", "Figma", "Framer"],
  },
  {
    company: "South Circle",
    role: "Frontend Developer",
    duration: "July 2025 — Present",
    description:
      "Optimizing frontend architectures for performance and engagement. Collaborating closely with design teams to translate complex Figma prototypes into seamless digital interfaces using modern React and Next.js patterns.",
    tech: ["Node.js", "MongoDB", "Express", "React.js", "Next.js", "TypeScript", "Figma"],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    duration: "Jan 2023 — June 2025",
    description:
      "Built custom digital solutions for diverse clients. Focused on responsive design, brand storytelling, and developing accessible web experiences that drive business results.",
    tech: ["HTML/CSS", "JavaScript", "Wix CMS"],
  },
];

export function Experience() {
  useSEO(getSEOConfig("experience"));

  return (
    <div className="min-h-screen py-24 px-6 lg:px-24 bg-background">
      <div className="max-w-4xl mx-auto space-y-24">
        
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-brand-teal"></span>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-teal">
              Career Path
            </span>
          </div>
          
          <h1 className="text-foreground leading-tight tracking-tighter">
            Professional <br />
            <span className="text-brand-teal">Journey</span> & Impact.
          </h1>
        </div>

        {/* Timeline */}
        <div className="space-y-20 relative before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-border md:before:left-1/2">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-16 ${
                index % 2 === 0 ? "md:text-right" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-brand-teal md:left-1/2 md:ml-[-5px]" />

              {/* Content Box */}
              <div className={`${index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}`}>
                <div className="space-y-4">
                  <span className="font-mono text-xs text-brand-teal uppercase tracking-widest leading-none block">
                    {exp.duration}
                  </span>
                  
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight">
                      {exp.company}
                    </h3>
                    <p className="text-muted-foreground font-medium italic">
                      {exp.role}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  <div className={`flex flex-wrap gap-2 pt-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono uppercase tracking-wider text-foreground bg-muted border border-border px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Summary Footer */}
        <div className="p-8 md:p-12 bg-muted border border-border space-y-6">
          <h3 className="text-xl font-bold tracking-tight">Philosophy</h3>
          <p className="text-muted-foreground leading-relaxed text-lg italic">
            "I believe in building software that doesn't just work, but feels visceral and intentional. 
            Bridge the gap between engineering rigor and creative expression."
          </p>
        </div>

      </div>
    </div>
  );
}
