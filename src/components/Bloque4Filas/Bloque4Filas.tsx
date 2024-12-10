import React from "react";
import Migracion from "../../assets/Bloque4/Migracion.svg";
import PuestaMarcha from "../../assets/Bloque4/PuestaMarcha.svg";
import Consultoria from "../../assets/Bloque4/Consultoria.svg";
import Seguridad from "../../assets/Bloque4/Seguridad.svg";

const Bloque4Filas: React.FC = () => {
  return (
    <div className="container mx-auto space-y-12 p-4">
      {/* Fila 1 */}
      <div className="flex flex-col md:flex-row items-center gap-4 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.1),0_-4px_10px_rgba(0,0,0,0.1)] p-4 rounded-lg">
        {/* Imagen */}
        <div className="w-full md:basis-2/5 flex justify-center">
          <img
            src={Migracion}
            alt="Migración"
            className="w-[150px] h-auto object-contain rounded-lg"
          />
        </div>
        {/* Texto */}
        <div className="w-full md:basis-3/5 flex flex-col items-center justify-center text-center">
          <h3 className="text-5xl font-semibold text-gray-800 mb-2">
            Migración sin coste
          </h3>
          <p className="text-gray-700 text-base">
            Volcado sin coste del 100% de tus datos en el sistema
          </p>
        </div>
      </div>

      {/* Fila 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-4 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.1),0_-4px_10px_rgba(0,0,0,0.1)] p-4 rounded-lg">
        {/* Imagen */}
        <div className="w-full md:basis-2/5 flex justify-center">
          <img
            src={PuestaMarcha}
            alt="Puesta en Marcha"
            className="w-[150px] h-auto object-contain rounded-lg"
          />
        </div>
        {/* Texto */}
        <div className="w-full md:basis-3/5 flex flex-col items-center justify-center text-center">
          <h3 className="text-5xl font-semibold text-gray-800 mb-2">
            Puesta en marcha sin coste
          </h3>
          <p className="text-gray-700 text-base">
            Un asesor de MN pondrá en sistema el marcha por ti
          </p>
        </div>
      </div>

      {/* Fila 3 */}
      <div className="flex flex-col md:flex-row items-center gap-4 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.1),0_-4px_10px_rgba(0,0,0,0.1)] p-4 rounded-lg">
        {/* Imagen */}
        <div className="w-full md:basis-2/5 flex justify-center">
          <img
            src={Consultoria}
            alt="Consultoría"
            className="w-[150px] h-auto object-contain rounded-lg"
          />
        </div>
        {/* Texto */}
        <div className="w-full md:basis-3/5 flex flex-col items-center justify-center text-center">
          <h3 className="text-5xl font-semibold text-gray-800 mb-2">
            Consultoría ilimitada
          </h3>
          <p className="text-gray-700 text-base">
            Creamos nuestro software contigo a la medida de tus necesidades
          </p>
        </div>
      </div>

      {/* Fila 4 */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-4 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.1),0_-4px_10px_rgba(0,0,0,0.1)] p-4 rounded-lg">
        {/* Imagen */}
        <div className="w-full md:basis-2/5 flex justify-center">
          <img
            src={Seguridad}
            alt="Seguridad"
            className="w-[150px] h-auto object-contain rounded-lg"
          />
        </div>
        {/* Texto */}
        <div className="w-full md:basis-3/5 flex flex-col items-center justify-center text-center">
          <h3 className="text-5xl font-semibold text-gray-800 mb-2">
            Seguridad y control
          </h3>
          <p className="text-gray-700 text-base">
            Tú decides quién y cómo accede a la información
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bloque4Filas;
