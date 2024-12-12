export interface Review {
  review: string;
  image: string;
  name: string;
  subName: string;
}

export interface Feature {
  image: string;
  text: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface HeroData {
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

// types.ts
export interface BlogDataData {
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

export interface BlogData {
  [key: string]: BlogDataData;
}

export interface PageData {
  hero: HeroData;
  blog: BlogDataData;
  reviews: Review[];
  features: Feature[];
  faqs: Faq[];
}

// Tipo para las claves de pageData
export type PageKey =
  | "software-abogados-mk"
  | "software-clinicas-mk"
  | "software-asesorias-mk"
  | "software-consulting-mk";
