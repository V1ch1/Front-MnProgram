import React, { useState, useEffect } from "react";
import { useAppContext } from "../../AppContext";
import TextBlackRoughBlack from "../Text/TextBlackRoughBlack";
import Logo from "/assets/logo-MN-25-peq.webp";
import LinesUnderTitleHero from "./LinesUnderTitleHero";
import LogoMn from "/assets/logo-MN-25-peq.webp";
import google from "/assets/logoGoogle.webp";
import TeLlamamosCustom from "../buttons/TeLlamamosCustom";
import WhatsAppButton from "../buttons/WhatsAppButton";
import FormAdsRojo from "../forms/FormAdsRojo";
import VideoComponentAds from "./VideoComponentAds";

interface HeroComponentCustomProps {
  colectivo: string;
}

const HeroComponentCustom: React.FC<HeroComponentCustomProps> = ({
  colectivo,
}) => {
  const { heroData } = useAppContext();
  const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Obtener parámetros de la URL
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    if (heroData) {
      setIsContentLoaded(true);
    }
  }, [heroData]);

  if (!heroData) return null;

  return (
    <section className="hero-section flex flex-col lg:flex-row mt-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col lg:flex-row">
          {/* Bloque izquierdo */}
          <div className="left-block flex-1 p-4">
            {/* Logo */}
            <img
              src={Logo}
              alt="Logo"
              className="mb-2 w-48 h-auto"
              loading="lazy"
            />
            {/* Título con animación */}
            {isContentLoaded && <TextBlackRoughBlack title={heroData.title} />}
            {/* Líneas de texto */}
            <LinesUnderTitleHero lines={heroData.lines} />

            {/* Botones y contenido adicional */}
            <div className="buttons mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-10">
              {/* Botón Te Llamamos */}
              <div className="button-container text-center">
                <TeLlamamosCustom
                  onClick={handleOpenPopup}
                  className="w-64 h-16 text-xl font-bold"
                />
                {/* Estrellas debajo del botón */}
                <div className="flex justify-center space-x-1 mt-2">
                  <i className="text-yellow-500 fas fa-star"></i>
                  <i className="text-yellow-500 fas fa-star"></i>
                  <i className="text-yellow-500 fas fa-star"></i>
                  <i className="text-yellow-500 fas fa-star"></i>
                  <i className="text-yellow-500 fas fa-star"></i>
                </div>
                {/* Texto debajo de las estrellas */}
                <p className="mt-2 text-sm text-center">
                  {heroData.textUnderStarsLeft}
                </p>
                {/* Imagen debajo del texto */}
                <img
                  src={LogoMn}
                  alt="Logo Mn"
                  className="mt-4 w-28 h-auto mx-auto object-contain"
                />
              </div>

              {/* Botón WhatsApp */}
              <div className="button-container text-center">
                <WhatsAppButton />
                {/* Estrellas debajo del botón */}
                <div className="flex justify-center space-x-1 mt-2">
                  <i className="text-yellow-500 fas fa-star"></i>
                  <i className="text-yellow-500 fas fa-star"></i>
                  <i className="text-yellow-500 fas fa-star"></i>
                  <i className="text-yellow-500 fas fa-star"></i>
                  <i className="text-yellow-500 fas fa-star"></i>
                </div>
                {/* Texto debajo de las estrellas */}
                <p className="mt-2 text-sm text-center">
                  {heroData.textUnderStarsRight}
                </p>
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
          <div className="right-block flex-1 p-4 lg:w-1/2 flex items-center justify-center">
            <VideoComponentAds
              caratulaVideo={heroData.caratulaVideo}
              videoUrl={heroData.videoUrl}
            />
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <FormAdsRojo
          onClose={handleClosePopup}
          videoUrl={heroData.videoUrl}
          colectivo={colectivo}
        />
      )}
    </section>
  );
};

export default HeroComponentCustom;
