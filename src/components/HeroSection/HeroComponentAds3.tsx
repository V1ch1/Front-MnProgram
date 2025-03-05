import React, { useState } from "react";
import FormAds from "../forms/FormAds";

const ThreeColumnSection: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const videoData = {
    videoUrl:
      "https://www.youtube.com/watch?v=rZ1Hoi8rrLo&list=TLGGyRamxW9DoYUyMDAyMjAyNQ",
  };

  return (
    <div
      className="h-screen w-full bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: 'url("/assets/fondo2.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        maxHeight: "1080px",
      }}
    >
      <div className="container-fluid w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Columna Izquierda */}
          <div className="text-center md:text-left ml-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white text-center">
              El mejor Software para abogados{" "}
            </h2>
          </div>

          {/* Columna Central */}
          <div className="flex flex-col items-center justify-between h-full relative">
            <div className="flex-grow flex items-center relative">
              {/* Círculo discontinuo */}
              <div className="absolute inset-0 w-full h-full">
                <div className="w-[450px] h-[450px] absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className="w-full h-full border-2 rounded-full animate-spin-slow"
                    style={{
                      borderStyle: "dashed",
                      borderWidth: "2px",
                      borderColor: "black",
                    }}
                  ></div>

                  {/* Botón 1 - Posición 2:00 (60 grados) */}
                  <div
                    className="absolute"
                    style={{
                      top: "10%",
                      right: "20%",
                      transform: "translate(50%, -50%)",
                    }}
                  >
                    <button
                      className="bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform animate-[scale_2s_ease-in-out_infinite]"
                      onClick={handleOpenPopup}
                    >
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 5v14l11-7z"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Botón 2 - Posición 7:30 (225 grados) */}
                  <div
                    className="absolute"
                    style={{
                      bottom: "25%",
                      left: "8%",
                      transform: "translate(-50%, 50%)",
                    }}
                  >
                    <button
                      className="bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform animate-[scale_2s_ease-in-out_infinite]"
                      onClick={handleOpenPopup}
                    >
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Imagen central - Ajustada para verse completa */}
              <div className="relative w-full h-[500px] flex items-center justify-center">
                {/* <img
                  src="/assets/chico-movil.webp"
                  alt="Chico con móvil"
                  className="h-full w-auto object-contain relative z-10"
                /> */}
              </div>
            </div>
          </div>

          {/* Flecha de scroll */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              className="w-16 h-16 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>

          {/* Columna Derecha */}
          <div className="flex justify-center">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-200 w-full max-w-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                Oferta
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                Descripción detallada de la oferta y sus beneficios para el
                cliente.
              </p>
              <div className="text-3xl font-bold text-center text-gray-800 mb-6">
                Desde 1€ al día
              </div>
              <button
                onClick={handleOpenPopup}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md"
              >
                Prueba gratis
              </button>
            </div>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <FormAds onClose={handleClosePopup} videoUrl={videoData.videoUrl} />
      )}
    </div>
  );
};

export default ThreeColumnSection;
