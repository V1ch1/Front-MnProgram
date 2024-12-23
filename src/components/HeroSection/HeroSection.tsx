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
    link.href = "/assets/MN-trama-1.webp";
    link.as = "image";
    link.type = "image/webp";
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
      {/* Contenedor de video con fondo fijo */}
      <div
        className="video-background relative w-full h-[500px] lg:h-[700px]"
        style={{ height: "100%" }}
      >
        {/* Video de fondo con aspecto fijo */}
        <iframe
          title="background-video"
          src="https://www.youtube.com/embed/CZroOtmpYg4?autoplay=1&mute=1&loop=1&playlist=CZroOtmpYg4"
          frameBorder="0"
          allow="autoplay; fullscreen"
          className="video-frame absolute top-0 left-0 w-full h-full object-cover"
          style={{ aspectRatio: "16/9", height: "100%" }} // Establecemos un ratio fijo para evitar cambios de tamaño
        ></iframe>
      </div>

      {/* Contenedor de overlay con imagen */}
      <div className="content-overlay absolute top-0 left-0 w-full h-full flex items-center justify-center">
        {/* Imagen de overlay con dimensiones fijas */}
        <img
          src="/assets/MN-trama-1.webp"
          alt="overlay"
          className="overlay-image w-full h-auto object-cover"
          style={{ aspectRatio: "16/9" }} // Mantiene la proporción 16:9
          width="1200" // Establece el ancho para prevenir shifts
          height="675" // Establece la altura para prevenir shifts
          loading="lazy" // Añadimos lazy loading para optimizar la carga
        />

        {/* Texto principal con animaciones */}
        <h1
          className={`main-text text-white text-center ${
            fadeOut ? "opacity-0" : "opacity-100"
          } transition-opacity duration-1000`}
          style={{ minHeight: "80px" }} // Reservamos el espacio para el texto, evitando que se mueva
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
