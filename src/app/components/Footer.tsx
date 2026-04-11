import { Github, Linkedin, MessageCircle, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router";
import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  const navItems = [
    { name: "Works", path: "/works" },
    { name: "Experience", path: "/experience" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const socialItems = [
    { name: "GitHub", href: "https://www.github.com/opitien/", icon: <Github size={18} /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/opitien/", icon: <Linkedin size={18} /> },
    { name: "WhatsApp", href: "https://wa.me/2347057261372", icon: <MessageCircle size={18} /> },
  ];

  return (
    <footer className="footer-container border-t border-border bg-card/30 pt-20 pb-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-teal/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        
        {/* Large CTA Section - Hidden on Contact Page */}
        {!isContactPage && (
          <div className="mb-20">
            <Link to="/contact" className="group block">
              <h2 className="text-[12vw] lg:text-[100px] font-bold leading-none tracking-tighter uppercase transition-colors hover:text-brand-teal flex flex-wrap items-end gap-x-6">
                Let's work <br className="md:hidden" /> together
                <span className="inline-block translate-y-[-0.2em] transform group-hover:translate-x-4 group-hover:-translate-y-8 transition-transform duration-500 ease-out text-brand-teal">
                  <ArrowUpRight strokeWidth={3} className="w-[8vw] h-[8vw] lg:w-20 lg:h-20" />
                </span>
              </h2>
            </Link>
          </div>
        )}

        <div className={`grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-12 ${!isContactPage ? "border-t border-border/40 pt-16" : ""}`}>
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="group flex items-center gap-2">
              <div className="w-8 h-8 bg-foreground flex items-center justify-center text-background font-bold text-lg group-hover:bg-brand-teal transition-colors">
                O
              </div>
              <span className="font-bold tracking-tighter text-2xl">
                OPITIEN<span className="text-brand-teal">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed text-sm">
              Creative technologist focusing on high-end digital experiences, 
              interactive motion design, and scalable frontend architecture. 
              Based in Delta, Nigeria.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-muted-foreground mt-8">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
                </span>
                Available for hire
              </div>
              <span className="opacity-30">•</span>
              <span>GMT +1</span>
            </div>
          </div>

          {/* Navigation Link Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Navigation</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm font-medium hover:text-brand-teal transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-brand-teal mr-0 group-hover:mr-2 transition-all duration-300 overflow-hidden" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Connect</h4>
            <div className="flex flex-wrap gap-4">
              {socialItems.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary/50 border border-border hover:border-brand-teal hover:bg-secondary transition-all group"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <span className="group-hover:text-brand-teal transition-colors">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>
            <div className="pt-4">
              <p className="text-xs text-muted-foreground font-mono">Email me at:</p>
              <a 
                href="mailto:contact@opitien.work" 
                className="text-sm font-medium hover:text-brand-teal transition-colors break-words"
              >
                contact@opitien.work
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
          <p>© {currentYear} Opitien Ejiro. Built with precision and passion.</p>
          <div className="flex items-center gap-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-foreground transition-all flex items-center gap-2 group"
            >
              Back to Top
              <span className="group-hover:-translate-y-1 transition-transform inline-block">↑</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
