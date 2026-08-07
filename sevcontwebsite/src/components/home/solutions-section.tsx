import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { services } from "@/content/services";

export function SolutionsSection() {
  return (
    <section className="relative overflow-hidden bg-navy-800 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-gold-400/10 blur-[140px]" />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="What We Deliver"
            title="Our Solutions"
            description="Four integrated capabilities — sourced, engineered, and delivered under one accountable partner."
            light
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.08}>
              <GlassCard className="group flex h-full flex-col p-7 transition-all duration-300 hover:border-gold-400/40 hover:bg-white/[0.09]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/15 text-gold-300 transition-transform duration-300 group-hover:scale-110">
                  <DynamicIcon name={service.icon} className="h-6 w-6" />
                </div>

                <h3 className="mt-6 font-display text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-100/75">
                  {service.summary}
                </p>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {service.items.slice(0, 4).map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-[0.65rem] font-medium text-navy-100/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services#${service.slug}`}
                  className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-gold-300 transition-colors hover:text-gold-200"
                >
                  Read More
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
