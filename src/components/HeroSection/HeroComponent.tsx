import React from "react";
import { useAppContext } from "../../AppContext";
// Importar el hook para acceder al contexto
import VerVideoButton from "../buttons/VerVideoButton";
import VerPreciosButton from "../buttons/VerPreciosButton";
import VideoComponent from "./VideoComponent";
import TextBlackRoughBlack from "../Text/TextBlackRoughBlack";
import Logo from "/assets/logo-MN-25-peq.png";
import LinesUnderTitleHero from "./LinesUnderTitleHero";

const HeroComponent: React.FC = () => {
  const { heroData } = useAppContext();

  if (!heroData) return null; // Si no hay datos, no renderizamos nada

  return (
    <section className="hero-section flex flex-col lg:flex-row mt-16">
      {/* Contenedor centralizado */}
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col lg:flex-row">
          {/* Bloque izquierdo */}
          <div className="left-block flex-1 p-4">
            {/* Logo */}
            <img src={Logo} alt="Logo" className="mb-2 w-48 h-14" />
            {/* Título */}
            <TextBlackRoughBlack title={heroData.title} />
            {/* Líneas de texto */}
            <LinesUnderTitleHero lines={heroData.lines} />

            {/* Botones y contenido adicional */}
            <div className="buttons mt-10 flex justify-center items-center space-x-4 lg:space-x-10">
              {/* Botón Ver Video */}
              <div className="button-container text-center flex-1">
                <VerVideoButton
                  label={heroData.buttons.video}
                  videoUrl={heroData.videoUrl}
                  location="Botón Ver Video Hero"
                  onClick={() => console.log("clic Botón Ver Video Hero")}
                  className="mb-2"
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
                  src={heroData.imageUnderTextLeft}
                  alt="Logo Mn"
                  className="mt-4 w-28 h-8 mx-auto "
                />
              </div>

              {/* Botón Ver Precios */}
              <div className="button-container text-center flex-1">
                <VerPreciosButton
                  label={heroData.buttons.price}
                  logoUrl={heroData.logo}
                  location="Botón Ver Precios Hero"
                  onClick={() => console.log("clic Botón Ver Precios Hero")}
                  className="mb-2"
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
                  {heroData.textUnderStarsRight}
                </p>
                {/* Imagen debajo del texto */}
                <img
                  src={heroData.imageUnderTextRight}
                  alt="Logo google"
                  className="mt-4 w-18 h-8 mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Bloque derecho (Vídeo de YouTube) */}
          <div className="right-block flex-1 p-4 lg:w-1/2 flex items-center justify-center">
            <VideoComponent
              caratulaVideo={heroData.caratulaVideo}
              videoUrl={heroData.videoUrl} // Pasamos el URL del video
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
