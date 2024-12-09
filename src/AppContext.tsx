import React, { createContext, useState, ReactNode, useContext } from "react";
import { HeroData, BlogData, Review, PageData, Faq } from "./types/types";

// Estructura del contexto ampliada
interface AppContextProps {
  heroData: HeroData | null;
  setHeroData: (data: HeroData) => void;
  blogData: BlogData | null;
  setBlogData: (data: BlogData) => void;
  reviews: Review[];
  setReviews: (data: Review[]) => void;
  faqs: Faq | null;
  setFaqs: (data: Faq) => void;
  pageDataByUrl: { [key: string]: PageData };
  setPageDataByUrl: (data: { [key: string]: PageData }) => void;
}

// Crear el contexto
const AppContext = createContext<AppContextProps | undefined>(undefined);

// Provider del contexto
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [faqs, setFaqs] = useState<Faq | null>(null);
  const [pageDataByUrl, setPageDataByUrl] = useState<{
    [key: string]: PageData;
  }>({});

  return (
    <AppContext.Provider
      value={{
        heroData,
        setHeroData,
        blogData,
        setBlogData,
        reviews,
        faqs,
        setFaqs,
        setReviews,
        pageDataByUrl,
        setPageDataByUrl,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe ser usado dentro de un AppProvider");
  }
  return context;
};
