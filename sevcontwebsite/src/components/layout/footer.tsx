import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { Container } from "@/components/ui/container";
import { Logo } from "./logo";
import { footerNav, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-100">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-300">
              {siteConfig.tagline} Global industrial sourcing and engineering
              solutions across Asia, Africa, and the Middle East.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-navy-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Solutions
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNav.solutions.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-navy-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNav.resources.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-navy-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-navy-300 transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-navy-400">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-navy-300 transition-colors hover:text-gold-300"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-navy-300 transition-colors hover:text-gold-300"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="text-navy-300 transition-colors hover:text-gold-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="flex items-center gap-6 text-xs text-navy-400">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
