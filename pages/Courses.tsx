import React from "react";
import { Button } from "../components/ui/Button";
import { CheckCircle } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Fundamentos da Faixa Branca",
    description: "Tudo o que você precisa saber para sobreviver e evoluir nos seus primeiros meses de tatame.",
    price: "$ 69.00",
    image: "https://i.imgur.com/gErgXeS.png",
    features: ["Defesas Básicas", "Fugas de Quadril", "Etiqueta no Tatame"],
    position: "object-[center_20%]" // Adjusted to frame face better
  },
  {
    id: 2,
    title: "Passagem de Guarda Indestrutível",
    description: "Minha metodologia pessoal para passar qualquer guarda, usando pressão e técnica precisa.",
    price: "$ 99.00",
    image: "https://i.imgur.com/nmTTyO1.png",
    features: ["Pressão Constante", "Anulação de Ganchos", "Finalizações na Passagem"],
    position: "object-[center_20%]" // Adjusted to frame face better
  },
  {
    id: 3,
    title: "Defesa Pessoal Completa",
    description: "O Jiu-Jitsu original. Aprenda a se defender em situações reais de rua.",
    price: "$ 49.00",
    image: "https://i.imgur.com/cONtvma.png",
    features: ["Saída de Gravata", "Defesa contra Socos", "Controle no Solo"],
    position: "object-[center_20%]" // Adjusted to frame face better
  }
];

export const Courses: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-brand-red py-16 text-center text-white shadow-md">
        <h1 className="text-4xl font-heading font-bold uppercase">Cursos Online</h1>
        <p className="mt-2 opacity-90 max-w-2xl mx-auto px-4">Leve o conhecimento do Professor Deivid Dias para onde você for. Acesso vitalício e certificado de conclusão.</p>
      </div>

      <div className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col group">
              {/* Increased height from h-56 to h-80 to make it more square and show more of the photo */}
              <div className="relative h-80 w-full overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${course.position || 'object-center'}`}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-brand-red transition-colors">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">{course.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {course.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <CheckCircle size={16} className="text-brand-red mr-2" /> {feat}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <span className="block text-2xl font-bold text-brand-black mb-3">{course.price}</span>
                  <Button className="w-full justify-center">Comprar Agora</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};