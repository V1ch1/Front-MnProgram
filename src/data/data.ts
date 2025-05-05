// pageData.ts
import { heroData } from "./heroData";
import { blogData } from "./blogData";
import { reviewsData } from "./reviewsData";
import { features } from "./features";
import { faqs } from "./faqs";
import { colectivoData } from "./colectivoData"; // Importamos la data de colectivos
import { PageData, PageKey } from "../types/types"; // Importamos las interfaces adecuadas

export const pageData: Record<PageKey, PageData> = {
  "software-abogados-mk": {
    hero: heroData.abogados,
    blog: blogData.abogados,
    reviews: reviewsData.abogados,
    features: features.abogados,
    faqs: faqs.abogados,
    colectivo: colectivoData.abogados, // Ahora asignamos todo el objeto, sin usar [0]
  },
  "software-abogados-ads-2": {
    hero: heroData.abogados,
    blog: blogData.abogados,
    reviews: reviewsData.abogados,
    features: features.abogados,
    faqs: faqs.abogados,
    colectivo: colectivoData.abogados,
  },
  "software-clinicas-mk": {
    hero: heroData.clinicas,
    blog: blogData.clinicas,
    reviews: reviewsData.clinicas,
    features: features.clinicas,
    faqs: faqs.clinicas,
    colectivo: colectivoData.clinicas, // Asignado el objeto completo
  },
  "software-clinicas-ads-2": {
    hero: heroData.clinicas,
    blog: blogData.clinicas,
    reviews: reviewsData.clinicas,
    features: features.clinicas,
    faqs: faqs.clinicas,
    colectivo: colectivoData.clinicas,
  },

  "software-asesorias-mk": {
    hero: heroData.asesorias,
    blog: blogData.asesorias,
    reviews: reviewsData.asesorias,
    features: features.asesorias,
    faqs: faqs.asesorias,
    colectivo: colectivoData.asesorias, // Asignado el objeto completo
  },
  "software-consulting-mk": {
    hero: heroData.consulting,
    blog: blogData.consulting,
    reviews: reviewsData.consulting,
    features: features.consulting,
    faqs: faqs.consulting,
    colectivo: colectivoData.consulting, // Asignado el objeto completo
  },
  "software-formacion-mk": {
    hero: heroData.formacion,
    blog: blogData.formacion,
    reviews: reviewsData.formacion,
    features: features.formacion,
    faqs: faqs.formacion,
    colectivo: colectivoData.formacion, // Asignado el objeto completo
  },
  "software-limpieza-mk": {
    hero: heroData.limpieza,
    blog: blogData.limpieza,
    reviews: reviewsData.limpieza,
    features: features.limpieza,
    faqs: faqs.limpieza,
    colectivo: colectivoData.limpieza, // Asignado el objeto completo
  },
  "software-odontologos-mk": {
    hero: heroData.odontologos,
    blog: blogData.odontologos,
    reviews: reviewsData.odontologos,
    features: features.odontologos,
    faqs: faqs.odontologos,
    colectivo: colectivoData.odontologos, // Asignado el objeto completo
  },
  "software-odontologos-ads-2": {
    hero: heroData.odontologos,
    blog: blogData.odontologos,
    reviews: reviewsData.odontologos,
    features: features.odontologos,
    faqs: faqs.odontologos,
    colectivo: colectivoData.odontologos,
  },
  "software-procuradores-mk": {
    hero: heroData.procuradores,
    blog: blogData.procuradores,
    reviews: reviewsData.procuradores,
    features: features.procuradores,
    faqs: faqs.procuradores,
    colectivo: colectivoData.procuradores, // Asignado el objeto completo
  },
  "software-servicios-mk": {
    hero: heroData.servicios,
    blog: blogData.servicios,
    reviews: reviewsData.servicios,
    features: features.servicios,
    faqs: faqs.servicios,
    colectivo: colectivoData.servicios, // Asignado el objeto completo
  },
  "software-ingenieros-mk": {
    hero: heroData.ingenieros,
    blog: blogData.ingenieros,
    reviews: reviewsData.ingenieros,
    features: features.ingenieros,
    faqs: faqs.ingenieros,
    colectivo: colectivoData.ingenieros, // Asignado el objeto completo
  },
  "software-arquitectos-mk": {
    hero: heroData.arquitectos,
    blog: blogData.arquitectos,
    reviews: reviewsData.arquitectos,
    features: features.arquitectos,
    faqs: faqs.arquitectos,
    colectivo: colectivoData.arquitectos, // Asignado el objeto completo
  },
  "software-entidades-sociales-mk": {
    hero: heroData.entidades,
    blog: blogData.entidades,
    reviews: reviewsData.entidades,
    features: features.entidades,
    faqs: faqs.entidades,
    colectivo: colectivoData.entidadesSociales, // Asignado el objeto completo
  },
};
