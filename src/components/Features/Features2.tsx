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
    <div className="container pb-16">
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
        className="mySwiper max-w-6xl mx-auto px-4 pb-8"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index} className="px-4 pb-4">
            <div className="flex flex-col h-full bg-white rounded-lg shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 overflow-hidden max-w-sm mx-auto border-l-4 border-blue-500">
              <div
                className="w-full h-32 bg-cover bg-center bg-no-repeat p-8"
                style={{
                  backgroundImage: `url(${pageName}${feature.image})`,
                  backgroundSize: "20%",
                  backgroundColor: "#FFFFFF",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center text-gray-800">
                  {feature.text}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Features2;
