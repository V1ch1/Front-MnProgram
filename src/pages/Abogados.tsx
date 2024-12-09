import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import HeroComponent from "../components/HeroSection/HeroComponent";
import pageData from "../data/data";
import { useAppContext } from "../AppContext";
import { useLocation } from "react-router-dom";
import HeroSection from "../components/HeroSection/HeroSection";
import BlogBlock from "../components/Blog/BlogBlock";
import Reviews from "../components/Reviews/Reviews";
import TextBlackRoughFixedText from "../components/Text/TextBlackRoughFixedText";
import FeatureComponent from "../components/Features/Features";

// Importa las features definidas en el archivo 'features.ts'
import { featuresAbogados, featuresClinicas } from "../data/features";
import OfertaLimitada from "../components/OfertaLimitada/OfertaLimitada";
import Beneficios from "../components/Beneficios/Beneficios";
import Bloque4Filas from "../Bloque4Filas/Bloque4Filas";
import FAQs from "../components/FAQ/Faq";
import { faqsAbogados } from "../data/faqs";
import ScrollFooter from "../components/Footer/ScrollFooter";

// Definir la interfaz de las reviews
interface Review {
  review: string;
  image: string;
  name: string;
  subName: string;
}

const Abogados: React.FC = () => {
  const { setHeroData } = useAppContext();
  const location = useLocation();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [features, setFeatures] = useState<any[]>([]);
  const [faqs, setFaqs] = useState<Any[]>([]);

  useEffect(() => {
    const pageName = location.pathname.split("/")[1].toLowerCase();

    if (pageData[pageName]) {
      setHeroData(pageData[pageName].hero);
      setReviews(pageData[pageName].reviews || []);

      // Aquí seleccionamos las features dependiendo de la página actual
      if (pageName === "software-abogados-mk") {
        setFeatures(featuresAbogados);
        setFaqs(faqsAbogados);
      } else if (pageName === "software-clinicas-mk") {
        setFeatures(featuresClinicas);
      }
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

export default Abogados;
