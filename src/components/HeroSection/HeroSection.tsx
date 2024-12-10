import React from "react";
import "./heroSection.css";

const HeroSection: React.FC = () => {
  return (
    <div className="hero-container mt-16">
      <div className="video-background">
        <iframe
          title="background-video"
          src="https://www.youtube.com/embed/CZroOtmpYg4?autoplay=1&mute=1&loop=1&playlist=CZroOtmpYg4"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>

      <div className="content-overlay">
        <img
          src="\src\assets\MN-trama-1.png"
          alt="overlay"
          className="overlay-image"
        />
        <h1 className="main-text">
          <p>
            <span className="firstLetter">M</span>ucho de Personas{" "}
          </p>
          <span className="firstLetter">N</span>ada de Artificial
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
