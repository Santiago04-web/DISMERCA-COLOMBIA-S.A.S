import React from 'react';
import { ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-[#080808] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image / Visual Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#121212] p-8 sm:p-10 shadow-2xl">
              <div className="w-20 h-20 rounded-2xl bg-black border border-white/15 p-2 mb-6 flex items-center justify-center">
                <img
                  src="/images/dismerca-logo.jpg"
                  alt="DISMERCA COLOMBIA S.A.S."
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#E30620] font-display">
                Entidad Legal y Comercio
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display mt-2 mb-4">
                DISMERCA COLOMBIA S.A.S.
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                NIT 900769511-8 registrada en Medellín, Antioquia, Colombia. Comprometida con brindar soluciones de transporte, movilidad eléctrica y soporte posventa de alta calidad.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/5 text-xs text-neutral-300">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#E30620] flex-shrink-0" />
                  <span>Sede: Calle 38 # 52-50, Medellín, Antioquia</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#E30620] flex-shrink-0" />
                  <span>Régimen Comercial Formal y Facturación Legal</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Profile */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E30620] font-display">
              Identidad Institucional
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight mt-2 mb-6">
              Dismerca Colombia
            </h2>
            
            <div className="prose prose-invert max-w-none text-neutral-300 text-base leading-relaxed space-y-4 font-normal">
              <p>
                <strong className="text-white font-semibold">DISMERCA COLOMBIA S.A.S.</strong> es una empresa dedicada a la comercialización de motocicletas, bicicletas eléctricas, repuestos y servicios relacionados de taller y mantenimiento técnico en la ciudad de Medellín.
              </p>
              <p>
                Nuestro propósito es ofrecer a cada cliente una atención personalizada y transparente en la elección de su medio de transporte, asegurando el respaldo en repuestos y servicio técnico necesario para garantizar la seguridad y durabilidad de cada vehículo.
              </p>
              <p>
                Comercializamos un portafolio multimarca integrado por reconocidos fabricantes como <strong className="text-white">Victory, Kymco, Kawasaki, Benelli y Stärker</strong>, adaptándonos tanto a quienes buscan eficiencia y economía urbana como a apasionados del alto rendimiento o la movilidad eléctrica sostenible.
              </p>
            </div>

            {/* Core Values / Real Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E30620] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Comercio Legal y Seguro</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Trámites transparentes y documentación formal para cada vehículo.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E30620] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Soporte Integral Posventa</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Taller y repuestos para acompañar la vida útil de tu moto.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
