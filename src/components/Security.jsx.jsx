import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Server, FileCheck, CheckCircle, Eye } from 'lucide-react';

const certifications = [
  { name: "PCI DSS", desc: "Niveau 1", color: "bg-blue-50 text-blue-700" },
  { name: "ISO 27001", desc: "Sécurité Info", color: "bg-purple-50 text-purple-700" },
  { name: "Banque d'Algérie", desc: "Agréé", color: "bg-emerald-50 text-emerald-700" },
  { name: "CIB", desc: "Certifié", color: "bg-orange-50 text-orange-700" },
];

const features = [
  {
    title: "Chiffrement Militaire",
    desc: "Vos données sont cryptées en AES-256 bits, le même standard utilisé par les banques mondiales.",
    icon: <Lock size={24} />
  },
  {
    title: "Conformité Réglementaire",
    desc: "Application stricte des directives de la Banque d'Algérie et protection des données personnelles.",
    icon: <FileCheck size={24} />
  },
  {
    title: "Surveillance 24/7",
    desc: "Nos algorithmes anti-fraude surveillent vos transactions en temps réel pour bloquer toute activité suspecte.",
    icon: <Eye size={24} />
  },
  {
    title: "Hébergement Sécurisé",
    desc: "Serveurs redondants et sauvegardes automatiques pour garantir qu'aucune donnée ne soit jamais perdue.",
    icon: <Server size={24} />
  }
];

const Security = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="securite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- Colonne Gauche : Visuel Animé (Bouclier) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            {/* Cercle de fond */}
            <div className="absolute inset-0 bg-[#18223D]/5 rounded-full blur-3xl transform scale-90"></div>
            
            {/* Carte de Sécurité Centrale */}
            <div className="relative bg-white border border-gray-100 rounded-[3rem] p-10 shadow-2xl flex flex-col items-center text-center max-w-md mx-auto">
                
                {/* Icône Bouclier Animée */}
                <div className="w-24 h-24 bg-[#18223D] rounded-3xl flex items-center justify-center text-white mb-8 shadow-xl shadow-[#18223D]/20 relative overflow-hidden">
                    <ShieldCheck size={48} />
                    {/* Effet de brillance qui passe */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent w-full h-full -translate-x-full animate-[shimmer_2s_infinite]"></div>
                </div>

                <h3 className="text-2xl font-bold text-[#18223D] mb-2">Protection Active</h3>
                <p className="text-gray-500 mb-8">Votre argent et vos données sont protégés par les meilleurs protocoles de sécurité.</p>

                {/* Badges Grid */}
                <div className="grid grid-cols-2 gap-4 w-full">
                    {certifications.map((cert, i) => (
                        <div key={i} className={`p-3 rounded-2xl flex flex-col items-center justify-center ${cert.color} border border-black/5`}>
                            <span className="font-bold text-sm">{cert.name}</span>
                            <span className="text-[10px] uppercase font-bold opacity-70">{cert.desc}</span>
                        </div>
                    ))}
                </div>

                {/* Floating "Verified" Badge */}
                <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 bg-white p-3 rounded-2xl shadow-lg border border-green-100 flex items-center gap-2"
                >
                    <div className="bg-green-100 p-1.5 rounded-full text-green-600">
                        <CheckCircle size={16} />
                    </div>
                    <span className="text-xs font-bold text-gray-800">Système Vérifié</span>
                </motion.div>

            </div>
          </motion.div>

          {/* --- Colonne Droite : Textes --- */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18223D]/10 text-[#18223D] text-xs font-bold uppercase tracking-wider mb-6">
                Confiance & Sérénité
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Sécurité bancaire de <br/>
              <span className="text-[#18223D]">classe mondiale.</span>
            </h2>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              Nous ne faisons aucun compromis sur la sécurité. Notre infrastructure respecte les normes internationales et locales les plus strictes.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
                {features.map((feature, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col items-start"
                    >
                        <div className="p-3 bg-gray-50 rounded-2xl text-[#18223D] mb-4 border border-gray-100">
                            {feature.icon}
                        </div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">{feature.title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            {feature.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Security;