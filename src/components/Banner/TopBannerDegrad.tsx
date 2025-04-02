import React, { useState } from "react";
import FormAdsDegrad from "../forms/FormAdsDegrad";
import { FaWhatsapp, FaPhone, FaBuilding } from "react-icons/fa";
import { trackWhatsAppClick } from "../../utils/analytics";

interface TopBannerDegradProps {
  colectivo: string;
}

const TopBannerDegrad: React.FC<TopBannerDegradProps> = ({ colectivo }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const videoData = {
    videoUrl:
      "https://www.youtube.com/watch?v=rZ1Hoi8rrLo&list=TLGGyRamxW9DoYUyMDAyMjAyNQ",
  };

  return (
    <>
      <div className="container mx-auto px-4 bg-transparent text-white py-2 absolute -top-8 left-0 right-0 z-10">
        <div className="flex flex-col md:flex-row md:justify-end items-center border-t border-white">
          {/* Fila superior en móvil / Columna izquierda en desktop */}
          <div className="w-full md:w-1/4 flex justify-between items-center mb-2 md:mb-0">
            {/* Logo */}
            <img
              src="/assets/logoMnAniBl.png"
              alt="Logo"
              className="h-16 md:h-24 w-auto"
            />
            {/* Empresas y Autónomos - Al lado del logo en móvil */}
            <div className="flex items-center md:hidden">
              <FaBuilding className="text-lg mr-2" />
              <span className="text-sm font-normal text-white font-space">
                Autónomos y Empresas
              </span>
            </div>
          </div>

          {/* Contenedor de los elementos a la derecha */}
          <div className="w-full md:w-3/4 flex flex-col md:flex-row items-center md:justify-end space-y-2 md:space-y-0 md:space-x-4">
            {/* Empresas y Autónomos - Solo visible en desktop */}
            <div className="hidden md:flex items-center">
              <FaBuilding className="text-lg mr-2" />
              <span className="text-sm font-normal text-white font-space">
                Autónomos y Empresas
              </span>
            </div>

            {/* Botones en fila */}
            <div className="flex items-center space-x-4">
              {/* Botón WhatsApp */}
              <a
                href="https://wa.me/34659989871"
                target="_blank"
                onClick={trackWhatsAppClick}
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors"
              >
                <FaWhatsapp className="text-lg text-white mr-2" />
                <span className="text-sm font-normal font-space">
                  Contacta ahora
                </span>
              </a>

              {/* Botón Teléfono */}
              <button
                onClick={handleOpenPopup}
                className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
              >
                <FaPhone className="text-lg mr-2" />
                <span className="text-sm font-normal font-space">
                  Te llamamos
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Formulario fuera de la estructura del banner */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-[100]">
          <FormAdsDegrad
            onClose={handleClosePopup}
            videoUrl={videoData.videoUrl}
            colectivo={colectivo}
          />
        </div>
      )}
    </>
  );
};

export default TopBannerDegrad;
