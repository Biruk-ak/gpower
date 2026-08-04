"use client";

import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Phone } from "lucide-react";
import { CONTACT, SITE } from "@/constants";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/animations/magnetic-button";

const HERO_METRICS = [
  { value: 2020, suffix: "", label: "Established", isYear: true },
  { value: 5, suffix: "– 100kW+", label: "System Range", isYear: false },
  { value: 10, suffix: "+", label: "Sectors Served", isYear: false },
  { value: 5, suffix: " yr", label: "Warranty", isYear: false },
];

function Metric({
  value,
  suffix,
  label,
  isYear,
  delay = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  isYear?: boolean;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {inView ? (isYear ? value : <CountUp end={value} duration={1.8} />) : 0}
        <span className="text-accent">{suffix}</span>
      </p>
      <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">
        {label}
      </p>
    </motion.div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden pt-24 pb-10 sm:pt-28 sm:pb-14"
    >
      {/* Background — kept visible */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/gp-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/35 to-dark/45" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-dark/90 to-transparent" />
      </div>

      <Container className="relative z-[2] flex w-full flex-1 flex-col justify-center">
        <div className="w-full text-center">
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="hidden h-px w-12 bg-accent/70 sm:block sm:w-20" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Ethiopian Green Energy · Est. 2023
            </p>
            <span className="hidden h-px w-12 bg-accent/70 sm:block sm:w-20" />
          </motion.div>

          <h1 className="mt-6 sm:mt-8">
            <span className="block overflow-hidden">
              <motion.span
                className="block font-display text-[clamp(3.5rem,12vw,8.5rem)] font-semibold leading-[0.9] tracking-tight text-white"
                initial={reduce ? false : { y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              >
                {SITE.name}
              </motion.span>
            </span>
            <span className="mt-3 block overflow-hidden">
              <motion.span
                className="block font-display text-lg font-medium tracking-[0.2em] text-white/65 uppercase sm:text-xl md:text-2xl md:tracking-[0.28em]"
                initial={reduce ? false : { y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                Manufacturing PLC
              </motion.span>
            </span>
          </h1>

          <motion.div
            className="mx-auto mt-8 h-1 w-16 rounded-full bg-accent sm:mt-10"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.p
            className="mx-auto mt-7 max-w-3xl font-display text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl md:text-4xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Reliable power for a{" "}
            <span className="text-accent">sustainable Ethiopia</span>.
          </motion.p>

          <motion.p
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Solar and energy storage systems for homes, hospitals, industry, and
            institutions — engineered for uninterrupted power.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.6 }}
          >
            <MagneticButton>
              <Button asChild size="xl" variant="accent">
                <Link href="#contact">
                  Contact Us
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button
                asChild
                size="xl"
                className="border border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
              >
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>
                  <Phone className="size-4" />
                  {CONTACT.phone}
                </a>
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.p
            className="mt-6 text-xl text-white/45"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
          >
            Sister company of {SITE.sisterCompany}
          </motion.p>
        </div>

        <motion.div
          className="mt-14 grid w-full grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:mt-16 sm:grid-cols-4 sm:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {HERO_METRICS.map((item, i) => (
            <Metric key={item.label} {...item} delay={0.85 + i * 0.06} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
