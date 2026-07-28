"use client";

import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Building2,
  Leaf,
} from "lucide-react";
import { SITE } from "@/constants";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { AnimatedBlob } from "@/components/animations/animated-blob";
import { Particles } from "@/components/animations/particles";

const SECTORS = [
  "Hospitals",
  "Hotels",
  "Embassies",
  "Data Centers",
  "Agriculture",
  "Telecom",
  "Homes",
];

const HERO_METRICS = [
  { value: 2023, suffix: "", label: "Established", isYear: true },
  { value: 12, suffix: "–100kW+", label: "System Range", isYear: false },
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
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-[1.75rem]">
        {inView ? (
          isYear ? (
            value
          ) : (
            <CountUp end={value} duration={1.8} />
          )
        ) : (
          0
        )}
        <span className="text-primary">{suffix}</span>
      </p>
      <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/40">
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
      className="relative isolate min-h-[100svh] overflow-hidden noise-overlay gradient-mesh pt-28 pb-12 sm:pt-32 sm:pb-16"
    >
      <Particles count={16} />
      <AnimatedBlob className="-left-32 top-16 h-[22rem] w-[22rem] opacity-60" color="accent" />
      <AnimatedBlob
        className="right-[-6rem] top-28 h-[28rem] w-[28rem] opacity-50"
        color="primary"
        delay={2}
      />

      {/* Soft brand watermark */}
      <motion.p
        aria-hidden
        className="pointer-events-none absolute -right-4 top-24 select-none font-display text-[7rem] font-semibold leading-none tracking-tighter text-primary/[0.04] sm:text-[10rem] lg:right-8 lg:text-[14rem]"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        G
      </motion.p>

      <Container className="relative z-[2]">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Copy column */}
          <div className="lg:col-span-6 xl:col-span-6">
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card/75 px-3.5 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur-md"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <Leaf className="size-3.5" />
              Ethiopian Green Energy · Est. 2023
            </motion.div>

            <motion.p
              className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.32em] text-primary sm:text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              {SITE.name} Manufacturing PLC
            </motion.p>

            <h1 className="font-display text-[2.55rem] font-semibold leading-[1.02] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[3.9rem] xl:text-[4.25rem]">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "115%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
                >
                  Reliable power.
                </motion.span>
              </span>
              <span className="mt-1 block overflow-hidden">
                <motion.span
                  className="relative inline-block text-primary"
                  initial={reduce ? false : { y: "115%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
                >
                  Sustainable Ethiopia.
                  <motion.span
                    aria-hidden
                    className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-gradient-to-r from-primary via-accent to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  />
                </motion.span>
              </span>
            </h1>

            <motion.p
              className="mt-7 max-w-xl text-base leading-relaxed text-foreground/60 sm:text-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35 }}
            >
              We design, supply, and install advanced solar power and energy storage
              solutions — enabling uninterrupted, efficient electricity for homes,
              hospitals, industry, and institutions across Ethiopia.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45 }}
            >
              <MagneticButton>
                <Button asChild size="xl">
                  <Link href="#contact">
                    Start Your Project
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button asChild variant="secondary" size="xl" className="group">
                  <Link href="#projects">
                    See Installations
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>

            <motion.p
              className="mt-6 flex items-center gap-2 text-sm text-foreground/45"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Building2 className="size-3.5 text-primary" />
              Sister company of Five Star Elevator Manufacturing PLC
            </motion.p>

            <motion.div
              className="mt-10 grid grid-cols-2 gap-6 border-t border-foreground/8 pt-7 sm:grid-cols-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              {HERO_METRICS.map((item, i) => (
                <Metric key={item.label} {...item} delay={0.6 + i * 0.07} />
              ))}
            </motion.div>
          </div>

          {/* Visual column */}
          <div className="relative lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:ml-auto lg:max-w-none">
              {/* Soft rotating frame */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-5 rounded-[2.4rem] border border-dashed border-primary/20"
                animate={reduce ? undefined : { rotate: [0, 1.5, 0, -1.5, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-2 rounded-[2.1rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/25 blur-2xl"
                animate={reduce ? undefined : { opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Main image */}
              <motion.div
                className="relative z-[1] overflow-hidden rounded-[1.85rem] bg-dark shadow-[0_40px_100px_-36px_rgba(11,110,79,0.55)]"
                initial={reduce ? false : { opacity: 0, y: 28, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.95, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative aspect-[5/6] sm:aspect-[4/5]">
                  <motion.div
                    className="absolute inset-0"
                    initial={reduce ? false : { scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src="/images/system-showcase.png"
                      alt="G-Power solar inverter and lithium battery energy storage system"
                      fill
                      priority
                      sizes="(max-width: 1024px) 90vw, 44vw"
                      className="object-cover object-center"
                    />
                  </motion.div>

                  {!reduce ? (
                    <motion.div
                      aria-hidden
                      className="absolute inset-0 origin-left bg-primary"
                      initial={{ scaleX: 1 }}
                      animate={{ scaleX: 0 }}
                      transition={{
                        duration: 0.95,
                        delay: 0.18,
                        ease: [0.76, 0, 0.24, 1],
                      }}
                    />
                  ) : null}

                  <div className="absolute inset-0 bg-gradient-to-t from-dark/75 via-dark/15 to-transparent" />

                  <motion.div
                    className="absolute left-4 top-4 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    12 kW – 100 kW+
                  </motion.div>

                  <motion.div
                    className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.95, duration: 0.55 }}
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-accent">
                        <BatteryCharging className="size-5" />
                      </span>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                          Solar · Storage · Hybrid
                        </p>
                        <p className="mt-1 text-sm font-medium leading-snug text-white">
                          Custom power backup for healthcare, telecom, commerce & homes
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Secondary stacked photo */}
              <motion.div
                className="absolute -bottom-6 -left-3 z-[2] hidden w-[42%] overflow-hidden rounded-2xl border border-border shadow-2xl sm:block lg:-left-8"
                initial={reduce ? false : { opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.75, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/install-residential.png"
                    alt="G-Power residential energy storage installation"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                </div>
              </motion.div>

              {/* Floating savings chip */}
              <motion.div
                className="absolute -right-2 top-20 z-[2] hidden rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-xl backdrop-blur-md sm:block lg:-right-4"
                initial={{ opacity: 0, x: 16 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: reduce ? 0 : [0, -7, 0],
                }}
                transition={{
                  opacity: { delay: 1.05, duration: 0.45 },
                  x: { delay: 1.05, duration: 0.45 },
                  y: { delay: 1.4, duration: 5.5, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <p className="text-[11px] uppercase tracking-[0.16em] text-foreground/45">
                  Uninterrupted
                </p>
                <p className="font-display text-lg font-semibold text-primary">
                  Power Anytime
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Sector ribbon */}
        <motion.div
          className="mt-16 border-t border-foreground/8 pt-6 sm:mt-20"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.55 }}
        >
          <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/35">
            Trusted across Ethiopia’s critical sectors
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 sm:gap-x-3">
            {SECTORS.map((sector, i) => (
              <motion.span
                key={sector}
                className="rounded-full border border-foreground/8 bg-card/60 px-3.5 py-1.5 text-xs font-medium text-foreground/65 backdrop-blur-sm"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.95 + i * 0.05, duration: 0.4 }}
              >
                {sector}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.a
          href="#about"
          className="mx-auto mt-10 flex w-fit flex-col items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/35 transition hover:text-primary"
          aria-label="Scroll to about section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Discover G-Power
          <motion.span
            animate={reduce ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="size-4" />
          </motion.span>
        </motion.a>
      </Container>
    </section>
  );
}
