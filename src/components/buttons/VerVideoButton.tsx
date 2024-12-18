import React, { useState } from "react";
import axios from "axios";
import FormPopup from "../forms/FormPopup";

// Props del botón
type VerVideoButtonProps = {
  label: string;
  location: string;
  videoUrl: string;
  onClick?: () => void;
  className?: string;
};

const VerVideoButton: React.FC<VerVideoButtonProps> = ({
  label = "Ver Vídeo",
  location,
  videoUrl,
  onClick,
  className = "",
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const API_URL =
    "https://at4s9h6x58.execute-api.us-east-2.amazonaws.com/dev/mnprogram-api";
  console.log(API_URL);
  const handleClick = async () => {
    // Mostrar el popup
    setIsPopupOpen(true);

    // Si existe una función onClick pasada como prop, ejecutarla
    if (onClick) onClick();

    // Aquí es donde integras Axios para hacer una solicitud POST
    try {
      console.log("Enviando solicitud a la API...");
      const response = await axios.post(
        API_URL, // Usar la variable de entorno para la URL
        {
          fuente: "mail.plus.precios",
          section: "header",
          email: "gabriel.gonzales@test.com", // Esto puede ser dinámico o de estado
          icodcli: "cli_123", // Esto también puede ser dinámico
          asunto: `Vídeo sobre ${location}`, // Título del asunto
          status: "pendiente", // Ejemplo de status, puedes ajustarlo
          colectivo: location, // Usamos el `location` como el colectivo
        }
      );

      // Log para ver si la respuesta es exitosa
      console.log("Respuesta de la API:", response.data);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // Clases base del botón
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 transition duration-200";

  // Aumentar tamaño del botón con clases responsivas
  const buttonClasses = `bg-[#FD4A5C] text-white hover:bg-[#e54352] focus:ring-[#FD4A5C] 
  text-lg px-6 py-2 sm:text-xl sm:px-8 sm:py-3 md:text-lg md:px-8 md:py-3 rounded-lg 
  transform hover:translate-y-1 hover:shadow-lg transition-all ${className}`;

  return (
    <>
      {/* Botón */}
      <button
        className={`${baseClasses} ${buttonClasses}`}
        onClick={handleClick}
      >
        {label}
      </button>

      {/* Popup del formulario */}
      {isPopupOpen && (
        <FormPopup videoUrl={videoUrl} closePopup={handleClosePopup} />
      )}
    </>
  );
};

export default VerVideoButton;
