import React, { useState, useEffect } from "react";
import { RoughNotation } from "react-rough-notation";

// Definir la prop 'tipoDeColectivo' como tipo string
interface TextBlackRoughFixedTextProps {
  tipoDeColectivo: string;
}

const TextBlackRoughFixedText: React.FC<TextBlackRoughFixedTextProps> = ({
  tipoDeColectivo,
}) => {
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
    <div className="flex items-center justify-center mt-12">
      <p className="text-center text-4xl font-semibold">
        Todo lo que podemos hacer por tu {tipoDeColectivo} <br />
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
            <strong>Desde 1€ al día</strong>
          </span>
        </RoughNotation>
      </p>
    </div>
  );
};

export default TextBlackRoughFixedText;
