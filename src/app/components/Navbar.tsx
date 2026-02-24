import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Works", path: "/works" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F3ED]/80 backdrop-blur-sm border-b border-[#2C2C2C]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="retro-heading text-xl tracking-tight">
            OPITIEN.
          </Link>
          
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-[#5D9B99]/10 border border-[#5D9B99]/20 rounded-full mx-4">
            <div className="w-2 h-2 rounded-full bg-[#5D9B99] animate-pulse shadow-[0_0_8px_#5D9B99]" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#2C2C2C]/70">Available for work</span>
          </div>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`font-mono text-sm uppercase tracking-wider transition-colors ${
                    location.pathname === item.path
                      ? "text-[#5D9B99]"
                      : "text-[#2C2C2C] hover:text-[#D17654]"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center bg-[#2C2C2C] text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block font-mono text-sm uppercase tracking-wider transition-colors ${
                      location.pathname === item.path
                        ? "text-[#5D9B99]"
                        : "text-[#2C2C2C] hover:text-[#D17654]"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}