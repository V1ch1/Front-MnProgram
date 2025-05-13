import React from "react";

interface CustomHeroButtonProps {
  location: string;
  fuente: string;
  email: string;
  icodcli: string;
  asunto: string;
  status: string;
  colectivo: string;
  onClick: () => void;
  className?: string;
}

const CustomHeroButton: React.FC<CustomHeroButtonProps> = ({
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${
        className || "bg-[#FD4A5C] text-white py-2 px-4 rounded-lg"
      }`}
    >
      Te llamamos
    </button>
  );
};

export default CustomHeroButton;
