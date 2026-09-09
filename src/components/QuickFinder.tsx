import React from 'react';
import { Bike, Zap, Package, Wrench, ArrowUpRight } from 'lucide-react';

interface QuickFinderProps {
  onSelectCategory?: (sectionId: string) => void;
}

export const QuickFinder: React.FC<QuickFinderProps> = ({ onSelectCategory }) => {
  const blocks = [
    {
      id: 'motocicletas',
      title: 'MOTOCICLETAS',
      subtitle: 'Encuentra tu próxima moto.',
      tag: 'Gasolina & Sport',
      icon: Bike,
      color: 'hover:border-[#E30620]/60',
      badgeColor: 'text-[#E30620]'
    },
    {
      id: 'electrica',
      title: 'MOVILIDAD ELÉCTRICA',
      subtitle: 'Explora opciones eléctricas.',
      tag: 'Cero Emisiones',
      icon: Zap,
      color: 'hover:border-emerald-500/60',
      badgeColor: 'text-emerald-400'
    },
    {
      id: 'repuestos',
      title: 'REPUESTOS',
      subtitle: 'Consulta disponibilidad.',
      tag: 'Originales',
      icon: Package,
      color: 'hover:border-blue-500/60',
      badgeColor: 'text-blue-400'
    },
    {
      id: 'taller',
      title: 'TALLER',
      subtitle: 'Mantenimiento y servicio.',
      tag: 'Diagnóstico & Citas',
      icon: Wrench,
      color: 'hover:border-amber-500/60',
      badgeColor: 'text-amber-400'
    }
  ];

  const handleClick = (id: string) => {
    if (onSelectCategory) {
      onSelectCategory(id);
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-[#0a0a0a] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-black tracking-[0.3em] text-[#E30620] uppercase font-display">
              Guía de Servicios
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-display mt-1">
              ¿Qué estás buscando?
            </h2>
          </div>
          <p className="text-sm text-neutral-400 mt-2 md:mt-0 max-w-sm">
            Selecciona la categoría de tu interés para navegar directamente y recibir atención oportuna.
          </p>
        </div>

        {/* 4 Interactive Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {blocks.map((block) => {
            const Icon = block.icon;
            return (
              <button
                key={block.id}
                onClick={() => handleClick(block.id)}
                className={`group text-left p-6 rounded-2xl bg-[#121212] border border-white/10 ${block.color} hover:bg-[#181818] transition-all duration-300 flex flex-col justify-between h-52 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden`}
              >
                {/* Subtle top indicator */}
                <div className="flex items-center justify-between w-full">
                  <div className="w-12 h-12 rounded-xl bg-[#1c1c1c] border border-white/5 group-hover:border-white/20 flex items-center justify-center text-white transition-colors">
                    <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-white text-neutral-400 group-hover:text-black flex items-center justify-center transition-all duration-200">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className={`text-[10px] font-extrabold uppercase tracking-widest ${block.badgeColor}`}>
                    {block.tag}
                  </span>
                  <h3 className="text-lg font-black text-white font-display mt-0.5 tracking-tight group-hover:text-neutral-100">
                    {block.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-1">
                    {block.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
