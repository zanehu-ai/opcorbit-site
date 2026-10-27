export const site = {
  origin: "https://www.opcorbit.com",
  title: "OpcOrbit — Development, Outbound, Creative & AI Support",
  description: "Frontend development, outbound sales, ad creative, and AI support for your team.",
} as const;

export const offers = {
  dev: {
    slug: "dev",
    nav: "Dev",
    hostname: "dev.opcorbit.com",
    path: "/dev/",
    canonical: `${site.origin}/dev/`,
    title:
      "OpcOrbit Dev — Frontend work shipped as pull requests, for one flat monthly fee.",
    headline: "Frontend work shipped as pull requests, for one flat monthly fee.",
    description:
      "OpcOrbit Dev builds React and Next.js pages, components and features in your own repo, one request at a time. AI engineering agents do the build, and a human reviews and approves every delivery. Pause or cancel any time.",
  },
  outbound: {
    slug: "outbound",
    nav: "Outbound",
    hostname: "outbound.opcorbit.com",
    path: "/outbound/",
    canonical: `${site.origin}/outbound/`,
    title: "OpcOrbit Outbound — Outbound that starts sales conversations, run for you.",
    headline: "Outbound that starts sales conversations, run for you.",
    description:
      "OpcOrbit Outbound researches best-fit prospects, writes personal cold emails and sends them from your own domains and inboxes, within limits you approve, with a human reviewing the work. Interested replies come to you. Month to month, 30 days' notice.",
  },
  creative: {
    slug: "creative",
    nav: "Creative",
    hostname: "creative.opcorbit.com",
    path: "/creative/",
    canonical: `${site.origin}/creative/`,
    title: "OpcOrbit Creative — Fresh ad creatives every week, built from your own product photos.",
    headline: "Fresh ad creatives every week, built from your own product photos.",
    description:
      "A monthly creative service for Shopify brands and agencies already running Meta or TikTok ads. Weekly batches of static ad concepts, sized for each placement, with editable source files you keep.",
    ogImage: {
      url: `${site.origin}/samples/01_meta_feed_1080x1080_painpoint_1600w.webp`,
      width: 1600,
      height: 1600,
      alt: "Demo ad for fictional brand Quillfen: a sage-green insulated bottle with a bamboo cap on a cream background, headline \"Lukewarm water by noon?\"",
    },
  },
  support: {
    slug: "support",
    nav: "Support",
    hostname: "support.opcorbit.com",
    path: "/support/",
    canonical: `${site.origin}/support/`,
    title: "OpcOrbit Support — A support and lead-capture agent, built and run for you.",
    headline: "A support and lead-capture agent, built and run for you.",
    description:
      "OpcOrbit sets up an AI agent on your website chat that answers your common customer questions and captures leads. Every month we tune it, update what it knows and report to you. When a customer needs a person, it hands off to your team.",
  },
} as const;

export type OfferSlug = keyof typeof offers;
export type OfferMeta = (typeof offers)[OfferSlug];

export const offerList = [offers.dev, offers.outbound, offers.creative, offers.support] as const;
