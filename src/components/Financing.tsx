import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrlWithMsg } from '../data/company';

export const Financing: React.FC = () => {
  return (
    <section id="financiacion" className="py-24 bg-[#0d0d0d] relative overflow-hidden border-t border-white/5">
      {/* Background Subtle Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E30620]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#141414] border border-white/10 p-8 sm:p-14 lg:p-16 shadow-2xl text-center relative overflow-hidden">
          
          {/* Top Line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#E30620] to-transparent" />

          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#E30620] font-display">
            Financiación & Asesoría
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight mt-2 mb-4">
            ¿Ya tienes una moto en mente?
          </h2>

          <p className="text-base sm:text-xl text-neutral-300 max-w-xl mx-auto leading-relaxed mb-10">
            Recibe asesoría personalizada y conoce las opciones disponibles.
          </p>

          {/* Clean Real Pillars without fake rates */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
            <div className="p-5 rounded-2xl bg-[#1a1a1a] border border-white/5">
              <h4 className="text-sm font-black text-white font-display">Atención Personalizada</h4>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                Evaluamos tus necesidades para recomendarte el plan más conveniente.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1a1a1a] border border-white/5">
              <h4 className="text-sm font-black text-white font-display">Información Clara</h4>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                Sin letra pequeña. Te orientamos paso a paso con los requisitos vigentes.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1a1a1a] border border-white/5">
              <h4 className="text-sm font-black text-white font-display">Contacto Directo</h4>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                Respuesta ágil de nuestros ejecutivos comerciales en Medellín.
              </p>
            </div>
          </div>

          {/* CTA: Hablar con un asesor */}
          <a
            href={getWhatsAppUrlWithMsg('Hola Dismerca, ya tengo una moto en mente y deseo recibir asesoría personalizada sobre las opciones de financiación.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl bg-[#E30620] hover:bg-[#C5041A] text-white font-bold text-base tracking-wide shadow-xl shadow-[#E30620]/30 hover:shadow-[#E30620]/50 transition-all duration-200 group"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Hablar con un asesor</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <p className="text-xs text-neutral-400 mt-5">
            Atención presencial en Medellín (Calle 38 # 52-50) o virtual vía WhatsApp.
          </p>

        </div>
      </div>
    </section>
  );
};
