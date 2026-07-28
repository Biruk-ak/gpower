"use client";

import {
  Zap,
  Rocket,
  Shield,
  BadgeCheck,
  Headphones,
  Leaf,
} from "lucide-react";
import { WHY_CHOOSE } from "@/data/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";

const ICONS = {
  zap: Zap,
  rocket: Rocket,
  shield: Shield,
  "badge-check": BadgeCheck,
  headphones: Headphones,
  leaf: Leaf,
} as const;

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built for uninterrupted power and lasting trust"
          description="We deliver innovative energy solutions that safeguard businesses and homes from outages, fluctuations, and rising generator costs."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {WHY_CHOOSE.map((item, index) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS] ?? Zap;
            return (
              <StaggerItem key={item.id}>
                <article
                  className={cn(
                    "group relative h-full overflow-hidden rounded-[1.75rem] border border-foreground/8 bg-card p-7 shadow-[0_24px_60px_-40px_rgba(8,28,21,0.4)] transition duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_30px_70px_-35px_rgba(11,110,79,0.35)]"
                  )}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/20 blur-2xl transition duration-500 group-hover:bg-accent/40"
                  />
                  <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/8 text-primary transition duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <Icon className="size-6" />
                    <span className="absolute inset-0 animate-ping rounded-2xl bg-primary/20 opacity-0 group-hover:opacity-40" />
                  </div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
                    0{index + 1}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                    {item.description}
                  </p>
                  <div
                    aria-hidden
                    className="mt-6 h-1.5 w-16 overflow-hidden rounded-full bg-foreground/5"
                  >
                    <div className="h-full w-0 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-700 group-hover:w-full" />
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
