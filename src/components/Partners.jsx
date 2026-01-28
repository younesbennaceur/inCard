import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Navigation } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// --- 1. CONFIGURATION ---

// Fonction pour l'icône personnalisée (Logo rond)
const createBrandIcon = (logoUrl) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div class="w-12 h-12 bg-white rounded-full shadow-xl border-[3px] border-white flex items-center justify-center overflow-hidden transform hover:scale-110 transition-transform duration-300">
             <img src="${logoUrl}" class="w-8 h-8 object-contain" alt="marker" />
           </div>
           <div class="w-2 h-2 bg-emerald-600 rounded-full absolute -bottom-1 left-1/2 -translate-x-1/2 border border-white"></div>`,
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    popupAnchor: [0, -48],
  });
};

// Logos des marques
const brands = [
  { name: "Zara", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg" },
  { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
  { name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
  { name: "H&M", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" },
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
];

// --- 2. DONNÉES GÉOGRAPHIQUES (WILAYAS) ---

const cities = [
  { id: 'alger', name: 'Alger', coords: [36.7525, 3.04197], zoom: 12 },
  { id: 'oran', name: 'Oran', coords: [35.697654, -0.633737], zoom: 13 },
  { id: 'constantine', name: 'Constantine', coords: [36.365, 6.6147], zoom: 13 },
  { id: 'annaba', name: 'Annaba', coords: [36.9006, 7.7669], zoom: 13 },
  { id: 'ouargla', name: 'Ouargla', coords: [31.9493, 5.3250], zoom: 12 },
];

// Générateur de shops fictifs autour du centre de la ville choisie
const getShopsForCity = (cityId, center) => {
  // Petits décalages pour placer les points autour du centre
  const offsets = [
    [0.01, 0.01], [-0.01, -0.01], [0.01, -0.02], [-0.015, 0.015], [0.005, 0.02]
  ];
  
  return brands.map((brand, index) => ({
    id: `${cityId}-${index}`,
    name: `${brand.name} Store`,
    // On ajoute le décalage aux coordonnées de la ville
    position: [center[0] + offsets[index][0], center[1] + offsets[index][1]],
    logo: brand.logo,
    promo: index % 2 === 0 ? "5% Cashback" : "Points x2"
  }));
};

// --- 3. COMPOSANT UTILITAIRE POUR LEAFLET ---
// Ce composant permet de déplacer la carte quand on change de ville
const MapController = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, {
      duration: 2 // Animation fluide de 2 secondes
    });
  }, [center, zoom, map]);
  return null;
};

// --- 4. COMPOSANT PRINCIPAL ---

const Partners = () => {
  const [activeCity, setActiveCity] = useState(cities[0]); // Alger par défaut
  const [shops, setShops] = useState([]);

  // Mettre à jour les magasins quand la ville change
  useEffect(() => {
    setShops(getShopsForCity(activeCity.id, activeCity.coords));
  }, [activeCity]);

  return (
    <section className="py-24 bg-white overflow-hidden" id="partenaires">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
                    Présence Nationale
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    Partout en 
                    Algérie.
                </h2>
                <p className="text-gray-500 mt-4 text-lg">
                    Retrouvez nos partenaires dans les 58 wilayas. Sélectionnez votre ville pour explorer les offres.
                </p>
            </div>
            
            {/* Sélecteur de villes (Desktop & Mobile Scrollable) */}
            <div className="flex overflow-x-auto pb-2 space-x-2 no-scrollbar w-full md:w-auto">
              {cities.map((city) => (
                <button
                  key={city.id}
                  onClick={() => setActiveCity(city)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all border ${
                    activeCity.id === city.id 
                      ? 'bg-emerald-900 text-white border-emerald-900 shadow-lg shadow-emerald-900/20' 
                      : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-200 hover:text-emerald-700'
                  }`}
                >
                  {city.name}
                </button>
              ))}
            </div>
        </div>

        {/* --- CARTE INTERACTIVE --- */}
        <div className="relative w-full rounded-[3rem] overflow-hidden shadow-2xl border-[6px] border-white ring-1 ring-gray-200 h-[500px] md:h-[600px] z-0 bg-gray-100">
           
           <MapContainer 
             center={activeCity.coords} 
             zoom={activeCity.zoom} 
             scrollWheelZoom={false}
             className="w-full h-full z-0"
           >
             {/* Gestion du mouvement de caméra */}
             <MapController center={activeCity.coords} zoom={activeCity.zoom} />

             {/* Fond de carte épuré */}
             <TileLayer
               attribution='&copy; OpenStreetMap'
               url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
             />

             {/* Marqueurs Dynamiques */}
             {shops.map((shop) => (
               <Marker 
                 key={shop.id} 
                 position={shop.position} 
                 icon={createBrandIcon(shop.logo)}
               >
                 <Popup className="custom-popup">
                   <div className="text-center px-2 py-1">
                     <div className="font-bold text-gray-900 text-sm">{shop.name}</div>
                     <span className="text-[10px] uppercase font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full mt-1 inline-block">
                        {shop.promo}
                     </span>
                   </div>
                 </Popup>
               </Marker>
             ))}
           </MapContainer>

           {/* UI Flottante : Indicateur de Ville */}
           <motion.div 
             key={activeCity.id} // Re-render animation on change
             initial={{ y: -20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             className="absolute top-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-xl border border-white/50 flex items-center gap-3 z-[400]"
           >
               <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                   <Navigation size={16} fill="currentColor" />
               </div>
               <div>
                   <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-none">Zone active</p>
                   <p className="text-sm font-bold text-gray-900 leading-tight">{activeCity.name}</p>
               </div>
           </motion.div>
           
           {/* Légende en bas à droite */}
           <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-xs font-medium text-gray-500 shadow-lg border border-white z-[400] hidden sm:block">
              {shops.length} partenaires trouvés à proximité
           </div>

        </div>

      </div>
    </section>
  );
};

export default Partners;