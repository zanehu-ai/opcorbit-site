"use client";

import Link from "next/link";
import { TopNavigation, type NavigationLinkProps } from "@zanehu-ai/x-ui";
import { AppearanceControl } from "@/components/appearance-control";
import { offerList, type OfferSlug } from "@/lib/site";

function OfferLink({ to, className, children, "aria-current": current }: NavigationLinkProps) {
  return (
    <Link href={to} className={className} aria-current={current}>
      {children}
    </Link>
  );
}

export function SiteHeader({ current }: { current?: OfferSlug }) {
  return (
    <header className="border-b border-[color:var(--x-ui-border)]">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-4 gap-y-3 px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          OpcOrbit
        </Link>
        <TopNavigation
          activeId={current}
          ariaLabel="Offers"
          items={offerList.map((offer) => ({
            id: offer.slug,
            label: offer.nav,
            to: offer.path,
          }))}
          LinkComponent={OfferLink}
        />
        <div className="ml-auto">
          <AppearanceControl />
        </div>
      </div>
    </header>
  );
}
