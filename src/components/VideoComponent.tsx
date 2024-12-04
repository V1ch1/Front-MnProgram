import React, { useState } from "react";

const VideoComponent = ({ videoUrl, caratulaVideo }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
    const iframe = document.getElementById("video-player");
    iframe.classList.remove("hidden");
    iframe.src += "?autoplay=1"; // Iniciar el vídeo automáticamente
  };

  return (
    <div className="video-container relative">
      {/* Carátula con imagen */}
      {!isPlaying && (
        <div className="cover-image absolute inset-0 flex items-center justify-center">
          <img
            src={caratulaVideo} // Usamos caratulaVideo que viene como prop
            alt="Carátula del vídeo"
            className="w-full h-full object-cover"
          />
          
          <button
            onClick={handlePlayVideo}
            className="play-button text-white bg-red-500 opacity-100 rounded-full p-5 animate-scale-animation"
          >
            <i className="fas fa-play-circle text-4xl"></i>
          </button>
        </div>
      )}

      {/* Reproductor de vídeo */}
      <iframe
        id="video-player"
        width="100%"
        height="315"
        src={videoUrl} // Usamos videoUrl que viene como prop
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={isPlaying ? "block" : "hidden"}
      />
    </div>
  );
};

export default VideoComponent;
