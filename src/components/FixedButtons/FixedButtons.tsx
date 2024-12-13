// components/FixedButtons.tsx
import React from "react";
import VerPreciosButton from "../buttons/VerPreciosButton";
import VerVideoButton from "../buttons/VerVideoButton";
import { useLocation } from "react-router-dom";

const FixedButtons: React.FC = () => {
  const location = useLocation().pathname; // Obtén la ruta actual
  console.log(location);

  return (
    <div className="fixed bottom-56 left-3 z-50 flex flex-col gap-2">
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
