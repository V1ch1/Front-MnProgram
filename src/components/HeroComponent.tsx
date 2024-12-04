import React from "react";
import VerVideoButton from "./buttons/VerVideoButton";
import VerPreciosButton from "./buttons/VerPreciosButton";

// Definir la estructura de las props para el HeroComponent
interface HeroComponentProps {
  data: {
    hero: {
      logo: string;
      title: {
        text1: string;
        highlightedText: string;
        text2: string;
      };
      lines: string[];
      buttons: {
        video: string;
        price: string;
      };
      stars: number;
      textUnderStars: string;
      imageUnderText: string;
      videoUrl: string;
    };
  };
}

const HeroComponent: React.FC<HeroComponentProps> = ({ data }) => {
  const { hero } = data;

  // Generar las estrellas
  const stars = [...Array(5)].map((_, idx) => (
    <span key={idx} className={`star ${idx < hero.stars ? "filled" : ""}`} />
  ));

  return (
    <section className="hero-section flex flex-col lg:flex-row">
      {/* Contenedor centralizado */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Bloque izquierdo */}
          <div className="left-block flex-1 p-4">
            {/* Logo */}
            <img src={hero.logo} alt="Logo" className="logo" />

            {/* Título */}
            <h1 className="title text-2xl font-bold">
              {hero.title.text1}{" "}
              <span className="highlighted-text underline">
                {hero.title.highlightedText}
              </span>{" "}
              {hero.title.text2}
            </h1>

            {/* Líneas de texto */}
            <div className="lines mt-4">
              {hero.lines.map((line, index) => (
                <p
                  key={index}
                  className="line text-sm"
                  dangerouslySetInnerHTML={{ __html: line }} // Usar HTML en el texto
                />
              ))}
            </div>

            {/* Botones */}
            <div className="buttons mt-4">
              {/* Usando el componente VerVideoButton */}
              <VerVideoButton
                label={hero.buttons.video}
                location="hero_top_video"
                onClick={() => console.log("Botón 'Ver video' clicado")}
                className="mb-2"
              />

              {/* Usando el componente VerPreciosButton */}
              <VerPreciosButton
                label={hero.buttons.price}
                location="hero_top_price"
                onClick={() => console.log("Botón 'Ver precios' clicado")}
                className="mt-2"
              />
            </div>

            {/* Estrellas */}
            <div className="stars mt-4 flex">{stars}</div>

            {/* Texto debajo de las estrellas */}
            <p className="text-under-stars mt-2 text-sm">
              {hero.textUnderStars}
            </p>

            {/* Imagen debajo del texto */}
            <img
              src={hero.imageUnderText}
              alt="Imagen debajo del texto"
              className="mt-4"
            />
          </div>

          {/* Bloque derecho (Vídeo de YouTube) */}
          <div className="right-block flex-1 p-4 lg:w-1/2">
            <iframe
              width="100%"
              height="315"
              src={hero.videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
