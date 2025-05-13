import React from "react";
import TypingEffect from "../TypingEffect/TypingEffect";
import TeLlamamosCustom from "../buttons/TeLlamamosCustom";
import FormAdsRojo from "../forms/FormAdsRojo";
import { useAppContext } from "../../AppContext";

interface OfertaLimitadaCustomProps {
  colectivo: string;
}

const OfertaLimitadaCustom: React.FC<OfertaLimitadaCustomProps> = ({
  colectivo,
}) => {
  const { heroData } = useAppContext();
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="container mx-auto overflow-hidden pt-52 pb-24">
      <div className="px-6 sm:px-8 md:px-12">
        <div className="mx-auto border border-black rounded-lg py-8 px-6 sm:px-8 md:px-12 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
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

          <div className="flex justify-center md:justify-start w-auto">
            <TeLlamamosCustom onClick={handleOpenPopup} />
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <FormAdsRojo
          onClose={handleClosePopup}
          videoUrl={heroData?.videoUrl || ""}
          colectivo={colectivo}
        />
      )}
    </div>
  );
};

export default OfertaLimitadaCustom;
