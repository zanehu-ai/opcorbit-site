import { OfferLanding } from "@/components/offer-landing";
import { supportCopy } from "@/lib/copy/support";
import { offerMetadata } from "@/lib/metadata";
import { resolveOfferCopy } from "@/lib/prices";
import { offers } from "@/lib/site";

export const metadata = offerMetadata(offers.support);

export default function SupportPage() {
  return <OfferLanding meta={offers.support} copy={resolveOfferCopy(supportCopy)} />;
}
