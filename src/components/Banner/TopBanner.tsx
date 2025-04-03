import React, { useState } from "react";
import FormAdsRojo from "../forms/FormAdsRojo";
import { FaWhatsapp, FaPhone, FaBuilding } from "react-icons/fa";
import { trackWhatsAppClick } from "../../utils/analytics";

const TopBanner: React.FC = () => {
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
    <div className="w-full bg-gray-900 text-white py-4">
      <div className="container-fluid mx-auto px-4 md:px-16">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-0">
          {/* Columna izquierda */}
          <div className="flex items-center justify-center w-full md:w-auto">
            <button className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
              <FaBuilding className="text-lg" />
              <span className="text-sm font-normal text-white font-space">
                Autónomos y Empresas
              </span>
            </button>
          </div>

          {/* Columna derecha */}
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/34659989871"
              onClick={trackWhatsAppClick}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-gray-300 transition-colors"
            >
              <FaWhatsapp className="text-lg" />
              <span className="text-sm font-normal text-white font-space">
                Contacta ahora
              </span>
            </a>

            <button
              onClick={handleOpenPopup}
              className="flex items-center space-x-2 hover:text-gray-300 transition-colors"
            >
              <FaPhone className="text-lg" />
              <span className="text-sm font-normal text-white font-space">
                Te llamamos
              </span>
            </button>
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <FormAdsRojo onClose={handleClosePopup} videoUrl={videoData.videoUrl} />
      )}
    </div>
  );
};

export default TopBanner;
