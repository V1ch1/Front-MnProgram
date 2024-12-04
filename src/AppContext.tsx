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

// Definir la estructura del contexto
interface AppContextProps {
  heroData: HeroData | null; // Datos del hero con tipo explícito
  setHeroData: (data: HeroData) => void; // Función para actualizar los datos del héroe
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

// El Provider es el encargado de gestionar el contexto
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [heroData, setHeroData] = useState<HeroData | null>(null); // Almacenamos el objeto hero con tipo HeroData

  return (
    <AppContext.Provider value={{ heroData, setHeroData }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe ser usado dentro de un AppProvider");
  }
  return context;
};
