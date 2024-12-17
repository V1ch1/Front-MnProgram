import React from "react";
import VerPreciosButton from "../buttons/VerPreciosButton";
import VerVideoButton from "../buttons/VerVideoButton";
import { useLocation } from "react-router-dom";

const FixedButtons: React.FC = () => {
  const location = useLocation().pathname; // Obtén la ruta actual

  return (
    <div className="hidden lg:fixed lg:bottom-32 lg:left-3 lg:z-50 lg:flex lg:flex-col lg:gap-2">
      {/* Botón de Ver Precios */}
      <VerPreciosButton
        label="Ver Precios"
        location={`botón ver precios en ${location}`}
        logoUrl="/path/to/logo.png"
      />
      {/* Botón de Ver Vídeo */}
      <VerVideoButton
        label="Ver Vídeo"
        location={`botón ver video en ${location}`}
        videoUrl="https://www.youtube.com/watch?v=rZ1Hoi8rrLo"
      />
    </div>
  );
};

export default FixedButtons;
