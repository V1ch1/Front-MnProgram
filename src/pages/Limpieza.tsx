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
import { Review, Feature, Faq, Colectivo } from "../types/types";

const Limpieza: React.FC = () => {
  const { setHeroData } = useAppContext();
  const location = useLocation();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [colectivo, setColectivo] = useState<Colectivo | null>(null); // Estado para colectivo

  useEffect(() => {
    document.title = "Software para empresas de limpieza - Mn Program";
    const pageName = location.pathname
      .split("/")[1]
      .toLowerCase() as keyof typeof pageData;

    // Verifica si pageData tiene la data para la página actual
    if (pageData[pageName]) {
      const page = pageData[pageName]; // Esta es la estructura de datos de PageData

      // Actualiza los datos dinámicamente según la URL
      setHeroData(page.hero);
      setReviews(page.reviews || []);
      setFeatures(page.features || []);
      setFaqs(page.faqs || []);

      // Asignamos el primer colectivo (si existe)
      setColectivo(page.colectivo[0] || null);
    }
  }, [location, setHeroData]);

  return (
    <div>
      <Header />
      <HeroComponent />
      <HeroSection />
      {/* <BlogBlock /> */}
      <Reviews reviews={reviews} />
      <TextBlackRoughFixedText
        tipoDeColectivo={colectivo ? colectivo.tipoDeColectivo : "despacho"}
      />{" "}
      <FeatureComponent features={features} />
      <OfertaLimitada />
      {/* Solo pasamos colectivo si existe */}
      {colectivo && <Beneficios colectivo={colectivo} />}{" "}
      {/* Aquí pasamos colectivo */}
      <Bloque4Filas />
      <FAQs faqs={faqs} />
      <ScrollFooter />
    </div>
  );
};

export default Limpieza;
