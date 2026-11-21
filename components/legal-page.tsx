import type { ReactNode } from "react";
import { site } from "@/lib/site";

export function LegalPage({
  title,
  summary,
  children,
}: {
  title: string;
  summary: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="border-b border-zinc-200 pb-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Legal &amp; Compliance · {site.legalEntity}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-base leading-7 text-zinc-600">{summary}</p>
        <dl className="mt-6 grid gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-xs font-medium text-zinc-500">Operator</dt>
            <dd className="mt-0.5 font-medium text-zinc-950">{site.legalEntity}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-zinc-500">Registered Address</dt>
            <dd className="mt-0.5 text-zinc-800">{site.shortAddress}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-zinc-500">Effective Date</dt>
            <dd className="mt-0.5 text-zinc-800">{site.effectiveDate}</dd>
          </div>
        </dl>
      </header>

      <div className="mt-10 space-y-8 text-sm leading-7 text-zinc-700 sm:text-base">{children}</div>

      <aside className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-sm leading-6 text-zinc-700">
        <h2 className="text-base font-semibold text-zinc-950">Questions or billing requests</h2>
        <p className="mt-1.5">
          Contact{" "}
          <a
            href={`mailto:${site.supportEmail}`}
            className="font-medium text-zinc-950 underline underline-offset-4"
          >
            {site.supportEmail}
          </a>{" "}
          or write to {site.legalEntity}, {site.registeredAddress}. Billing inquiries are answered within 1
          business day.
        </p>
      </aside>
    </article>
  );
}
