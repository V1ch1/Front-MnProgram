import React, { useEffect, useState } from "react";
import LogoMn from "/assets/logo-MN-25-peq.png";
import VerVideoButton from "../buttons/VerVideoButton";
import { useAppContext } from "../../AppContext";

const ScrollFooter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { colectivo } = useAppContext();

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
      <div className=" mx-auto py-5 bg-white flex flex-row items-center justify-center">
        <div className="flex flex-col sm:flex-row justify-between items-center h-auto gap-2">
          {/* Logo */}
          <div className="flex items-center space-x-4 sm:order-1">
            <img src={LogoMn} alt="Logo" className="h-14" />
          </div>

          {/* Texto en el centro */}
          <div className="text-center sm:flex-grow sm:order-2 flex text-2xl font-bold items-center justify-center sm:h-auto mx-6">
            <p>Descubre la oferta especial 25 aniversario</p>
          </div>

          {/* Botón a la derecha */}
          <div className="sm:order-3">
            <VerVideoButton
              label="Ver vídeo"
              section="Footer"
              videoUrl="https://www.youtube.com/embed/CZroOtmpYg4?autoplay=1"
              fuente="mail.video"
              email="jose.blanco@test.com"
              icodcli="cli_123"
              asunto="Campaña Mn Program"
              status="pendiente"
              colectivo={colectivo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollFooter;
