import React from 'react';
import { motion } from 'framer-motion';
import { Building2, PieChart, Users, Settings, ArrowRight, Check, Search, Bell } from 'lucide-react';

const features = [
  { title: "Avantages sociaux clé en main", desc: "Tickets restaurants, chèques cadeaux, primes..." },
  { title: "Gestion centralisée", desc: "Distribuez les soldes à 1000 employés en 1 clic." },
  { title: "Reporting détaillé", desc: "Suivez l'utilisation et optimisez vos budgets." },
  { title: "Personnalisation", desc: "Cartes aux couleurs de votre entreprise." },
];

const Enterprise = () => {
  return (
    <section className="py-24 bg-[#FAFAFA] overflow-hidden" id="entreprises-b2b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* --- Colonne Gauche : Texte & Features --- */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#18223D] text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
                Solution Employeur
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Modernisez vos <br/>
              <span className="text-[#18223D]">avantages sociaux.</span>
            </h2>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              Fini les chèques papier et la gestion administrative lourde. Offrez à vos employés une carte moderne qu'ils adoreront utiliser.
            </p>

            <div className="space-y-8 mb-10">
              {features.map((feat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-[#18223D] flex-shrink-0">
                    <Check size={18} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{feat.title}</h4>
                    <p className="text-sm text-gray-500">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="bg-[#18223D] text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-[#18223D]/20 hover:opacity-90 transition-all flex items-center gap-2 active:scale-95">
              Demander une démo
              <ArrowRight size={18} />
            </button>
          </div>

          {/* --- Colonne Droite : Dashboard Mockup (CSS Pure) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            {/* Décoration d'arrière-plan */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#18223D]/5 to-blue-50 rounded-[3rem] -z-10 blur-xl"></div>
            
            {/* Cadre du Dashboard */}
            <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden relative">
                
                {/* 1. Sidebar */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-[#18223D] flex flex-col items-center py-8 gap-8 z-10">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white font-bold">E</div>
                    <div className="flex flex-col gap-6 w-full items-center">
                        <div className="p-3 bg-white/20 rounded-xl text-white cursor-pointer"><PieChart size={20}/></div>
                        <div className="p-3 text-white/40 hover:text-white cursor-pointer transition-colors"><Users size={20}/></div>
                        <div className="p-3 text-white/40 hover:text-white cursor-pointer transition-colors"><Building2 size={20}/></div>
                        <div className="p-3 text-white/40 hover:text-white cursor-pointer transition-colors"><Settings size={20}/></div>
                    </div>
                </div>

                {/* 2. Main Content Area */}
                <div className="pl-20">
                    {/* Header App */}
                    <div className="h-20 border-b border-gray-100 flex items-center justify-between px-8 bg-white">
                        <h3 className="font-bold text-gray-800">Vue d'ensemble</h3>
                        <div className="flex items-center gap-4">
                             <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
                                <Search size={14} className="text-gray-400"/>
                                <span className="text-xs text-gray-400">Rechercher...</span>
                             </div>
                             <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 relative">
                                <Bell size={16}/>
                                <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
                             </div>
                             <div className="w-8 h-8 rounded-full bg-[#18223D] text-white flex items-center justify-center text-xs font-bold">HR</div>
                        </div>
                    </div>

                    {/* Dashboard Body */}
                    <div className="p-8 bg-gray-50/50">
                        
                        {/* Stats Cards */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                                <div className="text-xs text-gray-500 font-bold uppercase mb-1">Budget Mensuel</div>
                                <div className="text-2xl font-bold text-gray-900">2.5M <span className="text-sm text-gray-400 font-normal">DZD</span></div>
                                <div className="mt-2 text-xs font-medium text-green-600 bg-green-50 inline-block px-2 py-1 rounded">+12% vs N-1</div>
                            </div>
                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                                <div className="text-xs text-gray-500 font-bold uppercase mb-1">Employés Actifs</div>
                                <div className="text-2xl font-bold text-gray-900">1,248</div>
                                <div className="mt-2 flex -space-x-2">
                                    {[1,2,3,4].map(i => (
                                        <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border border-white"></div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Chart Simulation */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
                            <div className="flex justify-between items-center mb-6">
                                <h4 className="font-bold text-gray-800 text-sm">Dépenses par catégorie</h4>
                                <div className="text-xs text-gray-400">30 derniers jours</div>
                            </div>
                            <div className="flex items-end gap-3 h-32 pl-2 pb-2 border-l border-b border-gray-100">
                                {[40, 65, 30, 80, 55, 90, 45].map((h, i) => (
                                    <div key={i} className="flex-1 bg-[#18223D] rounded-t-md opacity-90 hover:opacity-100 transition-opacity relative group" style={{ height: `${h}%` }}>
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                            {h}%
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Transactions List */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-100 font-bold text-sm text-gray-800">Dernières distributions</div>
                            {[
                                { name: "Prime Aïd", date: "Aujourd'hui", amount: "- 450k", status: "Succès" },
                                { name: "Recharge Déj.", date: "Hier", amount: "- 120k", status: "En cours" }
                            ].map((row, i) => (
                                <div key={i} className="px-6 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-2 h-2 rounded-full ${i===0 ? 'bg-green-500' : 'bg-orange-400'}`}></div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-800">{row.name}</div>
                                            <div className="text-xs text-gray-400">{row.date}</div>
                                        </div>
                                    </div>
                                    <div className="text-sm font-bold text-gray-900">{row.amount}</div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            {/* Floating Element (Notification) */}
            <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 -right-4 md:-right-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-20 flex items-center gap-3"
            >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Check size={20} strokeWidth={3} />
                </div>
                <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Distribution</p>
                    <p className="text-sm font-bold text-gray-900">Envoyée avec succès</p>
                </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Enterprise;