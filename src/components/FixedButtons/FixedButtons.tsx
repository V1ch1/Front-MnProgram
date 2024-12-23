import React from "react";
import VerPreciosButton from "../buttons/VerPreciosButton";
import VerVideoButton from "../buttons/VerVideoButton";
import { useAppContext } from "../../AppContext";
import { useLocation } from "react-router-dom"; // Importar hook para obtener parámetros

// Hook personalizado para leer parámetros de la URL
const useQuery = () => {
  const { search } = useLocation();
  return new URLSearchParams(search);
};

const FixedButtons: React.FC = () => {
  const { colectivo } = useAppContext();

  // Obtener parámetros de la URL
  const query = useQuery();
  const email = query.get("correo") || "email_por_defecto@test.com"; // Valor predeterminado
  const icodcli = query.get("icodcli") || "cli_por_defecto";
  const asunto = query.get("mail") || "asunto_por_defecto";

  return (
    <div className="hidden lg:fixed lg:bottom-32 lg:left-3 lg:z-50 lg:flex lg:flex-col lg:gap-2">
      <VerVideoButton
        label="Ver vídeo"
        section="Fixed Button"
        videoUrl="https://www.youtube.com/embed/CZroOtmpYg4?autoplay=1"
        fuente="mail.video"
        email={email} // Parámetro dinámico
        icodcli={icodcli} // Parámetro dinámico
        asunto={asunto} // Parámetro dinámico
        status="pendiente"
        colectivo={colectivo}
      />
      <VerPreciosButton
        label="Ver Precios"
        location="Fixed Button"
        fuente="mail.precios"
        email={email} // Parámetro dinámico
        icodcli={icodcli} // Parámetro dinámico
        asunto={asunto} // Parámetro dinámico
        status="pendiente"
        colectivo={colectivo}
        className="custom-class"
      />
    </div>
  );
};

export default FixedButtons;
