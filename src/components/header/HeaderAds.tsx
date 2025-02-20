import React from "react";
import Logo from "../../../public/assets/logoMnAniBl.png";
import { Link } from "react-router-dom";

const HeaderAds: React.FC = () => {
  return (
    <header>
      {/* Primera fila - Oferta especial */}
      <div className="w-full bg-black py-6">
        <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-3 items-center px-4 gap-4">
          {/* Logo - Columna izquierda */}
          <Link to="" className="flex justify-center sm:justify-start">
            <img src={Logo} alt="Logo" className="h-16" />
          </Link>

          {/* Texto - Columna central */}
          <div className="text-white text-lg sm:text-xl md:text-2xl font-semibold text-center">
            Oferta especial 25 aniversario
          </div>

          {/* Botón - Columna derecha */}
          <div className="flex justify-center sm:justify-end">
            <button className="bg-[#FD4A5C] text-white hover:bg-[#e54352] focus:ring-[#FD4A5C] text-lg px-6 py-2 rounded-lg transform hover:translate-y-1 hover:shadow-lg transition-all">
              Te llamamos
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderAds;
