import React from "react";

// Componentes
import HeaderAds from "../components/header/HeaderAds";
import HeroComponentAds from "../components/HeroSection/HeroComponentAds";
import ScrollFooter from "../components/Footer/ScrollFooter";
import VentajasAds from "../components/Beneficios/VentajasAds";
import FAQs from "../components/FAQ/Faq";
import { faqs } from "../data/faqs";

const faqsAbogados = faqs.abogados;

const Abogados: React.FC = () => {
  return (
    <div>
      <HeaderAds />
      <HeroComponentAds />
      <VentajasAds />
      <FAQs faqs={faqsAbogados} />
      <ScrollFooter />
    </div>
  );
};

export default Abogados;
