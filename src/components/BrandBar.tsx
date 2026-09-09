import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BrandBarProps {
  onSelectBrand?: (brand: string) => void;
}

export const BrandBar: React.FC<BrandBarProps> = ({ onSelectBrand }) => {
  const brandProfiles = [
    {
      name: 'Kawasaki',
      subtitle: 'Supernaked & Supersport',
      origin: 'Japón • Alto Rendimiento',
      badge: 'Potencia Pura'
    },
    {
      name: 'Benelli',
      subtitle: 'Naked & Touring Aventura',
      origin: 'Italia • Pasión & Estilo',
      badge: 'Herencia Italiana'
    },
    {
      name: 'Kymco',
      subtitle: 'Maxi Scooter & Scooter Urbana',
      origin: 'Líder en Movilidad Ágil',
      badge: 'Confort Total'
    },
    {
      name: 'Victory',
      subtitle: 'Calle, Urbana & Trabajo',
      origin: 'Eficiencia y Gran Durabilidad',
      badge: 'Versatilidad'
    },
    {
      name: 'Stärker',
      subtitle: 'Bicicletas & Scooters Eléctricos',
      origin: 'Cero Emisiones & Sin Pico y Placa',
      badge: 'Eco Movilidad'
    }
  ];

  const handleBrandClick = (brandName: string) => {
    if (brandName === 'Stärker') {
      const el = document.getElementById('electrica');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (onSelectBrand) {
      onSelectBrand(brandName);
    }
    const el = document.getElementById('motocicletas');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="marcas" className="py-20 bg-[#0d0d0d] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-black tracking-[0.3em] text-[#E30620] uppercase font-display">
              Portafolio Oficial
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display mt-1 tracking-tight">
              Marcas Comercializadas
            </h2>
          </div>
          <p className="text-sm text-neutral-400 mt-3 md:mt-0 max-w-md">
            Comercializamos marcas de prestigio internacional que ofrecen respaldo, tecnología y seguridad en cada trayecto.
          </p>
        </div>

        {/* Dynamic Architectural Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {brandProfiles.map((brand) => (
            <button
              key={brand.name}
              onClick={() => handleBrandClick(brand.name)}
              className="group text-left p-6 rounded-2xl bg-[#131313] hover:bg-[#181818] border border-white/5 hover:border-[#E30620]/40 transition-all duration-300 flex flex-col justify-between min-h-[210px] cursor-pointer shadow-lg hover:shadow-2xl relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-transparent group-hover:bg-[#E30620] transition-colors duration-300" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded bg-white/5 text-neutral-400 group-hover:text-neutral-200">
                    {brand.badge}
                  </span>
                  <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-[#E30620] transform group-hover:translate-x-1 transition-all" />
                </div>

                <h3 className="text-2xl font-black text-white tracking-wider font-display group-hover:text-white transition-colors">
                  {brand.name.toUpperCase()}
                </h3>

                <p className="text-xs text-neutral-300 font-medium mt-1">
                  {brand.subtitle}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 mt-4">
                <span className="text-[11px] text-neutral-400 block group-hover:text-[#E30620] transition-colors">
                  {brand.origin}
                </span>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
