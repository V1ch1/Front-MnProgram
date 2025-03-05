import React, { useState } from "react";
import FormAds from "../forms/FormAds";

const CallToActionSection: React.FC = () => {
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
    <div className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gestiona tu despacho de forma inteligente
          </h2>

          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Optimiza tu tiempo y mejora la productividad de tu despacho
          </p>

          <button
            onClick={handleOpenPopup}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-xl md:text-2xl"
          >
            Pruébalo gratis
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
                transform="rotate(-45 12 12)"
              />
            </svg>
          </button>
        </div>
      </div>

      {isPopupOpen && (
        <FormAds onClose={handleClosePopup} videoUrl={videoData.videoUrl} />
      )}
    </div>
  );
};

export default CallToActionSection;
