import React, { useState, useEffect } from "react";
import { RoughNotation } from "react-rough-notation";

// Definimos la interfaz para las props que recibirá el componente
interface TextBlackRoughBlackProps {
  title: {
    text1: string;
    highlightedText: string;
    text2: string;
  };
}

const TextBlackRoughBlack: React.FC<TextBlackRoughBlackProps> = ({ title }) => {
  // Estado para controlar si se debe mostrar la animación
  const [animate, setAnimate] = useState<boolean>(false);

  // Usamos useEffect para asegurarnos de que la animación solo ocurra después del primer renderizado
  useEffect(() => {
    // Solo activamos la animación cuando el componente ya se haya renderizado
    const timeout = setTimeout(() => setAnimate(true), 500); // Retraso para evitar animación inmediata

    return () => clearTimeout(timeout); // Limpiar timeout si el componente se desmonta
  }, []);

  return (
    <div className="flex">
      <p className="text-5xl font-bold leading-tight">
        {title.text1}
        {/* Texto resaltado con efecto de rotulador */}
        <RoughNotation
          type="underline" // Efecto de resaltado irregular
          color="#FD4A5C" // Color del rotulador
          strokeWidth={3} // Grosor del trazo
          animationDuration={1500} // Duración de la animación
          animationDelay={200} // Retardo antes de la animación
          show={animate} // Controlamos si se muestra o no la animación
        >
          <span style={{ color: "#0066CC" }}>
            <strong>{title.highlightedText}</strong>
          </span>
        </RoughNotation>
        {title.text2}
      </p>
    </div>
  );
};

export default TextBlackRoughBlack;
