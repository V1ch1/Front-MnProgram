import React from "react";
import VerVideoButton from "../buttons/VerVideoButton";
import { useAppContext } from "../../AppContext";
import { useLocation } from "react-router-dom";

// Hook para obtener parámetros de la query string
const useQuery = () => {
  const { search } = useLocation();
  return new URLSearchParams(search);
};

const Header: React.FC = () => {
  const { colectivo } = useAppContext();
  const query = useQuery();

  // Obtener los parámetros de la URL
  const email = query.get("correo") || "email_por_defecto@test.com"; // Valor por defecto si falta
  const icodcli = query.get("icodcli") || "cli_por_defecto";
  const asunto = query.get("mail") || "asunto_por_defecto";

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
            videoUrl="https://www.youtube.com/embed/rZ1Hoi8rrLo?autoplay=1&mute=1&loop=1&playlist=rZ1Hoi8rrLo"
            fuente="mail.video"
            email={email} // Parámetro dinámico
            icodcli={icodcli} // Parámetro dinámico
            asunto={asunto} // Parámetro dinámico
            status="pendiente"
            colectivo={colectivo}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
