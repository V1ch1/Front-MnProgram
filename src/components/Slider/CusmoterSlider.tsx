import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";

// Definimos la interfaz para las reseñas
interface Review {
  review: string;
  image: string;
  name: string;
  subName: string;
}

// Definimos las props que recibe el componente CustomerSlider
interface CustomerSliderProps {
  reviews: Review[]; // Un array de reseñas
}

// El componente espera que le pasen la propiedad 'reviews' que es un array de objetos 'Review'
const CustomerSlider: React.FC<CustomerSliderProps> = ({ reviews }) => {
  return (
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
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <div className="text-white italic text-sm font-bold my-2 text-center">
            {review.review}
          </div>
          <div className="flex justify-center items-center mt-5">
            <img
              src={review.image}
              alt={`Cliente ${index + 1}`}
              className="w-20 h-6 rounded-full object-cover"
            />
          </div>
          <div className="text-lg font-bold mt-2 text-white text-center">
            {review.name}
          </div>
          <div className="text-sm font-bold text-white text-center">
            {review.subName}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomerSlider;
