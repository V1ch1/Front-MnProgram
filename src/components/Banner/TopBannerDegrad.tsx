import React, { useState } from "react";
import FormAds from "../forms/FormAds";
import { FaWhatsapp, FaPhone, FaBuilding } from "react-icons/fa";

const TopBannerDegrad: React.FC = () => {
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
        <div className="flex justify-end items-center border-t border-white">
          {/* Logo a la izquierda */}
          <div className="w-1/4">
            <img src="/assets/logoMnAniBl.png" alt="Logo" className="h-24" />
          </div>

          {/* Contenedor de los elementos a la derecha */}
          <div className="w-3/4 flex items-center justify-end space-x-4">
            {/* Empresas y Autónomos */}
            <FaBuilding className="text-lg" />
            <span className="text-sm font-normal text-white font-space">
              Autónomos y Empresas
            </span>

            {/* Botón WhatsApp */}
            <a
              href="https://wa.me/34625471673"
              target="_blank"
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

      {/* Formulario fuera de la estructura del banner */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-[100]">
          <FormAds onClose={handleClosePopup} videoUrl={videoData.videoUrl} />
        </div>
      )}
    </>
  );
};

export default TopBannerDegrad;
