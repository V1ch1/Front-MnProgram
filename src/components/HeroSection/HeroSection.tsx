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

    return () => clearInterval(interval);
  }, [topTexts.length, bottomTexts.length]); // Añadimos las longitudes aquí

  return (
    <div className="hero-container mt-16">
      <div className="video-background">
        <iframe
          title="background-video"
          src="https://www.youtube.com/embed/CZroOtmpYg4?autoplay=1&mute=1&loop=1&playlist=CZroOtmpYg4"
          frameBorder="0"
          allow="autoplay; fullscreen"
          className="video-frame w-full h-full aspect-[16/9]"
        ></iframe>
      </div>

      <div className="content-overlay">
        <img
          src="\assets\MN-trama-1.png"
          alt="overlay"
          className="overlay-image w-full h-auto aspect-[16/9]"
        />
        <h1
          className={`main-text ${
            fadeOut ? "opacity-0" : "opacity-100"
          } transition-opacity duration-1000`}
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
