import type { Metadata } from "next";
import { FileText, Download as DownloadIcon } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { downloads } from "@/content/downloads";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Downloads",
  description:
    "Download the SEVCONT company profile, service brochures, and product catalogues.",
  alternates: { canonical: "/downloads" },
};

const groups = [
  { key: "Company Profile", id: "company-profile" },
  { key: "Brochures", id: "brochures" },
  { key: "Catalogues", id: "catalogues" },
] as const;

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Downloads"
        title="Company documents & product literature"
        description="Request our company profile, service brochures, and product catalogues — sent directly to your inbox."
      />

      {groups.map((group, gi) => {
        const items = downloads.filter((d) => d.category === group.key);
        if (items.length === 0) return null;
        return (
          <section
            key={group.id}
            id={group.id}
            className={`scroll-mt-24 py-20 sm:py-24 ${gi % 2 === 0 ? "bg-white" : "bg-navy-50"}`}
          >
            <Container>
              <Reveal>
                <SectionHeading eyebrow="Downloads" title={group.key} />
              </Reveal>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((d, i) => (
                  <Reveal key={d.title} delay={i * 0.06}>
                    <div className="flex h-full flex-col rounded-2xl border border-navy-900/8 bg-white p-6">
                      <FileText className="h-8 w-8 text-gold-500" />
                      <h3 className="mt-4 font-display text-base font-semibold text-navy-900">
                        {d.title}
                      </h3>
                      <p className="mt-1 text-xs uppercase tracking-wide text-navy-400">
                        {d.fileType} &middot; {d.size}
                      </p>
                      <a
                        href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                          `Download request: ${d.title}`
                        )}`}
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 hover:text-gold-700"
                      >
                        <DownloadIcon className="h-4 w-4" />
                        Request Download
                      </a>
                    </div>
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
