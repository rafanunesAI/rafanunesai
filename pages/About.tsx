import React from "react";
import { Button } from "../components/ui/Button";

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-brand-dark py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-red/5"></div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase relative z-10">Sobre Deivid Dias</h1>
        <p className="text-brand-red mt-4 font-medium tracking-wide relative z-10">DEIVID DIAS • FAIXA PRETA GFTEAM</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Bio Text */}
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed animate-fade-in">
            <p>
              <span className="text-5xl float-left mr-3 mt-[-8px] font-heading font-bold text-brand-red">D</span>
              eivid Dias é faixa preta de Jiu-Jitsu Brasileiro e um orgulhoso membro do Hall da Fama da GFTEAM. Com anos de experiência nos tatames e uma carreira dedicada ao desenvolvimento de atletas, ele atua como Head Coach na GFTEAM DC e Hyattsville BJJ, onde treina alunos com precisão, disciplina e profundo respeito pelas raízes do esporte.
            </p>
            <p>
              Além de seu trabalho como treinador e competidor, Deivid também é empreendedor. Ele é o CEO da OSS Rio Tours e Nebula Kimonos, marcas que refletem seu compromisso em elevar o Jiu-Jitsu tanto dentro quanto fora dos tatames.
            </p>
            <p>
              Reconhecido por sua liderança, paixão e habilidade de transformar vidas através da arte suave, Deivid Dias se destaca como uma figura respeitada na comunidade do Jiu-Jitsu.
            </p>
            
            <div className="pt-6 border-l-4 border-brand-red pl-6 italic text-gray-500 bg-gray-50 p-4 rounded-r-lg">
              "A força física pode vencer uma batalha, mas a força mental e a técnica vencem a guerra."
            </div>

            <div className="pt-8">
              <h3 className="font-heading font-bold text-xl mb-4">Linha do Tempo</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-red rounded-full mr-4"></div>
                  <span className="font-bold mr-2">2010:</span> Começou como Faixa Branca
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-red rounded-full mr-4"></div>
                  <span className="font-bold mr-2">2014:</span> Campeão Estadual Faixa Roxa
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-red rounded-full mr-4"></div>
                  <span className="font-bold mr-2">2018:</span> Graduação Faixa Preta
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-red rounded-full mr-4"></div>
                  <span className="font-bold mr-2">2020:</span> Abertura da GFTEAM DC
                </li>
              </ul>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* FOTO 1 (Superior Esquerda) */}
            <div className="relative h-64 rounded-lg overflow-hidden translate-y-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
               <img 
                  src="https://i.imgur.com/FmyA3Pc.png"
                  alt="Deivid Dias Sorrindo"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
               />
            </div>

            {/* FOTO 2 (Superior Direita) */}
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
               <img 
                  src="https://i.imgur.com/4lN4yRt.png"
                  alt="Posição de Luta"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
               />
            </div>

            {/* FOTO 3 (Inferior Esquerda) */}
            <div className="relative h-64 rounded-lg overflow-hidden translate-y-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
               <img 
                  src="https://i.imgur.com/arK9jql.png"
                  alt="Com Alunos"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
               />
            </div>

            {/* FOTO 4 (Inferior Direita) */}
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
               <img 
                  src="https://i.imgur.com/Zb7r7vk.png"
                  alt="Detalhe Faixa Preta"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
               />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};