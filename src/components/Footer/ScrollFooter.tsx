import React, { useEffect, useState } from "react";
import LogoMn from "/assets/logo-MN-25-peq.webp";
import { useAppContext } from "../../AppContext";
import { useLocation } from "react-router-dom"; // Importar hook para obtener parámetros
import VerPreciosButton from "../buttons/VerPreciosButton";

// Hook personalizado para leer parámetros de la URL
const useQuery = () => {
  const { search } = useLocation();
  return new URLSearchParams(search);
};

const ScrollFooter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { colectivo, heroData } = useAppContext();

  // Obtener parámetros de la URL
  const query = useQuery();
  const email = query.get("correo") || "email_por_defecto@test.com"; // Valor predeterminado
  const icodcli = query.get("icodcli") || "cli_por_defecto";
  const asunto = query.get("mail") || "asunto_por_defecto";

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

  if (!heroData) return null;

  return (
    <div
      className={`transition-all duration-500 ease-in-out ${
        isVisible
          ? "opacity-100 sticky bottom-0 left-0 right-0 z-10"
          : "opacity-0"
      }`}
    >
      <div className="mx-auto py-5 bg-white flex flex-row items-center justify-center">
        <div className="flex flex-col sm:flex-row justify-between items-center h-auto gap-2">
          {/* Logo */}
          <div className="flex items-center space-x-4 sm:order-1">
            <img src={LogoMn} alt="Logo" className="h-14" loading="lazy" />
          </div>

          {/* Texto en el centro */}
          <div className="text-center sm:flex-grow sm:order-2 flex text-2xl font-bold items-center justify-center sm:h-auto mx-6">
            <p>Descubre la oferta especial</p>
          </div>

          {/* Botón a la derecha */}
          <div className="sm:order-3">
            {/* <VerVideoButton
              label="Ver vídeo"
              section="Footer"
              videoUrl={
                heroData?.urlVerVideo ||
                "https://www.youtube.com/embed/rZ1Hoi8rrLo?autoplay=1&mute=1&loop=1&playlist=rZ1Hoi8rrLo"
              }
              fuente="mail.video"
              email={email} // Parámetro dinámico
              icodcli={icodcli} // Parámetro dinámico
              asunto={asunto} // Parámetro dinámico
              status="pendiente"
              colectivo={colectivo}
            /> */}
            <VerPreciosButton
              label={heroData.buttons.price}
              location="Footer"
              fuente="mail.precios"
              email={email} // Parámetro dinámico
              icodcli={icodcli} // Parámetro dinámico
              asunto={asunto} // Parámetro dinámico
              status="pendiente"
              colectivo={colectivo}
              className="custom-class"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollFooter;
