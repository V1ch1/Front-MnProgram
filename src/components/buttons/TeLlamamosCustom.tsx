import React from "react";

interface TeLlamamosCustomProps {
  onClick: () => void;
  className?: string;
  videoUrl?: string;
}

const TeLlamamosCustom: React.FC<TeLlamamosCustomProps> = ({ onClick }) => {
  const handleClick = () => {
    onClick(); // Esto abrirá el FormAdsRojo desde el componente padre
  };

  return (
    <button
      onClick={handleClick}
      className="w-full sm:w-64 bg-[#FE0000] text-white hover:bg-[#e54352] px-6 md:px-8 py-2 rounded-3xl transform hover:translate-y-1 transition-all text-base md:text-lg font-space font-normal"
    >
      Te llamamos
    </button>
  );
};

export default TeLlamamosCustom;
