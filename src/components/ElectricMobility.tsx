import React from 'react';
import { Zap, BatteryCharging, Leaf, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrlWithMsg } from '../data/company';

export const ElectricMobility: React.FC = () => {
  return (
    <section id="electrica" className="py-24 bg-[#080b09] relative overflow-hidden border-t border-white/5">
      {/* Subtle emerald/clean ambient glow */}
      <div className="absolute top-1/2 right-0 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#E30620]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-emerald-500/20 bg-[#101512] shadow-2xl group">
              
              {/* Top Accent Line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent z-20" />

              <div className="relative aspect-[16/11] overflow-hidden bg-black/40">
                <img
                  src="/images/electric-mobility.jpg"
                  alt="Bicicletas y movilidad eléctrica Stärker en DISMERCA COLOMBIA"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 filter contrast-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101512] via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating feature footer */}
              <div className="p-6 bg-[#0c100d]/95 backdrop-blur-md border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 font-display">
                    Stärker E-Mobility
                  </span>
                  <p className="text-sm font-bold text-white mt-0.5">
                    Movilidad 100% Eléctrica & Urbana
                  </p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Sin Pico y Placa</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial & Conversion */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
              <Leaf className="w-3.5 h-3.5" />
              <span>Sostenibilidad Urbana</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight leading-tight mb-5">
              Muévete eléctrico
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-8">
              Descubre las bicicletas y vehículos eléctricos de la línea <strong className="text-white">Stärker</strong>. Una solución ágil, silenciosa y libre de pico y placa para desplazarte en Medellín con mínimo costo de operación.
            </p>

            {/* Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="p-4 rounded-xl bg-[#121613] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2.5">
                  <Zap className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white font-display">Sin Pico y Placa</h4>
                <p className="text-xs text-neutral-400 mt-1">Circulación continua todos los días en el Valle de Aburrá.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#121613] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2.5">
                  <BatteryCharging className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white font-display">Carga en Cualquier Enchufe</h4>
                <p className="text-xs text-neutral-400 mt-1">Conéctala en tu hogar o trabajo a 110V convencional.</p>
              </div>
            </div>

            {/* CTA WhatsApp */}
            <a
              href={getWhatsAppUrlWithMsg('Hola Dismerca Colombia, deseo recibir asesoría sobre bicicletas y scooters eléctricas Stärker.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-extrabold text-base tracking-wide shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-200 group"
            >
              <MessageCircle className="w-5 h-5 text-black" />
              <span>Consultar movilidad eléctrica</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
