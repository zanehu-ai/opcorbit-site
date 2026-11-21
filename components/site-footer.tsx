import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-3 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2" aria-label="OpcOrbit home">
              <Image
                src="/brand/apple-touch-icon.png"
                alt=""
                width={180}
                height={180}
                className="h-6 w-6 rounded border border-zinc-200 bg-white object-contain"
              />
              <Image
                src="/brand/wordmark.png"
                alt="OpcOrbit"
                width={633}
                height={149}
                className="h-5 w-auto"
              />
            </Link>
            <p className="text-sm leading-6 text-zinc-600">
              Cloud workflow automation and release verification software operated by{" "}
              <span className="font-medium text-zinc-900">{site.legalEntity}</span>.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-950">Product</h2>
            <ul className="mt-3 space-y-2.5 text-sm text-zinc-600">
              <li>
                <Link href="/" className="hover:text-zinc-950 hover:underline underline-offset-4">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/#product" className="hover:text-zinc-950 hover:underline underline-offset-4">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/pricing/" className="hover:text-zinc-950 hover:underline underline-offset-4">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-950">Support</h2>
            <ul className="mt-3 space-y-2.5 text-sm text-zinc-600">
              <li>
                <Link href="/contact/" className="hover:text-zinc-950 hover:underline underline-offset-4">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${site.supportEmail}`}
                  className="font-medium text-zinc-900 hover:underline underline-offset-4"
                >
                  {site.supportEmail}
                </a>
              </li>
              <li className="text-zinc-500">Response time: 1 business day</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-950">Legal</h2>
            <ul className="mt-3 space-y-2.5 text-sm text-zinc-600">
              <li>
                <Link href="/terms/" className="hover:text-zinc-950 hover:underline underline-offset-4">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy/" className="hover:text-zinc-950 hover:underline underline-offset-4">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund/" className="hover:text-zinc-950 hover:underline underline-offset-4">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-zinc-200 pt-8 text-xs leading-5 text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="font-medium text-zinc-900">
              © 2026 {site.legalEntity}. All rights reserved.
            </p>
            <p>{site.registeredAddress}</p>
          </div>
          <div className="space-y-1 sm:text-right">
            <p>
              Billing descriptor: <span className="font-mono font-medium text-zinc-900">{site.statementDescriptor}</span>
            </p>
            <p>
              Customer &amp; billing support:{" "}
              <a href={`mailto:${site.supportEmail}`} className="underline underline-offset-2 hover:text-zinc-950">
                {site.supportEmail}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
