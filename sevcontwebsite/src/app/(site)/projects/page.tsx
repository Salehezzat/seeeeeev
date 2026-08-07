import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/content/projects";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies and delivered projects across power generation, structural steel supply, and renewable energy — spanning our served markets.",
  alternates: { canonical: "/projects" },
};

const gradients = [
  "from-navy-700 via-navy-600 to-navy-800",
  "from-navy-800 via-navy-700 to-navy-600",
  "from-navy-600 via-navy-700 to-navy-900",
  "from-navy-900 via-navy-700 to-navy-600",
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Delivered work, verified outcomes"
        description="Case studies from power generation, materials supply, and renewable energy engagements across our served markets."
      />

      <section id="case-studies" className="scroll-mt-24 bg-white py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Case Studies"
              title="Delivered Projects"
              description="A sample of engagements managed end-to-end by SEVCONT's sourcing and engineering team."
            />
          </Reveal>

          <div id="delivered" className="mt-14 grid scroll-mt-24 gap-6 sm:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block overflow-hidden rounded-3xl border border-navy-900/8 shadow-[0_4px_24px_-8px_rgba(7,20,38,0.08)] transition-shadow duration-300 hover:shadow-[0_20px_60px_-20px_rgba(7,20,38,0.3)]"
                >
                  <div
                    className={`relative flex h-56 items-end overflow-hidden bg-gradient-to-br p-6 ${gradients[i % gradients.length]}`}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
                    <div className="absolute right-6 top-6 rounded-full bg-white/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-white backdrop-blur-md">
                      {project.industry}
                    </div>
                    <div className="relative flex items-center gap-1.5 text-sm font-medium text-white/90">
                      <MapPin className="h-3.5 w-3.5 text-gold-300" />
                      {project.location}
                    </div>
                  </div>
                  <div className="bg-white p-6">
                    <h3 className="font-display text-lg font-semibold text-navy-900 transition-colors group-hover:text-gold-600">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-600">
                      {project.summary}
                    </p>
                    <div className="mt-5 grid grid-cols-3 gap-2 border-t border-navy-900/8 pt-4">
                      {project.stats.map((s) => (
                        <div key={s.label}>
                          <p className="font-display text-sm font-bold text-navy-900">
                            {s.value}
                          </p>
                          <p className="text-[0.65rem] uppercase tracking-wide text-navy-500">
                            {s.label}
                          </p>
                        </div>
                      ))}
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600">
                      Learn More
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="countries" className="scroll-mt-24 bg-navy-50 py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Reach"
              title="Countries Served"
              description="Active and upcoming markets across Asia, the Middle East, and Africa."
              align="center"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {siteConfig.markets.map((m) => (
                <span
                  key={m.code}
                  className={`rounded-full border px-5 py-2.5 text-sm font-medium ${
                    m.live
                      ? "border-gold-400/40 bg-white text-navy-900"
                      : "border-navy-900/10 bg-white/60 text-navy-500"
                  }`}
                >
                  {m.name}
                  {!m.live && <span className="ml-2 text-xs text-navy-400">Coming Soon</span>}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
