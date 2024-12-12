// components/FixedButtons.tsx
import React from "react";
import VerPreciosButton from "../buttons/VerPreciosButton";
import VerVideoButton from "../buttons/VerVideoButton";

const FixedButtons: React.FC = () => {
  return (
    <div className="fixed bottom-28 left-5 z-50 flex flex-col gap-2">
      {/* Botón de Ver Precios */}
      <VerPreciosButton
        label="Ver Precios"
        location="bottom-left"
        logoUrl="/path/to/logo.png"
      />
      {/* Botón de Ver Vídeo */}
      <VerVideoButton
        label="Ver Vídeo"
        location="bottom-left"
        videoUrl="https://www.youtube.com/watch?v=rZ1Hoi8rrLo"
      />
    </div>
  );
};

export default FixedButtons;
