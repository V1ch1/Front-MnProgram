import React from "react";
import Beneficios1 from "../../assets/Beneficios/Beneficios1.webp";
import Beneficios2 from "../../assets/Beneficios/Beneficios2.webp";
import Beneficios3 from "../../assets/Beneficios/Beneficios3.webp";

const Beneficios: React.FC = () => {
  return (
    <div className="md:w-3/4 mx-auto px-4 py-8">
      {/* Título */}
      <h1 className="text-center text-4xl font-bold mb-8">
        Beneficios del <strong>Software para abogados de MN program</strong>
      </h1>

      {/* Contenedor de columnas */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Columna 1 */}
        <div className="flex-1 flex flex-col items-center text-center">
          <img
            src={Beneficios1}
            alt="Beneficios1"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <p className="mt-2 text-xl font-medium">
            Un equipo de trabajo al servicio de tu despacho
          </p>
        </div>

        {/* Columna 2 */}
        <div className="flex-1 flex flex-col items-center text-center">
          <img
            src={Beneficios2}
            alt="Beneficios2"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <p className="mt-2 text-xl font-medium">
            Innovación y desarrollo para adaptarnos a tus necesidades
          </p>
        </div>

        {/* Columna 3 */}
        <div className="flex-1 flex flex-col items-center text-center">
          <img
            src={Beneficios3}
            alt="Beneficios3"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <p className="mt-2 text-xl font-medium">
            El mejor soporte al cliente y con más experiencia del sector
          </p>
        </div>
      </div>
    </div>
  );
};

export default Beneficios;
