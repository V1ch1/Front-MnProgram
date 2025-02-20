import React from "react";
import LogoMn from "/assets/logo-MN-25-peq.webp";
import google from "/assets/logoGoogle.webp";

const HeroComponent: React.FC = () => {
  const videoData = {
    caratulaVideo: "/assets/caratulas/Abogados.webp", // Ruta actualizada a la ubicación correcta
    videoUrl:
      "https://www.youtube.com/watch?v=rZ1Hoi8rrLo&list=TLGGyRamxW9DoYUyMDAyMjAyNQ", // Ajusta la URL según tu video
  };

  return (
    <section className="hero-section flex flex-col lg:flex-row mt-16">
      {/* Contenedor centralizado */}
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col lg:flex-row">
          {/* Bloque izquierdo */}
          <div className="left-block flex-1 p-4">
            {/* Logo */}

            <div className="w-full">
              <TextBlackRough title={titleData} />
            </div>
            <p className="text-xl md:text-3xl font-bold text-center md:text-left -mt-12">
              Software de gestión para abogados
            </p>

            {/* Botones y contenido adicional */}
            <div className="buttons mt-10 flex justify-center items-center space-x-4 lg:space-x-10">
              {/* Botón Ver Video */}
              <div className="button-container text-center flex-1">
                <button className="bg-[#FD4A5C] text-white hover:bg-[#e54352] focus:ring-[#FD4A5C] text-lg px-6 py-2 rounded-lg transform hover:translate-y-1 hover:shadow-lg transition-all">
                  Te llamamos
                </button>
                {/* Estrellas debajo del botón */}
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
                  src={LogoMn}
                  alt="Logo Mn"
                  className="mt-4 w-28 h-auto mx-auto object-contain"
                />
              </div>

              {/* Botón Ver Precios */}
              <div className="button-container text-center flex-1">
                <button className="bg-[#FD4A5C] text-white hover:bg-[#e54352] focus:ring-[#FD4A5C] text-lg px-6 py-2 rounded-lg transform hover:translate-y-1 hover:shadow-lg transition-all">
                  Te llamamos
                </button>
                {/* Estrellas debajo del botón */}
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
                  src={google}
                  alt="Logo google"
                  className="mt-4 w-20 h-auto mx-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Bloque derecho (Vídeo de YouTube) */}
          <div className="video-container relative">
            <div className="cover-image relative rounded-xl overflow-hidden shadow-xl">
              <img
                src={videoData.caratulaVideo}
                alt="Carátula del vídeo"
                className="w-full h-full object-cover cursor-pointer"
                onClick={handleOpenPopup}
                loading="lazy"
                srcSet={`${videoData.caratulaVideo}?w=320 320w, ${videoData.caratulaVideo}?w=640 640w, ${videoData.caratulaVideo}?w=1024 1024w`}
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 640px, 1024px"
              />
              <button
                onClick={handleOpenPopup}
                className="elementor-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl hover:scale-110 transition-transform"
                aria-label="Reproducir video"
              >
                <i className="fas fa-play-circle"></i>
              </button>
            </div>

            {isPopupOpen && (
              <FormAds
                onClose={handleClosePopup}
                videoUrl={videoData.videoUrl}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
