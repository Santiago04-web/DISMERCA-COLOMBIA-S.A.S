import React from 'react';
import { Wrench, Settings, Search, ShieldCheck, Cpu, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrlWithMsg } from '../data/company';

export const ServiceWorkshop: React.FC = () => {
  const pillars = [
    {
      title: 'Mantenimiento',
      desc: 'Mantenimiento preventivo periódico y afinación integral para alargar la vida útil del motor.',
      icon: Wrench
    },
    {
      title: 'Servicio Técnico',
      desc: 'Técnicos calificados con herramientas especializadas según los manuales de fábrica.',
      icon: Settings
    },
    {
      title: 'Diagnóstico',
      desc: 'Inspección minuciosa y detección certera de fallas mecánicas, eléctricas o de inyección.',
      icon: Search
    },
    {
      title: 'Repuestos',
      desc: 'Instalación de partes de repuesto adecuadas para conservar la garantía de funcionamiento.',
      icon: ShieldCheck
    },
    {
      title: 'Atención Especializada',
      desc: 'Atención directa y asesoría clara en nuestra sede de la Calle 38 # 52-50 en Medellín.',
      icon: Cpu
    }
  ];

  return (
    <section id="taller" className="py-24 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Big Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Workshop Big Photography */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#121212] shadow-2xl relative group">
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src="/images/workshop-service.jpg"
                  alt="Taller y servicio técnico especializado de motocicletas en DISMERCA COLOMBIA"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 filter contrast-[1.08]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
              </div>
              
              <div className="p-5 bg-[#0f0f0f] border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#E30620]">
                    Sede Medellín
                  </span>
                  <p className="text-sm font-bold text-white mt-0.5">
                    Calle 38 # 52-50 • Taller Autorizado
                  </p>
                </div>

                <a
                  href={getWhatsAppUrlWithMsg('Hola Dismerca, quiero agendar una cita de taller o mantenimiento.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#E30620] hover:bg-[#C5041A] text-white text-xs font-bold transition-colors"
                >
                  Agendar
                </a>
              </div>
            </div>
          </div>

          {/* Text & Primary CTA */}
          <div className="lg:col-span-6">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#E30620] font-display">
              Soporte Posventa Profesional
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight mt-1 mb-5">
              Taller y Servicio
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8">
              Tu tranquilidad al rodar es nuestra prioridad. Ponemos a tu disposición nuestro taller técnico especializado en Medellín, respaldado por personal capacitado y repuestos adecuados para tu moto.
            </p>

            <a
              href={getWhatsAppUrlWithMsg('Hola Dismerca Colombia, quiero solicitar servicio técnico para mi motocicleta.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#E30620] hover:bg-[#C5041A] text-white font-bold text-base tracking-wide shadow-xl shadow-[#E30620]/30 transition-all duration-200 group"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Solicitar servicio</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>

        {/* 5 Service Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#121212] border border-white/5 hover:border-[#E30620]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#1c1c1c] text-[#E30620] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-black text-white font-display mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 mt-4">
                  <span className="text-[11px] font-bold text-neutral-400">
                    Atención en Medellín
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
