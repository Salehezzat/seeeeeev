import type { Metadata } from "next";
import { HardHat, Factory, Flame, Landmark, ShieldCheck, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { industries } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "SEVCONT serves construction, manufacturing, oil & gas, infrastructure, and government projects with sourcing and engineering solutions built for each sector.",
  alternates: { canonical: "/industries" },
};

const iconMap = { HardHat, Factory, Flame, Landmark, ShieldCheck } as const;

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sector expertise, applied to your project"
        description="Every industry has different standards, timelines, and risk profiles. We tailor sourcing and engineering support to match."
      />

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => {
              const Icon = iconMap[industry.icon as keyof typeof iconMap] ?? Factory;
              return (
                <Reveal key={industry.slug} delay={i * 0.06}>
                  <div
                    id={industry.slug}
                    className="scroll-mt-24 flex h-full flex-col rounded-3xl border border-navy-900/8 bg-navy-50 p-8 transition-colors hover:bg-white hover:shadow-[0_20px_60px_-20px_rgba(7,20,38,0.2)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold text-navy-900">
                      {industry.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy-600">
                      {industry.summary}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 py-20 text-center">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Don&rsquo;t see your industry?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-navy-200">
              We support a broad range of industrial and public sector
              programs — get in touch and we&rsquo;ll scope your requirement.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                Contact Sales
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
