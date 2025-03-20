import React, { useState } from "react";
import FormAds from "../forms/FormAds";
import { FaWhatsapp, FaPhone, FaBuilding } from "react-icons/fa";

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
      <div className="container-fluid mx-auto px-8 md:px-16">
        <div className="flex justify-between items-center">
          {/* Columna izquierda */}
          <div className="flex items-center">
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
              href="https://wa.me/34625471673"
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
              <span className="text-sm font-normal text-whitefont-space">
                Te llamamos
              </span>
            </button>
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <FormAds onClose={handleClosePopup} videoUrl={videoData.videoUrl} />
      )}
    </div>
  );
};

export default TopBanner;
