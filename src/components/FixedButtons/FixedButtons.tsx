import React from "react";
import VerPreciosButton from "../buttons/VerPreciosButton";
import VerVideoButton from "../buttons/VerVideoButton";
import { useAppContext } from "../../AppContext";

const FixedButtons: React.FC = () => {
  const { colectivo } = useAppContext();

  return (
    <div className="hidden lg:fixed lg:bottom-32 lg:left-3 lg:z-50 lg:flex lg:flex-col lg:gap-2">
      <VerVideoButton
        label="Ver vídeo"
        section="Fixed Button"
        videoUrl="https://www.youtube.com/embed/CZroOtmpYg4?autoplay=1"
        fuente="mail.video"
        email="jose.blanco@test.com"
        icodcli="cli_123"
        asunto="Campaña Mn Program"
        status="pendiente"
        colectivo={colectivo}
      />
      <VerPreciosButton
        label="Ver Vídeo"
        location="Fixed Button"
        fuente="mail.precios"
        email="jose@example.com"
        icodcli="12345"
        asunto="Campaña Mn Program"
        status="pendiente"
        colectivo={colectivo}
        className="custom-class"
      />
    </div>
  );
};

export default FixedButtons;
