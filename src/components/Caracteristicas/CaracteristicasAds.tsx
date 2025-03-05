import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import FormAds from "../forms/FormAds";

const CaracteristicasAds: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const videoData = {
    videoUrl:
      "https://www.youtube.com/watch?v=rZ1Hoi8rrLo&list=TLGGyRamxW9DoYUyMDAyMjAyNQ",
  };

  const caracteristicas = [
    {
      titulo: "Gestión de expedientes",
      subtitulo: "Organiza tu despacho",
      caracteristicas: [
        "Gestión documental",
        "Agenda y calendario",
        "Gestión de tareas",
        "Control de plazos",
        "Gestión de contactos",
      ],
    },
    {
      titulo: "Facturación y cobros",
      subtitulo: "Controla tu facturación",
      caracteristicas: [
        "Facturación electrónica",
        "Control de cobros",
        "Gestión de igualas",
        "Minutas y provisiones de fondos",
        "Informes y estadísticas",
      ],
    },
    {
      titulo: "Contabilidad integrada",
      subtitulo: "Gestiona tus cuentas",
      caracteristicas: [
        "Contabilidad automatizada",
        "Libro diario",
        "Balance de situación",
        "Cuenta de resultados",
        "Modelos fiscales",
      ],
    },
    {
      titulo: "Comunicaciones",
      subtitulo: "Comunícate eficientemente",
      caracteristicas: [
        "Correo electrónico integrado",
        "SMS y notificaciones",
        "Lexnet integrado",
        "Firma digital",
        "Plantillas personalizables",
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-white9 py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título principal con más espacio arriba */}
        <h2 className="text-center text-5xl font-bold text-gray-800 mb-4 pt-12">
          Todo lo que necesitas
        </h2>

        {/* Subtítulo en negro y más pequeño */}
        <h3 className="text-center text-xl text-gray-800 mb-16">
          Para gestionar tu despacho de abogados
        </h3>

        {/* Grid de características */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {caracteristicas.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-xl p-8
              shadow-[rgba(0,_0,_0,_0.3)_0px_19px_38px,_rgba(0,_0,_0,_0.22)_0px_15px_12px]
              hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]
              transition-all duration-500 
              flex flex-col h-full
              transform hover:-translate-y-6
              relative
              before:absolute before:inset-0 before:z-[-1] before:rounded-xl
              before:shadow-[0_15px_45px_rgb(0,0,0,0.2)]
              border border-gray-200
              hover:scale-105"
            >
              {/* Título de la tarjeta centrado */}
              <h4 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                {item.titulo}
              </h4>

              {/* Subtítulo de la tarjeta centrado */}
              <h5 className="text-lg text-gray-600 mb-8 text-center">
                {item.subtitulo}
              </h5>

              {/* Lista de características */}
              <ul className="space-y-4 flex-grow">
                {item.caracteristicas.map((caracteristica, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircleIcon className="h-5 w-5 text-[#0066CC] flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{caracteristica}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Botón Te Llamamos centrado */}
        <div className="flex justify-center mt-16">
          <button
            onClick={handleOpenPopup}
            className="bg-[#0066CC] text-white px-12 py-4 rounded-lg
            hover:bg-[#0052a3] transition-all duration-300
            font-semibold text-xl
            transform hover:scale-105 hover:-translate-y-1 active:scale-95
            shadow-lg hover:shadow-xl"
          >
            Prueba gratis{" "}
          </button>
        </div>
      </div>
      {isPopupOpen && (
        <FormAds onClose={handleClosePopup} videoUrl={videoData.videoUrl} />
      )}
    </div>
  );
};

export default CaracteristicasAds;
