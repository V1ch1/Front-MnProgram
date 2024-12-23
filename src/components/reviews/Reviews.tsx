import React from "react";
import logoMN from "/assets/LogoMnBlanco.webp";
import google from "/assets/logoGoogle.webp";
import ProgressBars from "../ProgressBar/ProgressBar";
import CustomerSlider from "../Slider/CusmoterSlider"; // Asegúrate de que el nombre de la ruta y componente es correcto

// Interfaz para cada reseña
interface Review {
  review: string;
  image: string;
  name: string;
  subName: string;
}

// Interfaz para las props que recibe el componente Reviews
interface ReviewsProps {
  reviews: Review[]; // Especificamos que 'reviews' es un array de objetos de tipo 'Review'
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  const percentages = [
    { title: "Excelente 112.109", percentage: 75 },
    { title: "Muy bueno 40.118", percentage: 39 },
    { title: "Bueno 12.025", percentage: 17 },
    { title: "Regular 1.762", percentage: 3 },
    { title: "Malo 2.615", percentage: 6 },
  ];

  return (
    <div className="w-full bg-[#333333] p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col justify-center">
          {/* Texto principal */}
          <div className="text-white text-xl font-semibold mb-4 text-center px-10">
            97% opiniones positivas +80.000 usuarios
          </div>

          {/* Contenedor con dos columnas */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
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
              <p className="mt-2 text-md text-center text-white">
                4,8 estrellas en
              </p>

              {/* Imagen debajo del texto */}
              <img
                src={logoMN}
                alt="Logo Mn"
                className="mt-2 mx-auto object-contain w-32 h-auto"
              />
            </div>

            {/* Columna 2 */}
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
              <p className="mt-2 text-md text-center text-white">
                4,8 estrellas en
              </p>

              {/* Imagen debajo del texto */}
              <img
                src={google}
                alt="Logo Google"
                className="mt-1 mx-auto object-contain w-20 h-auto"
              />
            </div>
          </div>
        </div>

        {/* Columna central */}
        <div className="flex flex-col justify-center items-center w-full">
          <div className="w-full max-w-4xl px-4">
            {" "}
            {/* Ajuste del ancho máximo */}
            <ProgressBars data={percentages} />
          </div>
        </div>

        {/* Columna derecha (Slider de opiniones) */}
        <div className="space-y-6 flex items-center justify-center">
          <CustomerSlider reviews={reviews} />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
