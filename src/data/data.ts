// pageData.ts
import { heroData } from "./heroData";
import { blogData } from "./blogData";
import { reviewsData } from "./reviewsData";
import { features } from "./features";
import { faqs } from "./faqs";
import { PageData, PageKey } from "../types/types"; // Importamos las interfaces adecuadas

export const pageData: Record<PageKey, PageData> = {
  "software-abogados-mk": {
    hero: heroData.abogados,
    blog: blogData.abogados,
    reviews: reviewsData.abogados,
    features: features.abogados,
    faqs: faqs.abogados,
  },
  "software-clinicas-mk": {
    hero: heroData.clinicas,
    blog: blogData.clinicas,
    reviews: reviewsData.clinicas,
    features: features.clinicas,
    faqs: faqs.clinicas,
  },
  "software-asesorias-mk": {
    hero: heroData.asesorias,
    blog: blogData.asesorias,
    reviews: reviewsData.asesorias,
    features: features.asesorias,
    faqs: faqs.asesorias,
  },
  "software-consulting-mk": {
    hero: heroData.consulting,
    blog: blogData.consulting,
    reviews: reviewsData.consulting,
    features: features.consulting,
    faqs: faqs.consulting,
  },
  "software-formacion-mk": {
    hero: heroData.formacion,
    blog: blogData.formacion,
    reviews: reviewsData.formacion,
    features: features.formacion,
    faqs: faqs.formacion,
  },
  "software-limpieza-mk": {
    hero: heroData.limpieza,
    blog: blogData.limpieza,
    reviews: reviewsData.limpieza,
    features: features.limpieza,
    faqs: faqs.limpieza,
  },
  "software-odontologos-mk": {
    hero: heroData.consulting,
    blog: blogData.consulting,
    reviews: reviewsData.consulting,
    features: features.consulting,
    faqs: faqs.consulting,
  },
  "software-procuradores-mk": {
    hero: heroData.consulting,
    blog: blogData.consulting,
    reviews: reviewsData.consulting,
    features: features.consulting,
    faqs: faqs.consulting,
  },
  "software-servicios-mk": {
    hero: heroData.servicios,
    blog: blogData.servicios,
    reviews: reviewsData.servicios,
    features: features.servicios,
    faqs: faqs.servicios,
  },
  "software-ingenieros-mk": {
    hero: heroData.ingenieros,
    blog: blogData.ingenieros,
    reviews: reviewsData.ingenieros,
    features: features.ingenieros,
    faqs: faqs.ingenieros,
  },
  "software-arquitectos-mk": {
    hero: heroData.arquitectos,
    blog: blogData.arquitectos,
    reviews: reviewsData.arquitectos,
    features: features.arquitectos,
    faqs: faqs.arquitectos,
  },
};
