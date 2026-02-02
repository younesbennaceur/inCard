import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#18223D] text-white pt-20 pb-10 rounded-t-[3rem] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section : Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1: Brand & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
               {/* Logo Image */}
               <img src="/logo.png" alt="InCard Logo" className="h-10 w-auto object-contain bg-white rounded-lg p-1" />
               <span className="font-bold text-2xl tracking-tight text-white">InCard</span>
            </div>
            <p className="text-blue-200/80 text-sm leading-relaxed max-w-xs">
              La solution de paiement nouvelle génération en Algérie. Gérez, économisez et profitez de la liberté financière.
            </p>
            
            <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 text-sm text-blue-200/80 hover:text-white transition-colors cursor-pointer">
                    <Mail size={16} />
                    <span>contact@incard.dz</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-blue-200/80 hover:text-white transition-colors cursor-pointer">
                    <Phone size={16} />
                    <span>+213 23 00 00 00</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-blue-200/80 hover:text-white transition-colors cursor-pointer">
                    <MapPin size={16} />
                    <span>Sidi Yahia, Hydra, Alger</span>
                </div>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6">Entreprise</h4>
            <ul className="space-y-4 text-sm text-blue-200/70">
                <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carrières</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Presse</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Col 3: Support (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-blue-200/70">
                <li><a href="#" className="hover:text-white transition-colors">Centre d'aide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sécurité</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CGU</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Confidentialité</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-bold text-lg mb-4">Restez informé</h4>
            <p className="text-blue-200/70 text-sm mb-6">
                Recevez nos dernières actualités et conseils financiers directement dans votre boîte mail.
            </p>
            
            <form className="flex gap-2">
                <input 
                    type="email" 
                    placeholder="Votre email" 
                    className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-blue-200/50 focus:outline-none focus:bg-white/20 focus:border-white transition-all"
                />
                <button className="bg-white text-[#18223D] px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center font-bold">
                    <Send size={18} />
                </button>
            </form>

            <div className="mt-8">
                <p className="text-xs font-bold text-blue-200/50 uppercase tracking-wider mb-4">Suivez-nous</p>
                <div className="flex gap-4">
                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                        <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#18223D] transition-all text-white border border-white/10">
                            <Icon size={18} />
                        </a>
                    ))}
                </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar : Legal & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-blue-200/50">
                © 2026 InCard Algérie. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm text-blue-200/50">
                <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
                <a href="#" className="hover:text-white transition-colors">Politique de Cookies</a>
                <a href="#" className="hover:text-white transition-colors">Plan du site</a>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;