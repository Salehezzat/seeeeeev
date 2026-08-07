import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use for ${siteConfig.legalName}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="The terms governing your use of this website."
      />
      <section className="bg-white py-20">
        <Container className="max-w-3xl space-y-6 text-base leading-relaxed text-navy-700">
          <p>
            By accessing this website, you agree to these terms of use. If
            you do not agree, please do not use this site.
          </p>
          <h2 className="font-display text-xl font-semibold text-navy-900">
            Use of Content
          </h2>
          <p>
            All content on this website — including text, graphics, and
            branding — is the property of {siteConfig.legalName} unless
            otherwise noted, and may not be reproduced without permission.
          </p>
          <h2 className="font-display text-xl font-semibold text-navy-900">
            Quotations
          </h2>
          <p>
            Quotations provided through this website are indicative and
            subject to confirmation following technical and commercial
            review.
          </p>
          <h2 className="font-display text-xl font-semibold text-navy-900">
            Contact
          </h2>
          <p>
            For questions about these terms, contact us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-gold-600 hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
