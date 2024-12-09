// src/data/data.ts
import { features } from "./features"; // Importamos las features comunes

interface Review {
  review: string;
  image: string;
  name: string;
  subName: string;
}

interface Feature {
  image: string;
  text: string;
}

interface PageData {
  hero: {
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
  };
  blog: {
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
  };
  reviews: Review[];
  features: string[]; // Lista de claves de las features a utilizar
}

interface PageDataRecord {
  [key: string]: PageData;
}

// Definir los datos con las claves necesarias
const pageData: PageDataRecord = {
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
    blog: {
      leftColumn: {
        image: "/src/assets/Blog/AntonioBarrera.webp",
        title:
          "Antonio Barrera: «En 25 años, MN program nos ha ayudado a crecer como despacho»",
        text: "MN program cumple este año 25 años de vida. Y no hay mejor forma de celebrar este aniversario que compartiéndolo con nuestros clientes. El despacho jerezano Barrera Abogados fue uno de los primeros.",
        button: {
          text: "Accede al blog",
          url: "https://www.mnprogram.com/barrera-abogados-25-anos-mn-program/",
        },
      },
      rightColumn: {
        image: "/src/assets/Blog/AlfredoVillar.webp",
        title:
          "Alfredo Villar: «Durante años fuimos el único business partner de MN program»",
        text: "Villar Abogados y Consultores es un despacho riojano que trabaja con el software de gestión de MN program desde hace casi 20 años y se ha especializado en distintas áreas de práctica.",
        button: {
          text: "Accede al blog",
          url: "https://www.mnprogram.com/villar-abogados-25-anos-mn-program/",
        },
      },
    },
    reviews: [
      {
        review:
          "Un excelente programa de gestión, se adapta a tus necesidades y con un soporte técnico que soluciona rápidamente cualquier incidencia o modificación. Me gusta.",
        image: "/src/assets/logoGoogle.png",
        name: "Pedro Suárez",
        subName: "Abogado",
      },
      {
        review:
          "Hacen un esfuerzo por mejorar el programa cada vez más, siendo ya muy bueno el nivel del mismo.",
        image: "/src/assets/logoGoogle.png",
        name: "Ezequiel Alcalde",
        subName: "Abogado",
      },
      {
        review:
          "He recibido un trato excelente tanto del departamento comercial como técnico, con una solución a la medida de mis necesidades. Muchas gracias!!",
        image: "/src/assets/logoGoogle.png",
        name: "Quality Consultores",
        subName: "Servicios Jurídicos y de Consultoría",
      },
      {
        review:
          "Extraordinario!!! Una formación a medida y sólo para mi, impartida con mucha paciencia y mucha amabilidad. Perfecto.",
        image: "/src/assets/logoGoogle.png",
        name: "Rivas Clemente Abogados ",
        subName: "Abogados",
      },
      {
        review:
          "El programa me permite llevar un control total de mis expedientes y me avisa de todos los plazos",
        image: "/src/assets/logoGoogle.png",
        name: "Ana Juncal",
        subName: "Abogada",
      },
    ],
    features: ["expedientes", "proyectos"],
  },
  "software-clinicas-mk": {
    hero: {
      logo: "/src/assets/logo_Mn_clinicas.svg",
      title: {
        text1: "El software de gestión para clínicas",
        highlightedText: "N°1 en ventas",
        text2: "desde 1€ al día",
      },
      lines: [
        "+ de <strong>5.000</strong> clínicas lo utilizan diariamente.",
        "+ de <strong>20.000</strong> profesionales confían en MN program.",
        "+ de <strong>98%</strong> de opiniones positivas.",
      ],
      buttons: {
        video: "Ver vídeo",
        price: "Ver precios",
      },
      textUnderStarsLeft: "4,9 estrellas en",
      textUnderStarsRight: "4,9 estrellas en",
      imageUnderTextLeft: "/src/assets/logo-MN-25-peq.png",
      imageUnderTextRight: "/src/assets/logoGoogle.png",
      videoUrl: "https://www.youtube.com/watch?v=rZ1Hoi8rrLo",
      caratulaVideo: "/src/assets/caratulas/Clinicas.webp",
    },
    blog: {
      leftColumn: {
        image: "/src/assets/Blog/ClinicaABC.webp",
        title: "Clinica ABC: «Nuestro software de gestión»",
        text: "En este post, hablamos sobre cómo nuestro software de gestión ha transformado el día a día en la clínica ABC.",
        button: {
          text: "Accede al blog",
          url: "https://www.mnprogram.com/clinica-abc-software-gestion/",
        },
      },
      rightColumn: {
        image: "/src/assets/Blog/ClinicaXYZ.webp",
        title: "Clinica XYZ: «Cómo mejorar la atención con tecnología»",
        text: "En este artículo, analizamos cómo la tecnología puede mejorar los servicios de atención médica en las clínicas.",
        button: {
          text: "Accede al blog",
          url: "https://www.mnprogram.com/clinica-xyz-tecnologia-atencion/",
        },
      },
    },
    reviews: [
      /* ... */
    ],
    features: ["facturacion", "gestionDocumental"], // Referencia a las keys de las features que se deben usar
  },
};

export default pageData;
