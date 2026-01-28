import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Apple, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#FAFAFA]">
      
      {/* Background Gradients (Soft Glow) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-emerald-100/60 rounded-full blur-3xl opacity-50 mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-3xl opacity-50 mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* --- Colonne Gauche : Texte --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-semibold tracking-wide text-gray-600">L'application financière de demain</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              Gérez tout, <br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">sans effort.</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Une interface épurée pour suivre vos dépenses, payer sans contact et maximiser vos avantages fidélité. Le tout sécurisé et instantané.
            </p>

            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="flex items-center justify-center gap-2 bg-emerald-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-900/20 hover:-translate-y-1">
                Télécharger l'app
                <ArrowRight size={18} />
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-gray-700 bg-white border border-gray-200 hover:border-emerald-200 hover:bg-emerald-50 transition-all">
                Voir la démo
              </button>
            </div>

            {/* Preuve Sociale & Stores */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-gray-200/60">
                <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                        {[1,2,3].map(i => (
                           <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                               <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="user" className="w-full h-full object-cover"/>
                           </div>
                        ))}
                    </div>
                    <div>
                        <div className="flex text-yellow-400 text-sm">★★★★★</div>
                        <p className="text-xs text-gray-500 font-medium">4.9/5 sur les stores</p>
                    </div>
                </div>
                
                <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>

                <div className="flex gap-4 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <Apple size={24} />
                    <Play size={24} />
                </div>
            </div>
          </motion.div>

          {/* --- Colonne Droite : 3 Mockups Flottants --- */}
          <div className="relative h-[600px] w-full flex items-center justify-center perspective-1000">
            
            {/* Screen 2 (Gauche - Arrière plan) */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -10 }}
              animate={{ opacity: 1, x: 0, rotate: -6 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute left-0 lg:left-4 top-20 z-10 w-[260px] md:w-[280px]"
            >
               <motion.div
                 animate={{ y: [0, -15, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               >
                 <img 
                    src="/screen2.png" 
                    alt="App Screen 2" 
                    className="w-full rounded-[2.5rem] shadow-2xl border-[6px] border-white shadow-emerald-900/10"
                 />
               </motion.div>
            </motion.div>

            {/* Screen 3 (Droite - Arrière plan) */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 10 }}
              animate={{ opacity: 1, x: 0, rotate: 6 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute right-0 lg:right-4 bottom-20 z-10 w-[260px] md:w-[280px]"
            >
               <motion.div
                 animate={{ y: [0, 15, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               >
                 <img 
                    src="/screen3.png" 
                    alt="App Screen 3" 
                    className="w-full rounded-[2.5rem] shadow-2xl border-[6px] border-white shadow-blue-900/10"
                 />
               </motion.div>
            </motion.div>

            {/* Screen 1 (Centre - Premier plan - Focus) */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0 }}
              className="relative z-20 w-[280px] md:w-[320px]"
            >
               <motion.div
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               >
                  {/* Effet Glare/Reflet sur l'écran principal */}
                 <div className="relative rounded-[3rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border-[8px] border-white bg-black">
                     <img 
                        src="/screen1.png" 
                        alt="App Main Screen" 
                        className="w-full h-auto object-cover"
                     />
                     {/* Reflet subtil */}
                     <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
                 </div>
               </motion.div>

                {/* Floating Badge attached to main screen */}
                <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                    className="absolute -right-8 top-1/3 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-white/50 flex flex-col items-center gap-1"
                >
                    <div className="font-bold text-emerald-600 text-lg">+1250</div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase">Points</div>
                </motion.div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;