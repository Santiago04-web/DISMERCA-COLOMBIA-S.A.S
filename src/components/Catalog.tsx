import React, { useState } from 'react';
import { MOTORCYCLES_DATA } from '../data/motorcycles';
import { COMPANY_INFO, getWhatsAppUrlWithMsg } from '../data/company';
import { MessageCircle, Gauge, Cpu } from 'lucide-react';

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

  const filterOptions = ['Todas', ...COMPANY_INFO.brands];

  const filteredMotorcycles = activeFilter === 'Todas'
    ? MOTORCYCLES_DATA
    : MOTORCYCLES_DATA.filter((moto) => moto.brand.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="motocicletas" className="py-24 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151515] border border-white/10 text-xs font-bold uppercase tracking-widest text-[#E30620] mb-3">
            <span>Catálogo y Disponibilidad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight mb-4">
            Encuentra tu próxima moto
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-normal">
            Explora nuestras opciones de movilidad. Consulta disponibilidad, especificaciones y asesoría directa por WhatsApp con nuestro equipo en Medellín.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 no-scrollbar gap-2 sm:gap-3">
          {filterOptions.map((brand) => {
            const isActive = activeFilter === brand;
            return (
              <button
                key={brand}
                onClick={() => setActiveFilter(brand)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#E30620] text-white shadow-lg shadow-[#E30620]/30 scale-105'
                    : 'bg-[#151515] text-neutral-400 hover:text-white hover:bg-[#202020] border border-white/5'
                }`}
              >
                {brand}
              </button>
            );
          })}
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMotorcycles.map((moto) => {
            const whatsappText = `Hola Dismerca Colombia, estoy interesado en consultar disponibilidad e información de la moto ${moto.brand} ${moto.model}.`;
            return (
              <div
                key={moto.id}
                className="group rounded-2xl overflow-hidden bg-[#121212] border border-white/10 hover:border-[#E30620]/50 transition-all duration-300 flex flex-col shadow-xl hover:shadow-2xl hover:shadow-black/80"
              >
                {/* Image Wrap */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#181818]">
                  <img
                    src={moto.image}
                    alt={`${moto.brand} ${moto.model}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
                  
                  {/* Category & Brand Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[11px] font-extrabold uppercase tracking-wider text-white border border-white/10">
                      {moto.brand}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#E30620]/90 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-white">
                      {moto.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black text-white font-display tracking-tight group-hover:text-neutral-100 transition-colors">
                      {moto.model}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                      {moto.description}
                    </p>

                    {/* Specs Pills */}
                    {moto.specs && (
                      <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-2 gap-2 text-[11px] text-neutral-300">
                        {moto.specs.displacement && (
                          <div className="flex items-center gap-1.5 truncate">
                            <Gauge className="w-3.5 h-3.5 text-[#E30620] flex-shrink-0" />
                            <span className="truncate">{moto.specs.displacement}</span>
                          </div>
                        )}
                        {moto.specs.transmission && (
                          <div className="flex items-center gap-1.5 truncate">
                            <Cpu className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
                            <span className="truncate">{moto.specs.transmission}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Consultation CTA */}
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <a
                      href={getWhatsAppUrlWithMsg(whatsappText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1d1d1d] hover:bg-[#E30620] text-white font-semibold text-sm transition-all duration-200 border border-white/10 hover:border-transparent group/btn shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 text-[#E30620] group-hover/btn:text-white transition-colors" />
                      <span>Consultar disponibilidad</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Catalog Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#121212] via-[#181818] to-[#121212] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="text-xl font-bold text-white font-display">
              ¿Buscas un modelo o cilindraje en específico?
            </h4>
            <p className="text-sm text-neutral-400 mt-1 max-w-xl">
              Escríbenos directamente con la marca y línea de tu interés. Te informamos inventario disponible en Medellín y opciones de compra.
            </p>
          </div>
          <a
            href={getWhatsAppUrlWithMsg('Hola Dismerca, quiero consultar por un modelo de motocicleta en particular.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#E30620] hover:bg-[#C5041A] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#E30620]/25 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar con un Asesor</span>
          </a>
        </div>

      </div>
    </section>
  );
};
