import React, { useState, useEffect } from "react";
import { useAppContext } from "../AppContext";
import { useLocation } from "react-router-dom";

// Componentes
import Header from "../components/header/Header";
import HeroComponent from "../components/HeroSection/HeroComponent";
import HeroSection from "../components/HeroSection/HeroSection";
import Reviews from "../components/reviews/Reviews";
import TextBlackRoughFixedText from "../components/Text/TextBlackRoughFixedText";
import FeatureComponent from "../components/Features/Features";
import OfertaLimitada from "../components/OfertaLimitada/OfertaLimitada";
import Beneficios from "../components/Beneficios/Beneficios";
import Bloque4Filas from "../components/Bloque4Filas/Bloque4Filas";
import FAQs from "../components/FAQ/Faq";
import ScrollFooter from "../components/Footer/ScrollFooter";

// Data
import { pageData } from "../data/data";
import { Review, Feature, Faq } from "../types/types";

const Entidades: React.FC = () => {
  const { setHeroData } = useAppContext();
  const location = useLocation();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [faqs, setFaqs] = useState<Faq[]>([]);

  useEffect(() => {
    // Obtén el nombre de la página desde la URL
    document.title = "Software para entidades sociales - Mn Program";
    const pageName = location.pathname
      .split("/")[1]
      .toLowerCase() as keyof typeof pageData;

    // Verifica si pageData tiene la data para la página actual
    if (pageData[pageName]) {
      // Actualiza los datos dinámicamente según la URL
      const page = pageData[pageName]; // Esta es la estructura de datos de PageData

      setHeroData(page.hero);
      setReviews(page.reviews || []);
      setFeatures(page.features || []);
      setFaqs(page.faqs || []);
    }
  }, [location, setHeroData]);

  return (
    <div>
      <Header />
      <HeroComponent />
      <HeroSection />
      {/* <BlogBlock /> */}
      <Reviews reviews={reviews} />
      <TextBlackRoughFixedText />
      <FeatureComponent features={features} />
      <OfertaLimitada />
      <Beneficios />
      <Bloque4Filas />
      <FAQs faqs={faqs} />
      <ScrollFooter />
    </div>
  );
};

export default Entidades;
