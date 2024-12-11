import React, { useState } from "react";
import PopUpVerPrecios from "../forms/PopUpVerPrecios";

// Props del botón
type VerPreciosButtonProps = {
  label: string; // Texto del botón
  location: string; // Ubicación del botón (para tracking)
  logoUrl: string; // URL del logo
  onClick?: () => void; // Acción adicional al hacer clic
  className?: string; // Clases personalizadas opcionales
};

const VerPreciosButton: React.FC<VerPreciosButtonProps> = ({
  label = "Ver Precios",
  location,
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
  const buttonClasses = `bg-[#10C263] text-white hover:bg-[#0a9c50] focus:ring-[#10C263] 
    text-lg px-6 py-2 sm:text-xl sm:px-8 sm:py-3 md:text-xl md:px-10 md:py-4 rounded-lg 
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
      {isPopupOpen && <PopUpVerPrecios onClose={handleClosePopup} />}
    </>
  );
};

export default VerPreciosButton;
