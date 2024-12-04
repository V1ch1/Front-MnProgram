// src/components/HeroComponent.tsx
import React from "react";
import { useAppContext } from "../AppContext";
// Importar el hook para acceder al contexto
import VerVideoButton from "./buttons/VerVideoButton";
import VerPreciosButton from "./buttons/VerPreciosButton";
import VideoComponent from "./VideoComponent";

const HeroComponent: React.FC = () => {
  const { heroData } = useAppContext(); // Accede a todos los datos del hero desde el contexto

  if (!heroData) return null; // Si no hay datos, no renderizamos nada
  console.log(heroData);

  return (
    <section className="hero-section flex flex-col lg:flex-row mt-16">
      {/* Contenedor centralizado */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Bloque izquierdo */}
          <div className="left-block flex-1 p-4">
            {/* Logo */}
            <img src={heroData.logo} alt="Logo" className="logo mb-10" />

            {/* Título */}
            <h1 className="title text-5xl font-semibold">
              {heroData.title.text1}{" "}
              <span className="highlighted-text underline">
                {heroData.title.highlightedText}
              </span>{" "}
              {heroData.title.text2}
            </h1>

            {/* Líneas de texto */}
            <div className="lines mt-10">
              {heroData.lines.map((line, index) => (
                <p
                  key={index}
                  className="line text-2xl"
                  dangerouslySetInnerHTML={{ __html: line }} // Usar HTML en el texto
                />
              ))}
            </div>

            {/* Botones y contenido adicional */}
            <div className="buttons mt-10 flex justify-center items-center space-x-40">
              {/* Botón Ver Video */}
              <div className="button-container text-center">
                <VerVideoButton
                  label={heroData.buttons.video}
                  videoUrl={heroData.videoUrl}
                  location="hero_top_video"
                  onClick={() => console.log("Botón 'Ver video' clicado")}
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
              <div className="button-container text-center">
                <VerPreciosButton
                  label={heroData.buttons.price}
                  videoUrl={heroData.videoUrl}
                  logoUrl={heroData.logo}
                  location="hero_top_price"
                  onClick={() => console.log("Botón 'Ver precios' clicado")}
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
