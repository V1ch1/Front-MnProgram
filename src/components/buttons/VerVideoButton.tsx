import React, { useState } from "react";
import FormPopup from "../forms/FormPopup";
import { registerClickEvent } from "../../services/apiService";

// Props del botón
type VerVideoButtonProps = {
  label: string;
  section: string;
  videoUrl: string;
  fuente: string;
  email: string;
  icodcli: string;
  asunto: string;
  status: string;
  colectivo: string;
  onClick?: () => void;
  className?: string;
};

const VerVideoButton: React.FC<VerVideoButtonProps> = ({
  label = "Ver Vídeo",
  section,
  videoUrl,
  fuente,
  email,
  icodcli,
  asunto,
  status,
  colectivo,
  onClick,
  className = "",
}) => {
  // Estado para manejar la visibilidad del popup
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // Función para manejar el clic en el botón
  const handleClick = async () => {
    // Mostrar el popup
    setIsPopupOpen(true);

    // Ejecutar la función onClick adicional, si está presente
    if (onClick) onClick();

    // Iniciar la carga de la solicitud
    setLoading(true);

    try {
      console.log("Registrando evento de clic...");
      const response = await registerClickEvent(
        fuente, // Fuente
        section, // Sección
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

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // Clases base del botón
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 transition duration-200";

  // Clases de estilo del botón
  const buttonClasses = `bg-[#FD4A5C] text-white hover:bg-[#e54352] focus:ring-[#FD4A5C] 
  text-lg px-6 py-2 sm:text-xl sm:px-8 sm:py-3 md:text-lg md:px-8 md:py-3 rounded-lg 
  transform hover:translate-y-1 hover:shadow-lg transition-all ${className}`;

  return (
    <>
      <button
        className={`${baseClasses} ${buttonClasses}`}
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? "Cargando..." : label}
      </button>

      {isPopupOpen && (
        <FormPopup videoUrl={videoUrl} closePopup={handleClosePopup} />
      )}
    </>
  );
};

export default VerVideoButton;
