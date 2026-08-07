import type { Metadata } from "next";
import { Factory, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { suppliers, supplierCategories } from "@/content/suppliers";

export const metadata: Metadata = {
  title: "Suppliers",
  description:
    "SEVCONT works with a vetted network of manufacturers and suppliers across power equipment, steel, switchgear, copper, and solar categories.",
  alternates: { canonical: "/suppliers" },
};

export default function SuppliersPage() {
  return (
    <>
      <PageHero
        eyebrow="Suppliers"
        title="A vetted manufacturing network"
        description="Every supplier in our network is qualified against factory audits, certification checks, and delivery track record before onboarding."
      />

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Categories"
              title="Sourcing Categories"
              align="center"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {supplierCategories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full border border-navy-900/10 bg-navy-50 px-5 py-2.5 text-sm font-medium text-navy-800"
                >
                  {cat}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {suppliers.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.06}>
                <div className="flex items-center gap-4 rounded-2xl border border-navy-900/8 bg-navy-50 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-300">
                    <Factory className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-display text-base font-semibold text-navy-900">
                      {s.name}
                    </p>
                    <p className="mt-1 text-sm text-navy-600">
                      {s.category} &middot; {s.country}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 py-20 text-center">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Become a SEVCONT supplier partner
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-navy-200">
              We&rsquo;re always evaluating new manufacturers. Get in touch to
              start the qualification process.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
