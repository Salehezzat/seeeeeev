import type { Metadata } from "next";
import { Target, Eye, Building2 } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { WhySevcont } from "@/components/home/why-sevcont";
import { GlobalPresence } from "@/components/home/global-presence";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SEVCONT GLOBAL — our company profile, mission, vision, and the global presence behind our industrial sourcing and engineering solutions.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Engineering trust into every shipment"
        description="SEVCONT GLOBAL connects businesses with vetted manufacturers across Asia while delivering the engineering, logistics, and project oversight that turn sourcing into certainty."
      />

      <section id="profile" className="bg-white py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Company Profile"
                title={siteConfig.legalName}
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-600">
                <p>
                  SEVCONT GLOBAL is an industrial sourcing and engineering
                  solutions company headquartered in Hong Kong, operating
                  across China, Saudi Arabia, Egypt, and Rwanda. We serve
                  contractors, developers, and government programs that need
                  a single accountable partner for power systems, raw
                  materials, engineering, and logistics.
                </p>
                <p>
                  Our team pairs commercial sourcing with in-house
                  engineering review, so every order is technically validated
                  before it leaves the factory floor — reducing rework,
                  delays, and compliance risk on the ground.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Markets Served", value: "10+" },
                  { label: "Industrial Solutions", value: "40+" },
                  { label: "Engineering Experts", value: "15+" },
                  { label: "Shipments Delivered", value: "100+" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-navy-900/8 bg-navy-50 p-6"
                  >
                    <p className="font-display text-3xl font-bold text-navy-900">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-navy-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-24 sm:py-32">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal>
              <div id="mission" className="h-full rounded-3xl border border-navy-900/8 bg-white p-8">
                <Target className="h-8 w-8 text-gold-500" />
                <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">
                  Our Mission
                </h3>
                <p className="mt-3 text-base leading-relaxed text-navy-600">
                  To make global industrial sourcing reliable, technically
                  sound, and transparent — connecting businesses with
                  trusted manufacturers and delivering turnkey engineering
                  and logistics support at every step.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div id="vision" className="h-full rounded-3xl border border-navy-900/8 bg-white p-8">
                <Eye className="h-8 w-8 text-gold-500" />
                <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">
                  Our Vision
                </h3>
                <p className="mt-3 text-base leading-relaxed text-navy-600">
                  To be the most trusted industrial sourcing and engineering
                  partner connecting Asia with emerging markets across
                  Africa and the Middle East.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <WhySevcont />

      <GlobalPresence />

      <section className="bg-white py-20">
        <Container>
          <Reveal>
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-navy-900/8 bg-navy-50 p-10 text-center">
              <Building2 className="h-8 w-8 text-gold-500" />
              <p className="max-w-xl text-base leading-relaxed text-navy-600">
                Headquartered in Hong Kong with operational teams across
                mainland China, the Gulf, and East Africa — built to move at
                the speed of your project.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
