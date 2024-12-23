import React, { useState, useEffect } from "react";
import "./heroSection.css";

const HeroSection: React.FC = () => {
  const topTexts = [
    "Mucho de Personas,",
    "Mucho contigo,",
    "Más servicio,",
    "Mejorar cada día,",
  ];

  const bottomTexts = [
    "Nada de Artificial",
    "Nada sin ti",
    "Ningún problema",
    "Nada es imposible",
  ];

  const [currentTopIndex, setCurrentTopIndex] = useState(0);
  const [currentBottomIndex, setCurrentBottomIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Preload de la imagen LCP
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = "/assets/MN-trama-1.webp"; // Ruta de la imagen
    link.as = "image";
    link.type = "image/png";
    document.head.appendChild(link);

    // Configurar el intervalo para cambiar los textos
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentTopIndex((prevIndex) => (prevIndex + 1) % topTexts.length);
        setCurrentBottomIndex(
          (prevIndex) => (prevIndex + 1) % bottomTexts.length
        );
        setFadeOut(false);
      }, 1000);
    }, 5000);

    // Limpiar el intervalo y eliminar el preload cuando el componente se desmonte
    return () => {
      clearInterval(interval);
      document.head.removeChild(link); // Eliminar el link preload
    };
  }, [topTexts.length, bottomTexts.length]); // Añadimos las longitudes aquí

  return (
    <div className="hero-container mt-16">
      <div className="video-background relative w-full h-[500px] lg:h-[700px]">
        {/* Video de fondo con aspecto definido */}
        <iframe
          title="background-video"
          src="https://www.youtube.com/embed/CZroOtmpYg4?autoplay=1&mute=1&loop=1&playlist=CZroOtmpYg4"
          frameBorder="0"
          allow="autoplay; fullscreen"
          className="video-frame absolute top-0 left-0 w-full h-full object-cover"
          style={{ aspectRatio: "16/9", height: "100%" }} // Asegura que el video cubra todo el contenedor
        ></iframe>
      </div>

      <div className="content-overlay absolute top-0 left-0 w-full h-full flex items-center justify-center">
        {/* Imagen de overlay con aspecto definido */}
        <img
          src="/assets/MN-trama-1.webp" // Ruta de la imagen
          alt="overlay"
          className="overlay-image w-full h-auto object-cover"
          style={{ aspectRatio: "16/9" }} // Mantiene la proporción de aspecto
          width="1200" // Establecer el tamaño de la imagen para evitar cambios de diseño
          height="675" // Mantiene la proporción de la imagen (16:9)
        />
        {/* Texto principal con transición de opacidad */}
        <h1
          className={`main-text text-white text-center ${
            fadeOut ? "opacity-0" : "opacity-100"
          } transition-opacity duration-1000`}
          style={{ minHeight: "80px" }} // Reserva espacio para el texto
        >
          <span
            className={`firstLetter ${
              fadeOut ? "opacity-0" : "opacity-100"
            } transition-opacity duration-1000`}
          >
            {topTexts[currentTopIndex][0]}
          </span>
          {topTexts[currentTopIndex].slice(1)} <br />
          <span
            className={`firstLetter ${
              fadeOut ? "opacity-0" : "opacity-100"
            } transition-opacity duration-1000`}
          >
            {bottomTexts[currentBottomIndex][0]}
          </span>
          {bottomTexts[currentBottomIndex].slice(1)}
        </h1>
      </div>
    </div>
  );
};

export default React.memo(HeroSection);
