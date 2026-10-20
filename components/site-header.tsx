import Link from "next/link";
import { AppearanceControl } from "@/components/appearance-control";
import { offerList, type OfferSlug } from "@/lib/site";

export function SiteHeader({ current }: { current?: OfferSlug }) {
  return (
    <header className="border-b border-[color:var(--x-ui-border)]">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-4 gap-y-3 px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          OpcOrbit
        </Link>
        <nav aria-label="Offers" className="flex flex-wrap items-center gap-1">
          {offerList.map((offer) => {
            const active = current === offer.slug;
            return (
              <Link
                key={offer.slug}
                href={offer.path}
                aria-current={active ? "page" : undefined}
                className={`inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium ${
                  active
                    ? "bg-[var(--x-ui-muted)] text-[color:var(--x-ui-fg)]"
                    : "text-[color:var(--x-ui-muted-fg)] hover:text-[color:var(--x-ui-fg)]"
                }`}
              >
                {offer.nav}
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto">
          <AppearanceControl />
        </div>
      </div>
    </header>
  );
}
