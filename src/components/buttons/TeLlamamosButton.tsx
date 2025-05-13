import React, { useState } from "react";
import { registerClickEvent } from "../../services/apiService";
import ReactGA from "react-ga4"; // Importa ReactGA para rastreo

// Props del botón
type TeLlamamosButtonProps = {
  location: string; // Ubicación del botón (para tracking)
  fuente: string; // Fuente
  email: string;
  icodcli: string;
  asunto: string;
  status: string;
  colectivo: string;
  setShowMessage: React.Dispatch<React.SetStateAction<string | null>>; // Función para actualizar el mensaje
  className?: string; // Clases adicionales para personalizar el estilo del botón
};

const TeLlamamosButton: React.FC<TeLlamamosButtonProps> = ({
  location,
  fuente,
  email,
  icodcli,
  asunto,
  status,
  colectivo,
  setShowMessage,
  className = "",
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  // Manejador del clic en el botón "Te llamamos"
  const handleClick = async () => {
    // Enviar evento a Google Analytics
    ReactGA.event({
      category: "CTA", // Categoría del evento
      action: "Clicked Te Llamamos Button", // Acción del evento
      label: `Location: ${location}, Fuente: ${fuente}, Email: ${email}`, // Etiqueta descriptiva
      value: 2, // Valor asociado al evento
    });

    // Actualizar el mensaje al hacer clic
    setShowMessage(
      "En unos minutos, uno de nuestros comerciales le llamará para diseñar una oferta personalizada a la medida de sus necesidades."
    );

    // Registrar el evento de clic en la API
    setLoading(true); // Activar el estado de carga
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
      setLoading(false); // Desactivar el estado de carga
    }
  };

  // Clases base del botón
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 transition duration-200";

  // Clases de estilo del botón
  const buttonClasses = `bg-[#FD4A5C] text-white hover:bg-[#e54352] focus:ring-[#FD4A5C] 
  text-lg px-6 py-2 sm:text-xl sm:px-8 sm:py-3 md:text-lg md:px-8 md:py-3 rounded-lg 
  transform hover:translate-y-1 hover:shadow-lg transition-all ${className}`;

  return (
    <button
      className={`${baseClasses} ${buttonClasses}`}
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? "Cargando..." : "Te llamamos"}
    </button>
  );
};

export default TeLlamamosButton;
