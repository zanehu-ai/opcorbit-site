"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@zanehu-ai/x-ui";
import { PageFrame } from "@/components/page-frame";
import { offerList } from "@/lib/site";

export function HomeLanding() {
  return (
    <PageFrame footer="OpcOrbit · Development, outbound, creative, and AI support.">
      <section aria-labelledby="home-title" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h1 id="home-title" className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Build. Reach. Create. Support.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8">
          Frontend development, outbound sales, ad creative, and AI support for your team.
        </p>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {offerList.map((offer) => (
            <li key={offer.slug}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-base leading-6">{offer.nav}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-7">{offer.headline}</p>
                  <p className="mt-4">
                    <Link href={offer.path} className="font-medium underline underline-offset-4">
                      Explore {offer.nav}
                    </Link>
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </PageFrame>
  );
}
