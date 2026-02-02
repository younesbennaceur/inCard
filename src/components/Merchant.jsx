import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, TrendingUp, Users, Shield, Zap } from 'lucide-react';

const benefits = [
  { icon: <Users size={20}/>, text: "Accédez à +150k nouveaux clients" },
  { icon: <TrendingUp size={20}/>, text: "Augmentez votre chiffre d'affaires" },
  { icon: <Shield size={20}/>, text: "Paiements 100% sécurisés garantis" },
  { icon: <Zap size={20}/>, text: "Installation en moins de 48h" },
];

const Merchant = () => {
  return (
    <section className="py-24 bg-white" id="entreprises">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container - LIGHT MODE (Gris doux) */}
        <div className="bg-[#F8FAFC] rounded-[3rem] p-8 md:p-16 relative overflow-hidden border border-gray-100">
          
          {/* Background decorative blobs (Subtle Blue Glows) */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50/60 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* Left Column: Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-[#18223D] font-bold text-xs uppercase tracking-wider mb-6">
                Espace Pro
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#18223D] mb-6 leading-tight">
                Propulsez votre <br/> commerce.
              </h2>
              <p className="text-gray-500 text-lg mb-10 max-w-md">
                Rejoignez le réseau de partenaires le plus dynamique. Une solution de paiement simple, moderne et avantageuse pour vous et vos clients.
              </p>

              <div className="grid sm:grid-cols-2 gap-y-6 gap-x-4 mb-10">
                {benefits.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 p-1.5 bg-[#18223D] rounded-full text-white flex-shrink-0 shadow-md shadow-blue-900/20">
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className="font-medium text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Form Card (White Card on Light Background) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-[#18223D] mb-2">Devenir Partenaire</h3>
              <p className="text-gray-500 text-sm mb-6">Remplissez ce formulaire, un agent vous rappellera.</p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 ml-3 mb-1 uppercase">Nom de l'entreprise</label>
                  <input type="text" placeholder="Ex: Restaurant Le Palmier" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-[#18223D] placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#18223D] focus:ring-1 focus:ring-[#18223D] transition-all" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                   <div>
                    <label className="block text-xs font-bold text-gray-700 ml-3 mb-1 uppercase">Téléphone</label>
                    <input type="tel" placeholder="05 55..." className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-[#18223D] placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#18223D] focus:ring-1 focus:ring-[#18223D] transition-all" />
                   </div>
                   <div>
                    <label className="block text-xs font-bold text-gray-700 ml-3 mb-1 uppercase">Ville</label>
                    <input type="text" placeholder="Alger" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-[#18223D] placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#18223D] focus:ring-1 focus:ring-[#18223D] transition-all" />
                   </div>
                </div>

                <button type="button" className="w-full bg-[#18223D] hover:opacity-90 text-white font-bold py-4 rounded-2xl mt-4 flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#18223D]/20 transform active:scale-95">
                  Rejoindre le réseau
                  <ArrowRight size={20} />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Merchant;