import React, { useState } from "react";
import FormAds from "../forms/FormAds";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

interface Block4AdsProps {
  // Props para los símbolos y texto del título
  symbolsColor: string;
  titleColor: string;
  // Props para los botones
  firstButtonBackground: string | { gradient: string };
  firstButtonTextColor: string;
  secondButtonBackground: string | { gradient: string };
  secondButtonTextColor: string;
}

const Block4Ads: React.FC<Block4AdsProps> = ({
  symbolsColor = "#FE0000",
  titleColor = "black",
  firstButtonBackground = "#FE0000",
  firstButtonTextColor = "white",
  secondButtonBackground = "black",
  secondButtonTextColor = "white",
}) => {
  const [ref, isVisible] = useIntersectionObserver();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const videoData = {
    videoUrl: "https://www.youtube.com/watch?v=rZ1Hoi8rrLo",
  };

  // Estilos para los botones
  const firstButtonStyle =
    typeof firstButtonBackground === "string"
      ? { backgroundColor: firstButtonBackground }
      : { backgroundImage: firstButtonBackground.gradient };

  const secondButtonStyle =
    typeof secondButtonBackground === "string"
      ? { backgroundColor: secondButtonBackground }
      : { backgroundImage: secondButtonBackground.gradient };

  return (
    <div className="w-full mb-12">
      <div className="container mx-auto">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="bg-white rounded-3xl text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span
                className="text-8xl font-bold leading-none flex items-center"
                style={{ color: symbolsColor }}
              >
                &lt;
              </span>
              <h2
                className="text-6xl font-space font-normal flex items-center"
                style={{ color: titleColor }}
              >
                Garantía MN
              </h2>
              <span
                className="text-8xl font-bold leading-none flex items-center"
                style={{ color: symbolsColor }}
              >
                &gt;
              </span>
            </div>

            <p className="text-2xl font-space font-normal mb-8">
              Si no te quedas satisfecho, <br></br> te devolvemos el dinero tras
              90 días
            </p>

            <div className="flex gap-4 justify-center">
              <button
                onClick={handleOpenPopup}
                className="px-12 py-3 rounded-full transition-colors font-space"
                style={{
                  ...firstButtonStyle,
                  color: firstButtonTextColor,
                }}
              >
                Te llamamos
              </button>
              <a
                href="https://wa.me/34625471673"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
              >
                <button
                  className="px-12 py-3 rounded-full transition-colors font-space"
                  style={{
                    ...secondButtonStyle,
                    color: secondButtonTextColor,
                  }}
                >
                  Whatsapp
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <FormAds onClose={handleClosePopup} videoUrl={videoData.videoUrl} />
      )}
    </div>
  );
};

export default Block4Ads;
