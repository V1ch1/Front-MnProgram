import React from "react";

// Props del botón
type VerPreciosButtonProps = {
  label: string; // Texto del botón
  location: string; // Ubicación del botón (para tracking)
  onClick?: () => void; // Acción adicional al hacer clic
  className?: string; // Clases personalizadas opcionales
};

const VerPreciosButton: React.FC<VerPreciosButtonProps> = ({
  label = "Ver Precios",
  location,
  onClick,
  className = "",
}) => {
  // Función para manejar el tracking
  const handleClick = () => {
    console.log(`Botón "Precios" clicado en la ubicación: ${location}`);

    // Aquí puedes enviar datos a tu API o servicio de análisis
    // Por ejemplo:
    // await sendTrackingEvent({ event: 'button_click', location });

    // Ejecutar la función onClick adicional, si está presente
    if (onClick) onClick();
  };

  // Clases base del botón
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 transition duration-200";

  // Clases personalizadas para el estilo del botón con efecto hover
  const buttonClasses = `bg-[#10C263] text-white hover:bg-[#0a9c50] focus:ring-[#10C263] px-6 py-3 text-xl rounded-lg 
  transform hover:translate-y-1 hover:shadow-lg transition-all ${className}`;

  return (
    <button className={`${baseClasses} ${buttonClasses}`} onClick={handleClick}>
      {label}
    </button>
  );
};

export default VerPreciosButton;
