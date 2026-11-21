import type { Metadata } from "next";
import Link from "next/link";
import { PricingSection } from "@/components/pricing-section";
import { comparisonRows, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent USD SaaS subscription pricing for OpcOrbit Cloud: Starter ($29/mo), Pro ($99/mo), and Business ($299/mo). 14-day money-back guarantee.",
  alternates: {
    canonical: `${site.origin}/pricing/`,
  },
};

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-zinc-200 bg-zinc-50/70">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Pricing &amp; Plans
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            Predictable SaaS pricing for every stage
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
            Choose the workspace capacity your team needs. All paid subscriptions are billed in USD
            by {site.legalEntity}, include a 14-day free trial, and carry a 14-day full refund
            guarantee.
          </p>
        </div>
      </section>

      <PricingSection headingAs="h2" showHeader={false} />

      <section className="border-t border-zinc-200 bg-zinc-50/60">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
            Plan comparison
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            All plans include TLS encryption, immutable execution logs, and email support.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-zinc-200 bg-white">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-50 text-xs font-semibold uppercase tracking-wider text-zinc-600">
                  <th className="px-5 py-3.5">Capability</th>
                  <th className="px-5 py-3.5">Starter ($29/mo)</th>
                  <th className="px-5 py-3.5">Pro ($99/mo)</th>
                  <th className="px-5 py-3.5">Business ($299/mo)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-zinc-50/60">
                    <td className="px-5 py-3.5 font-medium text-zinc-950">{row.feature}</td>
                    <td className="px-5 py-3.5 text-zinc-600">{row.starter}</td>
                    <td className="px-5 py-3.5 text-zinc-900">{row.pro}</td>
                    <td className="px-5 py-3.5 text-zinc-600">{row.business}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-sm font-semibold text-zinc-950">Recurring Billing &amp; Taxes</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Monthly plans renew every 30 days and annual plans renew every 12 months until
                canceled. Applicable sales tax or VAT is displayed before checkout confirmation.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-sm font-semibold text-zinc-950">14-Day Refund Guarantee</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Not the right fit? Request a full refund within 14 days of your initial charge by
                emailing{" "}
                <a href={`mailto:${site.supportEmail}`} className="font-medium text-zinc-950 underline">
                  {site.supportEmail}
                </a>
                . Read our{" "}
                <Link href="/refund/" className="font-medium text-zinc-950 underline">
                  Refund Policy
                </Link>
                .
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-sm font-semibold text-zinc-950">Card Statement Descriptor</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Charges processed via Stripe appear on your credit card or bank statement as{" "}
                <span className="font-mono font-medium text-zinc-950">{site.statementDescriptor}</span>
                , billed by {site.legalEntity}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
