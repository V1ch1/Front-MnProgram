import React from "react";
import icono1 from "../../../public/assets/ads/icono1.svg";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const Block1Ads: React.FC = () => {
  const [leftRef, isLeftVisible] = useIntersectionObserver();
  const [rightRef, isRightVisible] = useIntersectionObserver();

  return (
    <div className="w-full overflow-hidden pb-4">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Columna izquierda */}
          <div
            ref={leftRef}
            className={`relative h-[320px] rounded-3xl overflow-hidden  transition-all duration-500 ${
              isLeftVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
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
            <div className="absolute top-8 left-8 z-10">
              <h2 className="text-5xl md:text-6xl text-white font-space font-normal">
                Empieza gratis desde 1€ al día
              </h2>
            </div>
          </div>

          {/* Columna derecha */}
          <div
            ref={rightRef}
            className={`h-[320px] flex flex-col justify-between transition-all duration-500 ${
              isRightVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            {/* Primera fila */}
            <div className="flex items-center gap-3">
              {/* Icono (30% del ancho) */}
              <div className="w-[30%] flex justify-center">
                <div className="w-36 h-36 rounded-3xl bg-black flex items-center justify-center shadow-lg ">
                  <img src={icono1} alt="Icono" className="w-24 h-24" />
                </div>
              </div>
              {/* Texto (70% del ancho) */}
              <div className="w-[70%] bg-white p-8 rounded-3xl ">
                <p className="text-3xl font-space font-normal">
                  Disfruta de 30 días sin coste
                </p>
              </div>
            </div>

            {/* Segunda fila */}
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <p className="text-3xl font-space font-normal">
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
