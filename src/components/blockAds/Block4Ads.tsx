import React, { useState } from "react";
import FormAds from "../forms/FormAds";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const Block4Ads: React.FC = () => {
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
              <span className="text-8xl text-[#FE0000] font-bold leading-none flex items-center">
                &lt;
              </span>
              <h2 className="text-6xl font-space font-normal flex items-center">
                Garantía MN
              </h2>
              <span className="text-8xl text-[#fe0000] font-bold leading-none flex items-center">
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
                className="bg-[#FE0000] text-white px-12 py-3 rounded-full hover:bg-red-700 transition-colors font-space"
              >
                Te llamamos
              </button>
              <button className="bg-black text-white px-12 py-3 rounded-full hover:bg-gray-900 transition-colors font-space">
                Calcula tu precio
              </button>
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
