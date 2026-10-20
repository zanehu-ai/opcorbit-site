import type { MetadataRoute } from "next";
import { offerList } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return offerList.map((offer) => ({
    url: offer.canonical,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
}
