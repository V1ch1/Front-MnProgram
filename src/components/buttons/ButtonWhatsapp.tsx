import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ButtonWhatsapp: React.FC = () => {
  return (
    <a
      href="https://wa.me/34625471673"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 z-50"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default ButtonWhatsapp;
