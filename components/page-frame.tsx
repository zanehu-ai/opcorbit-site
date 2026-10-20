import type { ReactNode } from "react";
import { DraftBanner } from "@/components/draft-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { OfferSlug } from "@/lib/site";

export function PageFrame({
  current,
  host,
  footer,
  children,
}: {
  current?: OfferSlug;
  host?: string;
  footer: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <DraftBanner host={host} />
      <SiteHeader current={current} />
      <main id="main">{children}</main>
      <SiteFooter>{footer}</SiteFooter>
    </>
  );
}
