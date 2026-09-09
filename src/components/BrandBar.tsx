import React from 'react';
import { COMPANY_INFO } from '../data/company';

interface BrandBarProps {
  onSelectBrand?: (brand: string) => void;
}

export const BrandBar: React.FC<BrandBarProps> = ({ onSelectBrand }) => {
  const brandDescriptions: Record<string, string> = {
    Kawasaki: 'Potencia & Rendimiento Deportivo',
    Benelli: 'Diseño & Pura Herencia Italiana',
    Kymco: 'Liderazgo en Scooters Urbanas',
    Victory: 'Versatilidad & Rendimiento Diario',
    'Stärker': 'Movilidad Eléctrica & Sostenible'
  };

  const handleBrandClick = (brand: string) => {
    if (onSelectBrand) {
      onSelectBrand(brand);
    }
    const el = document.getElementById('motocicletas');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="marcas" className="relative py-14 bg-[#0c0c0c] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-[#E30620] uppercase font-display">
              Portafolio Multimarca
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-display tracking-tight">
              Marcas Comercializadas
            </h3>
          </div>
          <p className="text-sm text-neutral-400 max-w-md mt-2 md:mt-0">
            Conoce las marcas que integran nuestro portafolio de motocicletas, movilidad eléctrica y repuestos.
          </p>
        </div>

        {/* Brand Grid / Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {COMPANY_INFO.brands.map((brand) => (
            <button
              key={brand}
              onClick={() => handleBrandClick(brand)}
              className="group relative flex flex-col items-center justify-center p-6 rounded-xl bg-[#141414] hover:bg-[#1c1c1c] border border-white/5 hover:border-[#E30620]/40 transition-all duration-300 text-center cursor-pointer shadow-lg hover:shadow-black/50"
            >
              {/* Subtle top indicator on hover */}
              <div className="absolute top-0 inset-x-4 h-[2px] bg-transparent group-hover:bg-[#E30620] transition-colors duration-300 rounded-full" />

              <span className="text-xl sm:text-2xl font-black tracking-wider text-neutral-200 group-hover:text-white font-display transition-colors">
                {brand.toUpperCase()}
              </span>
              <span className="text-[11px] text-neutral-400 mt-1.5 font-medium leading-tight line-clamp-1 group-hover:text-neutral-300">
                {brandDescriptions[brand] || 'Portafolio Autorizado'}
              </span>

              <span className="mt-3 text-[10px] font-semibold tracking-wider uppercase text-neutral-400 group-hover:text-[#E30620] flex items-center gap-1 transition-colors">
                Ver modelos &rarr;
              </span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
