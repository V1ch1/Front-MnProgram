import React, { useState } from "react";
import logoMn from "../../assets/logo_Mn_aniversario.svg";

interface FormPopupProps {
  videoUrl: string; // URL del video
  closePopup: () => void; // Función para cerrar el popup
}

const FormPopup: React.FC<FormPopupProps> = ({ videoUrl, closePopup }) => {
  // Estado local para almacenar la URL del video (si es necesario)
  const [storedVideoUrl, setStoredVideoUrl] = useState<string>(videoUrl);

  return (
    <div
      className="popup-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]"
      style={{ zIndex: 9999 }}
    >
      <div className="popup-content bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        {/* Botón para cerrar el popup */}
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>

        {/* Contenido del formulario */}
        <div className="popup-header text-center mb-4">
          <img src={logoMn} alt="Logo" className="w-40 mx-auto mb-4" />
          <h2 className="text-lg font-bold">Empieza gratis</h2>
          <p className="text-gray-600 text-sm">
            Déjanos tu teléfono y te enviaremos a tu WhatsApp una videodemo
            actualizada con la Campaña Especial 25 Aniversario.
          </p>
        </div>

        {/* Mostrar la URL del video (si es necesario) */}
        <div className="text-center mb-4">
          <p className="text-sm text-gray-500">
            Video relacionado:{" "}
            <span className="text-blue-500">{storedVideoUrl}</span>
          </p>
        </div>

        {/* Formulario */}
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Ingresa tu teléfono"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPopup;
