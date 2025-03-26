import React, { useState } from "react";
import FormAdsRojo from "../forms/FormAdsRojo";
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
    <div className="relative h-screen w-full">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/Hero/cabecera.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Contenedor del contenido */}
      <div className="absolute bottom-24 sm:bottom-16 md:bottom-20 left-4 md:left-10 z-10 max-w-5xl px-4 md:px-0">
        <img
          src="/assets/logo-MN-25-peq.webp"
          alt="Logo Hero"
          className="w-28 md:w-48 h-auto mb-3 md:mb-6"
        />

        <h1 className="text-2xl sm:text-4xl md:text-7xl text-black mb-2 md:mb-4 w-full font-space font-normal leading-tight">
          LA <span className="text-[#FE0000]">MEJOR OFERTA</span> <br></br>DE
          NUESTRA HISTORIA{" "}
        </h1>

        <div className="flex items-center mb-4 md:mb-8 w-full">
          <h2 className="text-lg sm:text-2xl md:text-4xl text-black mr-2 md:mr-3 font-space font-normal">
            Contrata ahora <span className="text-[#FE0000]">por 1€ al día</span>{" "}
          </h2>
          <i className="fas fa-arrow-down text-black text-xl md:text-3xl animate-bounce ml-2 md:ml-4"></i>
        </div>

        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6 w-full">
          <button
            onClick={handleOpenPopup}
            className="w-full sm:w-64 bg-[#FE0000] text-white hover:bg-[#e54352] px-6 md:px-8 py-2 rounded-3xl transform hover:translate-y-1 transition-all text-base md:text-lg font-space font-normal"
          >
            Te llamamos
          </button>
          <a
            href="https://wa.me/34659989871"
            onClick={trackWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center transition-colors w-full sm:w-auto"
          >
            <button className="w-full sm:w-64 bg-black text-white hover:bg-[#0052a3] px-6 md:px-8 py-2 rounded-3xl transform hover:translate-y-1 transition-all text-base md:text-lg font-space font-normal">
              Whatsapp
            </button>
          </a>
        </div>
      </div>
      {isPopupOpen && (
        <FormAdsRojo onClose={handleClosePopup} videoUrl={videoData.videoUrl} />
      )}
    </div>
  );
};

export default HeroComponentAds2;
