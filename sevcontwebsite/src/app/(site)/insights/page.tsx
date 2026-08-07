import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { articles } from "@/content/articles";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Market updates, engineering guides, and import know-how from SEVCONT's sourcing and engineering team.",
  alternates: { canonical: "/insights" },
};

const categories = [
  { key: "Market Update", id: "market-updates", label: "Market Updates" },
  { key: "Engineering", id: "technical-guides", label: "Technical Guides" },
  { key: "Import Guide", id: "import-guides", label: "Import Guides" },
] as const;

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Market intelligence, engineering know-how"
        description="Practical guidance from the team sourcing, engineering, and shipping your project — updated regularly."
      />

      <section id="articles" className="scroll-mt-24 bg-white py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Latest" title="All Articles" />
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {articles.map((article, i) => (
              <Reveal key={article.slug} delay={i * 0.08}>
                <Link href={`/insights/${article.slug}`} className="group block h-full">
                  <Card className="flex h-full flex-col p-7 transition-shadow duration-300 hover:shadow-[0_20px_60px_-20px_rgba(7,20,38,0.2)]">
                    <span className="inline-flex w-fit rounded-full bg-gold-400/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-gold-600">
                      {article.category}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-navy-900 transition-colors group-hover:text-gold-600">
                      {article.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy-600">
                      {article.excerpt}
                    </p>
                    <div className="mt-auto flex items-center gap-4 pt-6 text-xs text-navy-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(article.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span>{article.readTime}</span>
                      <ArrowUpRight className="ml-auto h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {categories.map((cat) => {
        const items = articles.filter((a) => a.category === cat.key);
        if (items.length === 0) return null;
        return (
          <section key={cat.id} id={cat.id} className="scroll-mt-24 bg-navy-50 py-20">
            <Container>
              <Reveal>
                <SectionHeading eyebrow="Category" title={cat.label} />
              </Reveal>
              <div className="mt-8 space-y-3">
                {items.map((a) => (
                  <Reveal key={a.slug}>
                    <Link
                      href={`/insights/${a.slug}`}
                      className="flex items-center justify-between rounded-2xl border border-navy-900/8 bg-white px-6 py-4 transition-colors hover:border-gold-400/40"
                    >
                      <span className="font-medium text-navy-900">{a.title}</span>
                      <ArrowUpRight className="h-4 w-4 text-navy-400" />
                    </Link>
                  </Reveal>
                ))}
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}
