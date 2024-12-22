import React, { useState } from "react";
import FormPopup from "../forms/FormPopup"; // Importamos el componente del formulario
import { registerClickEvent } from "../../services/apiService"; // Importa la función para registrar el evento

interface VideoComponentProps {
  caratulaVideo: string; // URL de la carátula del vídeo
  videoUrl: string; // URL del video
  location: string; // Ubicación del botón para tracking
  fuente: string; // Fuente
  email: string; // Email
  icodcli: string; // Código cliente
  asunto: string; // Asunto
  status: string; // Status
  colectivo: string; // Colectivo
}

const VideoComponent: React.FC<VideoComponentProps> = ({
  caratulaVideo,
  videoUrl,
  location,
  fuente,
  email,
  icodcli,
  asunto,
  status,
  colectivo,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false); // Estado de carga

  // Manejador para abrir el popup y registrar el evento
  const handleOpenPopup = async (): Promise<void> => {
    // Mostrar el popup
    setIsPopupOpen(true);

    // Iniciar la carga de la solicitud
    setLoading(true);

    try {
      console.log("Registrando evento de clic...");
      const response = await registerClickEvent(
        fuente, // Fuente
        location, // Ubicación
        email, // Email
        icodcli, // Código cliente
        asunto, // Asunto
        status, // Status
        colectivo // Colectivo
      );
      console.log("Respuesta de la API:", response);
    } catch (error) {
      console.error("Error al registrar el evento de clic:", error);
    } finally {
      setLoading(false);
    }
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
          loading="lazy" // Lazy loading para optimizar la carga
          srcSet={`${caratulaVideo}?w=320 320w, ${caratulaVideo}?w=640 640w, ${caratulaVideo}?w=1024 1024w`} // Versiones responsivas de la imagen
          sizes="(max-width: 640px) 320px, (max-width: 1024px) 640px, 1024px" // Define los tamaños de imagen según el tamaño de la pantalla
        />
        {/* Botón de reproducción */}
        <button
          onClick={handleOpenPopup} // Abre el popup y registra el evento
          className="elementor-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl"
          disabled={loading} // Deshabilita el botón mientras se registra el evento
          aria-label="Reproducir video" // Mejora la accesibilidad con un label descriptivo
        >
          <i className="fas fa-play-circle"></i> {/* Ícono de "play" */}
        </button>
      </div>

      {/* Popup del formulario */}
      {isPopupOpen && (
        <FormPopup
          closePopup={handleClosePopup} // Función para cerrar el popup
          videoUrl={videoUrl} // Pasamos el videoUrl al formulario
        />
      )}
    </div>
  );
};

export default VideoComponent;
