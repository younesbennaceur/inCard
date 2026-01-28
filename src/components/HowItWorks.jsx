import React from 'react';
import { motion } from 'framer-motion';
import { Download, CreditCard, Wallet, SmilePlus } from 'lucide-react';

const steps = [
  {
    icon: <Download size={24} />,
    title: "1. Téléchargez",
    desc: "Créez votre compte en 2 minutes sur iOS ou Android.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: <CreditCard size={24} />,
    title: "2. Activez",
    desc: "Recevez votre carte virtuelle instantanément ou commandez la physique.",
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    icon: <Wallet size={24} />,
    title: "3. Rechargez",
    desc: "Alimentez votre compte via virement ou carte bancaire.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: <SmilePlus size={24} />,
    title: "4. Profitez",
    desc: "Payez et cumulez des points de fidélité à chaque achat.",
    color: "bg-orange-50 text-orange-600"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-wide text-emerald-600 uppercase mb-2">Simplicité</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Commencez en quelques minutes.
          </h3>
          <p className="text-gray-500 text-lg">Pas de paperasse, pas de frais cachés. Juste une expérience fluide.</p>
        </div>

        {/* Grille des étapes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Ligne de connexion (Desktop seulement) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-100 -z-10"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
              <p className="text-gray-500 leading-relaxed text-sm">
                {step.desc}
              </p>
              
              {/* Numéro discret en arrière plan */}
              <div className="absolute top-4 right-6 text-6xl font-bold text-gray-50 opacity-50 select-none -z-10 group-hover:text-gray-100 transition-colors">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;