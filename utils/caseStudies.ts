import { StaticImageData } from "next/image";

import NikeCaseStudy from "@/app/case-study/NikeCaseStudy";
import NikeLogo from "@/public/images/NikeLogoFancy.png";
import PrismicLogo from "@/public/images/PrismicLogoFancy.png";

export type TCaseStudy = {
  company: string;
  description: string;
  logo_image: StaticImageData;
  meta_description: string;
  meta_image?: string;
  meta_title: string;
  article?: React.FC;
};

export const caseStudies: TCaseStudy[] = [
  {
    company: "nike",
    description:
      "Designers at the legendary sports wear brand used Glisten to completely redesign their basketball sneakers.",
    logo_image: NikeLogo,
    meta_description: "Nike Case Study from Glisten.ai",
    meta_title: "Nike",
    article: NikeCaseStudy,
  },
  {
    company: "prismic",
    description:
      "The headless page builder used Glisten to change the way websites are made, unlocking potential for their users.",
    logo_image: PrismicLogo,
    meta_description: "Prismic Case Study from Glisten.ai",
    meta_title: "Prismic",
  },
];
