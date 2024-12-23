import React, { useState } from "react";
import PopUpVerPrecios from "../forms/PopUpVerPrecios";
import { registerClickEvent } from "../../services/apiService";
import ReactGA from "react-ga4"; // Importa ReactGA para rastreo

// Props del botón
type VerPreciosButtonProps = {
  label: string;
  location: string; // Ubicación del botón (para tracking)
  fuente: string;
  email: string;
  icodcli: string;
  asunto: string;
  status: string;
  colectivo: string;
  onClick?: () => void;
  className?: string;
};

const VerPreciosButton: React.FC<VerPreciosButtonProps> = ({
  label = "Ver Precios",
  location,
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

  const handleClick = async () => {
    // Enviar evento a Google Analytics
    ReactGA.event({
      category: "CTA", // Categoría del evento
      action: "Clicked Ver Precios Button", // Acción del evento
      label: `Location: ${location}, Fuente: ${fuente}, Email: ${email}`, // Etiqueta descriptiva
      value: 3, // Valor asociado al evento
    });

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

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Función para cerrar el popup
  };

  // Clases base del botón
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 transition duration-200";

  // Clases de estilo del botón
  const buttonClasses = `bg-[#10C263] text-white hover:bg-[#0a9c50] focus:ring-[#10C263] 
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

      {isPopupOpen && <PopUpVerPrecios onClose={handleClosePopup} />}
    </>
  );
};

export default VerPreciosButton;
