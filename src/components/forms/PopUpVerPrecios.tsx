import React, { useState } from "react";
import TeLlamamosButton from "../buttons/TeLlamamosButton";
import CalculaTuPrecioButton from "../buttons/CalculaTuPrecioButton";
import Logo from "/assets/logo-MN-25-peq.webp";
import { useAppContext } from "../../AppContext";
import { useQuery } from "../../hooks/useQuery";

interface PopUpVerPreciosProps {
  onClose: () => void;
}

const PopUpVerPrecios: React.FC<PopUpVerPreciosProps> = ({ onClose }) => {
  const [showMessage, setShowMessage] = useState<string | null>(null);
  const { colectivo } = useAppContext();

  // Obtener parámetros de la URL
  const query = useQuery();
  const email = query.get("correo") ?? "email_por_defecto@test.com";
  const icodcli = query.get("icodcli") ?? "cli_por_defecto";
  const asunto = query.get("mail") ?? "asunto_por_defecto";
  const status = "pendiente";

  // Función para cerrar el popup
  const handleCloseClick = () => {
    setShowMessage(null); // Limpiar el mensaje
    onClose(); // Llamar la función onClose para cerrar el PopUp
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Logo" className="h-16" />
        </div>

        {/* Título */}
        <h2 className="text-2xl font-bold text-center mb-6">
          ¡Descubre nuestros precios!
        </h2>

        {/* Botones */}
        <div className="space-y-4">
          <TeLlamamosButton
            onClick={handleCloseClick}
            location="PopUp Ver Precios"
            fuente="mail.llamada"
            email={email}
            icodcli={icodcli}
            asunto={asunto}
            status={status}
            colectivo={colectivo}
            setShowMessage={setShowMessage}
          />
          <CalculaTuPrecioButton
            onClick={handleCloseClick}
            location="PopUp Ver Precios"
            fuente="mail.calcula"
            email={email}
            icodcli={icodcli}
            asunto={asunto}
            status={status}
            colectivo={colectivo}
            setShowMessage={setShowMessage}
          />
        </div>

        {/* Mensaje de éxito */}
        {showMessage && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
            {showMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default PopUpVerPrecios;
