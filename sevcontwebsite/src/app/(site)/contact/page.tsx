import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SEVCONT GLOBAL — sales, technical support, and general enquiries across our served markets.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const liveMarkets = siteConfig.markets.filter((m) => m.live);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project"
        description="Reach our sales or technical team directly, or send a message and we'll route it to the right specialist."
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <ContactForm />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-4">
                <div className="rounded-3xl border border-navy-900/8 bg-navy-50 p-7">
                  <h3 className="font-display text-lg font-semibold text-navy-900">
                    Direct Contact
                  </h3>
                  <ul className="mt-5 space-y-4 text-sm text-navy-700">
                    <li className="flex items-center gap-3">
                      <Mail className="h-4.5 w-4.5 text-gold-500" />
                      <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-600">
                        {siteConfig.email}
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="h-4.5 w-4.5 text-gold-500" />
                      <a href={`tel:${siteConfig.phone}`} className="hover:text-gold-600">
                        {siteConfig.phone}
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <MessageCircle className="h-4.5 w-4.5 text-gold-500" />
                      <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-gold-600">
                        WhatsApp
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-navy-900/8 bg-navy-50 p-7">
                  <h3 className="font-display text-lg font-semibold text-navy-900">
                    Regional Offices
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {liveMarkets.map((m) => (
                      <li key={m.code} className="flex items-center gap-3 text-sm text-navy-700">
                        <MapPin className="h-4 w-4 shrink-0 text-gold-500" />
                        {m.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
