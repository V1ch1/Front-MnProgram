import React, { useState } from "react";
import FormAds from "../forms/FormAds";
import { FaWhatsapp, FaPhone, FaBuilding } from "react-icons/fa";

const Footer: React.FC = () => {
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
    <div className=" w-full bg-gray-900 text-white h-24 flex items-center">
      <div className="container-fluid mx-auto px-8 md:px-16 w-full">
        <div className="flex justify-around items-center">
          {/* Columna izquierda */}
          <div className="flex items-center">
            <button className="flex items-center space-x-3 hover:text-gray-300 transition-colors py-2">
              <FaBuilding className="text-xl" />
              <span className="text-base font-medium">
                Autónomos y Empresas
              </span>
            </button>
          </div>

          {/* Columna derecha */}
          <div className="flex items-center space-x-6">
            <a
              href="https://wa.me/34659989871"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:text-gray-300 transition-colors py-2"
            >
              <FaWhatsapp className="text-xl" />
              <span className="text-base font-medium">Contacta ahora</span>
            </a>

            <button
              onClick={handleOpenPopup}
              className="flex items-center space-x-3 hover:text-gray-300 transition-colors py-2"
            >
              <FaPhone className="text-xl" />
              <span className="text-base font-medium">Te llamamos</span>
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

export default Footer;
