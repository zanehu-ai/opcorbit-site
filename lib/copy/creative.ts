import type { Faq } from "@/lib/copy/types";

export const demoLabel = "Demo creative — fictional brand";

export const creativeSamplesIntro =
  "Concept samples for Quillfen, a fictional brand. Each image is labelled “Demo creative — fictional brand” and is not client work.";

export type CreativeSample = {
  src: string;
  width: number;
  height: number;
  name: string;
  alt: string;
  headline: string;
  body: string;
  cta: string;
  eyebrow?: string;
  bullets?: string;
};

export const creativeSamples: readonly CreativeSample[] = [
  {
    src: "/samples/01_meta_feed_1080x1080_painpoint_1600w.webp",
    width: 1600,
    height: 1600,
    name: "Meta feed · 1080×1080",
    headline: "Lukewarm water by noon?",
    body: "Double-wall vacuum insulation keeps it cold from your first meeting to your last mile.",
    bullets: "Leak-resistant bamboo cap · Matte powder-coat grip · Fits standard cup holders",
    cta: "Stay cold →",
    alt: "Demo ad for fictional brand Quillfen: a sage-green insulated bottle with a bamboo cap on a cream background, headline \"Lukewarm water by noon?\"",
  },
  {
    src: "/samples/02_story_1080x1920_socialproof_1600w.webp",
    width: 1600,
    height: 2844,
    name: "Story · 1080×1920",
    eyebrow: "MADE FOR THE LONG WAY UP",
    headline: "The bottle you reach for first.",
    body: "One bottle. Trailhead to tailgate.",
    cta: "Find yours →",
    alt: "Demo story ad for fictional brand Quillfen: illustrated sage-green bottle on a mountain overlook at sunset, headline \"The bottle you reach for first.\"",
  },
  {
    src: "/samples/03_tiktok_cover_1080x1920_benefit_1600w.webp",
    width: 1600,
    height: 2844,
    name: "TikTok cover · 1080×1920",
    headline: "Left it in a hot car. Still ice inside.",
    body: "Cold-holding by design: double-wall steel + sealed cap",
    cta: "Watch the test",
    alt: "Demo TikTok cover for fictional brand Quillfen: illustrated sage-green bottle on a car dashboard with ice cubes above it, hook \"Left it in a hot car. Still ice inside.\"",
  },
];

export const creativeWho = [
  "Shopify and DTC brands already running Meta (Facebook, Instagram) or TikTok ads",
  "Paid-social agencies that need extra creative capacity for client accounts",
  "Teams with product photos and brand assets, and one person who can approve work within 2 business days",
];

export const creativeNotAFit = [
  "You have never run ads, or need a one-off campaign",
  "You need filmed UGC, actors or photo shoots",
  "You want someone to run your ad account or guarantee ROAS",
];

export const creativeMonthly = [
  "A new batch of static ad concepts every week",
  "Headline, hook and call to action on every concept, with copy variants",
  "Exact-size exports for your placements (1:1 and 4:5; more sizes after testing)",
  "Editable, layered source files you own",
  "Revision rounds on every batch",
];

export const creativeSteps = [
  "Fit call (15 min, scheduled in your time zone): your products, placements and current creatives.",
  "Paid pilot: a small first batch for one product. Scope and price (USD): TBD from RevOps 10-22.",
  "Monthly plan: weekly batches, month to month. Terms: TBD.",
];

export const creativeNeed =
  "Logo, fonts and colors; product photos; key benefits and the claims you're allowed to make; your placements; and, if you can share it, a weekly export of results per creative so the next batch follows what works.";

export const creativeDont = "Media buying, campaign setup, performance guarantees, filmed UGC, logos or websites.";

export const creativeMade = [
  "A one-person company produces creatives with AI tools and agents. [To confirm: The founder reviews every batch before it's delivered.]",
  "China-based, serving clients async in their time zone.",
  "The samples on this page are labelled “Demo creative — fictional brand”, not client work. We don't have client results to show yet, and we won't make any up.",
];

export const creativeFaqs: Faq[] = [
  {
    question: "Do I keep the files?",
    answer: "Yes, every concept comes with editable source files.",
  },
  {
    question: "Can you do video?",
    answer: "Not yet. We'll offer it only once it passes our own delivery test.",
  },
  {
    question: "Do you need access to my ad account?",
    answer: "No. A weekly results export is enough.",
  },
  {
    question: "Where are you based?",
    answer: "China-based, serving clients async in their time zone.",
  },
  {
    question: "How do I pay?",
    answer: "PayPal, in USD.",
  },
];

/** Bare mailto until Albert picks the address. Do not put a mailbox here. */
export const creativeContactHref = "mailto:";

export const creativeContactCta = "Email us [To confirm]";

export const creativeContactNote = "[To confirm: email address]. Booking link later.";

export const creativeFooter = "OpcOrbit · creative.opcorbit.com · Founded by Zane Hu";
