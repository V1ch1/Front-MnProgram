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
  const [features, setFeatures] = useState<any[]>([]); // Estado para almacenar las features

  useEffect(() => {
    const pageName = location.pathname.split("/")[1].toLowerCase();

    if (pageData[pageName]) {
      setHeroData(pageData[pageName].hero);
      setReviews(pageData[pageName].reviews || []);

      // Aquí seleccionamos las features dependiendo de la página actual
      if (pageName === "software-abogados-mk") {
        setFeatures(featuresAbogados); // Usar las features de abogados
      } else if (pageName === "clinicas") {
        setFeatures(featuresClinicas); // Usar las features de clínicas
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
    </div>
  );
};

export default Abogados;
