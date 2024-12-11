import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://2f20byputa.execute-api.us-east-2.amazonaws.com", // URL base de tu API
        changeOrigin: true, // Cambia el origen para evitar problemas con CORS
        rewrite: (path) => path.replace(/^\/api/, "/develop"), // Redirige /api al endpoint correcto
      },
    },
  },
});
