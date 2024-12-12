import React, { useState, useEffect } from "react";
import "./heroSection.css";

const HeroSection: React.FC = () => {
  // Definimos los textos para la primera línea (superior) y la segunda línea (inferior)
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

  // Estado para manejar el índice de la frase superior e inferior
  const [currentTopIndex, setCurrentTopIndex] = useState(0);
  const [currentBottomIndex, setCurrentBottomIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false); // Estado para manejar el fade-out

  // Cambiar las frases cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true); // Activar el fade-out

      // Cambiar las frases después de 1 segundo (para permitir que el fade-out se vea)
      setTimeout(() => {
        setCurrentTopIndex((prevIndex) => (prevIndex + 1) % topTexts.length);
        setCurrentBottomIndex(
          (prevIndex) => (prevIndex + 1) % bottomTexts.length
        );
        setFadeOut(false); // Desactivar el fade-out
      }, 1000);
    }, 5000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container mt-16">
      <div className="video-background">
        <iframe
          title="background-video"
          src="https://www.youtube.com/embed/CZroOtmpYg4?autoplay=1&mute=1&loop=1&playlist=CZroOtmpYg4"
          frameBorder="0"
          allow="autoplay; fullscreen"
          className="video-frame"
        ></iframe>
      </div>

      <div className="content-overlay">
        <img
          src="\assets\MN-trama-1.png"
          alt="overlay"
          className="overlay-image"
        />
        <h1 className={`main-text ${fadeOut ? "fade-out" : ""}`}>
          <span className={`firstLetter ${fadeOut ? "fade-out" : ""}`}>
            {topTexts[currentTopIndex][0]}
          </span>
          {topTexts[currentTopIndex].slice(1)} <br />
          <span className={`firstLetter ${fadeOut ? "fade-out" : ""}`}>
            {bottomTexts[currentBottomIndex][0]}
          </span>
          {bottomTexts[currentBottomIndex].slice(1)}
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
