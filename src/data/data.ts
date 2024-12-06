// data.ts
interface Review {
  text1: string;
  image: string;
  text2: string;
}

// Definir la estructura de los datos de la página
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
  reviews: Review[]; // Aquí agregamos las opiniones de cada colectivo
}

// Definir un tipo de índice para permitir claves dinámicas
interface PageDataRecord {
  [key: string]: PageData; // Cualquier clave de tipo string
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
        text1: "Abogado 1",
        image: "/src/assets/logoGoogle.png", // Aquí puedes poner la URL de la imagen
        text2: "Excelente servicio",
      },
      {
        text1: "Abogado 2",
        image: "/src/assets/logoGoogle.png",
        text2: "Muy satisfecho",
      },
      {
        text1: "Abogado 3",
        image: "/src/assets/logoGoogle.png",
        text2: "Recomiendo mucho",
      },
    ],
  },
  // Puedes agregar más páginas aquí si es necesario
};

export default pageData;
