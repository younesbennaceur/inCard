import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, ArrowRight, User, CreditCard, Banknote, Gift, Store } from 'lucide-react';

const categories = [
  { id: 'compte', label: 'Compte', icon: <User size={18} /> },
  { id: 'carte', label: 'Carte', icon: <CreditCard size={18} /> },
  { id: 'paiements', label: 'Paiements', icon: <Banknote size={18} /> },
  { id: 'fidelite', label: 'Fidélité', icon: <Gift size={18} /> },
  { id: 'commercants', label: 'Pro', icon: <Store size={18} /> },
];

const faqData = {
  compte: [
    { question: "Comment ouvrir un compte ?", answer: "Téléchargez l'application, scannez votre pièce d'identité et prenez un selfie. Votre compte est validé en moins de 2 minutes grâce à notre IA." },
    { question: "Quels documents sont nécessaires ?", answer: "Une simple pièce d'identité biométrique (CNI ou Passeport) en cours de validité suffit pour l'offre standard." },
    { question: "Est-ce gratuit ?", answer: "L'ouverture et la tenue de compte sont 100% gratuites pour les particuliers. Aucuns frais cachés." },
  ],
  carte: [
    { question: "Comment commander ma carte physique ?", answer: "Rendez-vous dans l'onglet 'Carte' de l'app, choisissez votre design et validez. Elle sera livrée chez vous sous 5 jours ouvrés." },
    { question: "Puis-je utiliser ma carte à l'étranger ?", answer: "Oui, votre carte est acceptée dans le monde entier (réseau Visa/Mastercard) sans frais de change sur les 1000 premiers euros." },
    { question: "Que faire en cas de perte ?", answer: "Bloquez votre carte instantanément depuis l'application. Vous pouvez la débloquer tout aussi facilement si vous la retrouvez." },
  ],
  paiements: [
    { question: "Quels sont les plafonds de paiement ?", answer: "Par défaut, 50.000 DZD/semaine. Vous pouvez ajuster ces plafonds en temps réel depuis les paramètres de sécurité." },
    { question: "Le sans-contact est-il sécurisé ?", answer: "Absolument. Il est limité à 5000 DZD par transaction et nous demandons votre code PIN aléatoirement pour vérifier votre identité." },
  ],
  fidelite: [
    { question: "Comment fonctionnent les points ?", answer: "Chaque achat vous rapporte des points. 100 DZD dépensés = 1 point. Vos points sont convertibles en cash ou en bons d'achat." },
    { question: "Les points expirent-ils ?", answer: "Vos points sont valables 2 ans. Tant que vous utilisez votre carte au moins une fois par mois, leur validité est prolongée." },
  ],
  commercants: [
    { question: "Quels sont les frais pour les pros ?", answer: "Nous prélevons une commission fixe de 1.5% par transaction, sans frais d'installation ni abonnement mensuel." },
    { question: "Comment recevoir mon terminal ?", answer: "Après validation de votre dossier K-bis, nous vous envoyons un terminal de paiement Android dernière génération sous 48h." },
  ]
};

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('compte');
  const [openIndex, setOpenIndex] = useState(0); // Le premier item est ouvert par défaut

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#18223D]/5 rounded-2xl text-[#18223D] mb-6">
             <HelpCircle size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Questions Fréquentes</h2>
          <p className="text-gray-500 text-lg">Tout ce que vous devez savoir pour démarrer.</p>
        </div>

        {/* Categories Tabs (Scrollable on mobile) */}
        <div className="flex overflow-x-auto pb-4 mb-10 gap-3 justify-start md:justify-center no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveTab(cat.id); setOpenIndex(null); }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all border ${
                activeTab === cat.id 
                  ? 'bg-[#18223D] text-white border-[#18223D] shadow-lg shadow-[#18223D]/20' 
                  : 'bg-white text-gray-500 border-gray-200 hover:border-[#18223D]/30 hover:text-[#18223D]'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {faqData[activeTab].map((item, index) => (
                <div 
                  key={index} 
                  className={`mb-4 rounded-3xl border transition-all duration-300 overflow-hidden ${
                    openIndex === index 
                      ? 'bg-[#18223D]/5 border-[#18223D]/10' 
                      : 'bg-white border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className={`font-bold text-lg ${openIndex === index ? 'text-[#18223D]' : 'text-gray-800'}`}>
                      {item.question}
                    </span>
                    <span className={`p-2 rounded-full transition-colors ${
                        openIndex === index ? 'bg-[#18223D] text-white' : 'bg-gray-100 text-gray-400'
                    }`}>
                      {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Link */}
        <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">Vous ne trouvez pas votre réponse ?</p>
            <a href="#" className="inline-flex items-center gap-2 text-[#18223D] font-bold hover:gap-3 transition-all">
                Visiter le centre d'aide complet
                <ArrowRight size={18} />
            </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;