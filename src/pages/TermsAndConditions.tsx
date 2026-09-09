import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface LegalPageProps {
  onBack: () => void;
}

export const TermsAndConditions: React.FC<LegalPageProps> = ({ onBack }) => {
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
            <FileText className="w-6 h-6" />
            <span className="text-xs uppercase font-extrabold tracking-widest font-display">
              Marco Legal de Uso
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white font-display mb-6">
            Términos y Condiciones de Uso
          </h1>

          <div className="space-y-6 text-sm sm:text-base leading-relaxed text-neutral-300">
            <p>
              Bienvenido al sitio web oficial de <strong className="text-white">DISMERCA COLOMBIA S.A.S.</strong> (en adelante "DISMERCA"), identificada con NIT <strong className="text-white">900769511-8</strong>, con domicilio en Calle 38 # 52-50, Medellín, Colombia. Al navegar o utilizar este sitio web (<strong className="text-white">https://dismercacolombia.online/</strong>), usted acepta los presentes términos y condiciones.
            </p>

            <h2 className="text-xl font-bold text-white font-display pt-4 border-t border-white/10">
              1. Objeto del Sitio Web
            </h2>
            <p>
              Este portal web tiene como objetivo informar sobre el portafolio de motocicletas, bicicletas eléctricas, repuestos y servicios de taller técnico comercializados por DISMERCA, así como facilitar canales de contacto directo y asesoría a través de medios electrónicos.
            </p>

            <h2 className="text-xl font-bold text-white font-display pt-4 border-t border-white/10">
              2. Información sobre Productos y Disponibilidad
            </h2>
            <p>
              Las imágenes, especificaciones técnicas y referencias exhibidas en este sitio tienen carácter ilustrativo e informativo. La disponibilidad de modelos, versiones, colores y repuestos está sujeta a verificación en inventario físico y confirmación por parte de un asesor comercial en nuestra sede de Medellín o mediante WhatsApp.
            </p>

            <h2 className="text-xl font-bold text-white font-display pt-4 border-t border-white/10">
              3. Propiedad Intelectual
            </h2>
            <p>
              Los contenidos propios de este sitio web, incluyendo textos, diseños, logotipos de DISMERCA e interfaz visual, son propiedad de DISMERCA COLOMBIA S.A.S. Las marcas comerciales, denominaciones y logotipos correspondientes a Victory, Kymco, Kawasaki, Benelli, Stärker u otros fabricantes pertenecen a sus respectivos titulares y se mencionan únicamente con fines de identificación comercial autorizada de productos.
            </p>

            <h2 className="text-xl font-bold text-white font-display pt-4 border-t border-white/10">
              4. Canales de Asesoría y Contratación
            </h2>
            <p>
              Cualquier cotización, proceso de financiación o adquisición formal de vehículos o servicios se perfeccionará de manera individual con los documentos legales, contractuales y facturación correspondiente expedida por DISMERCA COLOMBIA S.A.S.
            </p>

            <h2 className="text-xl font-bold text-white font-display pt-4 border-t border-white/10">
              5. Legislación Aplicable y Jurisdicción
            </h2>
            <p>
              Los presentes términos y cualquier controversia derivada del uso del sitio web se regirán por las leyes vigentes de la República de Colombia, siendo competentes los tribunales de la ciudad de Medellín.
            </p>

            <h2 className="text-xl font-bold text-white font-display pt-4 border-t border-white/10">
              6. Datos de Contacto
            </h2>
            <p>
              Para cualquier duda relativa a estos términos, puede comunicarse a:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-400">
              <li><strong className="text-neutral-200">Razón Social:</strong> DISMERCA COLOMBIA S.A.S.</li>
              <li><strong className="text-neutral-200">NIT:</strong> 900769511-8</li>
              <li><strong className="text-neutral-200">Dirección:</strong> Calle 38 # 52-50, Medellín, Antioquia, Colombia</li>
              <li><strong className="text-neutral-200">Teléfono:</strong> +57 310 446 7970</li>
              <li><strong className="text-neutral-200">Correo:</strong> soporte@dismercacolombia.online</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};
