"use client";

import { Check, Copy, Mail } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { pricingPlans, site, type PlanId } from "@/lib/site";

const validPlans = new Set<PlanId>(["starter", "pro", "business"]);

export function ContactBuilder() {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [topic, setTopic] = useState("Start 14-day free trial");
  const [planOverride, setPlanOverride] = useState<PlanId | null>(null);
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const paramPlan = searchParams.get("plan");
  const initialPlan: PlanId =
    paramPlan && validPlans.has(paramPlan as PlanId) ? (paramPlan as PlanId) : "pro";
  const plan = planOverride ?? initialPlan;

  const selectedPlan = pricingPlans.find((item) => item.id === plan) ?? pricingPlans[1];
  const subject = `[OpcOrbit Cloud] ${topic} (${selectedPlan.name} Plan)`;
  const bodyLines = [
    `Topic: ${topic}`,
    `Selected Plan: ${selectedPlan.name} ($${selectedPlan.monthlyPrice}/mo USD)`,
    `Name: ${name || "(your name)"}`,
    `Work Email: ${email || "(your work email)"}`,
    `Company / Team: ${company || "(optional)"}`,
    "",
    "Details:",
    message || "Please provision a 14-day trial workspace or assist with our inquiry.",
  ].join("\n");

  const mailtoHref = `mailto:${site.supportEmail}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(bodyLines)}`;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(`To: ${site.supportEmail}\nSubject: ${subject}\n\n${bodyLines}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
      <h2 className="text-xl font-semibold text-zinc-950">Send a trial or support request</h2>
      <p className="mt-1.5 text-sm leading-6 text-zinc-600">
        Complete the fields below to prepare a pre-filled email to{" "}
        <a href={`mailto:${site.supportEmail}`} className="font-medium text-zinc-950 underline">
          {site.supportEmail}
        </a>
        . No password or payment card is required to request a trial.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-topic" className="block text-xs font-medium text-zinc-700">
            Inquiry type
          </label>
          <select
            id="contact-topic"
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
            className="mt-1.5 h-10 w-full rounded-xl border border-zinc-300 bg-white px-3 text-sm text-zinc-950"
          >
            <option value="Start 14-day free trial">Start 14-day free trial</option>
            <option value="Billing & invoice support">Billing &amp; invoice support</option>
            <option value="Subscription cancellation or refund">Subscription cancellation or refund</option>
            <option value="Technical & security question">Technical &amp; security question</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-plan" className="block text-xs font-medium text-zinc-700">
            SaaS plan
          </label>
          <select
            id="contact-plan"
            value={plan}
            onChange={(event) => setPlanOverride(event.target.value as PlanId)}
            className="mt-1.5 h-10 w-full rounded-xl border border-zinc-300 bg-white px-3 text-sm text-zinc-950"
          >
            {pricingPlans.map((item) => (
              <option key={item.id} value={item.id}>
                {`${item.name} — $${item.monthlyPrice}/mo USD`}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="contact-name" className="block text-xs font-medium text-zinc-700">
            Full name
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Alex Rivera"
            className="mt-1.5 h-10 w-full rounded-xl border border-zinc-300 bg-white px-3 text-sm text-zinc-950 placeholder:text-zinc-400"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs font-medium text-zinc-700">
            Work email
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="alex@company.com"
            className="mt-1.5 h-10 w-full rounded-xl border border-zinc-300 bg-white px-3 text-sm text-zinc-950 placeholder:text-zinc-400"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-company" className="block text-xs font-medium text-zinc-700">
            Company or organization (optional)
          </label>
          <input
            id="contact-company"
            type="text"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            placeholder="Acme Software Inc."
            className="mt-1.5 h-10 w-full rounded-xl border border-zinc-300 bg-white px-3 text-sm text-zinc-950 placeholder:text-zinc-400"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="block text-xs font-medium text-zinc-700">
            Message
          </label>
          <textarea
            id="contact-message"
            rows={4}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Share your workspace goals, billing invoice ID, or support question..."
            className="mt-1.5 w-full rounded-xl border border-zinc-300 bg-white p-3 text-sm text-zinc-950 placeholder:text-zinc-400"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href={mailtoHref}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          <span>Open Email to {site.supportEmail}</span>
        </a>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-emerald-600" aria-hidden="true" />
              <span>Copied Request Details</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" aria-hidden="true" />
              <span>Copy Message</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
