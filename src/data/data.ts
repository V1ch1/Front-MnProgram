// src/data/data.ts

interface HeroTitle {
  text1: string;
  highlightedText: string;
  text2: string;
}

interface HeroButtons {
  video: string;
  price: string;
}

interface Hero {
  logo: string;
  title: HeroTitle;
  lines: string[];
  buttons: HeroButtons;
  textUnderStarsLeft: string;
  textUnderStarsRight: string;
  imageUnderTextLeft: string;
  imageUnderTextRight: string;
  videoUrl: string;
  caratulaVideo: string;
}

interface PageData {
  hero: Hero;
}

const pageData: Record<string, PageData> = {
  "software-abogados-mk": {
    hero: {
      logo: "/src/assets/logo_Mn_aniversario.svg",
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
      imageUnderTextLeft: "/src/assets/logo-MN-25-peq.png",
      imageUnderTextRight: "/src/assets/logoGoogle.png",
      videoUrl: "https://www.youtube.com/watch?v=rZ1Hoi8rrLo",
      caratulaVideo: "/src/assets/caratulas/Abogados.webp",
    },
  },
  // Agrega más páginas aquí si es necesario...
};

export default pageData;
