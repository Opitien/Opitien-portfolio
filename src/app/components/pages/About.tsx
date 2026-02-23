import { Coffee, Palette, Gamepad2, Terminal, Cpu } from "lucide-react";
import { motion } from "motion/react";
import { useSEO } from "../../../utils/useSEO";
import { getSEOConfig } from "../../../utils/seo";

const skills = [
  "React", "TypeScript", "JavaScript", "Tailwind CSS",
  "Next.js", "Node.js", "HTML5", "CSS3",
  "Git", "Figma", "UI/UX", "WebGL"
];

const stats = [
  { label: "Level", value: "25" },
  { label: "Class", value: "Technomancer" },
  { label: "EXP", value: "999999" },
  { label: "HP", value: "100/100" },
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
                /root/users/OPITIEN_EJIRO
              </span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => (
                <div
                  key={i}
                  className={`w-4 h-8 ${i < 4 ? 'bg-[#2C2C2C]' : 'bg-[#2C2C2C]/20'}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Avatar */}
            <div className="aspect-square bg-[#2C2C2C] p-2 relative group">
              
              {/* Offset Retro Border */}
              <div className="absolute inset-0 border-2 border-[#D17654] translate-x-2 translate-y-2 -z-10"></div>

              {/* Image Container */}
              <div className="w-full h-full bg-black overflow-hidden relative">

                {/* PROFILE IMAGE */}
                <img
                  src="/images/profile.jpg"
                  alt="Opitien Ejiro"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-500"
                />

                {/* CRT Glow Overlay */}
                <div className="absolute inset-0 bg-[#5D9B99]/10 mix-blend-overlay pointer-events-none"></div>

                {/* Scanlines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none"></div>

                {/* Flicker Animation */}
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
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Bio */}
            <section>
              <h2 className="text-2xl font-bold uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-3 h-3 bg-[#D17654]"></span>
                Bio_Data
              </h2>

              <div className="font-mono space-y-6 text-[#2C2C2C]/80 leading-relaxed text-lg">
                <p>
                  System initialized in [REDACTED]. Frontend developer with a passion for 
                  creating beautiful, functional web experiences that blend modern technology 
                  with nostalgic design aesthetics.
                </p>

                <p>
                  Specializing in React ecosystem. Exploring the boundaries of web animation 
                  and interactive design.
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

          </div>
        </div>
      </div>
    </div>
  );
}