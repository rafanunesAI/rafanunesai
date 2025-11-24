import React from "react";
import { Button } from "../components/ui/Button";
import { CheckCircle } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "White Belt Fundamentals",
    description: "Everything you need to know to survive and evolve in your first months on the mats.",
    price: "$ 69.00",
    // TROQUE A FOTO DO CURSO 1 AQUI NO 'image':
    image: "https://i.imgur.com/gErgXeS.png",
    features: ["Basic Defenses", "Hip Escapes", "Mat Etiquette"],
    position: "object-[center_20%]" // Adjusted to frame face better
  },
  {
    id: 2,
    title: "Indestructible Guard Passing",
    description: "My personal methodology to pass any guard, using pressure and precise technique.",
    price: "$ 99.00",
    // TROQUE A FOTO DO CURSO 2 AQUI NO 'image':
    image: "https://i.imgur.com/nmTTyO1.png",
    features: ["Constant Pressure", "Hook Annulment", "Passing Submissions"],
    position: "object-[center_20%]" // Adjusted to frame face better
  },
  {
    id: 3,
    title: "Complete Self-Defense",
    description: "The original Jiu-Jitsu. Learn to defend yourself in real street situations.",
    price: "$ 49.00",
    // TROQUE A FOTO DO CURSO 3 AQUI NO 'image':
    image: "https://i.imgur.com/cONtvma.png",
    features: ["Headlock Escape", "Punch Defense", "Ground Control"],
    position: "object-[center_20%]" // Adjusted to frame face better
  }
];

export const Courses: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-brand-red py-16 text-center text-white shadow-md">
        <h1 className="text-4xl font-heading font-bold uppercase">Online Courses</h1>
        <p className="mt-2 opacity-90 max-w-2xl mx-auto px-4">Take Professor Deivid Dias's knowledge wherever you go. Lifetime access and certificate of completion.</p>
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
                  <Button className="w-full justify-center">Buy Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};