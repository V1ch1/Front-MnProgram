import { HeroData } from "../types/types";

export const heroData: Record<string, HeroData> = {
  abogados: {
    logo: "/assets/logo_Mn_aniversario.svg",
    title: {
      text1: "El software de gestión para abogados",
      highlightedText: "N°1 en ventas",
      text2: "desde 1€ al día",
    },
    lines: [
      "+ de <strong>8.000</strong> despachos lo utilizan diariamente.",
      "+ de <strong>50.000</strong> abogados confían en MN program.",
      "+ de <strong>98%</strong> de opiniones positivas.",
    ],
    buttons: {
      video: "Ver vídeo",
      price: "Ver precios",
    },
    textUnderStarsLeft: "4,8 estrellas en",
    textUnderStarsRight: "4,8 estrellas en",
    imageUnderTextLeft: "assets/logo-MN-25-peq.png",
    imageUnderTextRight: "assets/logoGoogle.png",
    videoUrl: "https://www.youtube.com/watch?v=rZ1Hoi8rrLo",
    caratulaVideo: "/assets/caratulas/Abogados.webp",
  },
  clinicas: {
    logo: "/assets/logo_Mn_clinicas.svg",
    title: {
      text1: "El software de gestión para clínicas",
      highlightedText: "N°1 en ventas",
      text2: "desde 1€ al día",
    },
    lines: [
      "+ de <strong>5.000</strong> clínicas lo utilizan diariamente.",
      "+ de <strong>30.000</strong> profesionales confían en MN program.",
      "+ de <strong>98%</strong> de opiniones positivas.",
    ],
    buttons: {
      video: "Ver vídeo",
      price: "Ver precios",
    },
    textUnderStarsLeft: "4,9 estrellas en",
    textUnderStarsRight: "4,9 estrellas en",
    imageUnderTextLeft: "assets/logo-MN-25-peq.png",
    imageUnderTextRight: "assets/logoGoogle.png",
    videoUrl: "https://www.youtube.com/watch?v=rZ1Hoi8rrLo",
    caratulaVideo: "/assets/caratulas/Clinicas.webp",
  },
};
