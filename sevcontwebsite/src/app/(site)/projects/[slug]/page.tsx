import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, Factory } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 pb-20 pt-40">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-gold-400/10 blur-[120px]" />
        <Container className="relative">
          <div className="flex flex-wrap items-center gap-3 text-sm text-navy-200">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-gold-300" />
              {project.location}
            </span>
            <span className="text-navy-500">&middot;</span>
            <span className="flex items-center gap-1.5">
              <Factory className="h-4 w-4 text-gold-300" />
              {project.industry}
            </span>
          </div>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold text-balance text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-100/80 sm:text-lg">
            {project.summary}
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <h2 className="font-display text-2xl font-semibold text-navy-900">
                Project Overview
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-600">
                {project.description}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-navy-900/8 bg-navy-50 p-7">
                <h3 className="font-display text-lg font-semibold text-navy-900">
                  At a Glance
                </h3>
                <dl className="mt-5 space-y-4">
                  {project.stats.map((s) => (
                    <div key={s.label} className="flex items-center justify-between border-b border-navy-900/8 pb-3 last:border-0">
                      <dt className="text-sm text-navy-600">{s.label}</dt>
                      <dd className="font-display text-sm font-bold text-navy-900">{s.value}</dd>
                    </div>
                  ))}
                </dl>
                <Button href="/rfq" className="mt-6 w-full">
                  Start a Similar Project
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
