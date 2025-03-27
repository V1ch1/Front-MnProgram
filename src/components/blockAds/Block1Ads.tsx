import React from "react";
import icono1 from "../../../public/assets/ads/icono1.svg";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

interface Block1AdsProps {
  iconBackgroundColor?: string | { gradient: string };
  iconColor?: string; // Para el color del icono
}

const Block1Ads: React.FC<Block1AdsProps> = ({
  iconBackgroundColor = "black",
  iconColor = "white", // Por defecto blanco
}) => {
  const [leftRef, isLeftVisible] = useIntersectionObserver();
  const [rightRef, isRightVisible] = useIntersectionObserver();

  const iconBackgroundStyle =
    typeof iconBackgroundColor === "string"
      ? { backgroundColor: iconBackgroundColor }
      : { backgroundImage: iconBackgroundColor.gradient };

  return (
    <div className="w-full pb-4 overflow-x-hidden">
      <div className="container mx-auto px-4 lg:px-5">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
          {/* Columna izquierda */}
          <div
            ref={leftRef}
            className={`relative h-[250px] lg:h-[320px] rounded-3xl overflow-hidden transition-all duration-500 ${
              isLeftVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-0 lg:-translate-x-full opacity-0"
            }`}
          >
            {/* Imagen de fondo */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/assets/ads/image1.webp')",
                backgroundSize: "120% auto",
                backgroundPosition: "center 20%",
              }}
            />
            {/* Texto sobre la imagen */}
            <div className="absolute top-6 lg:top-8 left-6 lg:left-8 z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl text-white font-space font-normal leading-tight">
                Empieza gratis desde 1€ al día
              </h2>
            </div>
          </div>

          {/* Columna derecha */}
          <div
            ref={rightRef}
            className={`h-auto lg:h-[320px] flex flex-col justify-between gap-4 lg:gap-0 transition-all duration-500 ${
              isRightVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-0 lg:translate-x-full opacity-0"
            }`}
          >
            {/* Primera fila */}
            <div className="flex flex-col md:flex-row lg:flex-row items-center gap-4 lg:gap-3">
              {/* Icono */}
              <div className="w-full md:w-[30%] lg:w-[30%] flex justify-center">
                <div
                  className="w-28 md:w-32 lg:w-36 h-28 md:h-32 lg:h-36 rounded-3xl flex items-center justify-center shadow-lg"
                  style={iconBackgroundStyle}
                >
                  <img
                    src={icono1}
                    alt="Icono"
                    className="w-20 md:w-22 lg:w-24 h-20 md:h-22 lg:h-24"
                    style={{
                      filter: `brightness(0) saturate(100%) ${
                        iconColor === "white" ? "invert(1)" : ""
                      }`,
                    }}
                  />
                </div>
              </div>
              {/* Texto */}
              <div className="w-full md:w-[70%] lg:w-[70%] bg-white p-6 lg:p-8 rounded-3xl shadow-lg">
                <p className="text-2xl lg:text-3xl font-space font-normal text-center md:text-left">
                  Disfruta de 30 días sin coste
                </p>
              </div>
            </div>

            {/* Segunda fila */}
            <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-lg">
              <p className="text-2xl lg:text-3xl font-space font-normal text-center lg:text-left">
                Aplazamos el pago 30 días desde la contratación
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block1Ads;
