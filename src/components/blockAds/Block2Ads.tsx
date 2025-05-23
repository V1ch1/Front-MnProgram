import React, { useState } from "react";
import FormAdsRojo from "../forms/FormAdsRojo";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { trackWhatsAppClick } from "../../utils/analytics";

interface Block2AdsProps {
  colectivo: string;
}

const Block2Ads: React.FC<Block2AdsProps> = ({ colectivo }) => {
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

          {/* Columna derecha */}
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
                <h3 className="text-red-500 text-3xl lg:text-4xl font-space font-medium mb-3 lg:mb-4">
                  Migración gratis
                </h3>
                <p className="text-white text-2xl lg:text-3xl font-space font-normal">
                  100% segura, sin pérdida de datos y en el menor tiempo posible
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mt-4 sm:mt-0">
                <button
                  onClick={handleOpenPopup}
                  className="w-full sm:w-auto bg-red-600 text-white px-6 lg:px-8 py-3 rounded-full hover:bg-red-700 transition-colors font-space text-base lg:text-lg"
                >
                  Te llamamos
                </button>
                <a
                  href="https://wa.me/34659989871"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackWhatsAppClick}
                  className="flex items-center w-full sm:w-auto"
                >
                  <button className="w-full bg-white text-black px-6 lg:px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-space text-base lg:text-lg">
                    WhatsApp
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <FormAdsRojo
          onClose={handleClosePopup}
          videoUrl={videoData.videoUrl}
          colectivo={colectivo}
        />
      )}
    </div>
  );
};

export default Block2Ads;
