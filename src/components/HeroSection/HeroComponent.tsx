import React, { useState, useEffect } from "react";
import { useAppContext } from "../../AppContext";
import { useLocation } from "react-router-dom"; // Importar hook para obtener parámetros
import VerVideoButton from "../buttons/VerVideoButton";
import VerPreciosButton from "../buttons/VerPreciosButton";
import VideoComponent from "./VideoComponent";
import TextBlackRoughBlack from "../Text/TextBlackRoughBlack";
import Logo from "/assets/logo-MN-25-peq.webp";
import LinesUnderTitleHero from "./LinesUnderTitleHero";
import LogoMn from "/assets/logo-MN-25-peq.webp";
import google from "/assets/logoGoogle.webp";

// Hook personalizado para leer parámetros de la URL
const useQuery = () => {
  const { search } = useLocation();
  return new URLSearchParams(search);
};

const HeroComponent: React.FC = () => {
  const { heroData, colectivo } = useAppContext();
  const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);

  // Obtener parámetros de la URL
  const query = useQuery();
  const email = query.get("correo") || "email_por_defecto@test.com"; // Valor predeterminado
  const icodcli = query.get("icodcli") || "cli_por_defecto";
  const asunto = query.get("mail") || "asunto_por_defecto";

  // Asegúrate de que el contenido principal esté cargado antes de aplicar animaciones
  useEffect(() => {
    if (heroData) {
      setIsContentLoaded(true); // Marca el contenido como cargado
    }
  }, [heroData]);

  if (!heroData) return null;

  return (
    <section className="hero-section flex flex-col lg:flex-row mt-16">
      {/* Contenedor centralizado */}
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
            {/* Título con animación solo si el contenido está cargado */}
            {isContentLoaded && <TextBlackRoughBlack title={heroData.title} />}
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
                  email={email} // Parámetro dinámico
                  icodcli={icodcli} // Parámetro dinámico
                  asunto={asunto} // Parámetro dinámico
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
                  src={LogoMn}
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
                  email={email} // Parámetro dinámico
                  icodcli={icodcli} // Parámetro dinámico
                  asunto={asunto} // Parámetro dinámico
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
            <VideoComponent
              caratulaVideo={heroData.caratulaVideo} // URL de la carátula del vídeo
              videoUrl={heroData.videoUrl} // URL del video
              location="Hero VideoYoutube" // Ubicación del botón para tracking
              fuente="mail.video" // Fuente
              email={email} // Parámetro dinámico
              icodcli={icodcli} // Parámetro dinámico
              asunto={asunto} // Parámetro dinámico
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
