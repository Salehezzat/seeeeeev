"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, Handshake as HandshakeIcon, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";

function toPercent(lat: number, lng: number) {
  return {
    x: ((lng + 180) / 360) * 100,
    y: ((90 - lat) / 180) * 100,
  };
}

export function GlobalPresence() {
  const [active, setActive] = useState(0);
  const market = siteConfig.markets[active];

  return (
    <section id="presence" className="bg-navy-50 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Where We Operate"
            title="Global Presence"
            description="Select a market to see our footprint — active projects, partner network, and services on the ground."
            align="center"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-14 overflow-hidden rounded-3xl border border-navy-900/8 bg-navy-900">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
            <div className="relative aspect-[16/9] w-full sm:aspect-[2/1]">
              {siteConfig.markets.map((m, i) => {
                const p = toPercent(m.lat, m.lng);
                const isActive = i === active;
                return (
                  <button
                    key={m.code}
                    onClick={() => setActive(i)}
                    aria-label={`View ${m.name}`}
                    className="group absolute -translate-x-1/2 -translate-y-1/2 outline-none"
                    style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  >
                    <span
                      className={`relative flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                        isActive
                          ? "scale-125 border-gold-300 bg-gold-400"
                          : m.live
                            ? "border-gold-400/70 bg-navy-700"
                            : "border-navy-400/50 bg-navy-800"
                      }`}
                    >
                      {isActive && (
                        <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-gold-400/60" />
                      )}
                    </span>
                    <span
                      className={`pointer-events-none absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap rounded-full px-2 py-0.5 text-[0.6rem] font-medium transition-opacity duration-200 ${
                        isActive
                          ? "bg-gold-400 text-navy-900 opacity-100"
                          : "bg-white/10 text-navy-100 opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {m.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={market.code}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="relative border-t border-white/10 bg-navy-900/95 p-6 backdrop-blur sm:p-8"
              >
                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                  <div>
                    <div className="flex items-center gap-2 text-gold-300">
                      <MapPin className="h-4 w-4" />
                      <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                        {market.live ? "Active Market" : "Future Expansion"}
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                      {market.name}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-navy-200">
                      {market.blurb}
                    </p>
                  </div>

                  <div className="flex gap-8">
                    <div>
                      <p className="flex items-center gap-1.5 text-2xl font-bold text-white">
                        <Briefcase className="h-4 w-4 text-gold-400" />
                        {market.projects}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-wide text-navy-300">
                        Projects
                      </p>
                    </div>
                    <div>
                      <p className="flex items-center gap-1.5 text-2xl font-bold text-white">
                        <HandshakeIcon className="h-4 w-4 text-gold-400" />
                        {market.partners}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-wide text-navy-300">
                        Partners
                      </p>
                    </div>
                  </div>
                </div>

                {market.services.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {market.services.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-navy-100"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        <p className="sr-only" aria-hidden={false}>
          {siteConfig.markets.filter((m) => !m.live).map((m) => m.name).join(", ")}{" "}
          marked as future expansion markets.
        </p>
      </Container>
    </section>
  );
}
