import React from 'react';
import { MapPin, Phone, Mail, Globe, MessageCircle, ExternalLink } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrlWithMsg } from '../data/company';

export const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-[#0c0c0c] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E30620] font-display">
            Canales de Atención
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight mt-2 mb-4">
            Ponte en Contacto
          </h2>
          <p className="text-base sm:text-lg text-neutral-400">
            Visítanos en nuestra sede en Medellín o contáctanos de manera inmediata por WhatsApp o vía telefónica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 rounded-3xl bg-[#141414] border border-white/10 p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="border-b border-white/10 pb-6 mb-6">
                <span className="text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                  Razón Social
                </span>
                <h3 className="text-2xl font-black text-white font-display mt-1">
                  {COMPANY_INFO.legalName}
                </h3>
                <p className="text-xs text-[#E30620] font-bold mt-0.5 tracking-wider">
                  NIT {COMPANY_INFO.nit}
                </p>
              </div>

              {/* Items */}
              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1f1f1f] border border-white/10 flex items-center justify-center text-[#E30620] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-neutral-400 tracking-wider">Dirección</h4>
                    <p className="text-sm font-semibold text-white mt-0.5">{COMPANY_INFO.address}</p>
                    <p className="text-xs text-neutral-400">{COMPANY_INFO.city}</p>
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1f1f1f] border border-white/10 flex items-center justify-center text-[#E30620] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-neutral-400 tracking-wider">Teléfono / WhatsApp</h4>
                    <p className="text-sm font-semibold text-white mt-0.5">{COMPANY_INFO.phoneDisplay}</p>
                    <p className="text-xs text-neutral-400">Atención personalizada y asesoría</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1f1f1f] border border-white/10 flex items-center justify-center text-[#E30620] flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-neutral-400 tracking-wider">Correo Electrónico</h4>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sm font-semibold text-white hover:text-[#E30620] transition-colors mt-0.5 block break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1f1f1f] border border-white/10 flex items-center justify-center text-[#E30620] flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-neutral-400 tracking-wider">Sitio Web Oficial</h4>
                    <a
                      href={COMPANY_INFO.domain}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-[#E30620] transition-colors mt-0.5 block"
                    >
                      {COMPANY_INFO.domain}
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-8">
              <a
                href={getWhatsAppUrlWithMsg('Hola Dismerca Colombia, deseo comunicarme con un asesor.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#E30620] hover:bg-[#C5041A] text-white font-bold text-xs tracking-wide shadow-lg shadow-[#E30620]/25 transition-all text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#202020] hover:bg-[#2a2a2a] border border-white/10 text-white font-bold text-xs tracking-wide transition-all text-center"
              >
                <Phone className="w-4 h-4 text-neutral-300" />
                <span>Llamar</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#202020] hover:bg-[#2a2a2a] border border-white/10 text-white font-bold text-xs tracking-wide transition-all text-center"
              >
                <Mail className="w-4 h-4 text-neutral-300" />
                <span>Enviar correo</span>
              </a>
            </div>

          </div>

          {/* Interactive Verified Google Map */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-white/10 bg-[#141414] shadow-2xl flex flex-col min-h-[420px]">
            <div className="p-4 bg-[#181818] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E30620]" />
                <span className="text-xs font-semibold text-neutral-200">
                  Ubicación de la sede principal en Medellín
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=Calle+38+%23+52-50+Medellin+Antioquia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-neutral-400 hover:text-white inline-flex items-center gap-1 transition-colors"
              >
                <span>Abrir en Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex-1 w-full h-full min-h-[360px] relative bg-[#111]">
              <iframe
                title="Ubicación DISMERCA COLOMBIA S.A.S. en Medellín"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1956699638426!2d-75.5772393241857!3d6.23792612642598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44284b39b0a1a5%3A0x6d117c768cbfcf4a!2sCl.%2038%20%2352-50%2C%20La%20Candelaria%2C%20Medell%C3%ADn%2C%20La%20Candelaria%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1710000000000!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter invert-[90%] hue-rotate-180 contrast-[1.1] grayscale-[20%]"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
