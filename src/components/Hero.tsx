import React from 'react';
import { ArrowRight, MessageCircle, MapPin } from 'lucide-react';
import { getWhatsAppUrlWithMsg } from '../data/company';

export const Hero: React.FC = () => {
  const scrollToCatalog = () => {
    const el = document.getElementById('motocicletas');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-[94vh] pt-32 lg:pt-36 pb-20 flex items-center overflow-hidden bg-[#080808]">
      {/* Dynamic Lighting & Atmospheric Glow */}
      <div className="absolute -top-32 right-10 w-[600px] h-[600px] bg-[#E30620]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-white/[0.02] rounded-full blur-[130px] pointer-events-none" />
      
      {/* Precision Tech Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:28px_28px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Headline & Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-20">
            
            {/* Top Indicator Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#141414] border border-white/10 text-xs font-semibold text-neutral-300 mb-6 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#E30620] animate-pulse" />
              <span className="uppercase tracking-widest text-[11px] font-bold text-neutral-300 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E30620]" />
                Medellín • Calle 38 # 52-50
              </span>
            </div>

            {/* Sub-label */}
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] font-black text-[#E30620] mb-3 font-display">
              DISMERCA COLOMBIA S.A.S.
            </p>
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.04] mb-6 font-display">
              Tu próxima moto <br />
              <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                comienza aquí.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-xl text-neutral-400 max-w-xl font-normal leading-relaxed mb-9">
              Motocicletas, repuestos, taller y servicio en Medellín. Conoce nuestro portafolio de marcas y recibe asesoría directa y personalizada.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={scrollToCatalog}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white text-[#080808] font-bold text-base tracking-wide hover:bg-neutral-200 active:scale-98 transition-all duration-200 shadow-xl shadow-white/5 cursor-pointer group"
              >
                <span>Ver motocicletas</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={getWhatsAppUrlWithMsg('Hola Dismerca Colombia, quiero recibir información sobre motocicletas y asesoría comercial.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#E30620] text-white font-bold text-base tracking-wide hover:bg-[#C5041A] active:scale-98 transition-all duration-200 shadow-xl shadow-[#E30620]/30 group"
              >
                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Hablar por WhatsApp</span>
              </a>
            </div>

            {/* Fast Features */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full max-w-md">
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-white font-display">5 Marcas</span>
                <span className="text-xs text-neutral-400">Portafolio oficial</span>
              </div>
              <div className="flex flex-col border-l border-white/10 pl-6">
                <span className="text-xl sm:text-2xl font-black text-white font-display">Taller</span>
                <span className="text-xs text-neutral-400">Servicio técnico</span>
              </div>
              <div className="flex flex-col border-l border-white/10 pl-6">
                <span className="text-xl sm:text-2xl font-black text-white font-display">Repuestos</span>
                <span className="text-xs text-neutral-400">Atención directa</span>
              </div>
            </div>

          </div>

          {/* RIGHT: Pure Motorcycle Visual Protagonist (No Text in Image) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Ambient Red Glow Halo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E30620]/20 via-transparent to-white/5 rounded-3xl blur-2xl transform scale-95 pointer-events-none" />

            {/* Showcase Container */}
            <div className="relative w-full rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#161616] to-[#0a0a0a] shadow-2xl shadow-black group">
              
              {/* Top Accent Racing Red Line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#E30620] to-transparent z-20" />

              {/* Main Image Container */}
              <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-black/40">
                <img
                  src="/images/hero-motorcycle.jpg"
                  alt="Motocicleta de alto rendimiento en DISMERCA COLOMBIA"
                  className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-700 filter contrast-[1.08] brightness-[0.98]"
                  loading="eager"
                />
                
                {/* Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/20 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20 pointer-events-none" />
              </div>

              {/* Sub-card details */}
              <div className="relative z-10 p-5 bg-[#0f0f0f]/95 backdrop-blur-md border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E30620]" />
                    <p className="text-xs uppercase font-extrabold text-neutral-300 tracking-wider font-display">
                      Punto Oficial Medellín
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    Calle 38 # 52-50 • Atención Personalizada
                  </p>
                </div>

                <a
                  href={getWhatsAppUrlWithMsg('Hola Dismerca Colombia, quiero consultar inventario disponible en la sede de Medellín.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#1f1f1f] hover:bg-[#E30620] text-neutral-200 hover:text-white border border-white/10 hover:border-transparent text-xs font-bold transition-all duration-200"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
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
