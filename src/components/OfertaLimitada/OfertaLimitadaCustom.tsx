import React from "react";
import TypingEffect from "../TypingEffect/TypingEffect";
import TeLlamamosButton from "../buttons/TeLlamamosButton";
import FormAdsRojo from "../forms/FormAdsRojo";
import { useAppContext } from "../../AppContext";
import { useQuery } from "../../hooks/useQuery";

const OfertaLimitadaCustom: React.FC = () => {
  const { colectivo, heroData } = useAppContext();
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [showMessage, setShowMessage] = React.useState<string | null>(null);
  const query = useQuery();
  const email = query.get("correo") || "email_por_defecto@test.com";
  const icodcli = query.get("icodcli") || "cli_por_defecto";
  const asunto = query.get("mail") || "asunto_por_defecto";

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

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
            <TeLlamamosButton
              onClick={handleOpenPopup}
              location="Oferta Limitada"
              fuente="oferta.limitada"
              email={email}
              icodcli={icodcli}
              asunto={asunto}
              status="pendiente"
              colectivo={colectivo}
              setShowMessage={setShowMessage}
            />
          </div>
        </div>
      </div>
      {isPopupOpen && heroData && (
        <FormAdsRojo
          onClose={handleClosePopup}
          videoUrl={heroData.videoUrl}
          colectivo={colectivo}
        />
      )}
    </div>
  );
};

export default OfertaLimitadaCustom;
