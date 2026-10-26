import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@zanehu-ai/x-ui/dist/theme/styles.css";
import { ThemeShell } from "@/components/theme-shell";
import { robotsDirective } from "@/lib/indexing";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.origin),
  title: {
    default: site.title,
    template: "%s",
  },
  description: site.description,
  applicationName: "OpcOrbit",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/brand/icon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: { url: "/brand/apple-touch-icon.png", sizes: "180x180" },
  },
  robots: robotsDirective(),
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.origin,
    siteName: "OpcOrbit",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeShell>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          {children}
        </ThemeShell>
      </body>
    </html>
  );
}
