import { Coffee, Palette, Gamepad2, Terminal, Cpu } from "lucide-react";
import { motion } from "motion/react";
import { useSEO } from "../../../utils/useSEO";
import { getSEOConfig } from "../../../utils/seo";

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Supabase",
  "HTML5",
  "CSS3",
  "Git",
  "Figma",
  "Framer Motion",
  "UI/UX",
  "WebGL"
];

const currentYear = new Date().getFullYear();
const currentAge = currentYear - 2003;

const stats = [
  { label: "Age", value: currentAge },
  { label: "Role", value: "Creative Developer" },
  { label: "Projects", value: "25+" },
  { label: "Status", value: "Active" },
];

export function About() {
  useSEO(getSEOConfig("about"));

  return (
    <div className="min-h-screen py-20 px-6 lg:px-12 bg-[#F5F3ED]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="border-b-4 border-[#2C2C2C] pb-6 mb-16 flex items-end justify-between">

          <div>
            <h1 className="retro-heading text-5xl lg:text-7xl text-[#2C2C2C] tracking-tighter">
              USER_PROFILE
            </h1>

            <div className="flex items-center gap-2 mt-2 text-[#5D9B99]">
              <Terminal size={16} />
              <span className="font-mono text-sm uppercase tracking-widest">
                /usr/dev/opitien-ejiro
              </span>
            </div>
          </div>

          {/* Animated Activity Bars */}
          <div className="flex gap-1 overflow-hidden">
            {[1, 2, 3, 4, 5].map(i => (
              <motion.div
                key={i}
                className={`w-4 h-8 ${i < 4 ? "bg-[#2C2C2C]" : "bg-[#2C2C2C]/20"}`}
                animate={{ x: [-10, 10, -10] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15
                }}
              />
            ))}
          </div>

        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

          {/* LEFT COLUMN */}
          <motion.div
            className="lg:col-span-4 space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            {/* Avatar */}
            <div className="aspect-square bg-[#2C2C2C] p-2 relative group">

              <div className="absolute inset-0 border-2 border-[#D17654] translate-x-2 translate-y-2 -z-10"></div>

              <div className="w-full h-full bg-black overflow-hidden relative">

                <img
                  src="/images/profile.jpg"
                  alt="Opitien Ejiro"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-500"
                />

                {/* CRT Glow */}
                <div className="absolute inset-0 bg-[#5D9B99]/10 mix-blend-overlay pointer-events-none"></div>

                {/* Scanlines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none"></div>

                {/* Flicker */}
                <div className="absolute inset-0 bg-white opacity-[0.02] animate-pulse pointer-events-none"></div>

              </div>
            </div>

            {/* Stats */}
            <div className="bg-white border-2 border-[#2C2C2C] p-6 font-mono text-sm shadow-[4px_4px_0px_#2C2C2C]">

              <h3 className="uppercase tracking-widest border-b-2 border-[#2C2C2C] pb-2 mb-4">
                Stats
              </h3>

              <div className="space-y-3">
                {stats.map(stat => (
                  <div key={stat.label} className="flex justify-between">
                    <span className="text-[#2C2C2C]/60">{stat.label}</span>
                    <span className="font-bold">{stat.value}</span>
                  </div>
                ))}
              </div>

            </div>

          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            className="lg:col-span-8 space-y-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Bio */}
            <section>
              <h2 className="text-2xl font-bold uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-3 h-3 bg-[#D17654]"></span>
                Bio_Data
              </h2>

              <div className="font-mono space-y-6 text-[#2C2C2C]/80 leading-relaxed text-lg">

                <p>
                  System initialized in 2003. I’m a frontend developer focused on
                  building fast, scalable, and visually distinctive web applications.
                </p>

                <p>
                  My work lives primarily in the React and Next.js ecosystem where I
                  combine modern engineering practices with strong UI and motion
                  design principles.
                </p>

                <p>
                  I enjoy crafting digital experiences that feel intentional,
                  performant, and memorable while blending modern technology with
                  subtle nostalgic aesthetics.
                </p>

              </div>
            </section>

            {/* Skills */}
            <section>

              <h2 className="text-2xl font-bold uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-3 h-3 bg-[#5D9B99]"></span>
                Equipped_Skills
              </h2>

              <div className="flex flex-wrap gap-3">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#2C2C2C] text-[#F5F3ED] font-mono text-xs uppercase tracking-wider hover:bg-[#D17654] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </section>

            {/* Perks */}
            <section>

              <h2 className="text-2xl font-bold uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-3 h-3 bg-[#C5979D]"></span>
                Perks
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">

                <div className="border border-[#2C2C2C]/20 p-4 flex items-center gap-3">
                  <Coffee className="text-[#D17654]" />
                  <span className="font-mono text-sm">Caffeine_Boost</span>
                </div>

                <div className="border border-[#2C2C2C]/20 p-4 flex items-center gap-3">
                  <Gamepad2 className="text-[#5D9B99]" />
                  <span className="font-mono text-sm">Retro_Gamer</span>
                </div>

                <div className="border border-[#2C2C2C]/20 p-4 flex items-center gap-3">
                  <Palette className="text-[#C5979D]" />
                  <span className="font-mono text-sm">Pixel_Artist</span>
                </div>

                <div className="border border-[#2C2C2C]/20 p-4 flex items-center gap-3">
                  <Cpu className="text-[#2C2C2C]" />
                  <span className="font-mono text-sm">Hardware_Nut</span>
                </div>

              </div>

            </section>

            {/* CTA */}
            <section className="border-t-2 border-[#2C2C2C] pt-10">

              <h2 className="text-xl font-bold uppercase tracking-widest mb-6">
                Next_Move
              </h2>

              <div className="flex flex-wrap gap-4">

                <a
                  href="/projects"
                  className="px-6 py-3 bg-[#2C2C2C] text-[#F5F3ED] font-mono text-sm uppercase tracking-wider hover:bg-[#D17654] transition-colors"
                >
                  View_Projects →
                </a>

                <a
                  href="/contact"
                  className="px-6 py-3 border-2 border-[#2C2C2C] font-mono text-sm uppercase tracking-wider hover:bg-[#2C2C2C] hover:text-[#F5F3ED] transition-colors"
                >
                  Contact →
                </a>

              </div>

            </section>

          </motion.div>

        </div>
      </div>
    </div>
  );
}
