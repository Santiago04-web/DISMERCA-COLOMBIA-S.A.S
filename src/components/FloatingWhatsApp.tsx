import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrlWithMsg } from '../data/company';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="Contacto por WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#151515] border border-white/15 text-white text-xs font-semibold shadow-2xl animate-fade-in">
          <span>¿Necesitas ayuda? Escríbenos</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-white p-0.5 rounded focus:outline-none"
            aria-label="Cerrar tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Pulsing Button */}
      <a
        href={getWhatsAppUrlWithMsg('Hola Dismerca Colombia, deseo recibir asesoría personalizada.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hablar con un asesor por WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-black/60 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        {/* Subtle Pulse Rings */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-50 animate-ping -z-10" />
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </aside>
  );
};
