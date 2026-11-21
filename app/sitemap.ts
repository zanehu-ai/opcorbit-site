import type { MetadataRoute } from "next";
import { publicRoutes, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: `${site.origin}${route}`,
    changeFrequency: route === "/" || route === "/pricing/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/pricing/" ? 0.9 : 0.7,
  }));
}
