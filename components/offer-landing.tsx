"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Separator,
} from "@zanehu-ai/x-ui";
import { PageFrame } from "@/components/page-frame";
import { RichText } from "@/components/rich-text";
import type { ResolvedOfferCopy } from "@/lib/prices";
import type { OfferMeta } from "@/lib/site";

function CtaRow({ primary, secondary }: { primary: string; secondary: string | null }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Button asChild size="lg" className="w-full sm:w-auto">
        <a href="#contact">{primary}</a>
      </Button>
      {secondary ? (
        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
          <a href="#contact">{secondary}</a>
        </Button>
      ) : null}
    </div>
  );
}

function extraSectionId(title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `extra-${slug || "section"}`;
}

function PricingList({ items, pricesOmitted }: { items: string[]; pricesOmitted: boolean }) {
  return (
    <div data-prices={pricesOmitted ? "off" : "on"}>
      <ul className="list-disc space-y-3 pl-5 leading-7">
        {items.map((item) => (
          <li key={item}>
            <RichText text={item} />
          </li>
        ))}
      </ul>
      {pricesOmitted ? (
        <p className="mt-4 text-sm leading-6 text-[color:var(--x-ui-muted-fg)]">
          Pricing details will be published once confirmed.
        </p>
      ) : null}
    </div>
  );
}

export function OfferLanding({ meta, copy }: { meta: OfferMeta; copy: ResolvedOfferCopy }) {
  const heroSecondary = copy.heroSecondary;
  const finalSecondary = copy.finalSecondary;

  return (
    <PageFrame
      current={meta.slug}
      host={meta.hostname}
      footer={<RichText text={copy.footer} />}
    >
      <section aria-labelledby="hero-title" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-sm font-medium text-[color:var(--x-ui-muted-fg)]">OpcOrbit {meta.nav}</p>
        <h1 id="hero-title" className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {meta.headline}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8">
          <RichText text={meta.description} />
        </p>
        <div className="mt-8">
          <CtaRow primary={copy.heroPrimary} secondary={heroSecondary} />
        </div>
      </section>

      <section aria-label="Benefits" className="mx-auto w-full max-w-6xl px-4 pb-6 sm:px-6">
        <h2 className="sr-only">Benefits</h2>
        <ul className="grid gap-4 md:grid-cols-2">
          {copy.benefits.map((benefit) => (
            <li key={benefit.title}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-base leading-6">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-7">
                    <RichText text={benefit.body} />
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="steps-title" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <h2 id="steps-title" className="text-2xl font-semibold tracking-tight">
          {copy.stepsTitle}
        </h2>
        <ol className="mt-6 list-decimal space-y-4 pl-5 leading-7">
          {copy.steps.map((step) => (
            <li key={step}>
              <RichText text={step} />
            </li>
          ))}
        </ol>
      </section>

      {copy.panels.length > 0 ? (
        <section aria-label="Scope" className="mx-auto grid w-full max-w-6xl gap-4 px-4 sm:px-6 md:grid-cols-2">
          {copy.panels.map((panel) => (
            <Card key={panel.title}>
              <CardHeader>
                <CardTitle className="text-base leading-6">{panel.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-7">{panel.body}</p>
              </CardContent>
            </Card>
          ))}
        </section>
      ) : null}

      {copy.extras?.map((extra) => {
        const sectionId = extraSectionId(extra.title);
        return (
          <section key={extra.title} aria-labelledby={sectionId} className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
            <h2 id={sectionId} className="text-2xl font-semibold tracking-tight">
              {extra.title}
            </h2>
            <p className="mt-4 max-w-3xl leading-7">
              <RichText text={extra.body} />
            </p>
          </section>
        );
      })}

      <section aria-labelledby="pricing-title" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <h2 id="pricing-title" className="text-2xl font-semibold tracking-tight">
          {copy.pricingTitle}
        </h2>
        <div className="mt-6">
          <PricingList items={copy.pricingItems} pricesOmitted={copy.pricesOmitted} />
        </div>
      </section>

      <section aria-labelledby="faq-title" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <h2 id="faq-title" className="text-2xl font-semibold tracking-tight">
          FAQ
        </h2>
        <Accordion type="multiple" defaultValue={copy.faqs.map((faq) => faq.question)} className="faq-open mt-4">
          {copy.faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p className="leading-7">
                  <RichText text={faq.answer} />
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      <section id="contact" aria-labelledby="contact-title" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <h2 id="contact-title" className="sr-only">
          Contact
        </h2>
        <CtaRow primary={copy.finalPrimary} secondary={finalSecondary} />
        <p className="mt-5 leading-7">
          <RichText text={copy.contactNote} />
        </p>
        {copy.externalLink ? (
          <p className="mt-4">
            <a
              href={copy.externalLink.href}
              className="font-medium underline underline-offset-4"
            >
              {copy.externalLink.label}
            </a>
          </p>
        ) : null}
      </section>
    </PageFrame>
  );
}
