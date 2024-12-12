import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./AppContext"; // Importa el AppProvider
import Home from "./pages/Home";
import Clinicas from "./pages/Clinicas";
import Abogados from "./pages/Abogados";
import TestPage from "./pages/TestPage";
import Asesorias from "./pages/Asesorias";
import Consulting from "./pages/Consulting";
import Limpieza from "./pages/Limpieza";
import Formacion from "./pages/Formacion";
import Ingenieros from "./pages/Ingenieros";
import Odontologos from "./pages/Odontologos";

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/software-abogados-mk" element={<Abogados />} />
          <Route path="/software-clinicas-mk" element={<Clinicas />} />
          <Route path="/software-asesorias-mk" element={<Asesorias />} />
          <Route path="/software-consulting-mk" element={<Consulting />} />
          <Route path="/software-limpieza-mk" element={<Limpieza />} />
          <Route path="/software-servicios-mk" element={<Limpieza />} />
          <Route path="/software-formacion-mk" element={<Formacion />} />
          <Route path="/software-ingenieros-mk" element={<Ingenieros />} />
          <Route path="/software-odontologos-mk" element={<Odontologos />} />
          <Route path="/software-procuradores-mk" element={<Formacion />} />
          <Route path="/test-page" element={<TestPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
