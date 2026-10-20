import type { Metadata } from "next";
import { HomeLanding } from "@/components/home-landing";

export const metadata: Metadata = {
  title: "OpcOrbit preview",
  description: "Preview directory for draft OpcOrbit landing pages. Not live.",
  robots: { index: false, follow: false },
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
