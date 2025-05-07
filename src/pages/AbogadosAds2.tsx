import React, { useState, useEffect } from "react";
import { useAppContext } from "../AppContext";

// Componentes
import Header from "../components/header/Header";
import HeroComponentCustom from "../components/HeroSection/HeroComponentCustom";
import HeroSection from "../components/HeroSection/HeroSection";
import BlogBlock from "../components/blog/BlogBlock";
import Reviews from "../components/reviews/Reviews";
import TextBlackRoughFixedText from "../components/Text/TextBlackRoughFixedText";
import FeatureComponent from "../components/Features/Features";
import OfertaLimitadaCustom from "../components/OfertaLimitada/OfertaLimitadaCustom";
import Beneficios from "../components/Beneficios/Beneficios";
import Bloque4Filas from "../components/Bloque4Filas/Bloque4Filas";
import FAQs from "../components/FAQ/Faq";
import ScrollFooter from "../components/Footer/ScrollFooter";
import ButtonWhatsapp from "../components/buttons/ButtonWhatsapp";

// Data
import { pageData } from "../data/data";
import { Review, Feature, Faq, Colectivo } from "../types/types";

const AbogadosAds2: React.FC = () => {
  const { setHeroData } = useAppContext();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [colectivo, setColectivo] = useState<Colectivo | null>(null);

  useEffect(() => {
    // Cambiar el título de la página
    document.title = "Software para Abogados - Mn Program";

    // Forzar la ruta correcta para esta página
    const pageName = "software-abogados-ads-2";

    // Verifica si pageData tiene la data para la página actual
    if (pageData[pageName]) {
      const page = pageData[pageName];

      // Asignamos la data a los estados
      setHeroData(page.hero);
      setReviews(page.reviews || []);
      setFeatures(page.features || []);
      setFaqs(page.faqs || []);
      setColectivo(page.colectivo[0] || null);
    }
  }, [setHeroData]);

  return (
    <div>
      <Header />
      <HeroComponentCustom colectivo="Abogados Ads 2" />
      <HeroSection />
      <BlogBlock />
      <Reviews reviews={reviews} />
      <TextBlackRoughFixedText
        tipoDeColectivo={colectivo ? colectivo.tipoDeColectivo : "despacho"}
      />
      <FeatureComponent features={features} />
      <OfertaLimitadaCustom colectivo="Abogados Ads 2" />
      {colectivo && <Beneficios colectivo={colectivo} />}
      <Bloque4Filas />
      <FAQs faqs={faqs} />
      <ButtonWhatsapp />
      <ScrollFooter />
    </div>
  );
};

export default AbogadosAds2;
