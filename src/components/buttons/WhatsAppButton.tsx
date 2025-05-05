import React from "react";
import { trackWhatsAppClick } from "../../utils/analytics";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/34659989871"
      onClick={trackWhatsAppClick}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center transition-colors w-full sm:w-auto"
    >
      <button className="w-full sm:w-64 bg-black text-white hover:bg-[#0052a3] px-6 md:px-8 py-2 rounded-3xl transform hover:translate-y-1 transition-all text-base md:text-lg font-space font-normal">
        Whatsapp
      </button>
    </a>
  );
};

export default WhatsAppButton;
