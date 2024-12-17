import React from "react";
import logoMn from "/assets/logo_Mn_aniversario.svg";

interface FormPopupProps {
  videoUrl: string; // URL del video
  closePopup: () => void; // Función para cerrar el popup
}

const FormPopup: React.FC<FormPopupProps> = ({ videoUrl, closePopup }) => {
  // Estado para controlar si los campos del formulario están visibles
  // const [showFormFields, setShowFormFields] = useState(true);

  return (
    <div
      className="popup-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]"
      style={{ zIndex: 9999 }}
    >
      <div className="popup-content bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        {/* Botón para cerrar */}
        <button
          onClick={() => {
            closePopup();
            // if (showFormFields) {
            //   setShowFormFields(false); // Oculta los campos del formulario y muestra el video
            // } else {
            //   closePopup(); // Cierra el popup completamente
            // }
          }}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>

        {/* Contenido estático: Logo, título y párrafos siempre visibles */}
        <div className="popup-header text-center mb-4">
          <img src={logoMn} alt="Logo" className="w-50 mx-auto" />
          <p className="text-red-500 font-medium text-lg mb-2">
            Empieza gratis
          </p>
          {/* <p className="text-gray-600 text-sm">
            Déjanos tu teléfono y te enviaremos a tu WhatsApp una videodemo
            actualizada con la Campaña Especial 25 Aniversario.
          </p> */}
        </div>

        {/* {showFormFields ? (
          // Mostrar campos del formulario
          <form>
            <div className="mb-4">
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
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Ingresa tu teléfono"
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-40 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Enviar
              </button>
            </div>
          </form>
        ) : (
          // Mostrar el video de YouTube en lugar del formulario
          <div className="text-center mt-4">
            <iframe
              width="100%"
              height="315"
              src={videoUrl}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )} */}
        <div className="text-center mt-4">
          <iframe
            width="100%"
            height="315"
            src={videoUrl}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FormPopup;
