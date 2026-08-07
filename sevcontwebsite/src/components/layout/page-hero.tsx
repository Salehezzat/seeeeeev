import { Container } from "@/components/ui/container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 pb-20 pt-40">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-gold-400/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-navy-400/20 blur-[120px]" />
      <Container className="relative">
        <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
          <span className="h-px w-8 bg-current" />
          {eyebrow}
        </span>
        <h1 className="max-w-2xl font-display text-4xl font-bold text-balance text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-100/80 sm:text-lg">
          {description}
        </p>
      </Container>
    </section>
  );
}
