import React from "react";
import VerVideoButton from "./buttons/VerVideoButton";
import VerPreciosButton from "./buttons/VerPreciosButton";
import VideoComponent from "./VideoComponent";

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
      textUnderStarsLeft: string; // Texto debajo de las estrellas para el bloque izquierdo
      imageUnderTextLeft: string; // URL de la imagen debajo del texto para el bloque izquierdo
      textUnderStarsRight: string; // Texto debajo de las estrellas para el bloque derecho
      imageUnderTextRight: string; // URL de la imagen debajo del texto para el bloque derecho
      videoUrl: string; // URL del video (para el iframe)
      caratulaVideo:string; // URL de la imagen)
    };
  };
}


const HeroComponent: React.FC<HeroComponentProps> = ({ data }) => {
  const { hero } = data;
  console.log(hero)

  return (
    <section className="hero-section flex flex-col lg:flex-row mt-16">
      {/* Contenedor centralizado */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Bloque izquierdo */}
          <div className="left-block flex-1 p-4">
            {/* Logo */}
            <img src={hero.logo} alt="Logo" className="logo mb-10" />

            {/* Título */}
            <h1 className="title text-5xl font-semibold">
              {hero.title.text1}{" "}
              <span className="highlighted-text underline">
                {hero.title.highlightedText}
              </span>{" "}
              {hero.title.text2}
            </h1>

            {/* Líneas de texto */}
            <div className="lines mt-10">
              {hero.lines.map((line, index) => (
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
                  label={hero.buttons.video}
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
                <p className="mt-2 text-sm text-center">{hero.textUnderStarsLeft}</p>
                {/* Imagen debajo del texto */}
                <img
                  src={hero.imageUnderTextLeft}
                  alt="Logo Mn"
                  className="mt-4 w-16 h-8 mx-auto "
                />
              </div>

              {/* Botón Ver Precios */}
              <div className="button-container text-center">
                <VerPreciosButton
                  label={hero.buttons.price}
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
                <p className="mt-2 text-sm text-center">{hero.textUnderStarsRight}</p>
                {/* Imagen debajo del texto */}
                <img
                  src={hero.imageUnderTextRight}
                  alt="Logo google"
                  className="mt-4 w-16 h-8 mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Bloque derecho (Vídeo de YouTube) */}
          <div className="right-block flex-1 p-4 lg:w-1/2 flex items-center justify-center">
          
          <VideoComponent
          videoUrl={hero.videoUrl} // Pasamos el URL del video
          caratulaVideo={hero.caratulaVideo} // Pasamos la carátula del video
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
