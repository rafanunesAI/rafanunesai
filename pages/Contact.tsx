import React from "react";
import { Button } from "../components/ui/Button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-brand-dark py-16 text-center text-white">
        <h1 className="text-4xl font-heading font-bold uppercase">Fale Conosco</h1>
        <p className="mt-2 text-gray-400">Agende sua aula experimental ou tire suas dúvidas.</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto bg-white p-4 md:p-8 rounded-xl shadow-xl">
          
          {/* Information */}
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-2xl font-heading font-bold text-brand-black mb-6">Entre em contato</h2>
            
            <div className="flex items-start group">
              <div className="bg-brand-red/10 p-3 rounded-full mr-4 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                <Phone className="text-brand-red w-6 h-6 group-hover:text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">WhatsApp / Telefone</h3>
                <p className="text-gray-600">+1 (202) 555-0123</p>
                <p className="text-xs text-gray-500 mt-1">Seg a Sex, 09h às 21h</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="bg-brand-red/10 p-3 rounded-full mr-4 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                <Mail className="text-brand-red w-6 h-6 group-hover:text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Email</h3>
                <p className="text-gray-600">contact@deividdiasjj.com</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="bg-brand-red/10 p-3 rounded-full mr-4 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                <MapPin className="text-brand-red w-6 h-6 group-hover:text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Localização</h3>
                <p className="text-gray-600">GFTEAM DC</p>
                <p className="text-gray-600">720 Erie Ave, Washington, D.C. 20912</p>
              </div>
            </div>
            
            <div className="mt-8 h-64 w-full bg-gray-200 rounded-lg overflow-hidden relative">
               {/* Placeholder for Map */}
               <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                 alt="Mapa" 
                 className="w-full h-full object-cover grayscale"
               />
               <div className="absolute inset-0 bg-brand-black/20 flex items-center justify-center">
                   <Button variant="white" className="shadow-lg">Ver no Google Maps</Button>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-6 rounded-lg order-1 lg:order-2 border border-gray-100">
            <h3 className="text-xl font-bold mb-6 text-brand-black">Envie uma mensagem</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red focus:outline-none transition-all" placeholder="Seu nome" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red focus:outline-none transition-all" placeholder="seu@email.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red focus:outline-none transition-all bg-white">
                  <option>Aula Experimental</option>
                  <option>Dúvida sobre Cursos</option>
                  <option>Loja / Produtos</option>
                  <option>Outros</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea rows={4} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red focus:outline-none transition-all" placeholder="Como podemos ajudar?"></textarea>
              </div>

              <Button className="w-full flex items-center justify-center gap-2">
                Enviar Mensagem <Send size={18} />
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};