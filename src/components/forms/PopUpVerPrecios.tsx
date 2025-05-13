import React, { useState } from "react";
import TeLlamamosButton from "../buttons/TeLlamamosButton";
import CalculaTuPrecioButton from "../buttons/CalculaTuPrecioButton";
import Logo from "/assets/logo-MN-25-peq.webp";
import { useAppContext } from "../../AppContext";
import { useLocation } from "react-router-dom";

// Hook personalizado para leer parámetros de la URL
const useQuery = () => {
  const { search } = useLocation();
  return new URLSearchParams(search);
};

interface PopUpVerPreciosProps {
  onClose: () => void;
}

const PopUpVerPrecios: React.FC<PopUpVerPreciosProps> = ({ onClose }) => {
  const [showMessage, setShowMessage] = useState<string | null>(null);
  const { colectivo } = useAppContext();
  const query = useQuery();

  const email = query.get("correo") ?? "email_por_defecto@test.com";
  const icodcli = query.get("icodcli") ?? "cli_por_defecto";
  const asunto = query.get("mail") ?? "asunto_por_defecto";
  const status = "pendiente";

  const handleCloseClick = () => {
    setShowMessage(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-16 w-full md:w-[800px] max-w-full relative">
        <div className="overflow-y-auto max-h-[90vh] pr-4">
          <button
            onClick={handleCloseClick}
            className="absolute top-2 right-4 text-gray-500 hover:text-gray-700"
          >
            <span className="text-2xl">&times;</span>
          </button>

          <div className="flex justify-center mb-6">
            <img src={Logo} alt="Logo" className="h-12" loading="lazy" />
          </div>

          <h2 className="text-center text-lg md:text-xl text-[#FD4A5C] font-semibold mb-4">
            TODO INCLUÍDO EN EL PRECIO FINAL
          </h2>

          <div className="space-y-4">
            {/* Fila 1 */}
            <div className="flex items-start mb-4">
              <img
                src="/assets/features/Facturar.svg"
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

            {/* Fila 2 */}
            <div className="flex items-start mb-4">
              <img
                src="/assets/features/expedientes.svg"
                alt="Icono"
                className="h-8 w-8 mr-4"
              />
              <div>
                <p className="text-black text-left font-bold">
                  Migración y volcado de datos
                  <span className="text-[#FD4A5C]"> gratis</span>
                </p>
                <ul className="list-disc pl-5 text-black mt-1">
                  <li className="ml-0 text-left">
                    Migración completa de todos los datos y cualquier programa
                    del mercado
                  </li>
                  <li className="ml-0 text-left">
                    100% segura y sin pérdida de datos
                  </li>
                  <li className="ml-0 text-left">
                    En el menor tiempo posible.
                  </li>
                </ul>
              </div>
            </div>

            {/* Fila 3 */}
            <div className="flex items-start mb-4">
              <img
                src="/assets/features/CuadroMando.svg"
                alt="Icono"
                className="h-8 w-8 mr-4"
              />
              <div>
                <p className="text-black text-left font-bold">
                  Puesta en marcha del programa personalizada
                  <span className="text-[#FD4A5C]"> gratis</span>
                </p>
                <ul className="list-disc pl-5 text-black mt-1">
                  <li className="ml-0 text-left">
                    Asignación de asesora especializada durante toda la
                    implantación
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

            {/* Fila 4 */}
            <div className="flex items-start mb-4">
              <img
                src="/assets/features/Recordatorios.svg"
                alt="Icono"
                className="h-8 w-8 mr-4"
              />
              <div>
                <p className="text-black text-left font-bold">
                  Garantía MN. Si no quedas satisfecho, te devolvemos el dinero
                  <span className="text-[#FD4A5C]"> 90 días</span>
                </p>
                <ul className="list-disc pl-5 text-black mt-1">
                  <li className="ml-0 text-left">
                    Puesta en marcha asegurada. Si tras la finalización de la
                    puesta en marcha y 90 días de uso del programa, si no quedas
                    satisfecho te devolvemos el dinero
                  </li>
                  <li className="ml-0 text-left">
                    Puesta en marcha asegurada. Garantía de calidad y uso
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0 mt-6">
            <TeLlamamosButton
              location="popup Te llamamos"
              fuente="mail.plus.precios"
              email={email}
              icodcli={icodcli}
              asunto={asunto}
              status={status}
              colectivo={colectivo}
              setShowMessage={setShowMessage}
              className="bg-[#FD4A5C] text-white py-2 px-4 rounded-lg"
            />
            <CalculaTuPrecioButton
              location="popup Calcula precio"
              fuente="mail.plus.precios"
              email={email}
              icodcli={icodcli}
              asunto={asunto}
              status={status}
              colectivo={colectivo}
              setShowMessage={setShowMessage}
              className="bg-green-500 text-white py-2 px-4 rounded-lg"
            />
          </div>

          {showMessage && (
            <div className="mt-4 text-center text-gray-700 px-4">
              <p>{showMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopUpVerPrecios;
