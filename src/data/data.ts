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
    hero: heroData.consulting,
    blog: blogData.consulting,
    reviews: reviewsData.consulting,
    features: features.consulting,
    faqs: faqs.consulting,
  },
  "software-ingenieros-mk": {
    hero: heroData.consulting,
    blog: blogData.consulting,
    reviews: reviewsData.consulting,
    features: features.consulting,
    faqs: faqs.consulting,
  },
  "software-arquitectos-mk": {
    hero: heroData.consulting,
    blog: blogData.consulting,
    reviews: reviewsData.consulting,
    features: features.consulting,
    faqs: faqs.consulting,
  },
};
