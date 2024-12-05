import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Importar los estilos de Swiper
import "./swiper.css";

// Definimos la interfaz para las reseñas
interface Review {
  text1: string; // Nombre o título de la reseña
  image: string; // URL de la imagen
  text2: string; // Descripción de la reseña
}

// Definimos las props que recibe el componente CustomerSlider
interface CustomerSliderProps {
  reviews: Review[]; // Un array de reseñas
}

// El componente espera que le pasen la propiedad 'reviews' que es un array de objetos 'Review'
const CustomerSlider: React.FC<CustomerSliderProps> = ({ reviews }) => {
  return (
    <Swiper
      spaceBetween={50} // Espacio entre las slides
      slidesPerView={1} // Mostrar solo una slide a la vez
      loop={true} // Ciclo infinito de las slides
      autoplay={{
        delay: 5000, // Desplazamiento automático cada 5 segundos
        disableOnInteraction: false, // El autoplay no se detiene cuando el usuario interactúa
      }}
      grabCursor={true} // Habilita el cursor de "agarrar" para permitir arrastre
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <div className="slide-content">
            <div className="text1">{review.text1}</div>
            <div className="image">
              <img src={review.image} alt={`Cliente ${index + 1}`} />
            </div>
            <div className="text2">{review.text2}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomerSlider;
