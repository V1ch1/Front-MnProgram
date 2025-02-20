import React, { useState } from "react";
import FormAds from "../forms/FormAds";
import TextBlackRough from "../Text/TextBlackRough";

const HeroComponentAds: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const videoData = {
    caratulaVideo: "/assets/caratulas/Abogados.webp", // Ruta actualizada a la ubicación correcta
    videoUrl:
      "https://www.youtube.com/watch?v=rZ1Hoi8rrLo&list=TLGGyRamxW9DoYUyMDAyMjAyNQ", // Ajusta la URL según tu video
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
        <div className="flex flex-col items-center md:items-start mb-16 md:mb-0">
          <div className="w-full">
            <TextBlackRough title={titleData} />
          </div>

          <p className="text-xl md:text-3xl font-bold text-center md:text-left -mt-12">
            Software de gestión para abogados
          </p>

          <div className="grid grid-cols-2 gap-8 mt-10 w-full">
            <div className="flex flex-col items-center">
              <button className="bg-[#FD4A5C] text-white hover:bg-[#e54352] focus:ring-[#FD4A5C] text-lg px-6 py-2 rounded-lg transform hover:translate-y-1 hover:shadow-lg transition-all">
                Ver vídeo
              </button>
              <div className="flex justify-center space-x-1 mt-2">
                <i className="text-yellow-500 fas fa-star"></i>
                <i className="text-yellow-500 fas fa-star"></i>
                <i className="text-yellow-500 fas fa-star"></i>
                <i className="text-yellow-500 fas fa-star"></i>
                <i className="text-yellow-500 fas fa-star"></i>
              </div>
              <p className="mt-2 text-sm text-center">4,8 estrellas en</p>
              <img
                src="/assets/logo-MN-25-peq.webp"
                alt="Logo Mn"
                className="mt-4 w-28 h-auto mx-auto object-contain"
              />
            </div>

            <div className="flex flex-col items-center">
              <button className="bg-[#FD4A5C] text-white hover:bg-[#e54352] focus:ring-[#FD4A5C] text-lg px-6 py-2 rounded-lg transform hover:translate-y-1 hover:shadow-lg transition-all">
                Ver precios{" "}
              </button>
              <div className="flex justify-center space-x-1 mt-2">
                <i className="text-yellow-500 fas fa-star"></i>
                <i className="text-yellow-500 fas fa-star"></i>
                <i className="text-yellow-500 fas fa-star"></i>
                <i className="text-yellow-500 fas fa-star"></i>
                <i className="text-yellow-500 fas fa-star"></i>
              </div>
              <p className="mt-2 text-sm text-center">4,8 estrellas en</p>
              <img
                src="/assets/logoGoogle.webp"
                alt="Logo google"
                className="mt-4 w-20 h-auto mx-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
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
