import React from "react";

// Componentes
import HeaderAds from "../components/header/HeaderAds";
import HeroComponentAds from "../components/HeroSection/HeroComponentAds";
import VentajasAds from "../components/Beneficios/VentajasAds";
import FAQs from "../components/FAQ/Faq";
import { faqs } from "../data/faqs";
import Features from "../components/Features/Features";
import { features } from "../data/features";
import TextBlackRough from "../components/Text/TextBlackRough";
import BlueSection from "../components/Footer/FooterAds";

const faqsAbogados = faqs.abogados;

const Abogados: React.FC = () => {
  const titleData = {
    text1: "Todo lo que podemos hacer por tu despacho",
    highlightedText: " desde 1€ al día",
  };
  return (
    <div>
      <HeaderAds />
      <HeroComponentAds />
      <VentajasAds />
      <div className="flex justify-center w-full text-center">
        <TextBlackRough title={titleData} />
      </div>
      <Features features={features.abogados} />
      <BlueSection />
      <FAQs faqs={faqsAbogados} />
    </div>
  );
};

export default Abogados;
