import React, { useState } from 'react';
import { MOTORCYCLES_DATA } from '../data/motorcycles';
import { getWhatsAppUrlWithMsg } from '../data/company';
import { MessageCircle, Gauge, Cpu, ArrowUpRight } from 'lucide-react';

interface CatalogProps {
  selectedBrandFilter?: string;
  onBrandFilterChange?: (brand: string) => void;
}

export const Catalog: React.FC<CatalogProps> = ({ 
  selectedBrandFilter: externalFilter, 
  onBrandFilterChange: setExternalFilter 
}) => {
  const [internalFilter, setInternalFilter] = useState<string>('Todas');

  const activeFilter = externalFilter !== undefined ? externalFilter : internalFilter;
  const setActiveFilter = (brand: string) => {
    if (setExternalFilter) {
      setExternalFilter(brand);
    } else {
      setInternalFilter(brand);
    }
  };

  // Focus brands requested: Victory, Kymco, Kawasaki, Benelli
  const filterOptions = ['Todas', 'Kawasaki', 'Benelli', 'Kymco', 'Victory'];

  const filteredMotorcycles = MOTORCYCLES_DATA.filter((moto) => {
    // Filter out purely electric from standard fuel catalog if Stärker has its own dedicated section
    if (activeFilter === 'Todas') {
      return moto.brand !== 'Stärker';
    }
    return moto.brand.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <section id="motocicletas" className="py-24 bg-[#080808] relative">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#E30620]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-black tracking-[0.3em] text-[#E30620] uppercase font-display">
              Catálogo de Motocicletas
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight mt-1">
              Encuentra tu próxima moto
            </h2>
            <p className="text-base text-neutral-400 mt-3 leading-relaxed">
              Explora las líneas de <strong className="text-white">Kawasaki, Benelli, Kymco y Victory</strong>. Consulta disponibilidad en Medellín y recibe cotización inmediata por WhatsApp.
            </p>
          </div>

          {/* WhatsApp Direct Inquiry Button */}
          <div className="mt-6 md:mt-0">
            <a
              href={getWhatsAppUrlWithMsg('Hola Dismerca, quiero asesoría personalizada sobre el catálogo de motocicletas.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#171717] hover:bg-[#222222] border border-white/10 hover:border-[#E30620]/40 text-xs font-bold text-neutral-200 hover:text-white transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-[#E30620]" />
              <span>Asesoría personalizada</span>
            </a>
          </div>
        </div>

        {/* Brand Filter Pills */}
        <div className="flex items-center justify-start overflow-x-auto pb-4 mb-12 no-scrollbar gap-2 sm:gap-3">
          {filterOptions.map((brand) => {
            const isActive = activeFilter === brand;
            return (
              <button
                key={brand}
                onClick={() => setActiveFilter(brand)}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold tracking-wider uppercase transition-all duration-200 cursor-pointer font-display ${
                  isActive
                    ? 'bg-[#E30620] text-white shadow-lg shadow-[#E30620]/30 scale-105'
                    : 'bg-[#141414] text-neutral-400 hover:text-white hover:bg-[#1f1f1f] border border-white/5'
                }`}
              >
                {brand}
              </button>
            );
          })}
        </div>

        {/* Big Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMotorcycles.map((moto) => {
            const whatsappText = `Hola Dismerca Colombia, estoy interesado en consultar disponibilidad y ficha de la moto ${moto.brand} ${moto.model}.`;
            return (
              <div
                key={moto.id}
                className="group rounded-3xl overflow-hidden bg-[#121212] border border-white/10 hover:border-[#E30620]/50 transition-all duration-500 flex flex-col shadow-2xl hover:shadow-black"
              >
                {/* Image Container with Ambient Shadow */}
                <div className="relative aspect-[16/11] overflow-hidden bg-black/50">
                  <img
                    src={moto.image}
                    alt={`${moto.brand} ${moto.model}`}
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 filter contrast-[1.05]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30 opacity-90" />
                  
                  {/* Top Floating Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-md bg-black/85 backdrop-blur-md text-[11px] font-black uppercase tracking-wider text-white border border-white/10 font-display">
                      {moto.brand}
                    </span>
                    <span className="px-3 py-1 rounded-md bg-[#E30620]/90 backdrop-blur-md text-[11px] font-extrabold uppercase tracking-wider text-white font-display">
                      {moto.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-white font-display tracking-tight group-hover:text-neutral-100 transition-colors">
                      {moto.model}
                    </h3>
                    
                    <p className="text-sm text-neutral-400 mt-2.5 line-clamp-2 leading-relaxed">
                      {moto.description}
                    </p>

                    {/* Specs Row */}
                    {moto.specs && (
                      <div className="mt-5 pt-4 border-t border-white/5 grid grid-cols-2 gap-3 text-xs text-neutral-300">
                        {moto.specs.displacement && (
                          <div className="flex items-center gap-2 truncate">
                            <Gauge className="w-4 h-4 text-[#E30620] flex-shrink-0" />
                            <span className="truncate">{moto.specs.displacement}</span>
                          </div>
                        )}
                        {moto.specs.transmission && (
                          <div className="flex items-center gap-2 truncate">
                            <Cpu className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                            <span className="truncate">{moto.specs.transmission}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Consultation CTA */}
                  <div className="mt-8 pt-5 border-t border-white/5">
                    <a
                      href={getWhatsAppUrlWithMsg(whatsappText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-[#1c1c1c] hover:bg-[#E30620] text-white font-bold text-sm tracking-wide transition-all duration-200 border border-white/10 hover:border-transparent group/btn shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4 text-[#E30620] group-hover/btn:text-white transition-colors" />
                      <span>Consultar</span>
                      <ArrowUpRight className="w-4 h-4 opacity-70 group-hover/btn:opacity-100" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
