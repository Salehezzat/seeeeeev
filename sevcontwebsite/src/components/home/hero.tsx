"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { heroStats } from "@/content/process";

const GlobeCanvas = dynamic(
  () => import("@/components/three/globe-canvas").then((m) => m.GlobeCanvas),
  { ssr: false }
);

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-navy-900">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[36rem] w-[36rem] rounded-full bg-gold-400/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[30rem] w-[30rem] rounded-full bg-navy-400/20 blur-[120px]" />

      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
        <GlobeCanvas className="h-full w-full opacity-90 [mask-image:radial-gradient(circle_at_60%_45%,black_55%,transparent_78%)]" />
      </div>

      <Container className="relative z-10 flex flex-1 flex-col justify-center pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 backdrop-blur-md">
            Hong Kong · China · Saudi Arabia · Egypt · Rwanda
          </span>

          <h1 className="font-display text-4xl font-bold leading-[1.08] text-balance text-white sm:text-5xl lg:text-6xl">
            Global Industrial Sourcing &amp; Engineering Solutions
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-100/80 sm:text-lg">
            Helping businesses connect with trusted manufacturers across Asia
            while delivering engineering expertise, logistics excellence, and
            turnkey industrial solutions.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/rfq" size="lg">
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Explore Solutions
            </Button>
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="border-l border-white/15 pl-4">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-2xl font-bold text-white sm:text-3xl">
                {stat.value}
              </dd>
              <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-navy-200">
                {stat.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </Container>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 mx-auto mb-8 flex flex-col items-center gap-1 text-navy-300"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-4 w-4" />
      </motion.div>
    </section>
  );
}
