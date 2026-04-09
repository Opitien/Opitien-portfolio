import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Works", path: "/works" },
    { name: "Experience", path: "/experience" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border py-4" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2">
            <div className="w-8 h-8 bg-foreground flex items-center justify-center text-background font-bold text-lg group-hover:bg-brand-teal transition-colors">
              O
            </div>
            <span className="font-bold tracking-tighter text-xl hidden sm:block">
              OPITIEN<span className="text-brand-teal">.</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-sm font-medium tracking-tight transition-all relative group ${
                    isActive(item.path) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-brand-teal transition-all duration-300 ${
                    isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA / Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden lg:block">
              <button className="px-6 py-2 bg-foreground text-background text-sm font-medium hover:bg-brand-teal transition-colors">
                Let's Talk
              </button>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-background border-t border-border mt-4"
            >
              <ul className="py-8 space-y-6">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`text-2xl font-bold tracking-tight ${
                        isActive(item.path) ? "text-brand-teal" : "text-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
