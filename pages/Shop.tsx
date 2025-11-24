import React, { useState } from "react";
import { Button } from "../components/ui/Button";

const products = [
  { 
    id: 1, 
    name: "Official White Gi", 
    price: "$ 150.00", 
    category: "Kimonos", 
    // TROQUE A FOTO DO PRODUTO 1 AQUI:
    img: "https://i.imgur.com/CR5fDyv.png" 
  },
  { 
    id: 2, 
    name: "No-Gi Team Rashguard", 
    price: "$ 60.00", 
    category: "Rashguards", 
    // TROQUE A FOTO DO PRODUTO 2 AQUI:
    img: "https://i.imgur.com/tj7Xt8Q.png" 
  },
  { 
    id: 3, 
    name: "Custom Sandals", 
    price: "$ 25.00", 
    category: "Accessories", 
    // TROQUE A FOTO DO PRODUTO 3 AQUI:
    img: "https://i.imgur.com/Zzvtnl1.png" 
  },
  { 
    id: 4, 
    name: "Deivid Dias Casual Tee", 
    price: "$ 35.00", 
    category: "Clothing", 
    // TROQUE A FOTO DO PRODUTO 4 AQUI:
    img: "https://i.imgur.com/h4CHfE8.png" 
  },
  { 
    id: 5, 
    name: "Competition Blue Gi", 
    price: "$ 160.00", 
    category: "Kimonos", 
    // TROQUE A FOTO DO PRODUTO 5 AQUI:
    img: "https://i.imgur.com/Ey5GJJG.png" 
  },
  { 
    id: 6, 
    name: "Premium Black Belt", 
    price: "$ 50.00", 
    category: "Accessories", 
    // TROQUE A FOTO DO PRODUTO 6 AQUI:
    img: "https://i.imgur.com/JT47RQw.png" 
  },
];

export const Shop: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Kimonos", "Rashguards", "Accessories", "Clothing"];

  const filteredProducts = activeFilter === "All" 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <div className="bg-white pb-20">
      <div className="bg-brand-black py-12 text-center text-white mb-10">
        <h1 className="text-4xl font-heading font-bold uppercase">Official Shop</h1>
        <p className="text-gray-400 mt-2">Products tested and approved by the Professor.</p>
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
                  <span className="text-white font-bold text-sm uppercase">View Details</span>
                </div>
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-black group-hover:text-brand-red transition-colors">{product.name}</h3>
              <p className="text-brand-red font-bold text-lg mb-3">{product.price}</p>
              <Button variant="white" className="w-full border border-gray-200">Add to Cart</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};