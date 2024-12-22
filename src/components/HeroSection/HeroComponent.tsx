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
  const { heroData, colectivo } = useAppContext();

  if (!heroData) return null;

  return (
    <section className="hero-section flex flex-col lg:flex-row mt-16">
      {/* Contenedor centralizado */}
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col lg:flex-row">
          {/* Bloque izquierdo */}
          <div className="left-block flex-1 p-4">
            {/* Logo */}
            <img src={Logo} alt="Logo" className="mb-2 w-48 h-auto" />
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
                  section="Hero"
                  videoUrl="https://www.youtube.com/embed/CZroOtmpYg4?autoplay=1"
                  fuente="mail.video"
                  email="jose.blanco@test.com"
                  icodcli="cli_123"
                  asunto="Campaña Mn Program"
                  status="pendiente"
                  colectivo={colectivo}
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
                  className="mt-4 w-28 h-auto mx-auto object-contain"
                />
              </div>

              {/* Botón Ver Precios */}
              <div className="button-container text-center flex-1">
                <VerPreciosButton
                  label={heroData.buttons.price}
                  location="Hero"
                  fuente="mail.precios"
                  email="jose@example.com"
                  icodcli="12345"
                  asunto="Campaña Mn Program"
                  status="pendiente"
                  colectivo={colectivo}
                  className="custom-class"
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
                  className="mt-4 w-18 h-auto mx-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Bloque derecho (Vídeo de YouTube) */}
          <div className="right-block flex-1 p-4 lg:w-1/2 flex items-center justify-center">
            <VideoComponent
              caratulaVideo={heroData.caratulaVideo} // URL de la carátula del vídeo
              videoUrl={heroData.videoUrl} // URL del video
              location="Hero VideoYoutube" // Ubicación del botón para tracking
              fuente="mail.video" // Fuente
              email="jose.blanco@test.com" // Email
              icodcli="cli_123" // Código cliente
              asunto="Campaña Mn Program" // Asunto
              status="pendiente" // Status
              colectivo={colectivo} // Colectivo
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
