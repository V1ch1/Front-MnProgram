import React from "react";
import logoMN from "../../assets/LogoMnBlanco.png";

const Reviews: React.FC = () => {
  return (
    <div className="w-full  bg-[#333333] p-6">
      <div className="grid container grid-cols-3 gap-6">
        <div className="flex flex-col justify-center">
          {/* Texto principal */}
          <div className="text-white text-xl font-semibold mb-4 text-center">
            97% opiniones positivas +80.000 usuarios
          </div>

          {/* Contenedor con dos columnas */}
          <div className="flex gap-4 justify-around">
            {/* Columna 1 */}
            <div className="flex flex-col items-center">
              {/* Estrellas */}
              <div className="flex justify-center space-x-1 mt-2">
                <i className="text-yellow-500 fas fa-star"></i>
                <i className="text-yellow-500 fas fa-star"></i>
                <i className="text-yellow-500 fas fa-star"></i>
                <i className="text-yellow-500 fas fa-star"></i>
                <i className="text-yellow-500 fas fa-star"></i>
              </div>

              {/* Texto debajo de las estrellas */}
              <p className="mt-2 text-sm text-center">4,8 estrellas en</p>

              {/* Imagen debajo del texto */}
              <img
                src={logoMN}
                alt="Logo Mn"
                className="mt-4 w-28 h-8 mx-auto"
              />
            </div>

            {/* Columna 2 */}
            <div className="bg-gray-700 p-4 rounded-md flex items-center justify-center">
              Columna 2
            </div>
          </div>
        </div>

        {/* Columna central */}
        <div className="">
          {[...Array(5)].map((_, index) => (
            <div key={index} className=" p-4 rounded-md">
              <div className="text-white text-lg ">
                Título de la Fila {index + 1}
              </div>
              <div className="bg-white h-2 rounded-full">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${(index + 1) * 20}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Columna derecha (Slider de opiniones) */}
        <div className="space-y-6">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-md flex items-center space-x-4"
            >
              <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">Logo</span>
              </div>
              <div className="flex-1">
                <div className="text-white text-lg mb-2">
                  Opinión {index + 1}
                </div>
                <div className="text-white text-sm">
                  Texto de la opinión aquí...
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
