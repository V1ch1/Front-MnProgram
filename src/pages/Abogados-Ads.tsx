import React from "react";

// Componentes
import FAQs from "../components/FAQ/Faq";
import { faqs } from "../data/faqs";
import HeroComponentAds3 from "../components/HeroSection/HeroComponentAds3";
import TopBanner from "../components/Banner/TopBanner";
import CaracteristicasAds from "../components/Caracteristicas/CaracteristicasAds";
import CallToActionSection from "../components/CallToActionSection/CallToActionSection";
import ButtonWhatsapp from "../components/buttons/ButtonWhatsapp";
import Features2 from "../components/Features/Features2";
import { features } from "../data/features";
import TextBlackRoughFixedText from "../components/Text/TextBlackRoughFixedText";

const faqsAbogados = faqs.abogados;
const featuresAbogados = features.abogados;

const Abogados: React.FC = () => {
  return (
    <div>
      <TopBanner />
      <HeroComponentAds3 />
      <CaracteristicasAds />
      <CallToActionSection />
      <TextBlackRoughFixedText tipoDeColectivo="despacho" />
      <Features2 features={featuresAbogados} />
      <FAQs faqs={faqsAbogados} />
      <ButtonWhatsapp />
    </div>
  );
};

export default Abogados;
