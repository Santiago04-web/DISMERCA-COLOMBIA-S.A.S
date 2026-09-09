import React from 'react';
import { Wrench, Settings, Search, Cpu, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrlWithMsg } from '../data/company';

export const ServiceWorkshop: React.FC = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Mantenimiento',
      desc: 'Mantenimiento preventivo y correctivo para mantener el desempeño óptimo y la seguridad de tu vehículo.'
    },
    {
      icon: Settings,
      title: 'Servicio Técnico',
      desc: 'Atención técnica calificada con herramientas y procedimientos acordes a los requerimientos de cada marca.'
    },
    {
      icon: Search,
      title: 'Diagnóstico',
      desc: 'Revisión exhaustiva y evaluación precisa del estado mecánico y eléctrico de tu motocicleta.'
    },
    {
      icon: ShieldCheck,
      title: 'Repuestos',
      desc: 'Instalación de componentes y repuestos adecuados para conservar la originalidad y durabilidad de tu moto.'
    },
    {
      icon: Cpu,
      title: 'Atención Especializada',
      desc: 'Servicio técnico especializado en nuestra sede de Medellín para brindarte tranquilidad en cada rodada.'
    }
  ];

  return (
    <section id="taller" className="py-24 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151515] border border-white/10 text-xs font-bold uppercase tracking-widest text-[#E30620] mb-3">
            <span>Soporte Posventa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight">
            Taller y Servicio
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 mt-4 leading-relaxed">
            Contamos con instalaciones de taller y servicio técnico en Medellín. Cuidamos cada detalle mecánico y eléctrico de tu moto con dedicación profesional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#121212] border border-white/5 hover:border-[#E30620]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-black"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#1c1c1c] border border-white/10 flex items-center justify-center text-[#E30620] group-hover:scale-110 group-hover:bg-[#E30620] group-hover:text-white transition-all duration-300 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-semibold text-neutral-400 group-hover:text-neutral-200">
                  <span>Atención en Calle 38 # 52-50, Medellín</span>
                </div>
              </div>
            );
          })}

          {/* CTA Box inside grid */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#1e1314] to-[#121212] border border-[#E30620]/30 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#E30620] font-display">
                Agenda Tu Cita
              </span>
              <h3 className="text-2xl font-black text-white font-display mt-2 mb-3">
                ¿Tu moto necesita revisión?
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Agenda tu cita de taller o consulta con nuestro equipo técnico de manera rápida a través de WhatsApp.
              </p>
            </div>

            <div className="mt-8">
              <a
                href={getWhatsAppUrlWithMsg('Hola Dismerca, deseo solicitar una cita de servicio técnico o mantenimiento en el taller de Medellín.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-5 rounded-xl bg-[#E30620] hover:bg-[#C5041A] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#E30620]/30 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Solicitar servicio</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
