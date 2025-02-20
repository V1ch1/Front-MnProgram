import React from "react";
import Logo from "../../../public/assets/logo-MN-25-peq.webp";
import { Link } from "react-router-dom";

const HeaderAds: React.FC = () => {
  return (
    <header>
      {/* Primera fila - Oferta especial */}
      <div className="w-full bg-black py-6">
        <div className="w-full max-w-screen-xl mx-auto flex justify-center items-center px-4">
          <div className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
            Oferta especial 25 aniversario
          </div>
        </div>
      </div>

      {/* Segunda fila - Logo y botón */}
      <div className="max-w-5xl mx-auto py-3 flex items-center">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-16" />
          </Link>

          {/* Botón Te llamamos */}
          <button className="bg-[#FD4A5C] text-white hover:bg-[#e54352] focus:ring-[#FD4A5C] text-lg px-6 py-2 rounded-lg transform hover:translate-y-1 hover:shadow-lg transition-all">
            Te llamamos
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderAds;
