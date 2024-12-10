// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./AppContext"; // Importa el AppProvider
import Home from "./pages/Home";
import Clinicas from "./pages/Clinicas";
import Abogados from "./pages/Abogados";

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/software-abogados-mk" element={<Abogados />} />
          <Route path="/software-clinicas-mk" element={<Clinicas />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
