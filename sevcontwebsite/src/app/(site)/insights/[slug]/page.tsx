import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { articles } from "@/content/articles";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${article.slug}` },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          datePublished: article.date,
          author: { "@type": "Organization", name: siteConfig.legalName },
          publisher: { "@type": "Organization", name: siteConfig.legalName },
        }}
      />
      <section className="relative overflow-hidden bg-navy-900 pb-20 pt-40">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <Container className="relative max-w-3xl">
          <span className="inline-flex w-fit rounded-full bg-gold-400/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-gold-300">
            {article.category}
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold text-balance text-white sm:text-4xl">
            {article.title}
          </h1>
          <div className="mt-5 flex items-center gap-4 text-sm text-navy-300">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-gold-300" />
              {new Date(article.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span>{article.readTime}</span>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="text-lg leading-relaxed text-navy-700">
              {article.excerpt}
            </p>
            <p className="mt-6 text-base leading-relaxed text-navy-600">
              This article is part of SEVCONT&rsquo;s ongoing insights series,
              drawn from active sourcing, engineering, and logistics
              engagements across our served markets. For a detailed
              discussion tailored to your project, reach out to our team.
            </p>
            <div className="mt-10 rounded-2xl border border-navy-900/8 bg-navy-50 p-6">
              <p className="text-sm text-navy-600">
                Have a question about this topic, or need a technical review
                for your project?
              </p>
              <Button href="/contact" className="mt-4">
                Talk to Our Team
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
