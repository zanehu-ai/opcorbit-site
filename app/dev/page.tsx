import { OfferLanding } from "@/components/offer-landing";
import { devCopy } from "@/lib/copy/dev";
import { offerMetadata } from "@/lib/metadata";
import { resolveOfferCopy } from "@/lib/prices";
import { offers } from "@/lib/site";

export const metadata = offerMetadata(offers.dev);

export default function DevPage() {
  return <OfferLanding meta={offers.dev} copy={resolveOfferCopy(devCopy)} />;
}
