import React from 'react';
import { MessageCircle, CheckCircle, Shield, FileText, ArrowRight } from 'lucide-react';
import { getWhatsAppUrlWithMsg } from '../data/company';

export const Financing: React.FC = () => {
  return (
    <section id="financiacion" className="py-24 bg-[#0d0d0d] relative overflow-hidden border-t border-white/5">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E30620]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#151515] border border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Accent Line */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[#E30620] to-transparent" />

          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#E30620] font-display">
              Asesoría Financiera
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight mt-2 mb-4">
              Tu próxima moto está más cerca
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8">
              Consulta nuestras opciones de financiación y recibe asesoría personalizada.
            </p>

            {/* Benefit pillars (strictly authentic without fake rates or banks) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
              <div className="p-4 rounded-xl bg-[#1c1c1c] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#E30620]/20 flex items-center justify-center text-[#E30620] mb-3">
                  <FileText className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white font-display">Asesoría a Tu Medida</h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Evaluamos tus requerimientos para orientarte con la alternativa más adecuada.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1c1c1c] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#E30620]/20 flex items-center justify-center text-[#E30620] mb-3">
                  <Shield className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white font-display">Atención Transparente</h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Explicación clara de requisitos y acompañamiento en todo el proceso.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1c1c1c] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#E30620]/20 flex items-center justify-center text-[#E30620] mb-3">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white font-display">Respuesta Rápida</h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Contáctanos por WhatsApp y recibe orientación directa de nuestros asesores.
                </p>
              </div>
            </div>

            {/* Big CTA Button */}
            <a
              href={getWhatsAppUrlWithMsg('Hola Dismerca Colombia, quiero consultar las opciones de financiación y recibir asesoría personalizada.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#E30620] hover:bg-[#C5041A] text-white font-bold text-base tracking-wide shadow-xl shadow-[#E30620]/30 hover:shadow-[#E30620]/50 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Consultar financiación</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <p className="text-xs text-neutral-500 mt-4">
              Atención presencial en Medellín (Calle 38 # 52-50) o virtual vía WhatsApp.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
