import React from "react";
import Beneficios1 from "/assets/beneficios/Beneficios1.webp";
import Beneficios2 from "/assets/beneficios/Beneficios2.webp";
import Beneficios3 from "/assets/beneficios/Beneficios3.webp";

// Tamaños de las imágenes para distintos puntos de corte
const BENEFICIOS1_SIZES = {
  small: "/assets/beneficios/Beneficios1-small.webp", // Imagen más pequeña
  medium: "/assets/beneficios/Beneficios1-medium.webp", // Imagen de tamaño intermedio
  large: Beneficios1, // Imagen grande
};

const BENEFICIOS2_SIZES = {
  small: "/assets/beneficios/Beneficios2-small.webp",
  medium: "/assets/beneficios/Beneficios2-medium.webp",
  large: Beneficios2,
};

const BENEFICIOS3_SIZES = {
  small: "/assets/beneficios/Beneficios3-small.webp",
  medium: "/assets/beneficios/Beneficios3-medium.webp",
  large: Beneficios3,
};

const Beneficios: React.FC = () => {
  return (
    <div className="md:w-3/4 mx-auto px-4 py-8">
      {/* Título */}
      <h1 className="text-center text-4xl font-bold mb-8">
        Beneficios del <strong>Software para abogados de MN program</strong>
      </h1>

      {/* Contenedor de columnas */}
      <div className="flex flex-col md:flex-row justify-between items-stretch gap-4">
        {/* Columna 1 */}
        <div className="flex-1 flex flex-col items-center text-center">
          <img
            srcSet={`${BENEFICIOS1_SIZES.small} 480w, ${BENEFICIOS1_SIZES.medium} 768w, ${BENEFICIOS1_SIZES.large} 1200w`}
            sizes="(max-width: 640px) 480px, (max-width: 1024px) 768px, 1200px"
            src={BENEFICIOS1_SIZES.large}
            alt="Beneficios1"
            className="w-full h-auto rounded-lg shadow-md"
            width="1000" // Reducido para mejorar proporción con el texto
            height="563" // Mantener la relación 16:9
          />
          <p className="mt-4 text-xl font-medium sm:text-3xl md:text-2xl">
            Un equipo de trabajo al servicio de tu despacho
          </p>
        </div>

        {/* Columna 2 */}
        <div className="flex-1 flex flex-col items-center text-center">
          <img
            srcSet={`${BENEFICIOS2_SIZES.small} 480w, ${BENEFICIOS2_SIZES.medium} 768w, ${BENEFICIOS2_SIZES.large} 1200w`}
            sizes="(max-width: 640px) 480px, (max-width: 1024px) 768px, 1200px"
            src={BENEFICIOS2_SIZES.large}
            alt="Beneficios2"
            className="w-full h-auto rounded-lg shadow-md"
            width="1000" // Reducido para mejorar proporción con el texto
            height="563" // Mantener la relación 16:9
          />
          <p className="mt-4 text-xl font-medium sm:text-3xl md:text-2xl">
            Innovación y desarrollo para adaptarnos a tus necesidades
          </p>
        </div>

        {/* Columna 3 */}
        <div className="flex-1 flex flex-col items-center text-center">
          <img
            srcSet={`${BENEFICIOS3_SIZES.small} 480w, ${BENEFICIOS3_SIZES.medium} 768w, ${BENEFICIOS3_SIZES.large} 1200w`}
            sizes="(max-width: 640px) 480px, (max-width: 1024px) 768px, 1200px"
            src={BENEFICIOS3_SIZES.large}
            alt="Beneficios3"
            className="w-full h-auto rounded-lg shadow-md"
            width="1000" // Reducido para mejorar proporción con el texto
            height="563" // Mantener la relación 16:9
          />
          <p className="mt-4 text-xl font-medium sm:text-3xl md:text-2xl">
            El mejor soporte al cliente y con más experiencia del sector
          </p>
        </div>
      </div>
    </div>
  );
};

export default Beneficios;
