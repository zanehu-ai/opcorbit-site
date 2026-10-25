import type { MetadataRoute } from "next";
import { allowIndex } from "@/lib/indexing";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  if (!allowIndex()) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
}
