import { CheckCircle2, Clock, FileCheck2, GitCommitHorizontal, Lock, ShieldCheck, Webhook } from "lucide-react";

const pipelines = [
  {
    name: "web-app",
    version: "v2.14.0",
    commit: "9f3a1c8",
    checks: "14 / 14 checks passed",
    approver: "Approved by Release Lead",
    status: "Verified",
    time: "2m ago",
    tone: "emerald" as const,
  },
  {
    name: "api-gateway",
    version: "v4.3.2",
    commit: "4d82e10",
    checks: "18 / 18 checks passed",
    approver: "Approved by Security Ops",
    status: "Approved",
    time: "18m ago",
    tone: "emerald" as const,
  },
  {
    name: "billing-worker",
    version: "v1.9.1",
    commit: "c7b0492",
    checks: "11 / 12 checks passed",
    approver: "Awaiting peer sign-off",
    status: "In Review",
    time: "34m ago",
    tone: "amber" as const,
  },
] as const;

const sidebarItems = [
  { label: "Workflows", active: false },
  { label: "Release Checks", active: true },
  { label: "Approvals", active: false },
  { label: "Audit Log", active: false },
  { label: "Webhooks", active: false },
] as const;

export function ProductPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 bg-zinc-50 px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" aria-hidden="true" />
          <span className="ml-2 rounded-md border border-zinc-200 bg-white px-2.5 py-0.5 font-mono text-xs text-zinc-600">
            app.opcorbit.com / production-workspace
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <Lock className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
          <span>Immutable Audit Active</span>
        </div>
      </div>

      <div className="grid md:grid-cols-[200px_1fr]">
        <aside className="hidden border-r border-zinc-200 bg-zinc-50/60 p-4 md:block">
          <p className="px-2.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
            Workspace
          </p>
          <ul className="mt-2 space-y-1 text-sm">
            {sidebarItems.map((item) => (
              <li
                key={item.label}
                className={`rounded-lg px-2.5 py-2 font-medium ${
                  item.active ? "bg-zinc-950 text-white" : "text-zinc-600"
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-xl border border-zinc-200 bg-white p-3">
            <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-900">
              <Webhook className="h-3.5 w-3.5 text-zinc-600" aria-hidden="true" />
              <span>Webhook Endpoint</span>
            </div>
            <p className="mt-1 font-mono text-[11px] text-zinc-500">200 OK · 99.98% uptime</p>
          </div>
        </aside>

        <div className="p-4 sm:p-6">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-3.5">
              <p className="text-xs font-medium text-zinc-500">Verified Releases (30d)</p>
              <p className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950">142</p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-3.5">
              <p className="text-xs font-medium text-zinc-500">Gate Pass Rate</p>
              <p className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950">99.3%</p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-3.5">
              <p className="text-xs font-medium text-zinc-500">Median Sign-off</p>
              <p className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950">4m 12s</p>
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-xl border border-zinc-200">
            <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-4 py-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600">
                Recent Release Pipelines
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-zinc-500">
                <ShieldCheck className="h-3.5 w-3.5 text-zinc-700" aria-hidden="true" />
                SHA-256 Attested
              </span>
            </div>
            <ul className="divide-y divide-zinc-200 bg-white">
              {pipelines.map((run) => (
                <li
                  key={run.name}
                  className="flex flex-col gap-2 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-zinc-950">{run.name}</span>
                      <span className="rounded border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 font-mono text-xs text-zinc-700">
                        {run.version}
                      </span>
                      <span className="inline-flex items-center gap-1 font-mono text-xs text-zinc-500">
                        <GitCommitHorizontal className="h-3.5 w-3.5" aria-hidden="true" />
                        {run.commit}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-600">
                      <span className="inline-flex items-center gap-1">
                        <FileCheck2 className="h-3.5 w-3.5 text-zinc-400" aria-hidden="true" />
                        {run.checks}
                      </span>
                      <span className="mx-2 text-zinc-300">·</span>
                      <span>{run.approver}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-3 self-start sm:self-center">
                    <span className="text-xs text-zinc-400">{run.time}</span>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        run.tone === "emerald"
                          ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                          : "border border-amber-200 bg-amber-50 text-amber-800"
                      }`}
                    >
                      {run.tone === "emerald" ? (
                        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                      ) : (
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      )}
                      {run.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
