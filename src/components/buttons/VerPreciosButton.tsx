import React, { useState } from "react";
import FormPopup from "../Forms/FormPopup";

// Props del botón
type VerPreciosButtonProps = {
  label: string; // Texto del botón
  location: string; // Ubicación del botón (para tracking)
  videoUrl: string; // URL del video
  logoUrl: string; // URL del logo
  onClick?: () => void; // Acción adicional al hacer clic
  className?: string; // Clases personalizadas opcionales
};

const VerPreciosButton: React.FC<VerPreciosButtonProps> = ({
  label = "Ver Precios",
  location,
  videoUrl,
  logoUrl,
  onClick,
  className = "",
}) => {
  // Estado para manejar la visibilidad del popup
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  // Función para manejar el clic en el botón
  const handleClick = () => {
    console.log(`Botón "VerPrecios" clicado en la ubicación: ${location}`);

    // Mostrar el popup
    setIsPopupOpen(true);

    // Ejecutar la función onClick adicional, si está presente
    if (onClick) onClick();
  };

  // Función para cerrar el popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // Clases base del botón
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 transition duration-200";

  // Clases personalizadas para el estilo del botón con efecto hover
  const buttonClasses = `bg-[#10C263] text-white hover:bg-[#0a9c50] focus:ring-[#10C263] px-6 py-3 text-xl rounded-lg 
  transform hover:translate-y-1 hover:shadow-lg transition-all ${className}`;
  console.log(videoUrl, "videourl");

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
        <FormPopup
          logoUrl={logoUrl} // Pasamos el logo como prop
          videoUrl={videoUrl} // Pasamos la URL del video como prop
          closePopup={handleClosePopup} // Función para cerrar el popup
        />
      )}
    </>
  );
};

export default VerPreciosButton;
