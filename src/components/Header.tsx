import React from "react";
import VerVideoButton from "./Buttons/VerVideoButton";
import { useAppContext } from "../AppContext"; // Importamos el hook de contexto

const Header: React.FC = () => {
  const { heroData } = useAppContext(); // Accedemos a los datos del héroe desde el contexto

  // Si heroData es null, podemos manejarlo con un valor predeterminado o retornar un mensaje de carga.
  if (!heroData) {
    return <div>Cargando...</div>; // Puedes mostrar un mensaje de carga mientras se obtiene el heroData
  }

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
              videoUrl={heroData.videoUrl} // Usamos la URL del vídeo que tenemos en heroData
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
