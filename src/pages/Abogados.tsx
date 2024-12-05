import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import HeroComponent from "../components/HeroComponent";
import pageData from "../data/data";
import { useAppContext } from "../AppContext";
import { useLocation } from "react-router-dom"; // Importa useLocation para obtener la ruta actual
import HeroSection from "../components/HeroSection/HeroSection";
import BlogBlock from "../components/Blog/BlogBlock";
import Reviews from "../components/Reviews/Reviews";

// Definir la interfaz de las reviews
interface Review {
  text1: string;
  image: string;
  text2: string;
}

const Abogados: React.FC = () => {
  const { setHeroData } = useAppContext(); // Accedemos a la función para actualizar los datos del contexto
  const location = useLocation(); // Obtiene la ruta actual
  const [reviews, setReviews] = useState<Review[]>([]); // Estado para almacenar las reviews

  console.log(reviews);
  useEffect(() => {
    const pageName = location.pathname.split("/")[1].toLowerCase(); // Extraemos la ruta

    // Si la página corresponde a un nombre en pageData, establecemos los datos correspondientes
    if (pageData[pageName]) {
      setHeroData(pageData[pageName].hero); // Establecer los datos completos del héroe basados en la página actual
      setReviews(pageData[pageName].reviews || []); // Establecemos las reviews de la página correspondiente
    }
  }, [location, setHeroData]);

  return (
    <div>
      <Header />
      <HeroComponent />
      <HeroSection />
      <BlogBlock />
      <Reviews reviews={reviews} />
    </div>
  );
};

export default Abogados;
