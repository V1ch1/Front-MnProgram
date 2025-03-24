import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

interface Block3AdsProps {
  // Props para la primera columna (icono)
  iconBackgroundColor: string | { gradient: string };
  icon: string; // Ahora recibimos el icono directamente
  // Props para la segunda columna
  secondColumnBackground: string | { gradient: string };
  secondColumnTextColor: string;
}

const Block3Ads: React.FC<Block3AdsProps> = ({
  iconBackgroundColor,
  icon, // Usamos el icono que nos pasan
  secondColumnBackground,
  secondColumnTextColor,
}) => {
  const [ref, isVisible] = useIntersectionObserver();

  // Estilos para el fondo del icono
  const iconBackgroundStyle =
    typeof iconBackgroundColor === "string"
      ? { backgroundColor: iconBackgroundColor }
      : { backgroundImage: iconBackgroundColor.gradient };

  // Estilos para el fondo de la segunda columna
  const secondColumnStyle =
    typeof secondColumnBackground === "string"
      ? { backgroundColor: secondColumnBackground }
      : { backgroundImage: secondColumnBackground.gradient };

  return (
    <div className="w-full overflow-hidden pb-12">
      <div className="container mx-auto">
        <div
          ref={ref}
          className={`flex gap-4 transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          {/* Columna 1 (20%) - Icono */}
          <div className="w-[20%] flex justify-center">
            <div
              className="w-48 h-36 rounded-3xl flex items-center justify-center shadow-2xl"
              style={iconBackgroundStyle}
            >
              <img src={icon} alt="Icono" className="w-24 h-24" />
            </div>
          </div>

          {/* Columna 2 (50%) - Texto */}
          <div
            className="w-[50%] p-8 rounded-3xl shadow-2xl"
            style={secondColumnStyle}
          >
            <p
              className="text-3xl font-space font-normal"
              style={{ color: secondColumnTextColor }}
            >
              Asesoramiento personalizado durante toda la implantación
            </p>
          </div>

          {/* Columna 3 (30%) */}
          <div className="w-[30%] bg-white p-8 rounded-3xl shadow-2xl">
            <p className="text-3xl font-space font-normal text-black">
              Soporte <br></br> ilimitado{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block3Ads;
