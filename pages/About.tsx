import React from "react";
import { Button } from "../components/ui/Button";

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-brand-dark py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-red/5"></div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase relative z-10">About David Dias</h1>
        <p className="text-brand-red mt-4 font-medium tracking-wide relative z-10">DEIVID DIAS • GFTEAM BLACK BELT</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Bio Text */}
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed animate-fade-in">
            <p>
              <span className="text-5xl float-left mr-3 mt-[-8px] font-heading font-bold text-brand-red">D</span>
              avid Dias is a Brazilian Jiu-Jitsu black belt and a proud member of the GFTEAM Hall of Fame. With years of experience on the mats and a career dedicated to developing athletes, he serves as Head Coach at GFTEAM DC and Hyattsville BJJ, where he trains students with precision, discipline, and deep respect for the roots of the sport.
            </p>
            <p>
              Beyond his work as a coach and competitor, David is also an entrepreneur. He is the CEO of OSS Rio Tours and Nebula Kimonos, brands that reflect his commitment to elevating Jiu-Jitsu both on and off the mats.
            </p>
            <p>
              Recognized for his leadership, passion, and ability to transform lives through the gentle art, David Dias stands as a respected figure in the Jiu-Jitsu community.
            </p>
            
            <div className="pt-6 border-l-4 border-brand-red pl-6 italic text-gray-500 bg-gray-50 p-4 rounded-r-lg">
              "Physical strength can win a battle, but mental strength and technique win the war."
            </div>

            <div className="pt-8">
              <h3 className="font-heading font-bold text-xl mb-4">Timeline</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-red rounded-full mr-4"></div>
                  <span className="font-bold mr-2">2010:</span> Started as White Belt
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-red rounded-full mr-4"></div>
                  <span className="font-bold mr-2">2014:</span> Purple Belt State Champion
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-red rounded-full mr-4"></div>
                  <span className="font-bold mr-2">2018:</span> Black Belt Promotion
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-red rounded-full mr-4"></div>
                  <span className="font-bold mr-2">2020:</span> Opening of GFTEAM DC
                </li>
              </ul>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* FOTO 1 (Superior Esquerda) */}
            <div className="relative h-64 rounded-lg overflow-hidden translate-y-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
               {/* COLE O LINK DA SUA FOTO 1 AQUI EMBAIXO NO SRC */}
               <img 
                  src="https://i.imgur.com/FmyA3Pc.png"
                  alt="Deivid Dias Smiling"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
               />
            </div>

            {/* FOTO 2 (Superior Direita) */}
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
               {/* COLE O LINK DA SUA FOTO 2 AQUI EMBAIXO NO SRC */}
               <img 
                  src="https://i.imgur.com/4lN4yRt.png"
                  alt="Fight Position"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
               />
            </div>

            {/* FOTO 3 (Inferior Esquerda) */}
            <div className="relative h-64 rounded-lg overflow-hidden translate-y-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
               {/* COLE O LINK DA SUA FOTO 3 AQUI EMBAIXO NO SRC */}
               <img 
                  src="https://i.imgur.com/arK9jql.png"
                  alt="With Students"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
               />
            </div>

            {/* FOTO 4 (Inferior Direita) */}
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
               {/* COLE O LINK DA SUA FOTO 4 AQUI EMBAIXO NO SRC */}
               <img 
                  src="https://i.imgur.com/Zb7r7vk.png"
                  alt="Black Belt Detail"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
               />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};