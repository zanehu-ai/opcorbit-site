import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: `Clear subscription cancellation and 14-day full refund policy for OpcOrbit Cloud operated by ${site.legalEntity}.`,
  alternates: {
    canonical: `${site.origin}/refund/`,
  },
};

const highlights = [
  { label: "Money-Back Guarantee", value: "14 Days (Full Refund)" },
  { label: "Cancellation", value: "Anytime, $0 Fee" },
  { label: "Refund Processing", value: "5–10 Business Days" },
  { label: "Billing Descriptor", value: site.statementDescriptor },
] as const;

export default function RefundPage() {
  return (
    <LegalPage
      title="Refund & Cancellation Policy"
      summary="OpcOrbit LLC provides straightforward subscription cancellation and a transparent 14-day money-back guarantee on OpcOrbit Cloud software plans."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item) => (
          <div key={item.label} className="rounded-xl border border-zinc-200 bg-white p-4">
            <p className="text-xs font-medium text-zinc-500">{item.label}</p>
            <p className="mt-1 text-sm font-semibold text-zinc-950">{item.value}</p>
          </div>
        ))}
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-950">1. Cancel Anytime with Zero Penalties</h2>
        <p>
          You may cancel your monthly or annual OpcOrbit Cloud subscription at any time before your next
          billing date by emailing{" "}
          <a
            href={`mailto:${site.supportEmail}`}
            className="font-medium text-zinc-950 underline underline-offset-4"
          >
            {site.supportEmail}
          </a>{" "}
          or via your workspace billing portal. There are no cancellation fees or lock-in contracts. Upon
          cancellation, you retain full access through the end of the current paid period, and no future
          recurring charges will occur.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-950">2. 14-Day Unconditional Full Refund Guarantee</h2>
        <p>
          Every first-time paid subscription (Starter, Pro, or Business—whether billed monthly or annually)
          is covered by a <strong>14-day unconditional full refund guarantee</strong> starting from the date
          of the initial charge. If OpcOrbit Cloud does not meet your team&apos;s workflow needs during the
          first 14 calendar days, contact us and we will refund 100% of your subscription payment.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-950">3. Duplicate Charges &amp; Billing Errors</h2>
        <p>
          If you experience an accidental duplicate charge, incorrect plan tier charge, or any verified
          billing error, we will issue a 100% refund immediately upon review regardless of when the charge
          occurred.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-950">4. Renewal Charges</h2>
        <p>
          If an automatic renewal occurs and you did not intend to continue using the Service, please email{" "}
          <a
            href={`mailto:${site.supportEmail}`}
            className="font-medium text-zinc-950 underline underline-offset-4"
          >
            {site.supportEmail}
          </a>{" "}
          within 48 hours of the renewal charge with no substantial post-renewal usage, and our billing team
          will promptly review and issue a full refund for that renewal period.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-950">5. How to Request a Refund &amp; Timeline</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Send an email to{" "}
            <a
              href={`mailto:${site.supportEmail}?subject=${encodeURIComponent("[OpcOrbit] Refund Request")}`}
              className="font-medium text-zinc-950 underline underline-offset-4"
            >
              {site.supportEmail}
            </a>{" "}
            with your account email address, invoice number (if available), and charge date.
          </li>
          <li>
            Our billing support team confirms and submits approved refunds via Stripe within{" "}
            <strong>1 business day</strong>.
          </li>
          <li>
            Refunds are returned strictly to the original payment method and typically appear on your bank
            or credit card statement within <strong>5 to 10 business days</strong>, depending on your card
            issuer.
          </li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-950">6. Billing Descriptor &amp; Dispute Resolution</h2>
        <p>
          All charges from {site.legalEntity} appear on credit card and bank statements as{" "}
          <span className="font-mono font-medium text-zinc-950">{site.statementDescriptor}</span>. If you
          spot an unfamiliar charge or have any billing concern, please contact{" "}
          <a
            href={`mailto:${site.supportEmail}`}
            className="font-medium text-zinc-950 underline underline-offset-4"
          >
            {site.supportEmail}
          </a>{" "}
          or visit our{" "}
          <Link href="/contact/" className="font-medium text-zinc-950 underline underline-offset-4">
            Contact page
          </Link>{" "}
          before filing a card dispute so we can resolve and refund eligible requests directly within one
          business day.
        </p>
      </section>
    </LegalPage>
  );
}
