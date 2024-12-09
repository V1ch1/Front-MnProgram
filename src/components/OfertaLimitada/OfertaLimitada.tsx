import React from "react";
import TypingEffect from "../TypingEffect/TypingEffect";
import VerPreciosButton from "../Buttons/VerPreciosButton";
import LogoMn from "../../assets/LogoMnBlanco.png";

const OfertaLimitada: React.FC = () => {
  return (
    <div className="container mx-auto overflow-hidden pt-52 pb-24">
      <div className="mx-auto border border-black rounded-lg py-8 px-6 sm:px-8 md:px-12 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Columna del texto */}
        <div className="flex-1 flex items-center mb-4 md:mb-0 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg min-w-[200px]">
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
            logoUrl={LogoMn}
            location="hero_Ver_Precios_Button"
            onClick={() =>
              console.log("Botón 'Ver precios' clicado en Oferta limitada")
            }
            className="mb-2"
          />
        </div>
      </div>
    </div>
  );
};

export default OfertaLimitada;
