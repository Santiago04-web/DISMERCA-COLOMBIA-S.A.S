import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, MapPin } from 'lucide-react';
import { getWhatsAppUrlWithMsg } from '../data/company';

interface NavbarProps {
  onNavigateHome?: () => void;
  onNavigateLegal?: (view: 'privacy' | 'terms') => void;
  currentView?: 'home' | 'privacy' | 'terms';
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateHome, onNavigateLegal, currentView = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Detect active section on scroll
      const sections = ['inicio', 'motocicletas', 'marcas', 'electrica', 'repuestos', 'taller', 'financiacion', 'contacto'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (currentView !== 'home' && onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'motocicletas', label: 'Motocicletas' },
    { id: 'marcas', label: 'Marcas' },
    { id: 'electrica', label: 'Movilidad Eléctrica' },
    { id: 'repuestos', label: 'Repuestos' },
    { id: 'taller', label: 'Taller' },
    { id: 'financiacion', label: 'Financiación' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-2xl shadow-black/80 py-3'
          : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateHome) onNavigateHome();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-white/20 group-hover:border-[#E30620] transition-colors bg-black flex items-center justify-center shadow-lg shadow-black">
              <img
                src="/images/dismerca-logo.jpg"
                alt="Logo DISMERCA COLOMBIA"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xl sm:text-2xl font-black tracking-wider text-white flex items-center font-display">
                DISMERCA<span className="text-[#E30620] ml-0.5">.</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] text-neutral-400 uppercase font-semibold">
                COLOMBIA S.A.S.
              </span>
            </div>
          </a>

          {/* Desktop Navigation with Active Section Glow */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = currentView === 'home' && activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer relative py-1 ${
                    isActive
                      ? 'text-white font-extrabold'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#E30620] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={getWhatsAppUrlWithMsg('Hola Dismerca Colombia, deseo solicitar información.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E30620] hover:bg-[#C5041A] text-white font-bold text-xs tracking-wider uppercase shadow-lg shadow-[#E30620]/30 hover:shadow-[#E30620]/50 transition-all duration-200 group"
            >
              <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={getWhatsAppUrlWithMsg('Hola Dismerca Colombia, deseo información.')}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#E30620] text-white hover:bg-[#C5041A] sm:hidden"
              aria-label="Abrir WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-300 hover:text-white bg-[#151515] border border-white/10 hover:border-white/20 focus:outline-none"
              aria-label="Menú principal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[60px] bg-[#0c0c0c]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-8 shadow-2xl transition-all max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-3 text-left">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-base font-bold py-2 border-b border-white/5 text-left flex items-center justify-between ${
                  activeSection === link.id ? 'text-[#E30620]' : 'text-neutral-200 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && <span className="w-1.5 h-1.5 rounded-full bg-[#E30620]" />}
              </button>
            ))}

            {onNavigateLegal && (
              <div className="flex gap-4 pt-3 text-xs text-neutral-400">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateLegal('privacy');
                  }}
                  className="hover:text-white underline text-left cursor-pointer"
                >
                  Política de privacidad
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateLegal('terms');
                  }}
                  className="hover:text-white underline text-left cursor-pointer"
                >
                  Términos
                </button>
              </div>
            )}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={getWhatsAppUrlWithMsg('Hola Dismerca Colombia, deseo solicitar asesoría inmediata.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#E30620] text-white font-bold tracking-wide shadow-lg shadow-[#E30620]/30"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Hablar por WhatsApp</span>
              </a>
              <div className="flex items-center justify-between text-xs text-neutral-400 pt-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#E30620]" /> Calle 38 # 52-50, Medellín
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-neutral-400" /> +57 310 446 7970
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
