import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrlWithMsg } from '../data/company';

export const Hero: React.FC = () => {
  const scrollToCatalog = () => {
    const el = document.getElementById('motocicletas');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-[92vh] pt-28 lg:pt-32 pb-16 flex items-center overflow-hidden bg-[#080808]">
      {/* Background Lighting & Atmosphere */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#E30620]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-0 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle tech grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial & Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#151515] border border-white/10 text-xs font-semibold tracking-wider text-neutral-300 mb-6 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#E30620] animate-pulse" />
              <span className="uppercase tracking-widest text-[11px] text-neutral-300">Medellín • Calle 38 # 52-50</span>
            </div>

            {/* Main Brand & Headline */}
            <h2 className="text-sm uppercase tracking-[0.3em] font-extrabold text-[#E30620] mb-2 font-display">
              DISMERCA COLOMBIA S.A.S.
            </h2>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6 font-display">
              Tu próxima moto <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                comienza aquí.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-neutral-400 max-w-xl font-normal leading-relaxed mb-8">
              Motocicletas, repuestos, taller y servicio en Medellín. Conoce nuestro portafolio de marcas y recibe asesoría directa y personalizada.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={scrollToCatalog}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white text-[#080808] font-bold text-base tracking-wide hover:bg-neutral-200 transition-all duration-200 shadow-xl shadow-white/5 cursor-pointer group"
              >
                <span>Ver motocicletas</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={getWhatsAppUrlWithMsg('Hola Dismerca Colombia, quiero recibir información sobre motocicletas y asesoría.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#E30620] text-white font-bold text-base tracking-wide hover:bg-[#C5041A] transition-all duration-200 shadow-xl shadow-[#E30620]/30 group"
              >
                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Hablar por WhatsApp</span>
              </a>
            </div>

            {/* Fast Features Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 w-full">
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-black text-white font-display">5 Marcas</span>
                <span className="text-xs text-neutral-400">Portafolio oficial</span>
              </div>
              <div className="flex flex-col border-l border-white/10 pl-4">
                <span className="text-lg sm:text-xl font-black text-white font-display">Taller</span>
                <span className="text-xs text-neutral-400">Servicio técnico</span>
              </div>
              <div className="flex flex-col border-l border-white/10 pl-4">
                <span className="text-lg sm:text-xl font-black text-white font-display">Repuestos</span>
                <span className="text-xs text-neutral-400">Atención directa</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Cinematic Visual Showcase */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Cinematic Frame */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#151515] to-[#080808] shadow-2xl shadow-black group">
              
              {/* Highlight Red Top Accent */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#E30620] to-transparent opacity-90 z-20" />
              
              {/* Image Container with lighting */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] overflow-hidden">
                <img
                  src="/images/dismerca-hero.jpg"
                  alt="DISMERCA COLOMBIA - Concesionario de Motocicletas, Repuestos y Taller en Medellín"
                  className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-700 filter contrast-[1.05]"
                  loading="eager"
                />

                {/* Ambient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/30 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20 pointer-events-none" />
              </div>

              {/* Bottom Card Bar */}
              <div className="relative z-10 p-4 sm:p-5 bg-[#0e0e0e]/95 backdrop-blur-md border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E30620]" />
                    <p className="text-xs uppercase font-bold text-neutral-300 tracking-wider">
                      Showroom & Taller Autorizado
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    Calle 38 # 52-50 • Medellín, Antioquia
                  </p>
                </div>
                
                <a
                  href={getWhatsAppUrlWithMsg('Hola Dismerca, quiero consultar disponibilidad en la sede de Medellín.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a1a1a] hover:bg-[#252525] border border-white/10 text-xs font-semibold text-neutral-200 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#E30620]" />
                  <span>Consultar</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
