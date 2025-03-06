import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Grid } from "swiper/modules";

interface Feature {
  image: string;
  text: string;
}

interface FeatureComponentProps {
  features: Feature[];
}

const Features2: React.FC<FeatureComponentProps> = ({ features }) => {
  const pageName = window.location.origin;

  if (!features || features.length === 0) {
    return null;
  }

  return (
    <div className="container pb-4">
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        modules={[Autoplay, Grid]}
        grid={{
          rows: 2,
          fill: "row",
        }}
        slidesPerGroup={4}
        breakpoints={{
          // Cuando el ancho de la ventana es >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
            grid: {
              rows: 1,
            },
            slidesPerGroup: 1,
          },
          // Cuando el ancho de la ventana es >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
            grid: {
              rows: 2,
            },
            slidesPerGroup: 4,
          },
          // Cuando el ancho de la ventana es >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            grid: {
              rows: 2,
            },
            slidesPerGroup: 6,
          },
        }}
        className="mySwiper"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center p-4 border border-black rounded-lg shadow-sm bg-white">
              <img
                src={`${pageName}${feature.image}`}
                alt={`Feature ${index + 1}`}
                className="w-16 h-16 object-cover"
                loading="lazy"
              />
              <p className="text-xl font-semibold ml-4">{feature.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Features2;
