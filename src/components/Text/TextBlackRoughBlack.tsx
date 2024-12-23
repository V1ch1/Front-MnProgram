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
  const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);

  // Usamos useEffect para controlar cuando se cargue el contenido
  useEffect(() => {
    const onLoadContent = () => {
      setIsContentLoaded(true);
    };

    // Solo comienza la animación una vez que el contenido esté completamente cargado
    if (isContentLoaded) {
      const interval = setInterval(() => {
        setAnimate(false); // Detener la animación
        setTimeout(() => setAnimate(true), 100); // Reiniciar la animación después de un pequeño retraso
      }, 3000); // Intervalo de 3 segundos

      return () => clearInterval(interval); // Limpiar el intervalo al desmontar
    }

    // Llamada a la función para indicar que el contenido se cargó
    onLoadContent();
  }, [isContentLoaded]);

  return (
    <div className="flex">
      <p className="text-5xl font-bold leading-tight">
        {title.text1}
        {/* Solo muestra la animación después de que el contenido se ha cargado */}
        {isContentLoaded && (
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
        )}
        {title.text2}
      </p>
    </div>
  );
};

export default TextBlackRoughBlack;
