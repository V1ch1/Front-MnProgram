import React, { useState, useEffect, Suspense } from "react";
import { useAppContext } from "../../AppContext";
import VerVideoButton from "../buttons/VerVideoButton";
import VerPreciosButton from "../buttons/VerPreciosButton";
import VideoComponent from "./VideoComponent";
import Logo from "/assets/logo-MN-25-peq.webp";
import LinesUnderTitleHero from "./LinesUnderTitleHero";

// Componente lazy-loaded para VideoComponent y otros componentes pesados
const TextBlackRoughBlack = React.lazy(
  () => import("../Text/TextBlackRoughBlack")
);

const HeroComponent: React.FC = () => {
  const { heroData, colectivo } = useAppContext();
  const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);

  // Asegúrate de que el contenido principal esté cargado antes de aplicar animaciones
  useEffect(() => {
    if (heroData) {
      setIsContentLoaded(true); // Marca el contenido como cargado
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
            {/* Título con animación solo si el contenido está cargado */}
            {isContentLoaded && (
              <Suspense fallback={<div>Loading...</div>}>
                <TextBlackRoughBlack title={heroData.title} />
              </Suspense>
            )}
            {/* Líneas de texto */}
            <LinesUnderTitleHero lines={heroData.lines} />

            <div className="buttons mt-10 flex justify-center items-center space-x-4 lg:space-x-10">
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
              {/* Más botones aquí */}
            </div>
          </div>

          {/* Bloque derecho (Vídeo de YouTube) */}
          <div className="right-block flex-1 p-4 lg:w-1/2 flex items-center justify-center">
            <VideoComponent
              caratulaVideo={heroData.caratulaVideo}
              videoUrl={heroData.videoUrl}
              location="Hero VideoYoutube"
              fuente="mail.video"
              email="jose.blanco@test.com"
              icodcli="cli_123"
              asunto="Campaña Mn Program"
              status="pendiente"
              colectivo={colectivo}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(HeroComponent); // Uso de React.memo para evitar re-renderizados innecesarios
