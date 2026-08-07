"use client";

import Image from "next/image";
import { Award, Eye, Leaf, Shield, Target } from "lucide-react";
import { ABOUT_HIGHLIGHTS } from "@/data/content";
import { Container } from "@/components/ui/container";
import { FadeUp, Stagger, StaggerItem } from "@/components/animations/reveal";

const HIGHLIGHT_ICONS = {
  award: Award,
  leaf: Leaf,
  shield: Shield,
} as const;

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
          <FadeUp className="relative mx-auto w-full max-w-md lg:mx-0 lg:sticky lg:top-28 lg:max-w-none">
            <div className="relative aspect-[9/16] overflow-hidden rounded-[1.5rem] bg-[#0b6e4f] sm:aspect-[3/5]">
              <Image
                src="/images/about.jpg"
                alt="G-Power solar panel and lithium battery energy storage products"
                fill
                sizes="(max-width: 1024px) 80vw, 36vw"
                className="object-cover object-center"
              />
            </div>
          </FadeUp>

          <div>
            <FadeUp>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                About
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                G-Power Manufacturing PLC
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-foreground/60">
                <p>
                  Established in 2020 by Mr. Ma Ning, G-Power Manufacturing PLC is dedicated
                  to delivering sustainable and reliable green energy solutions tailored to
                  meet the diverse needs of the Ethiopian market. Located at G-Power Tower in
                  Jemo Michael, next to Anbesa Garage, our state-of-the-art facilities support
                  our mission of powering progress and innovation.
                </p>
                <p>
                  As a proud sister company of Five Star Elevator Manufacturing PLC, G-Power
                  leverages a strong foundation of expertise and commitment to quality to
                  provide innovative energy storage systems for data centers, telecom
                  companies, residential properties, offices, farms, and more.
                </p>
              </div>
            </FadeUp>

            <Stagger className="mt-8 grid gap-3 sm:grid-cols-3" stagger={0.08}>
              {ABOUT_HIGHLIGHTS.map((item) => {
                const Icon = HIGHLIGHT_ICONS[item.icon];
                return (
                  <StaggerItem key={item.id}>
                    <div className="h-full rounded-2xl border border-foreground/8 bg-card p-4">
                      <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-4" />
                      </span>
                      <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-foreground/50">
                        {item.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>

            <FadeUp delay={0.1} className="mt-6 space-y-4">
              <div className="rounded-2xl border border-foreground/8 bg-card p-5">
                <div className="mb-2 flex items-center gap-2 text-primary">
                  <Target className="size-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Our Mission
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-foreground/60">
                  To deliver innovative, sustainable, and reliable green energy solutions that
                  empower communities, businesses, and individuals to overcome energy
                  challenges, ensuring uninterrupted power and contributing to a more
                  environmentally friendly future.
                </p>
              </div>
              <div className="rounded-2xl border border-foreground/8 bg-card p-5">
                <div className="mb-2 flex items-center gap-2 text-primary">
                  <Eye className="size-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Our Vision
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-foreground/60">
                  To be the leading provider of advanced energy storage and solar solutions in
                  Ethiopia, driving progress and sustainability by transforming the way energy
                  is stored, managed, and utilized across all sectors.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
}
