import React from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

interface LegalPageProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<LegalPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#080808] text-neutral-300 pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-400 hover:text-white mb-8 group transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Volver al inicio</span>
        </button>

        <div className="p-8 sm:p-12 rounded-3xl bg-[#121212] border border-white/10 shadow-2xl">
          <div className="flex items-center gap-3 text-[#E30620] mb-4">
            <ShieldCheck className="w-6 h-6" />
            <span className="text-xs uppercase font-extrabold tracking-widest font-display">
              Protección de Datos Personales
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white font-display mb-6">
            Política de Privacidad y Tratamiento de Datos
          </h1>

          <div className="space-y-6 text-sm sm:text-base leading-relaxed text-neutral-300">
            <p>
              La presente Política de Privacidad establece los términos en que <strong className="text-white">DISMERCA COLOMBIA S.A.S.</strong>, identificada con NIT <strong className="text-white">900769511-8</strong>, con domicilio principal en <strong className="text-white">Calle 38 # 52-50, Medellín, Antioquia, Colombia</strong>, efectúa el tratamiento de los datos personales recolectados a través de su sitio web oficial <strong className="text-white">https://dismercacolombia.online/</strong> y sus canales de atención directa, en cumplimiento de la Ley Estatutaria 1581 de 2012 y el Decreto 1377 de 2013 de la República de Colombia.
            </p>

            <h2 className="text-xl font-bold text-white font-display pt-4 border-t border-white/10">
              1. Responsable del Tratamiento
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-400">
              <li><strong className="text-neutral-200">Razón Social:</strong> DISMERCA COLOMBIA S.A.S.</li>
              <li><strong className="text-neutral-200">NIT:</strong> 900769511-8</li>
              <li><strong className="text-neutral-200">Dirección:</strong> Calle 38 # 52-50, Medellín, Antioquia, Colombia</li>
              <li><strong className="text-neutral-200">Teléfono:</strong> +57 310 446 7970</li>
              <li><strong className="text-neutral-200">Correo de contacto:</strong> soporte@dismercacolombia.online</li>
            </ul>

            <h2 className="text-xl font-bold text-white font-display pt-4 border-t border-white/10">
              2. Finalidades de la Recolección de Datos
            </h2>
            <p>
              Los datos suministrados voluntariamente por los usuarios a través de canales de WhatsApp, llamadas, correos o formularios son utilizados exclusivamente para:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-400">
              <li>Atender consultas y solicitudes de información sobre motocicletas, bicicletas eléctricas y repuestos.</li>
              <li>Coordinar citas de taller y servicios de mantenimiento técnico.</li>
              <li>Brindar asesoría personalizada en procesos de financiación y compra.</li>
              <li>Cumplir con las obligaciones legales y tributarias aplicables al comercio formal en Colombia.</li>
            </ul>

            <h2 className="text-xl font-bold text-white font-display pt-4 border-t border-white/10">
              3. Derechos de los Titulares (Habeas Data)
            </h2>
            <p>
              De conformidad con el artículo 8 de la Ley 1581 de 2012, el titular de los datos tiene derecho a conocer, actualizar, rectificar y solicitar la supresión de sus datos personales en cualquier momento.
            </p>
            <p>
              Para ejercer estos derechos, el titular puede comunicarse mediante correo electrónico a <a href="mailto:soporte@dismercacolombia.online" className="text-[#E30620] underline">soporte@dismercacolombia.online</a> o mediante comunicación escrita dirigida a nuestra sede física en Medellín.
            </p>

            <h2 className="text-xl font-bold text-white font-display pt-4 border-t border-white/10">
              4. Seguridad de la Información
            </h2>
            <p>
              DISMERCA COLOMBIA S.A.S. adopta medidas técnicas y organizativas razonables para salvaguardar la confidencialidad e integridad de la información de sus clientes y usuarios frente a accesos no autorizados o usos indebidos.
            </p>

            <h2 className="text-xl font-bold text-white font-display pt-4 border-t border-white/10">
              5. Vigencia y Actualizaciones
            </h2>
            <p>
              Esta política entra en vigencia a partir del año 2026. Cualquier modificación será publicada en este mismo portal web oficial.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
