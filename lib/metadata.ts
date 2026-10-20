import type { Metadata } from "next";
import type { OfferMeta } from "@/lib/site";

export function offerMetadata(offer: OfferMeta): Metadata {
  const image = "ogImage" in offer ? offer.ogImage : undefined;

  return {
    title: offer.title,
    description: offer.description,
    alternates: { canonical: offer.canonical },
    robots: { index: false, follow: false },
    openGraph: {
      title: offer.title,
      description: offer.description,
      url: offer.canonical,
      siteName: "OpcOrbit",
      type: "website",
      locale: "en_US",
      ...(image ? { images: [image] } : {}),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title: offer.title,
      description: offer.description,
      ...(image ? { images: [image.url] } : {}),
    },
  };
}
