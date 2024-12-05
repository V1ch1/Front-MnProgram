import React, { useState } from "react";
import FormPopup from "./Forms/FormPopup"; // Importamos el componente del formulario

interface VideoComponentProps {
  caratulaVideo: string; // URL de la carátula del vídeo
  videoUrl: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({
  caratulaVideo,
  videoUrl,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  // Manejador para abrir el popup
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
          src={caratulaVideo} // URL de la imagen
          alt="Carátula del vídeo"
          className="w-full h-full object-cover cursor-pointer"
          onClick={handleOpenPopup} // Abre el popup al hacer clic
        />

        {/* Botón de reproducción */}
        <button onClick={handleOpenPopup} className="elementor-icon">
          <i className="fas fa-play-circle text-white"></i>{" "}
          {/* Ícono de "play" */}
        </button>
      </div>

      {/* Popup del formulario */}
      {isPopupOpen && (
        <FormPopup
          closePopup={handleClosePopup} // Función para cerrar el popup
          videoUrl={videoUrl}
        />
      )}
    </div>
  );
};

export default VideoComponent;
