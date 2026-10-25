import { CreativeLanding } from "@/components/creative-landing";
import { offerMetadata } from "@/lib/metadata";
import { offers } from "@/lib/site";

export const metadata = offerMetadata(offers.creative);

export default function CreativePage() {
  return <CreativeLanding />;
}
