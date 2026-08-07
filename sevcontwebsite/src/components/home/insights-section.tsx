import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { articles } from "@/content/articles";

export function InsightsSection() {
  return (
    <section id="articles" className="bg-navy-50 py-24 sm:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              eyebrow="Insights"
              title="Latest Insights"
              description="Market updates, engineering guidance, and practical import know-how."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 hover:text-gold-600"
            >
              View all insights
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

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
                  </div>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
