import type { Metadata } from "next";
import { Clock, ShieldCheck, FileCheck } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { RfqForm } from "@/components/rfq/rfq-form";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Submit your requirement and receive a technical and commercial quotation from SEVCONT's engineering and sourcing team within 24 hours.",
  alternates: { canonical: "/rfq" },
};

const assurances = [
  { icon: Clock, label: "Response within 24 hours" },
  { icon: ShieldCheck, label: "Engineering-reviewed quotations" },
  { icon: FileCheck, label: "Transparent, itemized pricing" },
];

export default function RfqPage() {
  return (
    <>
      <PageHero
        eyebrow="Request for Quotation"
        title="Tell us what you need"
        description="Share your requirement and our engineering and sourcing team will respond with a technical and commercial plan within 24 hours."
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <RfqForm />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-navy-900/8 bg-navy-50 p-7">
                <h3 className="font-display text-lg font-semibold text-navy-900">
                  What happens next
                </h3>
                <ul className="mt-5 space-y-5">
                  {assurances.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-start gap-3">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                      <span className="text-sm text-navy-700">{label}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm leading-relaxed text-navy-600">
                  For urgent requirements, email us directly at{" "}
                  <a href="mailto:info@sevcont.com" className="font-medium text-gold-600 hover:underline">
                    info@sevcont.com
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
