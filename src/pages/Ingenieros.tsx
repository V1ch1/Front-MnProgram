import React, { useState, useEffect } from "react";
import { useAppContext } from "../AppContext";
import { useLocation } from "react-router-dom";

// Componentes
import Header from "../components/header/Header";
import HeroComponent from "../components/heroSection/HeroComponent";
import HeroSection from "../components/heroSection/HeroSection";
import BlogBlock from "../components/blog/BlogBlock";
import Reviews from "../components/reviews/Reviews";
import TextBlackRoughFixedText from "../components/text/TextBlackRoughFixedText";
import FeatureComponent from "../components/features/Features";
import OfertaLimitada from "../components/ofertaLimitada/OfertaLimitada";
import Beneficios from "../components/beneficios/Beneficios";
import Bloque4Filas from "../components/bloque4Filas/Bloque4Filas";
import FAQs from "../components/faq/Faq";
import ScrollFooter from "../components/footer/ScrollFooter";

// Data
import { pageData } from "../data/data";
import { Review, Feature, Faq } from "../types/types";

const Ingenieros: React.FC = () => {
  const { setHeroData } = useAppContext();
  const location = useLocation();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [faqs, setFaqs] = useState<Faq[]>([]);

  useEffect(() => {
    // Obtén el nombre de la página desde la URL
    document.title = "Software para Ingenieros - Mn Program";
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
      <BlogBlock />
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

export default Ingenieros;
