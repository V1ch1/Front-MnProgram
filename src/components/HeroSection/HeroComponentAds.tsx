import React, { useState } from "react";
import FormAds from "../forms/FormAds";
import TextBlackRough from "../Text/TextBlackRough";

const HeroComponentAds: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const videoData = {
    caratulaVideo: "/assets/caratulas/Abogados.webp", // Ruta actualizada a la ubicación correcta
    videoUrl: "https://www.youtube.com/watch?v=tu-video-id", // Ajusta la URL según tu video
  };

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const titleData = {
    text1: "Empieza gratis desde",
    highlightedText: "1€ al día",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex flex-col -space-y-12">
          <div>
            <div>
              <TextBlackRough title={titleData} />
            </div>
          </div>
          <p className="text-xl md:text-3xl font-bold">
            Software de gestión para abogados
          </p>
        </div>

        <div className="video-container relative">
          <div className="cover-image relative rounded-xl overflow-hidden shadow-xl">
            <img
              src={videoData.caratulaVideo}
              alt="Carátula del vídeo"
              className="w-full h-full object-cover cursor-pointer"
              onClick={handleOpenPopup}
              loading="lazy"
              srcSet={`${videoData.caratulaVideo}?w=320 320w, ${videoData.caratulaVideo}?w=640 640w, ${videoData.caratulaVideo}?w=1024 1024w`}
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 640px, 1024px"
            />
            <button
              onClick={handleOpenPopup}
              className="elementor-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl hover:scale-110 transition-transform"
              aria-label="Reproducir video"
            >
              <i className="fas fa-play-circle"></i>
            </button>
          </div>

          {isPopupOpen && (
            <FormAds onClose={handleClosePopup} videoUrl={videoData.videoUrl} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroComponentAds;
