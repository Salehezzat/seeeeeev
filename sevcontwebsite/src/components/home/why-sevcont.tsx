import {
  Handshake,
  Tag,
  Headset,
  BadgeCheck,
  Truck,
  Globe,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { whySevcontProcess } from "@/content/process";

const trustPoints: { label: string; icon: LucideIcon }[] = [
  { label: "Reliable Suppliers", icon: Handshake },
  { label: "Competitive Pricing", icon: Tag },
  { label: "Technical Support", icon: Headset },
  { label: "Quality Assurance", icon: BadgeCheck },
  { label: "Fast Delivery", icon: Truck },
  { label: "International Standards", icon: Globe },
];

export function WhySevcont() {
  return (
    <section id="why" className="bg-white py-24 sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <div className="relative">
              <SectionHeading
                eyebrow="Why SEVCONT"
                title="Engineering-led sourcing, not just trading"
                description="We embed technical review at every step, so what you order matches exactly what your project needs — validated, inspected, and delivered on schedule."
              />

              <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-3xl bg-navy-900">
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-gold-400/20 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-navy-400/30 blur-3xl" />
                <svg
                  viewBox="0 0 400 300"
                  className="absolute inset-0 h-full w-full"
                  fill="none"
                >
                  <rect x="40" y="180" width="60" height="90" fill="#102a43" stroke="#35597e" />
                  <rect x="110" y="140" width="60" height="130" fill="#16324f" stroke="#35597e" />
                  <rect x="180" y="100" width="60" height="170" fill="#102a43" stroke="#35597e" />
                  <rect x="250" y="150" width="60" height="120" fill="#16324f" stroke="#35597e" />
                  <line x1="30" y1="270" x2="330" y2="270" stroke="#d4af37" strokeWidth="1.5" />
                  {Array.from({ length: 6 }).map((_, i) => (
                    <circle
                      key={i}
                      cx={70 + i * 45}
                      cy={90}
                      r="2.5"
                      fill="#d4af37"
                      opacity={0.8}
                    />
                  ))}
                  <path
                    d="M60 90 L340 90"
                    stroke="#d4af37"
                    strokeDasharray="2 6"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                </svg>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gold-300">
                      Engineering Review
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">
                      Validated to international standards
                    </p>
                  </div>
                  <BadgeCheck className="h-8 w-8 text-gold-400" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <ol className="relative border-l border-navy-900/10 pl-8">
              {whySevcontProcess.map((step, i) => (
                <li key={step.label} className="relative pb-9 last:pb-0">
                  <span className="absolute -left-[calc(2rem+5px)] flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-gold-400 bg-white text-[0.65rem] font-bold text-navy-900">
                    {i + 1}
                  </span>
                  <h4 className="font-display text-base font-semibold text-navy-900">
                    {step.label}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-navy-600">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-navy-900/8 bg-navy-900/8 sm:grid-cols-3 lg:grid-cols-6">
            {trustPoints.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 bg-white px-4 py-8 text-center transition-colors hover:bg-navy-50"
              >
                <Icon className="h-6 w-6 text-gold-500" />
                <span className="text-xs font-semibold text-navy-800">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
