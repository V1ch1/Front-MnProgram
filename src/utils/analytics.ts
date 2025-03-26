// src/utils/analytics.ts
import ReactGA from "react-ga4";

export const trackWhatsAppClick = () => {
  console.log("🟢 Click en botón de WhatsApp detectado");
  ReactGA.event({
    category: "WhatsApp",
    action: "Click en botón",
    label: "Botón de WhatsApp",
  });
};
