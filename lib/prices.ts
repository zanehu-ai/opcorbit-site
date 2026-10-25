/**
 * Dollar amounts are compiled into the static pages.
 * Preview builds set NEXT_PUBLIC_SHOW_PRICES=true.
 * Any other value, including unset, keeps prices off. That is the production default.
 */
export const showPrices = process.env.NEXT_PUBLIC_SHOW_PRICES === "true";

export type PriceText = {
  priced: string;
  /** Empty string drops the line when prices are off. */
  plain: string;
};

export function priceText(value: PriceText): string | null {
  if (showPrices) return value.priced;
  return value.plain === "" ? null : value.plain;
}

type OfferCopy = import("@/lib/copy/types").OfferCopy;

export type ResolvedOfferCopy = Omit<OfferCopy, "heroSecondary" | "pricingItems" | "finalSecondary"> & {
  heroSecondary: string | null;
  pricingItems: string[];
  finalSecondary: string | null;
  pricesOmitted: boolean;
};

/** Keep dollar amounts out of the client payload when the flag is off. */
export function resolveOfferCopy(copy: OfferCopy): ResolvedOfferCopy {
  let pricesOmitted = false;
  const pricingItems = copy.pricingItems.flatMap((item) => {
    if (typeof item === "string") return [item];
    if (!showPrices && item.priced !== item.plain) pricesOmitted = true;
    const text = priceText(item);
    return text ? [text] : [];
  });
  if (!showPrices && copy.heroSecondary.priced !== copy.heroSecondary.plain) pricesOmitted = true;
  if (!showPrices && copy.finalSecondary.priced !== copy.finalSecondary.plain) pricesOmitted = true;

  return {
    ...copy,
    heroSecondary: priceText(copy.heroSecondary),
    finalSecondary: priceText(copy.finalSecondary),
    pricingItems,
    pricesOmitted,
  };
}
