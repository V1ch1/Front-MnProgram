import React, { useState } from "react";

interface FormAdsProps {
  onClose: () => void;
  videoUrl: string;
}

const FormAds: React.FC<FormAdsProps> = ({ onClose, videoUrl }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí irá la lógica de envío del formulario
    console.log("Datos del formulario:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative">
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Cerrar"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Contenido del formulario */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Rellena el formulario para ver el vídeo
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre completo *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FD4A5C] focus:ring-[#FD4A5C] sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FD4A5C] focus:ring-[#FD4A5C] sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="telefono"
                className="block text-sm font-medium text-gray-700"
              >
                Teléfono *
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                required
                value={formData.telefono}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FD4A5C] focus:ring-[#FD4A5C] sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="empresa"
                className="block text-sm font-medium text-gray-700"
              >
                Empresa
              </label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FD4A5C] focus:ring-[#FD4A5C] sm:text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#FD4A5C] text-white py-2 px-4 rounded-lg hover:bg-[#e54352] transition-colors duration-300"
            >
              Ver vídeo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormAds;
