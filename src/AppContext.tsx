import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
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
  colectivo: string; // Añadido el estado para el colectivo
  setColectivo: (colectivo: string) => void; // Función para cambiar el colectivo
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
  const [colectivo, setColectivo] = useState<string>("");

  // Función para extraer el colectivo de la URL
  const extractColectivoFromUrl = (pathname: string): string => {
    const match = pathname.match(/software-(.+?)-mk/);
    return match && match[1] ? match[1] : "";
  };

  // Actualizar el colectivo basándonos en la URL
  useEffect(() => {
    const pathname = window.location.pathname; // Ejemplo: /software-abogados-mk
    const extractedColectivo = extractColectivoFromUrl(pathname);
    setColectivo(extractedColectivo); // Guardamos el colectivo (como "abogados", "clinicas", etc.)
  }, []);

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
        colectivo, // Exponemos el colectivo
        setColectivo, // Exponemos la función para cambiar el colectivo
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
