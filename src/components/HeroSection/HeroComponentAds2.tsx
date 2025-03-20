import React from "react";

const HeroComponentAds2: React.FC = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/Hero/cabecera.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Contenedor del contenido */}
      <div className="absolute bottom-20 left-10 z-10 max-w-5xl">
        <img
          src="/assets/logo-MN-25-peq.webp"
          alt="Logo Hero"
          className="w-48 h-auto mb-6"
        />

        <h1 className="text-5xl md:text-7xl text-black mb-4 w-full font-space font-normal">
          LA <span className="text-[#FE0000]">MEJOR OFERTA</span> <br></br>DE
          NUESTRA HISTORIA{" "}
        </h1>

        <div className="flex items-center mb-8 w-full">
          <h2 className="text-2xl md:text-4xl text-black mr-3 font-space font-normal">
            Contrata ahora <span className="text-[#FE0000]">por 1€ al día</span>{" "}
          </h2>
          <i className="fas fa-arrow-down text-black text-3xl animate-bounce ml-4"></i>
        </div>

        <div className="flex space-x-6 w-full">
          <button className="w-64 bg-[#FE0000] text-white hover:bg-[#e54352] px-8 py-2 rounded-3xl transform hover:translate-y-1 transition-all text-lg font-space font-normal">
            Te llamamos
          </button>
          <button className="w-64 bg-black text-white hover:bg-[#0052a3] px-8 py-2 rounded-3xl transform hover:translate-y-1 transition-all text-lg font-space font-normal">
            Calcula tu precio
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroComponentAds2;
