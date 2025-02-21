import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const BlueSection: React.FC = () => {
  return (
    <div className="bg-[#0066CC] py-48 relative mb-0 bottom-0 mt-32">
      <div className="max-w-7xl mx-auto px-4">
        {/* Contenedor de columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative mb-0">
          {/* Columna izquierda - Títulos y Lista de checks */}
          <div>
            {/* Títulos */}
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Software de gestión para despachos de abogados
            </h2>
            <p className="text-white text-xl md:text-2xl mb-8">
              Gestiona tu despacho de forma eficiente y profesional
            </p>

            {/* Lista de checks */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-[#0066CC] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Gestión completa de expedientes y casos
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-[#0066CC] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Control de plazos y calendario judicial
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-[#0066CC] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Facturación y gestión económica integrada
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-[#0066CC] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Comunicación directa con clientes y colaboradores
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-[#0066CC] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Acceso desde cualquier dispositivo 24/7
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Columna derecha - Imagen */}
          <div className="md:absolute md:right-4 md:top-1/2 md:transform md:-translate-y-1/2 md:w-2/3 flex items-center">
            <img
              src="/assets/Mockup MN.webp"
              alt="Mockup MN Software"
              className="w-full h-auto transform rotate-[-10deg] scale-[1.8] pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueSection;
