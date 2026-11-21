import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck2, KeyRound, Layers, ShieldCheck, Webhook } from "lucide-react";
import { PricingSection } from "@/components/pricing-section";
import { ProductPreview } from "@/components/product-preview";
import { billingFaqs, site } from "@/lib/site";

const capabilities = [
  {
    icon: Layers,
    title: "Multi-Workspace Governance & RBAC",
    description:
      "Organize engineering and operations teams into isolated cloud workspaces with role-based permissions, audit scoping, and team seat controls.",
  },
  {
    icon: ShieldCheck,
    title: "Structured Approval Gates",
    description:
      "Enforce peer sign-off and automated policy checks before any software deployment, configuration update, or production workflow runs.",
  },
  {
    icon: FileCheck2,
    title: "Immutable Release Verification",
    description:
      "Capture SHA-256 attested verification records for every release run, giving your engineering and compliance leads searchable audit trails.",
  },
  {
    icon: Webhook,
    title: "REST API & Signed Webhooks",
    description:
      "Connect GitHub Actions, CI pipelines, and internal service monitors with signed webhooks and structured JSON verification endpoints.",
  },
] as const;

const workflowSteps = [
  {
    step: "01",
    title: "Create your cloud workspace",
    description:
      "Choose Starter, Pro, or Business and provision an isolated workspace with team roles and API credentials in minutes.",
  },
  {
    step: "02",
    title: "Connect CI pipelines & approval rules",
    description:
      "Send build checks and release manifests via REST API or webhooks, and define who must review high-impact changes.",
  },
  {
    step: "03",
    title: "Verify every release with confidence",
    description:
      "Approve verified runs from one dashboard while OpcOrbit Cloud maintains tamper-evident logs and instant status alerts.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="border-b border-zinc-200 bg-gradient-to-b from-zinc-50/80 to-white">
        <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1 text-xs font-medium text-zinc-700 shadow-2xs">
              <KeyRound className="h-3.5 w-3.5 text-zinc-900" aria-hidden="true" />
              <span>Self-Serve Cloud SaaS · Operated by {site.legalEntity}</span>
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
              Workflow automation &amp; release verification for modern teams
            </h1>
            <p className="mt-6 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              OpcOrbit Cloud helps software and operations teams standardize approval gates, verify
              production releases, and retain immutable audit records in one lightweight workspace.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact/?plan=pro"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 sm:w-auto"
              >
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/pricing/"
                className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-zinc-300 bg-white px-6 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 sm:w-auto"
              >
                View Pricing ($29 – $299/mo)
              </Link>
            </div>
            <p className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-zinc-500">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                Transparent USD subscriptions
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                Cancel anytime online
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                14-day money-back guarantee
              </span>
            </p>
          </div>

          <div className="mt-12 sm:mt-16">
            <ProductPreview />
          </div>
        </div>
      </section>

      <section id="product" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Core Capabilities
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Built for reliable software delivery and operational governance
          </h2>
          <p className="mt-3 text-base leading-7 text-zinc-600">
            Every workspace includes automated workflow templates, verification receipts, and clean API
            integration without heavyweight enterprise bloat.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-950">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50/70">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              How It Works
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              From sign-up to verified releases in three steps
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {workflowSteps.map((item) => (
              <div key={item.step} className="rounded-2xl border border-zinc-200 bg-white p-6">
                <span className="font-mono text-xs font-semibold text-zinc-500">STEP {item.step}</span>
                <h3 className="mt-2 text-lg font-semibold text-zinc-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingSection headingAs="h2" />

      <section className="border-t border-zinc-200 bg-zinc-50/70">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Billing &amp; Compliance FAQ
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Clear terms before you subscribe
            </h2>
          </div>

          <dl className="mt-10 grid gap-6 md:grid-cols-2">
            {billingFaqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-zinc-200 bg-white p-6">
                <dt className="text-base font-semibold text-zinc-950">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-6 text-zinc-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-zinc-200 bg-zinc-950 p-8 text-white sm:flex-row sm:items-center">
            <div className="max-w-xl">
              <h3 className="text-2xl font-semibold tracking-tight">
                Ready to standardize your team&apos;s release workflows?
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                Start a 14-day free trial or reach our Wyoming-based SaaS support team at{" "}
                <a href={`mailto:${site.supportEmail}`} className="underline underline-offset-4">
                  {site.supportEmail}
                </a>
                .
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                href="/contact/?plan=pro"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-100"
              >
                Request Trial Access
              </Link>
              <Link
                href="/refund/"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-zinc-700 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-900"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
