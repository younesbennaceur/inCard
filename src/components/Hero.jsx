import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Apple, Play, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#FAFAFA]">
      
      {/* Background Gradients (Lueur douce adaptée au bleu) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-[#18223D]/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-3xl opacity-50 mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* --- Colonne Gauche : Texte --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
          >
            {/* Badge animé */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-8 hover:shadow-md transition-shadow cursor-default">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#18223D] opacity-20"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#18223D]"></span>
              </span>
              <span className="text-sm font-semibold tracking-wide text-gray-600">L'application financière de demain</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              Gérez tout, <br />
              <span className="bg-gradient-to-r from-[#18223D] to-blue-600 bg-clip-text text-transparent">sans effort.</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Une interface épurée pour suivre vos dépenses, payer sans contact et maximiser vos avantages fidélité. Le tout sécurisé et instantané.
            </p>

            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
              <button className="flex items-center justify-center gap-2 bg-[#18223D] text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all shadow-xl shadow-[#18223D]/20 hover:-translate-y-1 active:scale-95">
                Télécharger l'app
                <ArrowRight size={18} />
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-gray-700 bg-white border border-gray-200 hover:border-[#18223D]/30 hover:bg-gray-50 transition-all active:scale-95">
                Voir la démo
              </button>
            </div>

            {/* Preuve Sociale & Stores */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8 border-t border-gray-200/60">
                <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                        {[1,2,3].map(i => (
                           <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                               <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="user" className="w-full h-full object-cover"/>
                           </div>
                        ))}
                    </div>
                    <div className="text-left">
                        <div className="flex text-yellow-400 text-sm">
                          {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                        </div>
                        <p className="text-xs text-gray-500 font-bold">4.9/5 sur les stores</p>
                    </div>
                </div>
                
                <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>

                <div className="flex gap-4 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                    <Apple size={24} />
                    <Play size={24} />
                </div>
            </div>
          </motion.div>

          {/* --- Colonne Droite : MOCKUPS CORRIGÉS & COLORISÉS --- */}
          <div className="relative h-[600px] w-full flex items-center justify-center mt-12 lg:mt-0 perspective-1000">
            
            {/* Conteneur de référence (Taille d'un seul téléphone) */}
            <div className="relative w-[280px] md:w-[300px] h-[600px] flex items-center justify-center">

              {/* TÉLÉPHONE GAUCHE (Arrière plan - Dark Card) */}
              <motion.div
                initial={{ opacity: 0, x: -50, rotate: -10 }}
                animate={{ opacity: 1, x: -160, rotate: -15, scale: 0.85 }}
                transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
                className="absolute z-10 w-full"
                style={{ top: '10%' }} 
              >
                 <motion.div
                   animate={{ y: [0, -15, 0] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 >
                   <img 
                      src="/screen2.png" 
                      alt="Dark Mode Screen" 
                      className="w-full rounded-[2.5rem] shadow-2xl border-[4px] border-gray-800/10 shadow-[#18223D]/20 grayscale-[10%]"
                   />
                 </motion.div>
              </motion.div>

              {/* TÉLÉPHONE DROIT (Arrière plan - Points) */}
              <motion.div
                initial={{ opacity: 0, x: 50, rotate: 10 }}
                animate={{ opacity: 1, x: 160, rotate: 15, scale: 0.85 }}
                transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
                className="absolute z-10 w-full"
                style={{ top: '15%' }}
              >
                 <motion.div
                   animate={{ y: [0, 15, 0] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 >
                   <img 
                      src="/screen3.png" 
                      alt="Points Screen" 
                      className="w-full rounded-[2.5rem] shadow-2xl border-[4px] border-gray-800/10 shadow-blue-900/10 grayscale-[10%]"
                   />
                 </motion.div>
              </motion.div>

              {/* TÉLÉPHONE CENTRAL (Premier plan - Main) */}
              <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
                className="relative z-30 w-full"
              >
                 <motion.div
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="relative"
                 >
                   {/* Ombre portée forte pour détacher le centre */}
                   <div className="absolute inset-4 bg-[#18223D]/30 blur-2xl rounded-[3rem] translate-y-8 -z-10"></div>
                   
                   <img 
                      src="/screen1.png" 
                      alt="Main Dashboard Screen" 
                      className="w-full rounded-[3rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border-[8px] border-white bg-gray-900"
                   />
                   
                   {/* Reflet brillant sur l'écran */}
                   <div className="absolute inset-0 rounded-[3rem] ring-1 ring-inset ring-white/10 bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none"></div>

                   {/* Floating Badge (Points gagnés) */}
                   <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.2, type: "spring" }}
                      className="absolute -right-8 top-32 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex flex-col items-center min-w-[90px] z-50"
                   >
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Gagné</span>
                      <span className="text-xl font-bold text-[#18223D]">+1250</span>
                   </motion.div>

                 </motion.div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;