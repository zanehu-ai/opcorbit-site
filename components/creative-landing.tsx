"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Separator,
} from "@zanehu-ai/x-ui";
import { PageFrame } from "@/components/page-frame";
import { RichText } from "@/components/rich-text";
import {
  creativeContactCta,
  creativeContactNote,
  creativeDont,
  creativeFaqs,
  creativeFooter,
  creativeMade,
  creativeMonthly,
  creativeNeed,
  creativeNotAFit,
  creativeSamples,
  creativeSamplesIntro,
  creativeSteps,
  creativeWho,
  demoLabel,
} from "@/lib/copy/creative";
import { offers } from "@/lib/site";

const meta = offers.creative;

export function CreativeLanding() {
  return (
    <PageFrame current="creative" host={meta.hostname} footer={creativeFooter}>
      <section aria-labelledby="hero-title" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-sm font-medium text-[color:var(--x-ui-muted-fg)]">OpcOrbit {meta.nav}</p>
        <h1 id="hero-title" className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {meta.headline}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8">{meta.description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href="#contact">{creativeContactCta}</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <a href="#samples">See concept samples</a>
          </Button>
        </div>
      </section>

      <section id="samples" aria-labelledby="samples-title" className="mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6">
        <h2 id="samples-title" className="text-2xl font-semibold tracking-tight">
          Concept samples
        </h2>
        <p className="mt-4 max-w-3xl leading-7">{creativeSamplesIntro}</p>
        <ul className="mt-6 grid items-start gap-6 md:grid-cols-3">
          {creativeSamples.map((sample) => (
            <li key={sample.src}>
              <figure>
                <Card className="overflow-hidden">
                  <Image
                    src={sample.src}
                    width={sample.width}
                    height={sample.height}
                    alt={sample.alt}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="h-auto w-full"
                  />
                  <CardContent>
                    <figcaption>
                      <Badge variant="warning" className="whitespace-normal">
                        {demoLabel}
                      </Badge>
                      <p className="mt-3 text-sm leading-6 text-[color:var(--x-ui-muted-fg)]">{sample.name}</p>
                      {sample.eyebrow ? (
                        <p className="mt-3 text-xs font-semibold tracking-wide">{sample.eyebrow}</p>
                      ) : null}
                      <h3 className="mt-3 text-base font-semibold leading-6">{sample.headline}</h3>
                      <p className="mt-2 leading-7">{sample.body}</p>
                      {sample.bullets ? <p className="mt-2 leading-7">{sample.bullets}</p> : null}
                      <p className="mt-3 text-sm font-medium">{sample.cta}</p>
                    </figcaption>
                  </CardContent>
                </Card>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Fit" className="mx-auto grid w-full max-w-6xl gap-4 px-4 sm:px-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base leading-6">Who it&apos;s for</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-3 pl-5 leading-7">
              {creativeWho.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base leading-6">Not a fit</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-3 pl-5 leading-7">
              {creativeNotAFit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="monthly-title" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <h2 id="monthly-title" className="text-2xl font-semibold tracking-tight">
          What you get each month
        </h2>
        <ul className="mt-6 list-disc space-y-3 pl-5 leading-7">
          {creativeMonthly.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="steps-title" className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6">
        <h2 id="steps-title" className="text-2xl font-semibold tracking-tight">
          How it works
        </h2>
        <ol className="mt-6 list-decimal space-y-4 pl-5 leading-7">
          {creativeSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section aria-label="Scope" className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-6 sm:px-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base leading-6">What we need from you</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-7">{creativeNeed}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base leading-6">What we don&apos;t do</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-7">{creativeDont}</p>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="made-title" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <h2 id="made-title" className="text-2xl font-semibold tracking-tight">
          How it&apos;s made
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 leading-7">
          {creativeMade.map((paragraph) => (
            <p key={paragraph}>
              <RichText text={paragraph} />
            </p>
          ))}
        </div>
      </section>

      <section aria-labelledby="pricing-title" className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6">
        <h2 id="pricing-title" className="text-2xl font-semibold tracking-tight">
          Pricing
        </h2>
        <p className="mt-4 leading-7">In USD, paid via PayPal. Pricing details will be published once confirmed.</p>
      </section>

      <section aria-labelledby="faq-title" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <h2 id="faq-title" className="text-2xl font-semibold tracking-tight">
          FAQ
        </h2>
        <Accordion type="multiple" defaultValue={creativeFaqs.map((faq) => faq.question)} className="faq-open mt-4">
          {creativeFaqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p className="leading-7">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      <section id="contact" aria-labelledby="contact-title" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <h2 id="contact-title" className="text-2xl font-semibold tracking-tight">
          Contact
        </h2>
        <div className="mt-6">
          <Button asChild size="lg">
            <a href="#contact">{creativeContactCta}</a>
          </Button>
        </div>
        <p className="mt-5 leading-7">
          <RichText text={creativeContactNote} />
        </p>
      </section>
    </PageFrame>
  );
}
