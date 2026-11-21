"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { useState } from "react";
import { pricingPlans, site } from "@/lib/site";

export function PricingSection({
  headingAs = "h2",
  showHeader = true,
}: {
  headingAs?: "h1" | "h2";
  showHeader?: boolean;
}) {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const Heading = headingAs;

  return (
    <section id="pricing" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        {showHeader ? (
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Transparent SaaS Pricing
            </p>
            <Heading className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Simple, predictable plans in USD
            </Heading>
            <p className="mt-3 text-base leading-7 text-zinc-600">
              Start with a 14-day free trial. Cancel anytime with zero lock-in and a 14-day full refund
              guarantee on new paid subscriptions.
            </p>
          </div>
        ) : (
          <div />
        )}

        <div
          role="group"
          aria-label="Billing interval"
          className="inline-flex items-center rounded-xl border border-zinc-200 bg-zinc-50 p-1"
        >
          <button
            type="button"
            onClick={() => setBilling("monthly")}
            aria-pressed={billing === "monthly"}
            className={`rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors ${
              billing === "monthly"
                ? "bg-white text-zinc-950 shadow-xs"
                : "text-zinc-600 hover:text-zinc-950"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBilling("annual")}
            aria-pressed={billing === "annual"}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors ${
              billing === "annual"
                ? "bg-white text-zinc-950 shadow-xs"
                : "text-zinc-600 hover:text-zinc-950"
            }`}
          >
            <span>Annual</span>
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-800">
              Save ~17%
            </span>
          </button>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan) => {
          const displayedPrice = billing === "monthly" ? plan.monthlyPrice : plan.annualMonthlyPrice;
          return (
            <div
              key={plan.id}
              className={`flex flex-col rounded-2xl border p-6 sm:p-7 ${
                plan.popular
                  ? "border-zinc-950 bg-white shadow-md ring-1 ring-zinc-950"
                  : "border-zinc-200 bg-white"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-zinc-950">{plan.name}</h3>
                {plan.popular ? (
                  <span className="rounded-full bg-zinc-950 px-2.5 py-0.5 text-xs font-medium text-white">
                    Most Popular
                  </span>
                ) : null}
              </div>
              <p className="mt-2 min-h-12 text-sm leading-6 text-zinc-600">{plan.tagline}</p>

              <div className="mt-6 border-b border-zinc-100 pb-6">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-semibold tracking-tight text-zinc-950">
                    {`$${displayedPrice}`}
                  </span>
                  <span className="text-sm text-zinc-500">USD / month</span>
                </div>
                <p className="mt-1.5 text-xs text-zinc-500">
                  {billing === "monthly"
                    ? `Or $${plan.annualMonthlyPrice}/mo billed annually ($${plan.annualTotal}/yr)`
                    : `Billed annually at $${plan.annualTotal} USD (regularly $${plan.monthlyPrice}/mo)`}
                </p>
              </div>

              <ul className="mt-6 flex-1 space-y-3 text-sm text-zinc-700">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-zinc-950" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/contact/?plan=${plan.id}`}
                className={`mt-8 inline-flex h-11 items-center justify-center rounded-xl px-4 text-sm font-medium transition-colors ${
                  plan.popular
                    ? "bg-zinc-950 text-white hover:bg-zinc-800"
                    : "border border-zinc-300 bg-white text-zinc-950 hover:bg-zinc-50"
                }`}
              >
                {plan.ctaLabel}
              </Link>
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-center text-xs leading-5 text-zinc-500">
        All subscriptions are recurring software licenses operated by {site.legalEntity}, billed securely in USD
        via Stripe with statement descriptor{" "}
        <span className="font-mono font-medium text-zinc-800">{site.statementDescriptor}</span>. Covered by our{" "}
        <Link href="/refund/" className="underline underline-offset-2 hover:text-zinc-900">
          14-day Refund Policy
        </Link>{" "}
        and{" "}
        <Link href="/terms/" className="underline underline-offset-2 hover:text-zinc-900">
          Terms of Service
        </Link>
        .
      </p>
    </section>
  );
}
