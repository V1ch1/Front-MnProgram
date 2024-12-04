// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Abogados from "./pages/Abogados";
import Home from "./pages/Home";
import "./app.css"; // O el nombre que hayas dado al archivo CSS

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta para la home */}
        <Route path="/" element={<Home />} />
        {/* Ruta para la página de abogados */}
        <Route path="/abogados" element={<Abogados />} />
      </Routes>
    </Router>
  );
};

export default App;
