// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./AppContext"; // Importa el AppProvider
import Abogados from "./pages/Abogados";
import Home from "./pages/Home";
import "./app.css";

const App: React.FC = () => {
  return (
    <AppProvider>
      {" "}
      {/* Envuelves la app con el AppProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/software-abogados-mk" element={<Abogados />} />
          {/* Añade más rutas según sea necesario */}
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
