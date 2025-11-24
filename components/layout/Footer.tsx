import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Facebook, MapPin, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://i.imgur.com/h0UB5K0.jpeg" 
                alt="GFT Logo" 
                className="h-10 w-10 rounded-full"
              />
              <h2 className="font-heading text-2xl font-bold">DEIVID<span className="text-brand-red">DIAS</span></h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Jiu-Jitsu não é apenas uma luta, é um estilo de vida. 
              Representando com orgulho a <strong>Grappling Fight Team (GFTEAM)</strong>. Transformando vidas através da disciplina, técnica e respeito.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Youtube size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Facebook size={24} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 uppercase tracking-wider">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre o Professor</Link></li>
              <li><Link to="/cursos" className="hover:text-white transition-colors">Cursos Online</Link></li>
              <li><Link to="/loja" className="hover:text-white transition-colors">Loja Oficial</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors">Agendar Aula</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 uppercase tracking-wider">Contato</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-brand-red mt-1 shrink-0" />
                <span>GFTEAM DC<br/>720 Erie Ave, Washington, D.C. 20912</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-brand-red shrink-0" />
                <span>contact@deividdiasjj.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Professor Deivid Dias. Grappling Fight Team. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};