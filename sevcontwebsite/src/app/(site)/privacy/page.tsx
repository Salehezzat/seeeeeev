import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.legalName}.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How SEVCONT GLOBAL collects, uses, and protects your information."
      />
      <section className="bg-white py-20">
        <Container className="max-w-3xl space-y-6 text-base leading-relaxed text-navy-700">
          <p>
            {siteConfig.legalName} (&ldquo;SEVCONT&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;) respects your privacy. This policy explains what
            information we collect through this website, how we use it, and
            the choices you have.
          </p>
          <h2 className="font-display text-xl font-semibold text-navy-900">
            Information We Collect
          </h2>
          <p>
            We collect information you provide directly, such as through our
            Request for Quotation and Contact forms — including your name,
            company, email, phone number, and project details.
          </p>
          <h2 className="font-display text-xl font-semibold text-navy-900">
            How We Use Information
          </h2>
          <p>
            We use submitted information solely to respond to your enquiry,
            prepare quotations, and provide relevant updates about our
            services. We do not sell your information to third parties.
          </p>
          <h2 className="font-display text-xl font-semibold text-navy-900">
            Contact
          </h2>
          <p>
            For questions about this policy, contact us at{" "}
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
