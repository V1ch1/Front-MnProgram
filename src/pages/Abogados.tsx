import React, { Suspense, lazy, useState, useEffect } from "react";
import { useAppContext } from "../AppContext";
import { useLocation } from "react-router-dom";

// Cargar los componentes de manera diferida (Lazy loading)
const Header = lazy(() => import("../components/header/Header"));
const HeroComponent = lazy(
  () => import("../components/HeroSection/HeroComponent")
);
const HeroSection = lazy(() => import("../components/HeroSection/HeroSection"));
const BlogBlock = lazy(() => import("../components/blog/BlogBlock"));
const Reviews = lazy(() => import("../components/reviews/Reviews"));
const TextBlackRoughFixedText = lazy(
  () => import("../components/Text/TextBlackRoughFixedText")
);
const FeatureComponent = lazy(() => import("../components/Features/Features"));
const OfertaLimitada = lazy(
  () => import("../components/OfertaLimitada/OfertaLimitada")
);
const Beneficios = lazy(() => import("../components/Beneficios/Beneficios"));
const Bloque4Filas = lazy(
  () => import("../components/Bloque4Filas/Bloque4Filas")
);
const FAQs = lazy(() => import("../components/FAQ/Faq"));
const ScrollFooter = lazy(() => import("../components/Footer/ScrollFooter"));

// Data
import { pageData } from "../data/data";
import { Review, Feature, Faq } from "../types/types";

const Abogados: React.FC = () => {
  const { setHeroData } = useAppContext();
  const location = useLocation();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [faqs, setFaqs] = useState<Faq[]>([]);

  useEffect(() => {
    // Obtén el nombre de la página desde la URL
    document.title = "Software para abogados - Mn Program";
    const pageName = location.pathname
      .split("/")[1]
      .toLowerCase() as keyof typeof pageData;

    // Verifica si pageData tiene la data para la página actual
    if (pageData[pageName]) {
      // Actualiza los datos dinámicamente según la URL
      const page = pageData[pageName]; // Esta es la estructura de datos de PageData
      console.log(pageName, "page de pageData");

      setHeroData(page.hero);
      setReviews(page.reviews || []);
      setFeatures(page.features || []);
      setFaqs(page.faqs || []);
    }
  }, [location, setHeroData]);

  return (
    <div>
      {/* Suspense para cargar los componentes de manera diferida */}
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
};

export default Abogados;
