import React, { useEffect, useState } from "react";
import LogoMn from "/assets/logo-MN-25-peq.png";
import VerVideoButton from "../buttons/VerVideoButton";

const ScrollFooter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Detectar cuando el usuario hace scroll
  useEffect(() => {
    const handleScroll = () => {
      // Cuando el usuario ha hecho scroll suficiente
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpiar el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`transition-all duration-500 ease-in-out ${
        isVisible
          ? "opacity-100 sticky bottom-0 left-0 right-0 z-10"
          : "opacity-0"
      }`}
    >
      <div className="bg-white p-3 shadow-lg">
        <div className="container mx-auto py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center h-auto gap-4">
            {/* Logo */}
            <div className="flex items-center space-x-4 sm:order-1">
              <img src={LogoMn} alt="Logo" className="h-14" />
            </div>

            {/* Texto en el centro */}
            <div className="text-center sm:flex-grow sm:order-2 flex text-2xl font-bold items-center justify-center sm:h-auto">
              <p>Descubre la oferta especial 25 aniversario</p>
            </div>

            {/* Botón a la derecha */}
            <div className="sm:order-3">
              <VerVideoButton
                label="Ver vídeo"
                location="Botón Ver video en footer"
                onClick={() => console.log("clic Botón Ver video en footer")}
                videoUrl={""}
                className="mt-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollFooter;
