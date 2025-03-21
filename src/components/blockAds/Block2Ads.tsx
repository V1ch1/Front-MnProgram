import React, { useState } from "react";
import FormAds from "../forms/FormAds";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

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
    <div className="w-full pb-4 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Columna izquierda (30%) */}
          <div
            ref={leftRef}
            className={`md:col-span-4 relative h-[320px] rounded-3xl shadow-lg bg-white flex items-center justify-center transition-all duration-500 ${
              isLeftVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl text-black font-space font-normal text-center px-6">
              Puesta en marcha gratuita y a tu medida
            </h2>
          </div>

          {/* Columna derecha (70%) */}
          <div
            ref={rightRef}
            className={`md:col-span-8 relative shadow-lg h-[320px] rounded-3xl overflow-hidden transition-all duration-500 ${
              isRightVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
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
            <div className="relative z-10 p-8 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-red-500 text-4xl font-space font-medium mb-4">
                  Migración gratis
                </h3>
                <p className="text-white text-3xl font-space font-normal">
                  100% segura, sin pérdida de datos y en el menor tiempo posible
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleOpenPopup}
                  className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors font-space"
                >
                  Te llamamos
                </button>
                <a
                  href="https://wa.me/34625471673"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-gray-300 transition-colors"
                >
                  <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-space">
                    Whatsapp
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <FormAds onClose={handleClosePopup} videoUrl={videoData.videoUrl} />
      )}
    </div>
  );
};

export default Block2Ads;
