import React, { useState } from "react";
import FormAdsDegrad from "../forms/FormAdsDegrad";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { trackWhatsAppClick } from "../../utils/analytics";

const Block2Ads: React.FC = () => {
  const [leftRef, isLeftVisible] = useIntersectionObserver();
  const [rightRef, isRightVisible] = useIntersectionObserver();
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
    <div className="w-full overflow-hidden">
      <div className="container mx-auto px-4 -mt-16 md:-mt-8">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-8">
          {/* Columna izquierda */}
          <div
            ref={leftRef}
            className={`col-span-2 lg:col-span-4 relative h-[250px] lg:h-[320px] rounded-3xl shadow-lg bg-white flex items-center justify-center transition-all duration-500 ${
              isLeftVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-0 lg:-translate-x-full opacity-0"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black font-space font-normal text-center px-4 lg:px-6">
              Puesta en marcha gratuita y a tu medida
            </h2>
          </div>

          {/* Columna derecha - Aumentada la altura en móvil */}
          <div
            ref={rightRef}
            className={`col-span-2 lg:col-span-8 relative shadow-lg h-[300px] lg:h-[320px] rounded-3xl overflow-hidden transition-all duration-500 ${
              isRightVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-0 lg:translate-x-full opacity-0"
            }`}
          >
            {/* Imagen de fondo */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/assets/ads/block2.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.7)",
              }}
            />

            {/* Contenido sobre la imagen */}
            <div className="relative z-10 p-6 lg:p-8 flex flex-col h-full justify-between">
              <div>
                <h3 className="relative text-white text-3xl lg:text-4xl font-space font-medium mb-3 lg:mb-4">
                  <span className="relative">
                    Migración gratis
                    <span className="absolute -top-1 left-0 right-0 h-[100%] bg-gradient-to-r from-[#2871fa] to-[#6717cd] opacity-50 mix-blend-overlay"></span>
                  </span>
                </h3>
                <p className="text-white text-2xl lg:text-3xl font-space font-normal">
                  100% segura, sin pérdida de datos y en el menor tiempo posible
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mt-4 sm:mt-0">
                <button
                  onClick={handleOpenPopup}
                  className="w-full sm:w-64 bg-gradient-to-r from-[#29f19c] to-[#02a1f9] text-black hover:from-[#02a1f9] hover:to-[#29f19c] px-6 lg:px-8 py-2 rounded-3xl transform hover:translate-y-1 transition-all text-base lg:text-lg font-space font-normal"
                >
                  Te llamamos
                </button>
                <a
                  href="https://wa.me/34659989871"
                  target="_blank"
                  onClick={trackWhatsAppClick}
                  rel="noopener noreferrer"
                  className="flex items-center w-full sm:w-auto"
                >
                  <button className="w-full sm:w-64 bg-gradient-to-r from-[#ff544f] to-[#fad126] text-black hover:from-[#fad126] hover:to-[#ff544f] px-6 lg:px-8 py-2 rounded-3xl transform hover:translate-y-1 transition-all text-base lg:text-lg font-space font-normal">
                    Whatsapp
                  </button>
                </a>
              </div>
            </div>
          </div>
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

export default Block2Ads;
