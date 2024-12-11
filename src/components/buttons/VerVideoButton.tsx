import React, { useState } from "react";
import FormPopup from "../forms/FormPopup";

// Props del botón
type VerVideoButtonProps = {
  label: string;
  location: string;
  videoUrl: string;
  onClick?: () => void;
  className?: string; // Clases personalizadas opcionales
};

const VerVideoButton: React.FC<VerVideoButtonProps> = ({
  label = "Ver Vídeo",
  location,
  videoUrl,
  onClick,
  className = "",
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const handleClick = () => {
    console.log(`Botón "VerVídeo" clicado en la ubicación: ${location}`);
    setIsPopupOpen(true);
    if (onClick) onClick();
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
