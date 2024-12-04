import React from "react";

// Props del botón
type VerVideoButtonProps = {
  label: string; // Texto del botón
  location: string; // Ubicación del botón (para tracking)
  onClick?: () => void; // Acción adicional al hacer clic
  className?: string; // Clases personalizadas opcionales
};

const VerVideoButton: React.FC<VerVideoButtonProps> = ({
  label = "Ver Video",
  location,
  onClick,
  className = "",
}) => {
  // Función para manejar el tracking
  const handleClick = () => {
    console.log(`Botón "VerVideo" clicado en la ubicación: ${location}`);

    // Aquí puedes enviar datos a tu API o servicio de análisis
    // Por ejemplo:
    // await sendTrackingEvent({ event: 'button_click', location });

    // Ejecutar la función onClick adicional, si está presente
    if (onClick) onClick();
  };

  // Clases base del botón
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 transition duration-200";

  // Clases personalizadas para el estilo del botón
  const buttonClasses = `bg-[#FD4A5C] text-white hover:bg-[#e54352] focus:ring-[#FD4A5C] px-4 py-2 ${className}`;

  return (
    <button className={`${baseClasses} ${buttonClasses}`} onClick={handleClick}>
      {label}
    </button>
  );
};

export default VerVideoButton;
