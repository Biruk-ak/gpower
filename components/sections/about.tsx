"use client";

import Image from "next/image";
import { Eye, Target, Leaf, Wallet, Zap, Wrench } from "lucide-react";
import { ABOUT_HIGHLIGHTS } from "@/data/content";
import { Container } from "@/components/ui/container";
import { FadeUp, Stagger, StaggerItem } from "@/components/animations/reveal";

const HIGHLIGHT_ICONS = {
  leaf: Leaf,
  wallet: Wallet,
  zap: Zap,
  wrench: Wrench,
} as const;

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
          <FadeUp className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/images/about.png"
                alt="G-Power 50kW inverter and battery system"
                fill
                sizes="(max-width: 1024px) 80vw, 36vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-dark/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-xl bg-dark/85 px-3.5 py-2 text-white backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                  Est. 2020
                </p>
                <p className="text-xs text-white/70">ISO 9001 Certified</p>
              </div>
            </div>
          </FadeUp>

          <div>
            <FadeUp>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                About Us
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                G-Power Manufacturing PLC
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/60">
                Founded in 2020, we are revolutionizing Ethiopia&apos;s energy landscape with
                clean, dependable power solutions.
              </p>
            </FadeUp>

            <FadeUp delay={0.08} className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-foreground/8 bg-card px-4 py-4">
                <div className="mb-2 flex items-center gap-2 text-primary">
                  <Target className="size-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Mission</span>
                </div>
                <p className="text-sm leading-relaxed text-foreground/60">
                  Sustainable energy that keeps communities and businesses powered without
                  interruption.
                </p>
              </div>
              <div className="rounded-2xl border border-foreground/8 bg-card px-4 py-4">
                <div className="mb-2 flex items-center gap-2 text-primary">
                  <Eye className="size-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Vision</span>
                </div>
                <p className="text-sm leading-relaxed text-foreground/60">
                  Ethiopia&apos;s leading provider of advanced solar and energy storage systems.
                </p>
              </div>
            </FadeUp>

            <Stagger className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4" stagger={0.06}>
              {ABOUT_HIGHLIGHTS.map((item) => {
                const Icon = HIGHLIGHT_ICONS[item.icon];
                return (
                  <StaggerItem key={item.id}>
                    <div>
                      <span className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-4" />
                      </span>
                      <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-foreground/50">
                        {item.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </div>
      </Container>
    </section>
  );
}
