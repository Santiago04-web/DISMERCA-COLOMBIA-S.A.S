import React from 'react';
import { PackageCheck, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrlWithMsg } from '../data/company';

export const SpareParts: React.FC = () => {
  const categories = [
    { title: 'Kits de Arrastre y Transmisión', desc: 'Cadenas, piñones y coronas de alta durabilidad.' },
    { title: 'Sistema de Frenos', desc: 'Pastillas, discos y fluidos para máxima respuesta.' },
    { title: 'Filtros y Lubricación', desc: 'Filtros de aceite, aire y aceites recomendados.' },
    { title: 'Componentes Eléctricos', desc: 'Baterías, bujías y partes de encendido.' }
  ];

  return (
    <section id="repuestos" className="py-24 bg-[#0d0d0d] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text & Action */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E30620] font-display">
              Piezas & Accesorios
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight mt-2 mb-6">
              Repuestos para mantener tu moto en marcha
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6">
              Encuentra los repuestos y componentes necesarios para tus motocicletas Victory, Kymco, Kawasaki, Benelli o Stärker. Consulta disponibilidad inmediata o cotización con nuestro equipo.
            </p>

            <div className="p-5 rounded-2xl bg-[#151515] border border-white/10 mb-8 flex items-start gap-4">
              <PackageCheck className="w-6 h-6 text-[#E30620] flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-bold text-white font-display">
                  ¿Cómo consultar tu repuesto?
                </h4>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Solo necesitas indicarnos la marca, modelo y año de tu moto junto con la pieza que requieres. Te responderemos vía WhatsApp con la disponibilidad.
                </p>
              </div>
            </div>

            <a
              href={getWhatsAppUrlWithMsg('Hola Dismerca Colombia, deseo consultar la disponibilidad y precio de un repuesto.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#E30620] hover:bg-[#C5041A] text-white font-bold text-base tracking-wide shadow-xl shadow-[#E30620]/30 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Consultar repuesto</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column: Visual category cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#141414] border border-white/5 hover:border-white/20 transition-all duration-200 group"
              >
                <div className="w-2 h-2 rounded-full bg-[#E30620] mb-4 group-hover:scale-150 transition-transform" />
                <h4 className="text-base font-bold text-white font-display mb-1.5">
                  {cat.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
