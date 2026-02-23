import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#2C2C2C]/10 py-12 px-6 lg:px-12 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="retro-heading text-xl mb-4">OPITIEN.</h3>
            <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">
              Crafting nostalgic digital experiences with modern technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-sm uppercase tracking-wider mb-4 text-[#2C2C2C]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm text-[#2C2C2C]/70 hover:text-[#5D9B99] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/experience" className="text-sm text-[#2C2C2C]/70 hover:text-[#5D9B99] transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm text-[#2C2C2C]/70 hover:text-[#5D9B99] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/works" className="text-sm text-[#2C2C2C]/70 hover:text-[#5D9B99] transition-colors">
                  Works
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-mono text-sm uppercase tracking-wider mb-4 text-[#2C2C2C]">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href="https://www.github.com/opitien/"
                className="w-10 h-10 bg-[#2C2C2C] text-white flex items-center justify-center hover:bg-[#5D9B99] transition-colors"
                aria-label="Github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/opitien/"
                className="w-10 h-10 bg-[#2C2C2C] text-white flex items-center justify-center hover:bg-[#5D9B99] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/opitienedison"
                className="w-10 h-10 bg-[#2C2C2C] text-white flex items-center justify-center hover:bg-[#5D9B99] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:opitiene@gmail.com"
                className="w-10 h-10 bg-[#2C2C2C] text-white flex items-center justify-center hover:bg-[#5D9B99] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#2C2C2C]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center font-mono text-xs text-[#2C2C2C]/60">
            © {currentYear} OPITIEN. Designed with retro vibes.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#2C2C2C]/40 hover:text-[#D17654] transition-colors cursor-help">
            built with retro & late-night playlists
          </p>
        </div>
      </div>
    </footer>
  );
}
