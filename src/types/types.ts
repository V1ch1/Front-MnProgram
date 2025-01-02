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

export interface Colectivo {
  tipoDeColectivo: string;
  valorDeColectivo: string;
}

export interface ColectivoData {
  abogados: Colectivo[];
  clinicas: Colectivo[];
  asesorias: Colectivo[];
  consulting: Colectivo[];
  formacion: Colectivo[];
  limpieza: Colectivo[];
  odontologos: Colectivo[];
  procuradores: Colectivo[];
  servicios: Colectivo[];
  ingenieros: Colectivo[];
  arquitectos: Colectivo[];
  entidadesSociales: Colectivo[];
}

export interface PageData {
  hero: HeroData;
  blog: BlogDataData;
  reviews: Review[];
  features: Feature[];
  faqs: Faq[];
  colectivo: Colectivo[];
}

// Tipo para las claves de pageData
export type PageKey =
  | "software-abogados-mk"
  | "software-clinicas-mk"
  | "software-asesorias-mk"
  | "software-consulting-mk"
  | "software-formacion-mk"
  | "software-limpieza-mk"
  | "software-odontologos-mk"
  | "software-procuradores-mk"
  | "software-servicios-mk"
  | "software-ingenieros-mk"
  | "software-arquitectos-mk"
  | "software-entidades-sociales-mk";

export interface DataLayerEvent {
  event: string; // Nombre del evento obligatorio
  [key: string]: string | number | boolean | undefined; // Otras propiedades opcionales
}

export type GtagConfig = {
  [key: string]: string | number | boolean | undefined;
};
