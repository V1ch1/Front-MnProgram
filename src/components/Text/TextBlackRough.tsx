import React, { useState, useEffect } from "react";
import { RoughNotation } from "react-rough-notation";

// Definimos la interfaz para las props que recibirá el componente
interface TextBlackRoughProps {
  title: {
    text1: string;
    highlightedText: string;
  };
}

const TextBlackRough: React.FC<TextBlackRoughProps> = ({ title }) => {
  // Estado para controlar si se debe mostrar la animación
  const [animate, setAnimate] = useState<boolean>(false);

  // Usamos useEffect para reiniciar la animación cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false); // Detener la animación
      setTimeout(() => setAnimate(true), 100); // Reiniciar la animación después de un pequeño retraso
    }, 3000); // Intervalo de 3 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, []);

  return (
    <div className="flex items-center h-64">
      <p className=" text-5xl font-semibold">
        {title.text1} <br />
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
      </p>
    </div>
  );
};

export default TextBlackRough;
