import type { OfferCopy } from "@/lib/copy/types";

export const devCopy: OfferCopy = {
  heroPrimary: "Book an intro call",
  heroSecondary: {
    priced: "Start a paid week ($500)",
    plain: "Start a paid week",
  },
  benefits: [
    {
      title: "One price, no quotes",
      body: "One flat monthly fee covers your frontend queue. No hourly billing, no per-feature estimates, no developer to hire.",
    },
    {
      title: "Your repo, your code",
      body: "Every request lands as a pull request on a branch in your repo, with a preview link and tests for the code we deliver. x-ui components can be vendored straight into your codebase, so there's no package to install. Once the month is paid, the code is yours.",
    },
    {
      title: "Reviewed before you see it",
      body: "Each request is tested against written acceptance criteria, code-reviewed for security and reuse, and approved by a human before it reaches you. You never get unreviewed AI output.",
    },
    {
      title: "Async, in your time zone",
      body: "OpcOrbit is China-based and serves clients async, in their time zone. Requests live on a shared board, and work arrives as PRs during your working day.",
    },
  ],
  stepsTitle: "How it works",
  steps: [
    "Request: add a page, component, form, dashboard or bug fix to the shared board. We agree on acceptance criteria with you before work starts.",
    "Build and review: AI engineering agents build it on a branch in your repo. QA tests it, it gets a code review, and a human approves it. Typical target: 2–3 business days per request. This is a target, not a guarantee.",
    "Merge: you get a PR with a preview link. You merge and deploy on your own hosting, and the next request in your queue starts.",
  ],
  panels: [
    {
      title: "What's included",
      body: "React and Next.js frontend work: pages, components, forms, dashboards, theming, bug fixes, simple API wiring to your existing backend, tests for delivered code, and a PR with a preview link for every request.",
    },
    {
      title: "Not included",
      body: "Native mobile; heavy backend or infrastructure; data migrations; payment or security-critical systems without a separate review; design from scratch (we work from your Figma or references); 24/7 on-call; hosting and third-party licence costs.",
    },
  ],
  pricingTitle: "Pricing: Pending Albert's approval",
  pricingItems: [
    {
      priced: "OpcOrbit Dev monthly plan: $2,495/month, USD",
      plain: "",
    },
    "1 active request at a time. Add as many requests to your queue as you like; fair use applies. [To confirm: fair-use wording]",
    {
      priced:
        "Paid first week: $500, credited to month 1 if you continue. This is a paid week, not a refund trial.",
      plain:
        "Paid first week, credited to month 1 if you continue. This is a paid week, not a refund trial.",
    },
    "No setup fee for our first 2 clients.",
    "Billed monthly by PayPal invoice or subscription, in USD.",
    "Pause or cancel any time. A pause freezes your billing cycle; unused days don't roll over.",
    "Limited capacity: we take 2 clients at a time.",
  ],
  faqs: [
    {
      question: "What counts as one request?",
      answer:
        "One small-to-medium piece of work: a page, a component, a form, a dashboard view or a bug fix. Bigger work is split into several requests in your queue.",
    },
    {
      question: "How fast is a request done?",
      answer:
        "Our typical target is 2–3 business days per request. It's a target, not a guarantee; size and feedback time change it.",
    },
    {
      question: "Who does the work?",
      answer:
        "AI engineering agents write the code. Every request goes through QA, a code review and a human approval before you see it.",
    },
    {
      question: "Do I have to use x-ui?",
      answer:
        "No. We work in your existing React or Next.js stack and design system. x-ui is how we move faster, and we only add its components if you agree. Out of scope: non-React frameworks (Vue, Angular), native mobile apps, and backend-heavy work.",
    },
    {
      question: "What access do you need?",
      answer:
        "Branch and pull-request access to one repo, through a dedicated bot account or GitHub App you invite. No admin rights, no production access, no secrets. You keep branch protection and remove access when you cancel. Access starts only after a signed agreement and the first payment.",
    },
    {
      question: "Who owns the code?",
      answer:
        "You do, once that month is paid. Vendored x-ui code stays under its MIT licence. Full terms: [To confirm: contract terms from General Counsel]",
    },
    {
      question: "Can agencies white-label your work?",
      answer: "Not yet. Agency terms are still being written.",
    },
    {
      question: "Do you have case studies?",
      answer: "Not yet. We're new, and we won't show results we don't have.",
    },
    {
      question: "Where are you based?",
      answer: "China-based, serving clients async in their time zone.",
    },
    {
      question: "Can I pause or cancel?",
      answer: "Yes, any time. A pause freezes your billing cycle; unused days don't roll over.",
    },
  ],
  finalPrimary: "Book an intro call",
  finalSecondary: {
    priced: "Start a paid week ($500, credited to month 1; pricing pending Albert's approval)",
    plain: "Start a paid week (credited to month 1; pricing pending Albert's approval)",
  },
  contactNote: "[To confirm: booking link or form]",
  footer:
    "OpcOrbit · dev.opcorbit.com · Founded by Zane Hu · [To confirm: legal entity and postal address (Albert / General Counsel)]",
  externalLink: { label: "See x-ui", href: "https://ui.opcorbit.com" },
};
