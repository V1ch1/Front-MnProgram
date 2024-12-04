import React from "react";
import VerVideoButton from "./buttons/VerVideoButton";

const Header: React.FC = () => {
  return (
    <header className="w-full h-[100px] bg-black flex items-center justify-center pt-6 pb-6 md:pt-4 md:pb-4">
      <div className="w-full max-w-screen-xl flex flex-col md:flex-row justify-center items-center px-4">
        {/* Bloque izquierdo: texto */}
        <div className="text-white text-md md:text-base flex items-center mb-0 md:mb-0 font-semibold">
          Oferta especial 25 aniversario
        </div>

        {/* Bloque derecho: botón */}
        <div className="mt-1 md:mt-0">
          <button className="text-white px-6 py-2 rounded flex items-center justify-center">
            <VerVideoButton
              label="Ver vídeo"
              location="banner_top"
              onClick={() => console.log("Botón clicado")}
              className="mt-0"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
