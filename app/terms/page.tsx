import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service governing subscriptions and use of OpcOrbit Cloud SaaS operated by ${site.legalEntity}.`,
  alternates: {
    canonical: `${site.origin}/terms/`,
  },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      summary="These Terms of Service govern your access to and subscription for OpcOrbit Cloud software services provided by OpcOrbit LLC."
    >
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-950">1. Contracting Entity &amp; Scope of Service</h2>
        <p>
          {site.productName} (&ldquo;Service&rdquo;) is a cloud-hosted Software-as-a-Service (SaaS) platform
          developed, owned, and operated by <strong>{site.legalEntity}</strong>, a Wyoming limited liability
          company with its principal registered address at {site.registeredAddress} (&ldquo;OpcOrbit&rdquo;,
          &ldquo;we&rdquo;, or &ldquo;us&rdquo;).
        </p>
        <p>
          OpcOrbit exclusively licenses access to its proprietary software platform for workflow automation,
          approval governance, release verification, and audit logging. OpcOrbit does not provide money
          transmission, third-party payment collection, funds custody, marketplace settlement, or physical
          fulfillment services.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-950">2. Accounts &amp; Authorized Use</h2>
        <p>
          You must provide accurate registration and billing details and safeguard your workspace credentials
          and API tokens. You are responsible for all activity occurring under your workspace, including
          actions taken by team members you invite.
        </p>
        <p>
          You agree not to reverse engineer, interfere with platform integrity, distribute malware, bypass
          usage quotas, or use the Service in violation of applicable laws.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-950">3. Subscriptions, Billing &amp; Renewal</h2>
        <p>
          Paid plans (Starter at $29/month, Pro at $99/month, and Business at $299/month, or discounted
          annual equivalents) are billed in advance in United States Dollars (USD) through our payment
          processor, Stripe. Charges appear on your card or bank statement under the descriptor{" "}
          <span className="font-mono font-medium text-zinc-950">{site.statementDescriptor}</span>.
        </p>
        <p>
          Unless canceled before the end of your current billing period, subscriptions automatically renew for
          the same interval at the then-current rate. Applicable taxes are calculated and displayed prior to
          payment confirmation.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-950">4. Cancellations &amp; Refunds</h2>
        <p>
          You may cancel your subscription at any time with no cancellation fee. Access continues through the
          end of your paid billing cycle. New subscriptions are covered by a 14-day unconditional full refund
          guarantee as detailed in our{" "}
          <Link href="/refund/" className="font-medium text-zinc-950 underline underline-offset-4">
            Refund Policy
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-950">5. Intellectual Property &amp; Customer Data</h2>
        <p>
          OpcOrbit LLC retains all intellectual property rights in the Service, documentation, and underlying
          software. You retain full ownership of all workflow configurations, release records, and data you
          submit to your workspace. We process customer data solely to provide and secure the Service in
          accordance with our{" "}
          <Link href="/privacy/" className="font-medium text-zinc-950 underline underline-offset-4">
            Privacy Policy
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-950">6. Sanctions &amp; Export Compliance</h2>
        <p>
          You represent that you are not located in, organized under the laws of, or ordinarily resident in
          any embargoed or sanctioned jurisdictions under applicable U.S. OFAC regulations, and that you are
          not listed on any applicable U.S. government restricted party list. Access from prohibited
          jurisdictions is strictly disallowed.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-950">7. Disclaimer &amp; Limitation of Liability</h2>
        <p>
          THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY
          KIND, WHETHER EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY LAW, OPCORBIT LLC&apos;S TOTAL
          AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS SHALL NOT EXCEED THE AMOUNTS ACTUALLY
          PAID BY YOU FOR THE SERVICE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-950">8. Governing Law &amp; Contact</h2>
        <p>
          These Terms are governed by the laws of the {site.jurisdiction}, without regard to conflict-of-law
          principles. Questions regarding these Terms may be directed to{" "}
          <a
            href={`mailto:${site.supportEmail}`}
            className="font-medium text-zinc-950 underline underline-offset-4"
          >
            {site.supportEmail}
          </a>
          .
        </p>
      </section>
    </LegalPage>
  );
}
