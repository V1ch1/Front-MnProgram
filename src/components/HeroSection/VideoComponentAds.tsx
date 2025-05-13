import React, { useState } from "react";
import FormPopup from "../forms/FormPopup";

interface VideoComponentAdsProps {
  caratulaVideo: string;
  videoUrl: string;
}

const VideoComponentAds: React.FC<VideoComponentAdsProps> = ({
  caratulaVideo,
  videoUrl,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  // Manejador para abrir el popup (sin registro de eventos)
  const handleOpenPopup = (): void => {
    setIsPopupOpen(true);
  };

  // Manejador para cerrar el popup
  const handleClosePopup = (): void => {
    setIsPopupOpen(false);
  };

  return (
    <div className="video-container relative">
      {/* Contenedor de la imagen */}
      <div className="cover-image relative">
        <img
          src={caratulaVideo}
          alt="Carátula del vídeo"
          className="w-full h-full object-cover cursor-pointer"
          onClick={handleOpenPopup}
          loading="lazy"
          srcSet={`${caratulaVideo}?w=320 320w, ${caratulaVideo}?w=640 640w, ${caratulaVideo}?w=1024 1024w`}
          sizes="(max-width: 640px) 320px, (max-width: 1024px) 640px, 1024px"
        />
        {/* Botón de reproducción */}
        <button
          onClick={handleOpenPopup}
          className="elementor-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl"
          aria-label="Reproducir video"
        >
          <i className="fas fa-play-circle"></i>
        </button>
      </div>

      {/* Popup del formulario */}
      {isPopupOpen && (
        <FormPopup closePopup={handleClosePopup} videoUrl={videoUrl} />
      )}
    </div>
  );
};

export default VideoComponentAds;
