import React, { useState } from "react";
import FormAdsDegrad from "../forms/FormAdsDegrad";
import { trackWhatsAppClick } from "../../utils/analytics";

const HeroComponentAds2: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const videoData = {
    videoUrl: "https://www.youtube.com/watch?v=rZ1Hoi8rrLo",
  };
  return (
    <div className="relative h-screen w-full rounded-bl-[50px] rounded-br-[50px]">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 z-0 rounded-bl-[50px] rounded-br-[50px]"
        style={{
          backgroundImage: "url('/assets/Hero/Fondo3.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Contenedor del contenido */}
      <div className="absolute bottom-20 left-10 z-10 max-w-5xl">
        <h1 className="text-5xl md:text-7xl text-white mb-4 w-full font-space font-extralight">
          MN 25 ANIVERSARIO: <br></br>
          <span>LA MEJOR OFERTA DE NUESTRA HISTORIA</span>
        </h1>

        <div className="flex items-center mb-8 w-full">
          <h2 className="text-2xl md:text-4xl text-white mr-3 font-space font-normal">
            Contrata ahora por 1€ al día
          </h2>
          <i className="fas fa-arrow-down text-white text-3xl animate-bounce ml-4"></i>
        </div>

        <div className="flex space-x-6 w-full">
          <button
            onClick={handleOpenPopup}
            className="w-64 bg-gradient-to-r from-[#29f19c] to-[#02a1f9] text-black hover:from-[#02a1f9] hover:to-[#29f19c] px-8 py-2 rounded-3xl transform hover:translate-y-1 transition-all text-lg font-space font-normal"
          >
            Te llamamos
          </button>
          <a
            href="https://wa.me/34659989871"
            target="_blank"
            onClick={trackWhatsAppClick}
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-gray-300 transition-colors"
          >
            <button
              onClick={handleOpenPopup}
              className="w-64 bg-gradient-to-r from-[#ff544f] to-[#fad126] text-black hover:from-[#fad126] hover:to-[#ff544f] px-8 py-2 rounded-3xl transform hover:translate-y-1 transition-all text-lg font-space font-normal"
            >
              Whatsapp
            </button>
          </a>
        </div>
      </div>
      {isPopupOpen && (
        <FormAdsDegrad
          onClose={handleClosePopup}
          videoUrl={videoData.videoUrl}
        />
      )}
    </div>
  );
};

export default HeroComponentAds2;
