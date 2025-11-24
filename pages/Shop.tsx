import React, { useState } from "react";
import { Button } from "../components/ui/Button";

const products = [
  { 
    id: 1, 
    name: "Kimono Branco Oficial", 
    price: "$ 150.00", 
    category: "Kimonos", 
    img: "https://i.imgur.com/CR5fDyv.png" 
  },
  { 
    id: 2, 
    name: "Rashguard No-Gi da Equipe", 
    price: "$ 60.00", 
    category: "Rashguards", 
    img: "https://i.imgur.com/tj7Xt8Q.png" 
  },
  { 
    id: 3, 
    name: "Chinelos Personalizados", 
    price: "$ 25.00", 
    category: "Acessórios", 
    img: "https://i.imgur.com/Zzvtnl1.png" 
  },
  { 
    id: 4, 
    name: "Camiseta Casual Deivid Dias", 
    price: "$ 35.00", 
    category: "Roupas", 
    img: "https://i.imgur.com/h4CHfE8.png" 
  },
  { 
    id: 5, 
    name: "Kimono Azul de Competição", 
    price: "$ 160.00", 
    category: "Kimonos", 
    img: "https://i.imgur.com/Ey5GJJG.png" 
  },
  { 
    id: 6, 
    name: "Faixa Preta Premium", 
    price: "$ 50.00", 
    category: "Acessórios", 
    img: "https://i.imgur.com/JT47RQw.png" 
  },
];

export const Shop: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const filters = ["Todos", "Kimonos", "Rashguards", "Acessórios", "Roupas"];

  const filteredProducts = activeFilter === "Todos" 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <div className="bg-white pb-20">
      <div className="bg-brand-black py-12 text-center text-white mb-10">
        <h1 className="text-4xl font-heading font-bold uppercase">Loja Oficial</h1>
        <p className="text-gray-400 mt-2">Produtos testados e aprovados pelo Professor.</p>
      </div>

      <div className="container mx-auto px-4">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                activeFilter === filter 
                  ? "bg-brand-red text-white shadow-md transform scale-105" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative h-80 w-full bg-gray-100 rounded-lg overflow-hidden mb-4 border border-gray-100">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Tag de Categoria */}
                <div className="absolute top-2 left-2 bg-brand-black text-white text-xs px-2 py-1 uppercase font-bold tracking-wider">
                  {product.category}
                </div>
                {/* Quick Add Overlay (Desktop) */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center">
                  <span className="text-white font-bold text-sm uppercase">Ver Detalhes</span>
                </div>
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-black group-hover:text-brand-red transition-colors">{product.name}</h3>
              <p className="text-brand-red font-bold text-lg mb-3">{product.price}</p>
              <Button variant="white" className="w-full border border-gray-200">Adicionar ao Carrinho</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};