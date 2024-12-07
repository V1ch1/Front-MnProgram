import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";

// Definir los tipos
interface Feature {
  image: string;
  text: string;
}

interface FeatureComponentProps {
  features: Feature[]; // Cambiado a un array de features
}

const FeatureComponent: React.FC<FeatureComponentProps> = ({ features }) => {
  // Si no hay datos de feature, no mostramos nada
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <div className="container pb-4">
      {/* En pantallas grandes usaremos una cuadrícula de 4 columnas, y en móviles o tabletas un Swiper */}
      <div className="hidden lg:block">
        {/* Cuadrícula de 4 columnas en pantallas grandes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center p-4 border border-gray-300 rounded-lg shadow-sm"
            >
              <img
                src={feature.image}
                alt={`Feature ${index + 1}`}
                className="w-16 h-16 mr-4 object-cover"
              />
              <p className="text-gray-800 font-semibold">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Swiper en pantallas pequeñas (móvil y tablet) */}
      <div className="lg:hidden relative">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          grabCursor={true}
          modules={[Autoplay]}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center p-4 border border-gray-300 rounded-lg shadow-sm">
                <img
                  src={feature.image}
                  alt={`Feature ${index + 1}`}
                  className="w-16 h-16 mr-4 object-cover"
                />
                <p className="text-gray-800 font-semibold">{feature.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeatureComponent;
