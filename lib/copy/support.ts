import type { OfferCopy } from "@/lib/copy/types";

export const supportCopy: OfferCopy = {
  heroPrimary: "Book a 20-minute fit call",
  heroSecondary: {
    priced: "Tell us about your business",
    plain: "Tell us about your business",
  },
  benefits: [
    {
      title: "Done for you, every month",
      body: "We build the agent, run it, and keep improving it. You don't configure software or maintain a help-desk add-on. The monthly fee covers tuning, knowledge updates and a report.",
    },
    {
      title: "Your answers, from your own information",
      body: "The agent answers from what you give us: hours, location, services, published prices, policies and FAQs. When it doesn't have an answer, it doesn't guess. It passes the conversation to your team.",
    },
    {
      title: "A clear hand-off to your people",
      body: "Any customer who asks for a person, or has a question the agent can't answer, is handed to your staff with the conversation so far.",
    },
    {
      title: "Leads captured, not lost",
      body: "When a visitor wants a quote, a booking or a callback, the agent collects only the contact details you need and sends them to you.",
    },
  ],
  stepsTitle: "How it works",
  steps: [
    "Fit call: your business, your customers' most common questions, and where they reach you.",
    "Build: you share your FAQs, policies and published information. We build and test the agent, and you review its answers before it goes live.",
    "Go live: the agent appears on your website chat and introduces itself as an AI assistant.",
    "Every month: we review conversations, update the agent's knowledge, tune its answers and send you a report with real numbers only.",
  ],
  panels: [],
  extras: [
    {
      title: "For health practices: the no-patient-data version",
      body: "For dental, chiropractic, med-spa and similar practices, we offer a version that takes no patient data. It handles scheduling requests and general questions only (hours, location, services, published prices) and asks visitors not to enter medical details. It doesn't ask about symptoms, the reason for the visit or insurance, and hands requests to your own staff and systems.",
    },
  ],
  pricingTitle: "Pricing",
  pricingItems: [
    "Includes: building the agent, monthly tuning, knowledge updates, hand-off to your team, and a monthly report",
    "Pricing details will be published once confirmed.",
  ],
  faqs: [
    {
      question: "Will it replace my staff?",
      answer:
        "No. It handles common questions and captures leads, and it hands anything else to your team.",
    },
    {
      question: "What happens when it doesn't know the answer?",
      answer: "It says so and hands the conversation to a person on your team. It doesn't make answers up.",
    },
    {
      question: "What does it know?",
      answer:
        "Only what you give us and approve: your hours, services, published prices, policies and FAQs. We update it every month, or sooner when something changes.",
    },
    {
      question: "Which channels does it work on?",
      answer: "Your website chat.",
    },
    {
      question: "Which languages?",
      answer: "Not yet. We won't name a language on this page.",
    },
    {
      question: "When is it available?",
      answer: "Not yet. We don't promise hours or round-the-clock coverage.",
    },
    {
      question: "Is it clear to customers that it's an AI?",
      answer: "Yes. It introduces itself as an AI assistant.",
    },
    {
      question: "Who is it for?",
      answer: "Small businesses and cross-border sellers that answer the same questions all day.",
    },
    {
      question: "What happens to my customers' data?",
      answer:
        "The agent collects only the contact details you ask it to collect, and it answers from the business information you approve. We don't publish storage, retention, or access.",
    },
    {
      question: "Do you work with health practices?",
      answer: "Yes, with the no-patient-data version above. It takes no medical details.",
    },
    {
      question: "Do you have case studies or results?",
      answer: "Not yet. We're new, and we won't show numbers we don't have.",
    },
    {
      question: "Where are you based?",
      answer: "China-based, serving clients async in their time zone.",
    },
  ],
  finalPrimary: "Book a 20-minute fit call",
  finalSecondary: {
    priced: "Tell us about your business",
    plain: "Tell us about your business",
  },
  contactNote: "Soft contact only until Stripe — reply on X or use #contact. No paid week / live prices.",
  footer: "OpcOrbit WY LLC · Support · Founded by Zane Hu",
};
