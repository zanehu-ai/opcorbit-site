export const site = {
  brandName: "OpcOrbit",
  productName: "OpcOrbit Cloud",
  legalEntity: "OpcOrbit LLC",
  registeredAddress: "30 N Gould St Ste R, Sheridan, WY 82801, United States",
  shortAddress: "30 N Gould St Ste R, Sheridan, WY 82801",
  supportEmail: "support@opcorbit.com",
  statementDescriptor: "OPCORBIT",
  origin: "https://www.opcorbit.com",
  effectiveDate: "November 21, 2026",
  jurisdiction: "State of Wyoming, United States",
  title: "OpcOrbit Cloud — Workflow Automation & Release Verification SaaS",
  description:
    "Cloud workflow automation, approval controls, and release verification software for modern software and operations teams. Operated by OpcOrbit LLC.",
} as const;

export type PlanId = "starter" | "pro" | "business";

export type PricingPlan = {
  id: PlanId;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualMonthlyPrice: number;
  annualTotal: number;
  popular?: boolean;
  ctaLabel: string;
  features: readonly string[];
};

export const pricingPlans: readonly PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For solo builders and small product teams automating release checks.",
    monthlyPrice: 29,
    annualMonthlyPrice: 24,
    annualTotal: 288,
    ctaLabel: "Start 14-day trial",
    features: [
      "1 cloud workspace",
      "Up to 3 team members",
      "Standard workflow automation templates",
      "30-day immutable audit log retention",
      "Email support (1 business day response)",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "For growing engineering and ops teams needing approval gates and API access.",
    monthlyPrice: 99,
    annualMonthlyPrice: 79,
    annualTotal: 948,
    popular: true,
    ctaLabel: "Start 14-day trial",
    features: [
      "Unlimited automated workflows",
      "Up to 15 team members",
      "REST API & signed webhook integrations",
      "1-year immutable audit log retention",
      "Priority email support & billing assistance",
    ],
  },
  {
    id: "business",
    name: "Business",
    tagline: "For multi-team organizations with strict security and governance controls.",
    monthlyPrice: 299,
    annualMonthlyPrice: 249,
    annualTotal: 2988,
    ctaLabel: "Start 14-day trial",
    features: [
      "Unlimited workspaces & team seats",
      "SAML SSO & granular role-based access (RBAC)",
      "Custom audit log retention & JSON/CSV export",
      "Dedicated onboarding & SLA support",
      "Consolidated annual invoicing available",
    ],
  },
] as const;

export type ComparisonRow = {
  feature: string;
  starter: string;
  pro: string;
  business: string;
};

export const comparisonRows: readonly ComparisonRow[] = [
  {
    feature: "Cloud workspaces",
    starter: "1 workspace",
    pro: "Up to 5 workspaces",
    business: "Unlimited workspaces",
  },
  {
    feature: "Included team seats",
    starter: "Up to 3 seats",
    pro: "Up to 15 seats",
    business: "Unlimited seats",
  },
  {
    feature: "Automated release checks",
    starter: "Up to 1,000 runs / mo",
    pro: "Up to 25,000 runs / mo",
    business: "Unlimited runs",
  },
  {
    feature: "Multi-stage approval gates",
    starter: "Single reviewer",
    pro: "Multi-reviewer rules",
    business: "Policy-enforced RBAC",
  },
  {
    feature: "Audit log retention",
    starter: "30 days",
    pro: "1 year",
    business: "Custom retention + export",
  },
  {
    feature: "REST API & Webhooks",
    starter: "Read-only status",
    pro: "Full API & signed webhooks",
    business: "Dedicated rate limits & SLA",
  },
  {
    feature: "Authentication & SSO",
    starter: "Email & OAuth2",
    pro: "Email, OAuth2 & 2FA",
    business: "SAML 2.0 SSO & SCIM",
  },
  {
    feature: "Support & refund guarantee",
    starter: "Email (14-day refund)",
    pro: "Priority email (14-day refund)",
    business: "Dedicated SLA (14-day refund)",
  },
] as const;

export const billingFaqs = [
  {
    question: "What does OpcOrbit Cloud provide?",
    answer:
      "OpcOrbit Cloud is a self-serve Software-as-a-Service (SaaS) platform developed and operated by OpcOrbit LLC. Teams subscribe to cloud workspaces to configure automated workflow checks, structured human approval gates, release readiness verification, and immutable audit trails.",
  },
  {
    question: "How are subscriptions billed and what appears on my card statement?",
    answer:
      "Subscriptions are billed in USD on a recurring monthly or annual cycle processed securely by Stripe. OpcOrbit LLC never stores raw payment card numbers or CVV codes. Your bank or card statement displays the billing descriptor OPCORBIT.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes. You can cancel your subscription at any time by contacting support@opcorbit.com or from your workspace billing settings. When you cancel, your paid access remains active through the end of the current billing period and no further renewal charges are made.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "Every new paid subscription includes a 14-day unconditional full refund guarantee from the initial charge date. Duplicate charges or verified billing errors are refunded 100% upon review. Approved refunds are submitted to the original payment method and typically appear within 5 to 10 business days. See our full Refund Policy for details.",
  },
  {
    question: "Does OpcOrbit act as a payment intermediary or handle third-party funds?",
    answer:
      "No. OpcOrbit LLC exclusively licenses and sells subscriptions to its own proprietary cloud SaaS software. OpcOrbit does not provide money transmission, third-party payment collection, funds custody, marketplace settlement, or physical fulfillment services, and does not serve embargoed or sanctioned jurisdictions under applicable U.S. OFAC regulations.",
  },
] as const;

export const publicRoutes = [
  "/",
  "/pricing/",
  "/contact/",
  "/terms/",
  "/privacy/",
  "/refund/",
] as const;
