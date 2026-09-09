import React from 'react';
import { UserCheck, Bike, Package, Wrench, MessageCircle, MapPin } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustPoints = [
    {
      title: 'Atención personalizada',
      desc: 'Te asesoramos con honestidad y claridad para elegir el vehículo ideal según tu presupuesto y uso.',
      icon: UserCheck
    },
    {
      title: 'Motocicletas',
      desc: 'Comercialización formal de marcas reconocidas como Victory, Kymco, Kawasaki y Benelli.',
      icon: Bike
    },
    {
      title: 'Repuestos',
      desc: 'Disponibilidad de componentes y accesorios adecuados para prolongar la vida de tu moto.',
      icon: Package
    },
    {
      title: 'Taller y servicio',
      desc: 'Mantenimiento preventivo y correctivo con atención técnica especializada en nuestra sede.',
      icon: Wrench
    },
    {
      title: 'Atención por WhatsApp',
      desc: 'Canal de comunicación directo y ágil para cotizaciones, citas de taller y resolución de dudas.',
      icon: MessageCircle
    },
    {
      title: 'Medellín',
      desc: 'Punto físico establecido en Calle 38 # 52-50, Antioquia, con respaldo comercial legal.',
      icon: MapPin
    }
  ];

  return (
    <section className="py-20 bg-[#0c0c0c] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#E30620] font-display">
            Respaldo y Seguridad
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight mt-1">
            Por qué confiar en Dismerca
          </h2>
          <p className="text-sm text-neutral-400 mt-2">
            Compromiso real, servicio integral y atención directa en cada etapa de tu compra o mantenimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#141414] border border-white/5 hover:border-white/15 transition-colors flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#1f1f1f] text-[#E30620] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-white font-display">
                    {point.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
