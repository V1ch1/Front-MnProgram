import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import FormAds from "../forms/FormAds";

const BlueSection: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="bg-[#0066CC] py-24 md:py-48 relative mb-0 bottom-0 mt-32">
      {/* Botón tipo pestaña */}
      <button
        className="absolute -top-12 right-0 bg-[#0066CC] text-white px-8 py-3 rounded-tl-xl font-bold text-2xl"
        onClick={handleOpenPopup}
      >
        Te llamamos
      </button>

      <div className="max-w-7xl mx-auto px-4">
        {/* Contenedor de columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative mb-0">
          {/* Columna izquierda - Títulos y Lista de checks */}
          <div>
            {/* Títulos */}
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 text-center md:text-left md:-ml-[100px]">
              Software de gestión para despachos de abogados
            </h2>
            <p className="text-white text-xl md:text-2xl mb-4 text-center md:text-left md:mr-[150px]">
              Gestiona tu despacho de forma eficiente y profesional
            </p>

            {/* Botón Ver video */}
            <div className="flex justify-center md:justify-start mb-8">
              <button
                onClick={handleOpenPopup}
                className="bg-[#FD4A5C] text-white hover:bg-[#e54352] focus:ring-[#FD4A5C] text-lg px-6 py-2 rounded-lg transform hover:translate-y-1 hover:shadow-lg transition-all"
              >
                Ver vídeo
              </button>
            </div>

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
          <div className="md:absolute md:right-4 md:top-1/2 md:transform md:-translate-y-[70%] md:w-2/3 flex items-center mt-12 md:mt-0">
            <img
              src="/assets/Mockup MN.webp"
              alt="Mockup MN Software"
              className="w-full h-auto transform rotate-[20deg] scale-[2.8] md:scale-[2.2] pointer-events-none"
            />
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <FormAds
          onClose={handleClosePopup}
          videoUrl="https://www.youtube.com/watch?v=rZ1Hoi8rrLo&list=TLGGyRamxW9DoYUyMDAyMjAyNQ"
        />
      )}
    </div>
  );
};

export default BlueSection;
