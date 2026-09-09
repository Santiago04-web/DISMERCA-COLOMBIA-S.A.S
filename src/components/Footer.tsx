import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onNavigateHome?: () => void;
  onNavigateLegal?: (view: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateHome, onNavigateLegal }) => {
  const scrollTo = (id: string) => {
    if (onNavigateHome) onNavigateHome();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <footer className="bg-[#050505] text-neutral-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-black flex items-center justify-center">
                <img
                  src="/images/dismerca-logo.jpg"
                  alt="DISMERCA COLOMBIA"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <span className="text-xl font-black tracking-wider text-white font-display">
                  DISMERCA<span className="text-[#E30620]">.</span>
                </span>
                <p className="text-[10px] tracking-[0.2em] text-neutral-400 uppercase font-semibold">
                  COLOMBIA S.A.S.
                </p>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mb-4">
              Comercialización formal de motocicletas, bicicletas eléctricas, repuestos y servicio de taller técnico en Medellín, Antioquia.
            </p>

            <div className="space-y-1 text-xs text-neutral-400">
              <p><strong className="text-neutral-300">Razón social:</strong> {COMPANY_INFO.legalName}</p>
              <p><strong className="text-neutral-300">NIT:</strong> {COMPANY_INFO.nit}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase font-black tracking-widest text-white font-display mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => scrollTo('inicio')} className="hover:text-white transition-colors cursor-pointer">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('motocicletas')} className="hover:text-white transition-colors cursor-pointer">
                  Motocicletas
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('marcas')} className="hover:text-white transition-colors cursor-pointer">
                  Marcas
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('electrica')} className="hover:text-white transition-colors cursor-pointer">
                  Movilidad Eléctrica
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('financiacion')} className="hover:text-white transition-colors cursor-pointer">
                  Financiación
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('taller')} className="hover:text-white transition-colors cursor-pointer">
                  Taller y Servicio
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('repuestos')} className="hover:text-white transition-colors cursor-pointer">
                  Repuestos
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contacto')} className="hover:text-white transition-colors cursor-pointer">
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-black tracking-widest text-white font-display mb-4">
              Políticas y Marco Legal
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigateLegal && onNavigateLegal('privacy')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Política de privacidad
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateLegal && onNavigateLegal('terms')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Términos y condiciones
                </button>
              </li>
              <li>
                <span className="text-neutral-500 block pt-1 leading-relaxed">
                  Protección de Datos Personales (Habeas Data Ley 1581 de 2012)
                </span>
              </li>
            </ul>
          </div>

          {/* Sede Medellín */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-black tracking-widest text-white font-display mb-4">
              Sede Medellín
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E30620] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}, Medellín, Antioquia</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E30620] flex-shrink-0" />
                <span>+57 310 446 7970</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E30620] flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors truncate">
                  soporte@dismercacolombia.online
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            &copy; 2026 Dismerca Colombia. Todos los derechos reservados.
          </p>
          <p className="text-[11px] text-neutral-400">
            {COMPANY_INFO.legalName} • NIT {COMPANY_INFO.nit}
          </p>
        </div>

      </div>
    </footer>
  );
};
