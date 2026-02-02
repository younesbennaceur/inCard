import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, PiggyBank, Globe, ShieldCheck } from 'lucide-react';

const Benefits = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="utilisateurs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
        {/* Block 1: Économies (Image Droite plus petite) */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Colonne Texte (Plus large : 7/12) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18223D]/10 text-[#18223D] text-xs font-bold uppercase tracking-wider mb-6">
                    Cashback & Points
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                    Faites des économies sur <br/>chaque transaction.
                </h2>
                <p className="text-lg text-gray-500 mb-8 max-w-lg">
                    Ne dépensez plus sans rien recevoir en retour. Notre algorithme détecte automatiquement les meilleures offres et applique les réductions instantanément.
                </p>
                <ul className="space-y-4">
                    {['Jusqu\'à 5% de cashback chez nos partenaires', 'Conversion des points en argent réel', 'Offres exclusives personnalisées'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                            <CheckCircle2 className="text-[#18223D] flex-shrink-0" size={24} />
                            <span className="text-gray-700 font-medium">{item}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>
            
            {/* Colonne Image (Plus petite : 5/12) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
                {/* Visual Placeholder plus compact */}
                <div className="relative rounded-[2.5rem] bg-[#18223D]/5 p-6 border border-[#18223D]/10 shadow-2xl max-w-sm mx-auto lg:mr-0">
                    <img src="/screen3.png" alt="Loyalty points screen" className="rounded-[1.5rem] shadow-lg border-4 border-white mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-500 w-full h-auto" />
                    
                    {/* Floating Stat Card */}
                    <div className="absolute bottom-8 -left-8 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow border border-gray-100">
                        <div className="bg-[#18223D]/10 p-2.5 rounded-full text-[#18223D]">
                            <TrendingUp size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-500 font-bold uppercase">Économisé</p>
                            <p className="text-lg font-bold text-gray-900">12,450 DA</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* Block 2: Liberté (Image Gauche plus petite) */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
             {/* Colonne Image (Plus petite : 5/12) */}
             <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative order-2 lg:order-1"
            >
                <div className="relative rounded-[2.5rem] bg-[#18223D]/5 p-6 border border-[#18223D]/10 shadow-2xl max-w-sm mx-auto lg:ml-0">
                    <img src="/screen1.png" alt="Dashboard screen" className="rounded-[1.5rem] shadow-lg border-4 border-white mx-auto transform -rotate-3 hover:rotate-0 transition-transform duration-500 w-full h-auto" />
                    
                    {/* Floating Element */}
                    <div className="absolute top-8 -right-8 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100">
                        <div className="bg-purple-50 p-2.5 rounded-full text-purple-600">
                            <PiggyBank size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-500 font-bold uppercase">Budget</p>
                            <p className="text-lg font-bold text-gray-900">Maîtrisé</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Colonne Texte (Plus large : 7/12) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 order-1 lg:order-2"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                    Liberté Totale
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                    Payez où vous voulez,<br/> quand vous voulez.
                </h2>
                <p className="text-lg text-gray-500 mb-8 max-w-lg">
                    Une acceptation universelle. Que ce soit en ligne, en magasin ou à l'étranger, votre carte vous suit partout sans frais cachés.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#18223D]/20 transition-colors group">
                        <Globe className="text-gray-400 group-hover:text-[#18223D] mb-3 transition-colors" size={28} />
                        <h4 className="font-bold text-gray-900 text-lg mb-1">Universel</h4>
                        <p className="text-sm text-gray-500">Accepté par 99% des commerçants.</p>
                    </div>
                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#18223D]/20 transition-colors group">
                        <ShieldCheck className="text-gray-400 group-hover:text-[#18223D] mb-3 transition-colors" size={28} />
                        <h4 className="font-bold text-gray-900 text-lg mb-1">Instantané</h4>
                        <p className="text-sm text-gray-500">Notifications en temps réel.</p>
                    </div>
                </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Benefits;