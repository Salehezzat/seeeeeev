import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/content/projects";

const gradients = [
  "from-navy-700 via-navy-600 to-navy-800",
  "from-navy-800 via-navy-700 to-navy-600",
  "from-navy-600 via-navy-700 to-navy-900",
  "from-navy-900 via-navy-700 to-navy-600",
];

export function FeaturedProjects() {
  return (
    <section id="delivered" className="bg-white py-24 sm:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              eyebrow="Delivered Work"
              title="Featured Projects"
              description="A sample of engagements across power generation, materials supply, and renewable energy."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 hover:text-gold-600"
            >
              View all projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
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
  );
}
