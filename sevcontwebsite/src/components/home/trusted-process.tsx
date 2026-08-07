import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { trustedProcessSteps } from "@/content/process";

export function TrustedProcess() {
  return (
    <section className="bg-navy-50 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How We Work"
            title="Trusted Process"
            description="A consistent, transparent path from first inquiry to final delivery."
            align="center"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 overflow-x-auto pb-4">
            <ol className="mask-fade-x flex min-w-[840px] items-start gap-2 sm:min-w-0">
              {trustedProcessSteps.map((step, i) => (
                <li key={step.label} className="flex flex-1 flex-col items-center px-2 text-center">
                  <div className="relative flex w-full items-center">
                    <div
                      className={`h-px flex-1 ${i === 0 ? "opacity-0" : "bg-navy-900/15"}`}
                    />
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gold-400 bg-white text-sm font-bold text-navy-900">
                      {i + 1}
                    </span>
                    <div
                      className={`h-px flex-1 ${i === trustedProcessSteps.length - 1 ? "opacity-0" : "bg-navy-900/15"}`}
                    />
                  </div>
                  <h4 className="mt-4 font-display text-sm font-semibold text-navy-900">
                    {step.label}
                  </h4>
                  <p className="mt-1.5 max-w-[9rem] text-xs leading-relaxed text-navy-600">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
