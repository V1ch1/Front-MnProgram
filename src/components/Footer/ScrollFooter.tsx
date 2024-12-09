import React, { useEffect, useState } from "react";
import LogoMn from "../../assets/logo-MN-25-peq.png";
import VerVideoButton from "../Buttons/VerVideoButton";
import { useAppContext } from "../../AppContext";

const ScrollFooter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Efecto para manejar el scroll y la visibilidad del componente
  useEffect(() => {
    const handleScroll = () => {
      // Detectar si el usuario ha hecho scroll suficiente
      if (window.scrollY > 100) {
        setIsVisible(true); // Mostrar el componente
      } else {
        setIsVisible(false); // Ocultar el componente
      }
    };

    // Añadir el event listener para el scroll
    window.addEventListener("scroll", handleScroll);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg transition-all duration-500 ease-in-out transform ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* Contenedor limitado para las columnas */}
      <div className="!pt-10 pb-5 container mx-auto ">
        <div className="flex flex-col sm:flex-row justify-between items-center h-full">
          {/* Logo a la izquierda */}
          <div className="flex items-center space-x-4 sm:order-1">
            <img src={LogoMn} alt="Logo" className="h-14" />
          </div>

          {/* Texto en el centro */}
          <div className="text-center sm:flex-grow sm:order-2 flex text-2xl font-bold	items-center justify-center sm:h-auto">
            <p>Descubre la oferta especial 25 aniversario</p>
          </div>

          {/* Botón a la derecha */}
          <div className="sm:order-3">
            <VerVideoButton
              label="Ver vídeo"
              location="Botón Ver video en Oferta limitada"
              onClick={() =>
                console.log("clic Botón Ver video en Oferta limitada")
              }
              videoUrl={""} // Usamos la URL del vídeo que tenemos en heroData
              className="mt-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollFooter;
