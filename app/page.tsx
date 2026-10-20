import type { Metadata } from "next";
import { HomeLanding } from "@/components/home-landing";
import { robotsDirective } from "@/lib/indexing";

export const metadata: Metadata = {
  title: "OpcOrbit preview",
  description: "Preview directory for draft OpcOrbit landing pages. Not live.",
  robots: robotsDirective(),
  openGraph: {
    title: "OpcOrbit preview",
    description: "Preview directory for draft OpcOrbit landing pages. Not live.",
    siteName: "OpcOrbit",
    type: "website",
  },
};

export default function HomePage() {
  return <HomeLanding />;
}
