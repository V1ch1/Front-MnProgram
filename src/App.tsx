import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AppProvider } from "./AppContext";
import ReactGA from "react-ga4"; // Importa React-GA4
import Home from "./pages/Home";
import Clinicas from "./pages/Clinicas";
import Abogados from "./pages/Abogados";
import Asesorias from "./pages/Asesorias";
import Consulting from "./pages/Consulting";
import Limpieza from "./pages/Limpieza";
import Formacion from "./pages/Formacion";
import Ingenieros from "./pages/Ingenieros";
import Odontologos from "./pages/Odontologos";
import Arquitectos from "./pages/Arquitectos";
import Procuradores from "./pages/Procuradores";
import Servicios from "./pages/Servicios";
import FixedButtons from "./components/FixedButtons/FixedButtons";
import Entidades from "./pages/Entidades";
import AbogadosAds from "./pages/AbogadosAds";
import AbogadosAds2 from "./pages/AbogadosAds2";
import AbogadosAds3 from "./pages/AbogadosAds3";
import ClinicasAds from "./pages/ClinicasAds";
import OdontologosAds from "./pages/OdontologosAds";
import OdontologosAds3 from "./pages/OdontologosAds3";
import ClinicasAds3 from "./pages/ClinicasAds3";
import ClinicasAds2 from "./pages/ClinicasAds2";
import OdontologosAds2 from "./pages/OdontologosAds2";

const App: React.FC = () => {
  useEffect(() => {
    const GA_ID = import.meta.env.VITE_GA_ID;
    if (!GA_ID) {
      console.error("Google Analytics ID (VITE_GA_ID) no está definido.");
      return;
    }
    ReactGA.initialize(GA_ID); // Inicializa Google Analytics
    ReactGA.send("pageview"); // Envía la primera vista de página
  }, []);

  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/software-abogados-mk" element={<Abogados />} />
          <Route path="/software-abogados-ads" element={<AbogadosAds />} />
          <Route path="/software-abogados-ads-2" element={<AbogadosAds2 />} />
          <Route path="/software-abogados-ads-3" element={<AbogadosAds3 />} />
          <Route path="/software-arquitectos-mk" element={<Arquitectos />} />
          <Route path="/software-asesorias-mk" element={<Asesorias />} />
          <Route path="/software-clinicas-mk" element={<Clinicas />} />
          <Route path="/software-clinicas-ads" element={<ClinicasAds />} />
          <Route path="/software-clinicas-ads-2" element={<ClinicasAds2 />} />
          <Route path="/software-clinicas-ads-3" element={<ClinicasAds3 />} />
          <Route path="/software-consulting-mk" element={<Consulting />} />
          <Route path="/software-formacion-mk" element={<Formacion />} />
          <Route path="/software-ingenieros-mk" element={<Ingenieros />} />
          <Route path="/software-limpieza-mk" element={<Limpieza />} />
          <Route path="/software-odontologos-mk" element={<Odontologos />} />
          <Route
            path="/software-odontologos-ads"
            element={<OdontologosAds />}
          />
          <Route
            path="/software-odontologos-ads-2"
            element={<OdontologosAds2 />}
          />
          <Route
            path="/software-odontologos-ads-3"
            element={<OdontologosAds3 />}
          />
          <Route path="/software-procuradores-mk" element={<Procuradores />} />
          <Route path="/software-servicios-mk" element={<Servicios />} />
          <Route
            path="/software-entidades-sociales-mk"
            element={<Entidades />}
          />
        </Routes>
        <ConditionalFixedButtons />
      </Router>
    </AppProvider>
  );
};

const ConditionalFixedButtons: React.FC = () => {
  const location = useLocation();
  const hideOnPaths = [
    "/",
    "/software-abogados-ads",
    "/software-abogados-ads-2",
    "/software-abogados-ads-3",
    "/software-odontologos-ads",
    "/software-odontologos-ads-2",
    "/software-odontologos-ads-3",
    "/software-clinicas-ads",
    "/software-clinicas-ads-2",
    "/software-clinicas-ads-3",
  ]; // Añadimos la nueva ruta aquí

  if (hideOnPaths.includes(location.pathname)) {
    return null;
  }

  return <FixedButtons />;
};

export default App;
