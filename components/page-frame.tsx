import type { ReactNode } from "react";
import { DraftBanner } from "@/components/draft-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { OfferSlug } from "@/lib/site";
import { isPreviewBuild } from "@/lib/indexing";

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
      {isPreviewBuild() ? <DraftBanner host={host} /> : null}
      <SiteHeader current={current} />
      <main id="main">{children}</main>
      <SiteFooter>{footer}</SiteFooter>
    </>
  );
}
