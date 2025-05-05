import React from "react";

interface TeLlamamosButtonProps {
  onClick: () => void;
}

const TeLlamamosButton: React.FC<TeLlamamosButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full sm:w-64 bg-[#E54352] text-white hover:bg-[#e54352] px-6 md:px-8 py-2 rounded-3xl transform hover:translate-y-1 transition-all text-base md:text-lg font-space font-normal"
    >
      Te llamamos
    </button>
  );
};

export default TeLlamamosButton;
