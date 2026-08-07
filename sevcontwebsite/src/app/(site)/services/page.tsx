import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services & Solutions",
  description:
    "Power systems, industrial raw materials, engineering, and logistics — SEVCONT's integrated services for industrial and infrastructure projects.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((s, i) => ({
            "@type": "Service",
            position: i + 1,
            name: s.title,
            description: s.summary,
            provider: { "@type": "Organization", name: siteConfig.legalName },
          })),
        }}
      />
      <PageHero
        eyebrow="Services & Solutions"
        title="Four capabilities. One accountable partner."
        description="From power systems to logistics, every service is backed by engineering review — so what you order is exactly what your project needs."
      />

      {services.map((service, i) => (
        <section
          key={service.slug}
          id={service.slug}
          className={`scroll-mt-24 py-20 sm:py-24 ${i % 2 === 0 ? "bg-white" : "bg-navy-50"}`}
        >
          <Container>
            <div
              className={`grid gap-12 lg:grid-cols-2 lg:items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-gold-300">
                  <DynamicIcon name={service.icon} className="h-7 w-7" />
                </div>
                <h2 className="mt-6 font-display text-3xl font-semibold text-navy-900">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-navy-600">
                  {service.description}
                </p>
                <Button href="/rfq" variant="outline" className="mt-7">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="grid grid-cols-2 gap-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 rounded-xl border border-navy-900/8 bg-white px-4 py-3.5 text-sm font-medium text-navy-800"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </Container>
        </section>
      ))}

      <section className="bg-navy-900 py-20 text-center">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Need a solution tailored to your project?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-navy-200">
              Share your requirement and our engineering team will scope it
              within 24 hours.
            </p>
            <div className="mt-8">
              <Button href="/rfq" size="lg">
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
