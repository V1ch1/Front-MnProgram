import React from "react";
import VerVideoButton from "../buttons/VerVideoButton";
import { useAppContext } from "../../AppContext";

const Header: React.FC = () => {
  const { heroData, colectivo } = useAppContext();

  if (!heroData) {
    return <div>Cargando... HEADER</div>;
  }

  return (
    <header className="w-full h-[100px] bg-black flex items-center justify-center pt-6 pb-6 md:pt-4 md:pb-4">
      <div className="w-full max-w-screen-xl flex flex-col md:flex-row justify-center items-center px-4">
        {/* Texto de "Oferta especial 25 aniversario" */}
        <div className="text-white text-lg sm:text-xl md:text-2xl flex items-center mb-2 md:mb-0 font-semibold">
          Oferta especial 25 aniversario
        </div>

        <div className="mt-1 md:mt-0 md:ml-4">
          {/* Botón de Ver Vídeo */}

          <VerVideoButton
            label="Ver vídeo"
            section="header"
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
    </header>
  );
};

export default Header;
