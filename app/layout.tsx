import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@zanehu-ai/x-ui/dist/theme/styles.css";
import { ThemeShell } from "@/components/theme-shell";
import { robotsDirective } from "@/lib/indexing";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "OpcOrbit preview",
    template: "%s",
  },
  description: "Preview-only OpcOrbit landing pages. Not live.",
  applicationName: "OpcOrbit",
  robots: robotsDirective(),
  openGraph: {
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
