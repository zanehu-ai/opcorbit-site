import { OfferLanding } from "@/components/offer-landing";
import { outboundCopy } from "@/lib/copy/outbound";
import { offerMetadata } from "@/lib/metadata";
import { resolveOfferCopy } from "@/lib/prices";
import { offers } from "@/lib/site";

export const metadata = offerMetadata(offers.outbound);

export default function OutboundPage() {
  return <OfferLanding meta={offers.outbound} copy={resolveOfferCopy(outboundCopy)} />;
}
