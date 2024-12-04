import React from "react";
import VerVideoButton from "./buttons/VerVideoButton";
import VerPreciosButton from "./buttons/VerPreciosButton";

// Definir la estructura de las props para el HeroComponent
interface HeroComponentProps {
  data: {
    hero: {
      logo: string; // URL del logo
      title: {
        text1: string; // Primer texto del título
        highlightedText: string; // Texto resaltado en el título
        text2: string; // Segundo texto del título
      };
      lines: string[]; // Lista de líneas de texto (por ejemplo, características o descripciones)
      buttons: {
        video: string; // Texto del botón "Ver Video"
        price: string; // Texto del botón "Ver Precios"
      };
      // Datos para el bloque izquierdo
      textUnderStarsLeft: string; // Texto debajo de las estrellas para el bloque izquierdo
      imageUnderTextLeft: string; // URL de la imagen debajo del texto para el bloque izquierdo

      // Datos para el bloque derecho
      textUnderStarsRight: string; // Texto debajo de las estrellas para el bloque derecho
      imageUnderTextRight: string; // URL de la imagen debajo del texto para el bloque derecho
      
      videoUrl: string; // URL del video (para el iframe)
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
    <section className="hero-section flex flex-col lg:flex-row mt-16">
      {/* Contenedor centralizado */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Bloque izquierdo */}
          <div className="left-block flex-1 p-4">
            {/* Logo */}
            <img src={hero.logo} alt="Logo" className="logo mb-5" />

            {/* Título */}
            <h1 className="title text-5xl font-semibold	 ">
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
                  className="line text-2xl"
                  dangerouslySetInnerHTML={{ __html: line }} // Usar HTML en el texto
                />
              ))}
                      </div>
                      <div className="buttons mt-4 flex space-x-4">
  {/* Usando el componente VerVideoButton */}
  <div className="button-container text-left"> {/* Alineación izquierda */}
    <VerVideoButton
      label={hero.buttons.video}
      location="hero_top_video"
      onClick={() => console.log("Botón 'Ver video' clicado")}
      className="mb-2"
    />
    {/* Estrellas debajo del botón */}
    <div className="flex justify-start space-x-1 mt-2">
      <i className="text-yellow-500 fas fa-star"></i>
      <i className="text-yellow-500 fas fa-star"></i>
      <i className="text-yellow-500 fas fa-star"></i>
      <i className="text-yellow-500 fas fa-star"></i>
      <i className="text-yellow-500 fas fa-star"></i>
    </div>
    {/* Texto debajo de las estrellas */}
    <p className="mt-2 text-sm text-left">{hero.textUnderStarsLeft}</p> {/* Alineado a la izquierda */}
    {/* Imagen debajo del texto */}
    <img
      src={hero.imageUnderTextLeft}
      alt="Imagen debajo del texto"
      className="mt-4 w-32 h-32" {/* Tamaño opcional */}
    />
  </div>

  {/* Usando el componente VerPreciosButton */}
  <div className="button-container text-left"> {/* Alineación izquierda */}
    <VerPreciosButton
      label={hero.buttons.price}
      location="hero_top_price"
      onClick={() => console.log("Botón 'Ver precios' clicado")}
      className="mb-2"
    />
    {/* Estrellas debajo del botón */}
    <div className="flex justify-start space-x-1 mt-2">
      <i className="text-yellow-500 fas fa-star"></i>
      <i className="text-yellow-500 fas fa-star"></i>
      <i className="text-yellow-500 fas fa-star"></i>
      <i className="text-yellow-500 fas fa-star"></i>
      <i className="text-yellow-500 fas fa-star"></i>
    </div>
    {/* Texto debajo de las estrellas */}
    <p className="mt-2 text-sm text-left">{hero.textUnderStarsRight}</p> {/* Alineado a la izquierda */}
    {/* Imagen debajo del texto */}
    <img
      src={hero.imageUnderTextRight}
      alt="Imagen debajo del texto"
      className="mt-4 w-32 h-32" {/* Tamaño opcional */}
    />
  </div>
</div>

          </div>

          {/* Bloque derecho (Vídeo de YouTube) */}
          <div className="right-block flex-1 p-4 lg:w-1/2 flex items-center justify-center">
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
