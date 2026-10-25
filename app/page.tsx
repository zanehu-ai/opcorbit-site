import type { Metadata } from "next";
import { HomeLanding } from "@/components/home-landing";
import { robotsDirective } from "@/lib/indexing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  alternates: { canonical: `${site.origin}/` },
  robots: robotsDirective(),
  openGraph: {
    title: site.title,
    description: site.description,
    url: `${site.origin}/`,
    siteName: "OpcOrbit",
    type: "website",
  },
};

export default function HomePage() {
  return <HomeLanding />;
}
