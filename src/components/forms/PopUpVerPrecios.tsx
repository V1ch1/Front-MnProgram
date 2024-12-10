import React, { useState } from "react";
import Logo from "../../assets/logo_Mn_aniversario.svg";

interface PopUpVerPreciosProps {
  onClose: () => void; // Recibe la función para cerrar el popup
}

const PopUpVerPrecios: React.FC<PopUpVerPreciosProps> = ({ onClose }) => {
  const [showMessage, setShowMessage] = useState<string | null>(null);

  const handleTeLlamamosClick = () => {
    setShowMessage(
      "En unos minutos, uno de nuestros comerciales le llamará para diseñar una oferta personalizada a la medida de sus necesidades."
    );
  };

  const handleCalculaTuPrecioClick = () => {
    setShowMessage(
      "En unos minutos, uno de nuestros comerciales contactará con usted para presentarle una oferta personalizada."
    );
  };

  const handleCloseClick = () => {
    setShowMessage(null); // Limpiar el mensaje
    onClose(); // Llamar la función onClose para cerrar el PopUp
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 w-[600px] max-w-full relative">
        {/* Botón de cierre */}
        <button
          onClick={handleCloseClick}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <span className="text-2xl">&times;</span>
        </button>

        {/* Logo centrado */}
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Logo" className="h-12" />
        </div>

        {/* Texto centrado */}
        <h2 className="text-center text-xl text-[#FD4A5C] font-semibold mb-4">
          TODO INCLUÍDO EN EL PRECIO FINAL
        </h2>

        {/* Fila 1 con imagen y texto */}
        <div className="flex items-start mb-4">
          <img
            src="\src\assets\features\Facturar.svg"
            alt="Icono"
            className="h-8 w-8 mr-4"
          />
          <div>
            <p className="text-black text-left font-bold">
              Empieza gratis desde
              <span className="text-[#FD4A5C]"> 1€ al día</span>
            </p>
            <ul className="list-disc pl-5 text-black mt-1">
              <li className="ml-0 text-left">Te damos 30 días gratis</li>
              <li className="ml-0 text-left">
                Aplazamos el pago 30 días desde la contratación del programa
              </li>
            </ul>
          </div>
        </div>

        {/* Fila 2 con imagen y texto */}
        <div className="flex items-start mb-4">
          <img
            src="\src\assets\features\Expedientes.svg"
            alt="Icono"
            className="h-8 w-8 mr-4"
          />
          <div>
            <p className="text-black text-left font-bold">
              Migración y volcado de datos{" "}
              <span className="text-[#FD4A5C]"> gratis</span>
            </p>
            <ul className="list-disc pl-5 text-black mt-1">
              <li className="ml-0 text-left">
                Migración completa de todos los datos y cualquier programa del
                mercado
              </li>
              <li className="ml-0 text-left">
                100% segura y sin pérdida de datos
              </li>
              <li className="ml-0 text-left">En el menor tiempo posible.</li>
            </ul>
          </div>
        </div>

        {/* Fila 3 con imagen y texto */}
        <div className="flex items-start mb-4">
          <img
            src="\src\assets\features\CuadroMando.svg"
            alt="Icono"
            className="h-8 w-8 mr-4"
          />
          <div>
            <p className="text-black text-left font-bold">
              Puesta en marcha del programa personalizada{" "}
              <span className="text-[#FD4A5C]"> gratis</span>
            </p>
            <ul className="list-disc pl-5 text-black mt-1">
              <li className="ml-0 text-left">
                Asignación de asesora especializada durante toda la implantación
              </li>
              <li className="ml-0 text-left">
                Configuración y personalización adaptada a tu empresa
              </li>
              <li className="ml-0 text-left">
                Formación y servicio ilimitado sin coste adicional
              </li>
            </ul>
          </div>
        </div>

        {/* Fila 4 con imagen y texto */}
        <div className="flex items-start mb-4">
          <img
            src="\src\assets\features\Recordatorios.svg"
            alt="Icono"
            className="h-8 w-8 mr-4"
          />
          <div>
            <p className="text-black text-left font-bold">
              Garantía MN. Si no quedas satisfecho, te devolvemos el dinero{" "}
              <span className="text-[#FD4A5C]"> 90 días</span>
            </p>
            <ul className="list-disc pl-5 text-black mt-1">
              <li className="ml-0 text-left">
                Puesta en marcha asegurada. Si tras la finalización de la puesta
                en marcha y 90 días de uso del programa, si no quedas satisfecho
                te devolvemos el dinero
              </li>
              <li className="ml-0 text-left">
                Puesta en marcha asegurada. Garantía de calidad y uso
              </li>
            </ul>
          </div>
        </div>

        {/* Botones */}
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={handleTeLlamamosClick}
            className="bg-[#FD4A5C] text-white py-2 px-4 rounded-lg"
          >
            Te llamamos
          </button>
          <button
            onClick={handleCalculaTuPrecioClick}
            className="bg-green-500 text-white py-2 px-4 rounded-lg"
          >
            Calcula tu precio
          </button>
        </div>

        {/* Mensaje adicional */}
        {showMessage && (
          <div className="mt-4 text-center text-gray-700 px-4">
            <p>{showMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopUpVerPrecios;
