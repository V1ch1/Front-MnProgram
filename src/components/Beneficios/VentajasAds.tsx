import React from "react";
import {
  CheckCircleIcon,
  PlayCircleIcon,
  ArrowPathIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

const VentajasAds: React.FC = () => {
  const ventajas = [
    {
      icon: <PlayCircleIcon className="h-16 w-16 text-[#0066CC]" />,
      titulo: "Empieza gratis desde 1€ al día",
      caracteristicas: [
        "Te damos 30 días gratis",
        "Aplazamos el pago 30 días desde la contratación del programa",
      ],
    },
    {
      icon: <ArrowPathIcon className="h-16 w-16 text-[#0066CC]" />,
      titulo: "Migración y volcado de datos gratis",
      caracteristicas: [
        "Migración completa de todos los datos y cualquier programa del mercado",
        "100% segura y sin pérdida de datos",
        "En el menor tiempo posible",
      ],
    },
    {
      icon: <RocketLaunchIcon className="h-16 w-16 text-[#0066CC]" />,
      titulo: "Puesta en marcha personalizada gratis",
      caracteristicas: [
        "Asignación de asesora especializada durante toda la implantación",
        "Configuración y personalización adaptada a tu empresa",
        "Formación y servicio ilimitado sin coste adicional",
      ],
    },
    {
      icon: <ShieldCheckIcon className="h-16 w-16 text-[#0066CC]" />,
      titulo: "Garantía MN",
      caracteristicas: [
        "Puesta en marcha asegurada. Si tras la finalización de la puesta en marcha y 90 días de uso del programa, si no quedas satisfecho te devolvemos el dinero",
        "Puesta en marcha asegurada. Garantía de calidad y uso",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Título principal con estilo de bolígrafo */}
      <h2 className="text-center font-shadows text-3xl text-gray-800 mb-2 font-bold italic">
        Toma nota
      </h2>

      {/* Subtítulo */}
      <h3 className="text-center text-4xl font-bold text-gray-800 mb-12">
        Las ventajas de MN
      </h3>

      {/* Grid de ventajas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {ventajas.map((ventaja, index) => (
          <div
            key={index}
            className="text-center h-full flex flex-col p-6 rounded-xl border border-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white hover:scale-105 transform transition-transform"
          >
            {/* Icono */}
            <div className="mb-6 flex justify-center">{ventaja.icon}</div>

            {/* Título de la ventaja */}
            <h4 className="text-xl font-bold text-gray-800 mb-4 min-h-[3rem]">
              {ventaja.titulo}
            </h4>

            {/* Lista de características */}
            <ul className="space-y-4 flex-grow">
              {ventaja.caracteristicas.map((caracteristica, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-[#0066CC] flex-shrink-0 mt-1" />
                  <span className="text-gray-600 text-left text-sm md:text-base">
                    {caracteristica}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VentajasAds;
