import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    type: "Utilisateur",
    name: "Sarah K.",
    role: "Architecte",
    image: "https://i.pravatar.cc/150?img=32",
    content: "L'application a complètement changé ma façon de gérer mon budget. Le cashback est instantané et je l'utilise partout à Alger.",
    rating: 5
  },
  {
    id: 2,
    type: "Commerçant",
    name: "Le Gourmet Burger",
    role: "Partenaire Restaurateur",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    content: "Depuis que nous acceptons cette carte, nous avons vu une augmentation de 20% de nouveaux clients. Le système est fiable et rapide.",
    rating: 5
  },
  {
    id: 3,
    type: "Entreprise",
    name: "TechSolutions DZ",
    role: "Directeur RH",
    image: "https://i.pravatar.cc/150?img=11",
    content: "La distribution des primes est passée de 3 jours à 3 minutes. Nos employés adorent la flexibilité de la carte.",
    rating: 5
  },
  {
    id: 4,
    type: "Utilisateur",
    name: "Amine M.",
    role: "Étudiant",
    image: "https://i.pravatar.cc/150?img=53",
    content: "J'adore l'interface ! C'est fluide, moderne et surtout je peux bloquer ma carte en un clic si je ne la trouve pas.",
    rating: 4
  },
  {
    id: 5,
    type: "Commerçant",
    name: "Zara Store",
    role: "Gérant",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg", // Logo Zara
    content: "L'intégration a été très simple. C'est un plaisir de travailler avec une solution locale aussi performante.",
    rating: 5
  }
];

const Testimonials = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // Calcule la largeur totale scrollable
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className="py-24 bg-[#FAFAFA] overflow-hidden" id="temoignages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18223D]/5 text-[#18223D] text-xs font-bold uppercase tracking-wider mb-4 border border-[#18223D]/10">
              Ils nous font confiance
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Aimé par les utilisateurs, <br/>
            approuvé par les pros.
          </h2>
        </div>

        {/* Carousel Container */}
        <motion.div ref={carousel} className="cursor-grab active:cursor-grabbing overflow-hidden">
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }} 
            className="flex gap-6 pb-12"
          >
            {testimonials.map((item) => (
              <motion.div 
                key={item.id} 
                className="min-w-[320px] md:min-w-[400px] bg-white p-8 rounded-[2.5rem] shadow-lg shadow-gray-200/50 border border-gray-100 relative flex flex-col justify-between"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Quote Icon Background */}
                <div className="absolute top-8 right-8 text-gray-100">
                    <Quote size={60} fill="currentColor" />
                </div>

                <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-6 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} fill={i < item.rating ? "currentColor" : "none"} strokeWidth={i < item.rating ? 0 : 2} className={i >= item.rating ? "text-gray-300" : ""} />
                        ))}
                    </div>

                    {/* Content */}
                    <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8 relative z-10">
                        "{item.content}"
                    </p>
                </div>

                {/* Author Profile */}
                <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#18223D]">{item.name}</h4>
                        <div className="flex items-center gap-2">
                             <span className="text-xs text-gray-400 font-medium">{item.role}</span>
                             <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                             <span className="text-[10px] uppercase font-bold text-[#18223D]/60 tracking-wider">{item.type}</span>
                        </div>
                    </div>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Navigation Hint (Mobile) */}
        <div className="flex justify-center items-center gap-2 text-gray-400 text-sm md:hidden animate-pulse">
            <ChevronLeft size={16} />
            <span>Glissez pour voir plus</span>
            <ChevronRight size={16} />
        </div>

      </div>
    </section>
  );
};

export default Testimonials;