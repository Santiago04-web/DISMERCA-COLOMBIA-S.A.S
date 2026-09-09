import React from 'react';
import { Search, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrlWithMsg } from '../data/company';

export const SpareParts: React.FC = () => {
  const categories = [
    {
      title: 'Transmisión & Arrastre',
      desc: 'Cadenas reforzadas, piñones y coronas para Victory, Kymco, Kawasaki y Benelli.',
      tag: 'Alta Durabilidad'
    },
    {
      title: 'Frenado & Seguridad',
      desc: 'Pastillas sinterizadas, discos y líneas de freno para respuesta precisa.',
      tag: 'Seguridad Certificada'
    },
    {
      title: 'Lubricación & Filtros',
      desc: 'Filtros de aceite y aire de especificación original para proteger el motor.',
      tag: 'Mantenimiento Óptimo'
    },
    {
      title: 'Encendido & Eléctrico',
      desc: 'Baterías, bujías y componentes de control de carga para arranque confiable.',
      tag: 'Respaldo Eléctrico'
    }
  ];

  return (
    <section id="repuestos" className="py-24 bg-[#0a0a0a] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Text */}
          <div className="lg:col-span-6">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#E30620] font-display">
              Repuestos & Componentes
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight mt-1 mb-5">
              Todo para mantener tu moto en marcha
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8">
              Encuentra repuestos originales y accesorios para conservar el desempeño de fábrica de tu motocicleta. Consulta disponibilidad inmediata con nuestro equipo en Medellín.
            </p>

            <a
              href={getWhatsAppUrlWithMsg('Hola Dismerca, quiero consultar la disponibilidad de un repuesto para mi motocicleta.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#E30620] hover:bg-[#C5041A] text-white font-bold text-base tracking-wide shadow-xl shadow-[#E30620]/30 transition-all duration-200 group"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Consultar repuesto</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right Image Banner */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#141414] shadow-2xl relative">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="/images/spare-parts.jpg"
                  alt="Repuestos de motocicletas en DISMERCA COLOMBIA"
                  className="w-full h-full object-cover object-center filter contrast-[1.1] brightness-[0.9]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />
              </div>
              
              <div className="p-5 bg-[#121212] border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-bold text-neutral-300">
                  Marcas: Victory • Kymco • Kawasaki • Benelli • Stärker
                </span>
                <span className="text-xs text-[#E30620] font-bold">
                  Medellín
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#121212] border border-white/5 hover:border-white/20 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#E30620]">
                  {cat.tag}
                </span>
                <h4 className="text-base font-black text-white font-display mt-1 mb-2">
                  {cat.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 mt-4">
                <a
                  href={getWhatsAppUrlWithMsg(`Hola Dismerca, quiero consultar disponibilidad sobre ${cat.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Search className="w-3.5 h-3.5 text-[#E30620]" />
                  <span>Consultar esta línea &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
