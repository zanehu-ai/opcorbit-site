import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Building2, Clock, CreditCard, Mail } from "lucide-react";
import { ContactBuilder } from "@/components/contact-builder";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Support",
  description: `Contact ${site.legalEntity} for OpcOrbit Cloud trials, billing support, cancellations, and refund requests at ${site.supportEmail}.`,
  alternates: {
    canonical: `${site.origin}/contact/`,
  },
};

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Contact &amp; Customer Support
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          Get in touch with OpcOrbit
        </h1>
        <p className="mt-4 text-base leading-7 text-zinc-600">
          Reach our software support and billing team for workspace trials, subscription management,
          invoices, or refund requests.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <div className="flex items-start gap-3">
              <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-zinc-900" aria-hidden="true" />
              <div>
                <h2 className="text-sm font-semibold text-zinc-950">Legal Entity &amp; Address</h2>
                <p className="mt-1 text-sm leading-6 text-zinc-700">{site.legalEntity}</p>
                <p className="text-sm leading-6 text-zinc-600">{site.registeredAddress}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-zinc-900" aria-hidden="true" />
              <div>
                <h2 className="text-sm font-semibold text-zinc-950">Support &amp; Billing Email</h2>
                <p className="mt-1 text-sm">
                  <a
                    href={`mailto:${site.supportEmail}`}
                    className="font-medium text-zinc-950 underline underline-offset-4"
                  >
                    {site.supportEmail}
                  </a>
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  For trial onboarding, invoices, cancellations, and 14-day refund requests.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-zinc-900" aria-hidden="true" />
              <div>
                <h2 className="text-sm font-semibold text-zinc-950">Response SLA</h2>
                <p className="mt-1 text-sm leading-6 text-zinc-600">
                  Monday – Friday, 9:00 AM – 6:00 PM US Mountain Time. All billing and refund emails
                  receive a response within 1 business day.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <div className="flex items-start gap-3">
              <CreditCard className="mt-0.5 h-5 w-5 shrink-0 text-zinc-900" aria-hidden="true" />
              <div>
                <h2 className="text-sm font-semibold text-zinc-950">Billing Descriptor</h2>
                <p className="mt-1 text-sm leading-6 text-zinc-600">
                  Card charges appear as{" "}
                  <span className="font-mono font-medium text-zinc-950">
                    {site.statementDescriptor}
                  </span>
                  . See our{" "}
                  <Link href="/refund/" className="font-medium text-zinc-950 underline">
                    Refund Policy
                  </Link>{" "}
                  or{" "}
                  <Link href="/terms/" className="font-medium text-zinc-950 underline">
                    Terms of Service
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        <Suspense
          fallback={
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
              <p className="text-sm text-zinc-600">Loading support request form...</p>
            </div>
          }
        >
          <ContactBuilder />
        </Suspense>
      </div>
    </section>
  );
}
