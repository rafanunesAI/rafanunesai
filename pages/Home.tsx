import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { ChevronRight, Star, Users, Medal } from "lucide-react";

export const Home: React.FC = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center bg-brand-black overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          {/* 
            COMO COLOCAR SUA PRÓPRIA FOTO:
            1. Como o site roda no navegador, ele não acessa seu disco C:.
            2. Hospede sua foto no https://imgur.com/ ou outro site.
            3. Cole o link da imagem (deve terminar em .jpg ou .png) no 'src' abaixo.
            
            Exemplo atual: Imagem de Jiu-Jitsu do Unsplash.
          */}
          <img
            src="https://i.imgur.com/Uk5hVMv.jpeg"
            alt="Professor Deivid Dias Jiu-Jitsu"
            className="w-full h-full object-cover object-[center_25%] opacity-60" 
          />
          {/* Gradient to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-black/30" />
          <div className="absolute inset-0 bg-brand-black/20" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-brand-red font-heading font-bold text-lg md:text-xl tracking-[0.3em] uppercase mb-4 animate-fade-in flex items-center justify-center gap-3">
            <span className="w-8 h-[2px] bg-brand-red inline-block"></span>
            GFTEAM WASHINGTON DC
            <span className="w-8 h-[2px] bg-brand-red inline-block"></span>
          </h2>
          <h1 className="text-white font-heading font-black text-5xl md:text-7xl mb-6 leading-tight drop-shadow-2xl">
            JIU-JITSU TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              TRANSFORM LIVES
            </span>
          </h1>
          <p className="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light drop-shadow-lg">
            Technique, discipline, and respect. Learn the gentle art with the Grappling Fight Team methodology.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/cursos">
              <Button variant="primary">View Online Courses</Button>
            </Link>
            <Link to="/contato">
              <Button variant="outline">Book a Trial Class</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES / STATS */}
      <section className="bg-brand-dark py-12 border-b border-white/5">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          <div className="flex flex-col items-center p-6 hover:bg-white/5 transition-colors rounded-lg">
            <Medal className="text-brand-red w-12 h-12 mb-4" />
            <h3 className="font-heading font-bold text-xl">GFTEAM Black Belt</h3>
            <p className="text-gray-400 text-sm mt-2">Certified by one of the biggest teams in the world.</p>
          </div>
          <div className="flex flex-col items-center p-6 border-t md:border-t-0 md:border-l border-white/10 hover:bg-white/5 transition-colors rounded-lg">
            <Users className="text-brand-red w-12 h-12 mb-4" />
            <h3 className="font-heading font-bold text-xl">+100 Students</h3>
            <p className="text-gray-400 text-sm mt-2">Lives transformed through the sport.</p>
          </div>
          <div className="flex flex-col items-center p-6 border-t md:border-t-0 md:border-l border-white/10 hover:bg-white/5 transition-colors rounded-lg">
            <Star className="text-brand-red w-12 h-12 mb-4" />
            <h3 className="font-heading font-bold text-xl">Unique Methodology</h3>
            <p className="text-gray-400 text-sm mt-2">Calm, firm, and technical style.</p>
          </div>
        </div>
      </section>

      {/* WHO AM I SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 relative h-[500px] rounded-lg overflow-hidden shadow-2xl group">
              {/* 
                 TO CHANGE THIS PHOTO:
                 1. Upload your photo to a site like https://imgur.com/
                 2. Copy the direct link (ending in .jpg or .png)
                 3. Paste it inside the src="" below, replacing the current link.
              */}
              <img
                src="https://i.imgur.com/aPzTKOH.png"
                alt="Deivid Dias Teaching"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-brand-red font-bold font-heading uppercase tracking-wider mb-2">Who am I</h3>
              <h2 className="text-4xl font-heading font-bold text-brand-black mb-6">Much more than just fighting</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Representing the GFTEAM flag in Washington D.C., my goal goes beyond creating medal champions. 
                I create champions in life. My methodology focuses on technical evolution combined with personal development.
              </p>
              <Link to="/sobre">
                <Button variant="primary" className="flex items-center">
                  Read my story <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA LOJA */}
      <section className="py-20 bg-gray-100 relative overflow-hidden">
         {/* Texture pattern imitation */}
         <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
         
         <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
               <h2 className="text-4xl font-heading font-bold text-brand-black mb-4">OFFICIAL PRODUCTS</h2>
               <p className="text-gray-600">Wear our team's armor. Quality tested and approved on the mats.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Mock Product Cards */}
               {[
                 { 
                   id: 1, 
                   name: "GFTEAM Competition Gi", 
                   price: "$ 150.00", 
                   // PASTE LINK FOR PRODUCT 1 HERE:
                   img: "https://i.imgur.com/CR5fDyv.png" 
                 },
                 { 
                   id: 2, 
                   name: "No-Gi Team Rashguard", 
                   price: "$ 60.00", 
                   // PASTE LINK FOR PRODUCT 2 HERE:
                   img: "https://i.imgur.com/JT47RQw.png" 
                 },
                 { 
                   id: 3, 
                   name: "Special Belt", 
                   price: "$ 40.00", 
                   // PASTE LINK FOR PRODUCT 3 HERE:
                   img: "https://i.imgur.com/tj7Xt8Q.png" 
                 }
               ].map((item) => (
                 <Link to="/loja" key={item.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2">
                    <div className="relative h-64 w-full bg-gray-200 rounded-md mb-4 overflow-hidden">
                       <img 
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                       />
                    </div>
                    <h3 className="font-heading font-bold text-lg">{item.name}</h3>
                    <p className="text-brand-red font-bold text-xl mt-2">{item.price}</p>
                 </Link>
               ))}
            </div>
            
            <div className="text-center mt-12">
               <Link to="/loja">
                  <Button className="bg-brand-black text-white hover:bg-gray-800">Go to Shop</Button>
               </Link>
            </div>
         </div>
      </section>
    </>
  );
};