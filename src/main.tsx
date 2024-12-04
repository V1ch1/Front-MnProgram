// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client"; // Importa desde 'react-dom/client' en lugar de 'react-dom'
import "./index.css";
import App from "./App";

// Crea una raíz para el renderizado con createRoot
const root = ReactDOM.createRoot(document.getElementById("root")!); // El "!" asegura que el elemento no es null

// Renderiza la aplicación
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
