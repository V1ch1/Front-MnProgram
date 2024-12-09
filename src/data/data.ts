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
};
