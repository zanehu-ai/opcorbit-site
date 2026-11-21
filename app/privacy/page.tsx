import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy explaining how ${site.legalEntity} collects, protects, and processes data for OpcOrbit Cloud.`,
  alternates: {
    canonical: `${site.origin}/privacy/`,
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      summary="This Privacy Policy explains how OpcOrbit LLC collects, uses, stores, and safeguards personal and workspace information across www.opcorbit.com and OpcOrbit Cloud."
    >
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-950">1. Data Controller</h2>
        <p>
          The data controller responsible for your personal information is{" "}
          <strong>{site.legalEntity}</strong>, {site.registeredAddress}. For any privacy request, email{" "}
          <a
            href={`mailto:${site.supportEmail}`}
            className="font-medium text-zinc-950 underline underline-offset-4"
          >
            {site.supportEmail}
          </a>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-950">2. Information We Collect</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Account &amp; Contact Details:</strong> Name, work email address, organization name, and
            role metadata provided when requesting a trial, subscribing, or contacting support.
          </li>
          <li>
            <strong>Workspace &amp; Telemetry Data:</strong> Workflow definitions, approval events, release
            verification metadata, and security audit logs submitted by authorized users or CI integrations.
          </li>
          <li>
            <strong>Billing Metadata:</strong> Plan tier, invoice history, tax jurisdiction, and Stripe
            customer identifiers required for subscription administration and accounting compliance.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-950">3. Payment Processing (Stripe)</h2>
        <p>
          Subscription payments are processed directly by Stripe, Inc., a PCI-DSS Level 1 certified payment
          provider. OpcOrbit LLC never collects, processes, or stores raw payment card numbers, security
          codes (CVV), or full bank login credentials on our servers.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-950">4. How We Use Information</h2>
        <p>We process collected data solely to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Provision, maintain, and secure your OpcOrbit Cloud workspaces;</li>
          <li>Process subscription invoices, renewals, cancellations, and refund requests;</li>
          <li>Prevent unauthorized access, abuse, and security incidents;</li>
          <li>Fulfill statutory U.S. tax, accounting, and legal compliance obligations.</li>
        </ul>
        <p>OpcOrbit LLC does not sell personal information to third parties or data brokers.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-950">5. Infrastructure &amp; Subprocessors</h2>
        <p>
          We partner with trusted infrastructure providers—including Vercel for edge web hosting and Stripe
          for payment billing—under strict confidentiality and data protection obligations.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-950">6. Data Retention &amp; Security</h2>
        <p>
          All traffic to {site.origin} and OpcOrbit Cloud endpoints is encrypted in transit via TLS. We retain
          workspace audit logs according to your active plan (30 days on Starter, 1 year on Pro, or custom
          intervals on Business) and retain billing records as required by applicable tax law.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-950">7. Your Privacy Rights</h2>
        <p>
          You may request access to, correction of, export of, or deletion of your personal data at any time
          by writing to{" "}
          <a
            href={`mailto:${site.supportEmail}`}
            className="font-medium text-zinc-950 underline underline-offset-4"
          >
            {site.supportEmail}
          </a>
          . We respond to verified requests within 30 days.
        </p>
      </section>
    </LegalPage>
  );
}
