import React from "react";

// Props del botón
type VerVideoButtonProps = {
  label: string; // Texto del botón
  location: string; // Ubicación del botón (para tracking)
  onClick?: () => void; // Acción adicional al hacer clic
  className?: string; // Clases personalizadas opcionales
};

const VerVideoButton: React.FC<VerVideoButtonProps> = ({
  label = "Ver Vídeo",
  location,
  onClick,
  className = "",
}) => {
  // Función para manejar el tracking
  const handleClick = () => {
    console.log(`Botón "VerVídeo" clicado en la ubicación: ${location}`);

    // Envío datos API
  

    // Ejecutar la función onClick adicional, si está presente
    if (onClick) onClick();
  };

  // Clases base del botón
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 transition duration-200";

  // Clases personalizadas para el estilo del botón con efecto hover
  const buttonClasses = `bg-[#FD4A5C] text-white hover:bg-[#e54352] focus:ring-[#FD4A5C] px-6 py-3 text-xl rounded-lg 
  transform hover:translate-y-1 hover:shadow-lg transition-all ${className}`;

  return (
    <button className={`${baseClasses} ${buttonClasses}`} onClick={handleClick}>
      {label}
    </button>
  );
};

export default VerVideoButton;
