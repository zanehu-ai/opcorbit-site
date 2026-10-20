import type { OfferCopy } from "@/lib/copy/types";

export const outboundCopy: OfferCopy = {
  heroPrimary: "Book a 20-minute fit call",
  heroSecondary: {
    priced: "Tell us your offer and ideal customer",
    plain: "Tell us your offer and ideal customer",
  },
  benefits: [
    {
      title: "Conversations, not tools",
      body: "You don't buy software or manage a sequencer. We run the campaign and hand interested replies to you.",
    },
    {
      title: "No SDR to hire",
      body: "One monthly retainer instead of recruiting, ramping and managing an in-house SDR.",
    },
    {
      title: "Your domains, your limits",
      body: "Email goes out from your own sending domains and inboxes, never your main business domain, within sending caps you approve. A human reviews the work, and you approve every sequence before launch.",
    },
    {
      title: "Compliant and opt-out-ready",
      body: "Every email carries accurate sender details, a non-misleading subject, your postal address and a plain opt-out. Opt-outs stop all further email right away and go on a suppression list. We never buy lists or use personal data such as patient lists.",
    },
  ],
  stepsTitle: "How it works",
  steps: [
    "Define the target: a short onboarding call about your offer, ideal customer, regions and calendar.",
    "Set up sending: we set up sending domains and inboxes in your name and warm them up before campaigns run. [To confirm: warm-up length, owned by CRO/RevOps] Domain and tool costs are yours, paid at cost. [To confirm: specific tools, owned by CRO/RevOps]",
    "Approve and launch: you approve the sequences and the sending caps. [To confirm: specific caps, owned by CRO/RevOps] Our AI agents research up to 500 contacts a month from public sources, then write and send the emails and follow-ups from your domains, with a human reviewing.",
    "Take the conversations: we triage replies and hand interested prospects to you to book.",
    "Weekly report: contacts researched, emails sent, replies and opt-outs, with real numbers only.",
  ],
  panels: [
    {
      title: "What we won't do",
      body: "Promise meetings or revenue; buy email lists; send from your main domain; blast high volumes; hide or delay opt-outs; contact anyone who has opted out.",
    },
  ],
  pricingTitle: "Pricing: Preview only, prices stay off any live page until Albert approves.",
  pricingItems: [
    {
      priced: "OpcOrbit Outbound monthly retainer: $1,995/month for our first clients",
      plain: "",
    },
    "Includes: ideal-customer definition; up to 500 researched contacts a month; email sequences you approve, sent from your own domains and inboxes within limits you approve, with human review; reply triage handed to you; a weekly report",
    "LinkedIn for client campaigns: [To confirm: whether offered]",
    {
      priced:
        "Setup: $500 one-time, for sending domains and inbox warm-up. You pay domain and tool costs at cost, with no markup.",
      plain:
        "Setup: one-time, for sending domains and inbox warm-up. You pay domain and tool costs at cost, with no markup.",
    },
    "Term: month to month, 30 days' notice. No lock-in.",
    "No meeting or revenue guarantee. We commit to the activity: contacts researched, emails sent and a weekly report.",
    "Paid by PayPal, in USD.",
    "Limited capacity: we take 3 clients at a time.",
  ],
  faqs: [
    {
      question: "Do you guarantee meetings?",
      answer:
        "No. There is no meeting or revenue guarantee. We commit to the activity: contacts researched, emails sent and a weekly report. We're a new service with no client results yet, so we won't promise numbers.",
    },
    {
      question: "How soon do campaigns start?",
      answer:
        "New sending domains need a warm-up period before campaigns run. [To confirm: warm-up length, owned by CRO/RevOps] Results depend on your offer and market.",
    },
    {
      question: "Who writes and sends the messages?",
      answer:
        "Our AI agents research prospects, write the emails and send them from your own domains and inboxes, within sequences and caps you approve. A human reviews the work.",
    },
    {
      question: "How many emails do you send?",
      answer:
        "Only what your approved caps allow. We don't sell volume. [To confirm: specific caps, owned by CRO/RevOps]",
    },
    {
      question: "Do you run LinkedIn outreach for clients?",
      answer: "[To confirm: whether offered]",
    },
    {
      question: "Is cold email legal?",
      answer:
        "In the US, B2B cold email is allowed under CAN-SPAM when every message has accurate sender details, a non-misleading subject, an ad disclosure, a valid postal address and a working opt-out, and opt-outs are honoured. We build all of that in. Other regions: [To confirm: country rules review by General Counsel]",
    },
    {
      question: "Where do the prospect lists come from?",
      answer:
        "Public sources, such as company websites and public professional profiles, matched to the ideal customer you define. [To confirm: data vendors or tools, if any, owned by CRO/RevOps]",
    },
    {
      question: "Will this hurt my main domain?",
      answer:
        "We send from separate sending domains you own, set up and warmed up during onboarding, not your main business domain.",
    },
    {
      question: "Where are you based?",
      answer: "China-based, serving clients async in their time zone.",
    },
  ],
  finalPrimary: "Book a 20-minute fit call",
  finalSecondary: {
    priced: "Tell us your offer and ideal customer",
    plain: "Tell us your offer and ideal customer",
  },
  contactNote: "[To confirm: booking link and intake form]",
  footer:
    "OpcOrbit · outbound.opcorbit.com · Founded by Zane Hu · [To confirm: legal entity and postal address (Albert / General Counsel)]",
};
