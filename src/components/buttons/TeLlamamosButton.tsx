import React, { useState } from "react";
import { registerClickEvent } from "../../services/apiService";
import ReactGA from "react-ga4";

interface TeLlamamosButtonProps {
  onClick: () => void;
  location: string;
  fuente?: string;
  email?: string;
  icodcli?: string;
  asunto?: string;
  status?: string;
  colectivo?: string;
  setShowMessage?: React.Dispatch<React.SetStateAction<string | null>>;
  className?: string;
}

const TeLlamamosButton: React.FC<TeLlamamosButtonProps> = ({
  onClick,
  location,
  fuente = "mail.llamada",
  email = "email_por_defecto@test.com",
  icodcli = "cli_por_defecto",
  asunto = "asunto_por_defecto",
  status = "pendiente",
  colectivo = "",
  setShowMessage,
  className = "",
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async () => {
    // Enviar evento a Google Analytics
    ReactGA.event({
      category: "CTA",
      action: "Clicked Te Llamamos Button",
      label: `Location: ${location}, Fuente: ${fuente}, Email: ${email}`,
      value: 3,
    });

    // Actualizar el mensaje al hacer clic
    if (setShowMessage) {
      setShowMessage(
        "En unos minutos, uno de nuestros comerciales contactará con usted."
      );
    }

    // Registrar el evento de clic en la API
    setLoading(true);
    try {
      console.log("Registrando evento de clic...");
      const response = await registerClickEvent(
        fuente,
        location,
        email,
        icodcli,
        asunto,
        status,
        colectivo
      );
      console.log("Respuesta de la API:", response);
    } catch (error) {
      console.error("Error al registrar el evento de clic:", error);
    } finally {
      setLoading(false);
    }

    // Ejecutar la función onClick adicional
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`w-full sm:w-64 bg-[#FE0000] text-white hover:bg-[#e54352] px-6 md:px-8 py-2 rounded-3xl transform hover:translate-y-1 transition-all text-base md:text-lg font-space font-normal ${className}`}
    >
      {loading ? "Cargando..." : "Te llamamos"}
    </button>
  );
};

export default TeLlamamosButton;
