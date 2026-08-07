import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/10 blur-[140px]" />

      <Container className="relative text-center">
        <Reveal>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            Request for Quotation
          </span>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold text-balance text-white sm:text-4xl lg:text-5xl">
            Let&rsquo;s Build Your Next Project Together
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-navy-100/80 sm:text-lg">
            Tell us what you need — our engineering and sourcing team will
            respond with a technical and commercial plan within 24 hours.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/rfq" size="lg">
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Contact Sales
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
