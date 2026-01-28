import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Apple, PlayCircle } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const navLinks = [
    "Accueil", "Comment ça marche", "Avantages", "Partenaires", "Entreprises", "Blog"
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full z-50 top-0 left-0 border-b border-gray-100 bg-white/80 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <img className='h-16' src="/logo.png" alt="" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              {navLinks.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s/g, '-')}`} className="text-gray-600 hover:text-emerald-700 font-semibold transition-colors text-sm">
                  {item}
                </a>
              ))}
            </div>

            {/* CTA Buttons Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="text-emerald-900 font-bold hover:opacity-70 transition-opacity text-sm">
                Devenir partenaire
              </button>
              
              <div className="relative">
                <button 
                  onClick={() => setIsDownloadOpen(!isDownloadOpen)}
                  className="bg-emerald-900 text-white px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/20 active:scale-95 text-sm"
                >
                  Télécharger l'app
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isDownloadOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {isDownloadOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 overflow-hidden z-50"
                    >
                      <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors group">
                        <Apple size={20} className="text-gray-900 group-hover:text-emerald-600 transition-colors" />
                        <span className="text-sm font-medium text-gray-700">App Store</span>
                      </a>
                      <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors group">
                        <PlayCircle size={20} className="text-gray-900 group-hover:text-emerald-600 transition-colors" />
                        <span className="text-sm font-medium text-gray-700">Google Play</span>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Hamburger Button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="p-2 rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-20 z-40 bg-white border-b border-gray-100 lg:hidden overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-4 pb-8 space-y-2 flex flex-col">
              {navLinks.map((item) => (
                <a key={item} href="#" className="block px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-xl transition-colors">
                  {item}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
                <button className="w-full text-center py-3 text-gray-600 font-bold">Devenir partenaire</button>
                <button className="w-full bg-emerald-900 text-white py-4 rounded-xl font-bold shadow-lg flex justify-center items-center gap-2">
                  Télécharger l'app
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;