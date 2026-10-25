import type { MetadataRoute } from "next";
import { offerList, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.origin}/`, changeFrequency: "monthly", priority: 1 },
    ...offerList.map((offer): MetadataRoute.Sitemap[number] => ({
      url: offer.canonical,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
