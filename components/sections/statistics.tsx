"use client";

import { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { COMPANY_STATS } from "@/data/content";
import { Container } from "@/components/ui/container";
import { FadeUp } from "@/components/animations/reveal";
import { Particles } from "@/components/animations/particles";

function StatItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {inView ? <CountUp end={value} duration={2.4} separator="," /> : 0}
        <span className="text-accent">{suffix}</span>
      </div>
      <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-white/50">
        {label}
      </p>
    </div>
  );
}

export function Statistics() {
  return (
    <section
      id="statistics"
      className="relative overflow-hidden animated-gradient py-20 sm:py-24"
    >
      <Particles count={18} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent,_rgba(8,28,21,0.35))]" />
      <Container className="relative">
        <FadeUp>
          <p className="mb-12 text-center text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Impact in numbers
          </p>
        </FadeUp>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5 md:gap-6">
          {COMPANY_STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
