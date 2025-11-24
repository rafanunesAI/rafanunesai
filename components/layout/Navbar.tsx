import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "../../lib/utils";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Cursos", href: "/cursos" },
    { name: "Loja", href: "/loja" },
    { name: "Contato", href: "/contato" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-brand-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <Link to="/" className="flex-shrink-0 group flex items-center gap-3">
            <img 
              src="https://i.imgur.com/h0UB5K0.jpeg" 
              alt="GFT Logo" 
              className="h-12 w-12 rounded-full object-cover border border-white/10 group-hover:border-brand-red transition-colors"
            />
            <div>
              <h1 className="font-heading font-bold text-xl md:text-2xl text-white tracking-tighter leading-none">
                DEIVID<span className="text-brand-red group-hover:text-red-400 transition-colors">DIAS</span>
              </h1>
              <span className="text-[10px] md:text-xs block font-light tracking-widest text-gray-400 group-hover:text-white transition-colors">
                GFTEAM BLACK BELT
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "font-heading text-sm font-medium transition-colors uppercase relative",
                    isActive(link.href) 
                      ? "text-brand-red" 
                      : "text-gray-300 hover:text-white"
                  )}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-brand-red animate-fade-in" />
                  )}
                </Link>
              ))}
              <Link to="/loja" className="text-white hover:text-brand-red transition-colors">
                <ShoppingBag size={20} />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark border-b border-white/10 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium font-heading uppercase",
                  isActive(link.href)
                    ? "text-brand-red bg-white/5"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};