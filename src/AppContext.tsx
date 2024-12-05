// AppContext.tsx
import React, { createContext, useState, ReactNode, useContext } from "react";

// Definir la estructura de los datos del hero
interface HeroData {
  logo: string;
  title: {
    text1: string;
    highlightedText: string;
    text2: string;
  };
  lines: string[];
  buttons: {
    video: string;
    price: string;
  };
  textUnderStarsLeft: string;
  textUnderStarsRight: string;
  imageUnderTextLeft: string;
  imageUnderTextRight: string;
  videoUrl: string;
  caratulaVideo: string;
}

// Definir la estructura de los datos del blog
interface BlogData {
  leftColumn: {
    image: string;
    title: string;
    text: string;
    button: {
      text: string;
      url: string;
    };
  };
  rightColumn: {
    image: string;
    title: string;
    text: string;
    button: {
      text: string;
      url: string;
    };
  };
}

// Estructura del contexto ampliada
interface AppContextProps {
  heroData: HeroData | null;
  setHeroData: (data: HeroData) => void;
  blogData: BlogData | null;
  setBlogData: (data: BlogData) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

// Provider del contexto
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const [blogData, setBlogData] = useState<BlogData | null>(null);

  return (
    <AppContext.Provider
      value={{ heroData, setHeroData, blogData, setBlogData }}
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
