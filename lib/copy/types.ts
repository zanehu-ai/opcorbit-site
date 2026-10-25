import type { PriceText } from "@/lib/prices";

export type Faq = {
  question: string;
  answer: string;
};

export type OfferCopy = {
  heroPrimary: string;
  heroSecondary: PriceText;
  benefits: { title: string; body: string }[];
  stepsTitle: string;
  steps: string[];
  panels: { title: string; body: string }[];
  extras?: { title: string; body: string }[];
  pricingTitle: string;
  pricingItems: Array<string | PriceText>;
  faqs: Faq[];
  finalPrimary: string;
  finalSecondary: PriceText;
  contactNote: string;
  footer: string;
  externalLink?: { label: string; href: string };
};
