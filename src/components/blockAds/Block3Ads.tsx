import React from "react";

import icono2 from "../../../public/assets/ads/icono2.svg";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const Block3Ads: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div className="w-full overflow-hidden pb-12">
      <div className="container mx-auto">
        <div
          ref={ref}
          className={`flex gap-4 transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          {/* Columna 1 (20%) */}
          <div className="w-[20%] flex justify-center">
            <div className="w-48 h-36 rounded-3xl flex items-center justify-center shadow-2xl">
              <img src={icono2} alt="Icono" className="w-24 h-24" />
            </div>
          </div>

          {/* Columna 2 (50%) */}
          <div className="w-[50%] bg-black p-8 rounded-3xl shadow-2xl">
            <p className="text-3xl font-space font-normal text-white">
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
