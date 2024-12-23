import React from "react";
import TypingEffect from "../TypingEffect/TypingEffect";
import VerPreciosButton from "../buttons/VerPreciosButton";
import { useAppContext } from "../../AppContext";
import { useLocation } from "react-router-dom"; // Importar hook para obtener parámetros

// Hook personalizado para leer parámetros de la URL
const useQuery = () => {
  const { search } = useLocation();
  return new URLSearchParams(search);
};

const OfertaLimitada: React.FC = () => {
  const { colectivo } = useAppContext();
  const query = useQuery();

  // Obtener parámetros de la URL
  const email = query.get("correo") || "email_por_defecto@test.com"; // Valor predeterminado
  const icodcli = query.get("icodcli") || "cli_por_defecto";
  const asunto = query.get("mail") || "asunto_por_defecto";

  return (
    <div className="container mx-auto overflow-hidden pt-52 pb-24">
      {/* Este div aplica un espacio entre el borde y los márgenes */}
      <div className="px-6 sm:px-8 md:px-12">
        <div className="mx-auto border border-black rounded-lg py-8 px-6 sm:px-8 md:px-12 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          {/* Columna del texto */}
          <div
            className="flex-1 flex items-center mb-4 md:mb-0 px-4 sm:px-6 md:px-8 
                          text-xs sm:text-sm md:text-base !text-xs min-w-[200px]"
          >
            <TypingEffect
              fixedText="Oferta limitada:"
              typingTexts={["25 aniversario", "50% de descuento"]}
              fixedTextColor="#fd4b5c"
              typingTextColor="#000000"
            />
          </div>

          {/* Columna del botón */}
          <div className="flex justify-center md:justify-start w-auto">
            <VerPreciosButton
              label="Ver Precios"
              location="Oferta Limitada"
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

export default OfertaLimitada;
