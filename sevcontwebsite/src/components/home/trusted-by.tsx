import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/content/testimonials";

export function TrustedBy() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Client Base"
            title="Trusted Across Industries"
            description="A cross-section of the sectors and markets we serve — from oil & gas to renewable energy."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={`${t.industry}-${t.country}`} delay={i * 0.06}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-navy-900/8 bg-navy-50 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-bold text-gold-300">
                  {t.industry
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div className="mt-6">
                  <p className="font-display text-base font-semibold text-navy-900">
                    {t.industry}
                  </p>
                  <p className="mt-1 text-sm text-navy-600">
                    {t.focus} &middot; {t.country}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
