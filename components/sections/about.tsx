"use client";

import Image from "next/image";
import { Award, Eye, Target, Sparkles } from "lucide-react";
import { TIMELINE } from "@/data/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeUp, ImageReveal, Stagger, StaggerItem } from "@/components/animations/reveal";
import { TiltCard } from "@/components/animations/tilt-card";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <ImageReveal className="aspect-[4/5] rounded-[2rem]">
              <Image
                src="/images/about.png"
                alt="G-Power 50kW inverter and battery system"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </ImageReveal>

            <TiltCard className="absolute -bottom-6 -right-2 max-w-[240px] sm:-right-6">
              <div className="rounded-2xl border border-border/70 bg-card/90 p-5 shadow-2xl backdrop-blur-md">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Award className="size-5" />
                </div>
                <p className="font-display text-lg font-semibold text-foreground">ISO 9001</p>
                <p className="mt-1 text-sm text-foreground/55">
                  Certified quality systems for every installation.
                </p>
              </div>
            </TiltCard>

            <FadeUp className="absolute -left-3 top-10 sm:-left-6">
              <div className="rounded-2xl border border-border/60 bg-dark px-4 py-3 text-white shadow-xl">
                <p className="text-xs text-white/55">Sister company of</p>
                <p className="text-sm font-semibold">Five Star Elevator</p>
              </div>
            </FadeUp>
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="About G-Power"
              title="Engineering reliable green power for Ethiopia"
              description="Established in 2023 by Mr. Ma Ning, G-Power Manufacturing PLC delivers sustainable energy storage and solar solutions from G-Power Tower in Jemo Michael, Addis Ababa."
            />

            <Stagger className="mt-10 grid gap-4 sm:grid-cols-2" stagger={0.12}>
              <StaggerItem>
                <div className="h-full rounded-3xl border border-foreground/8 bg-card p-6 shadow-[0_20px_50px_-35px_rgba(8,28,21,0.35)]">
                  <Target className="mb-4 size-5 text-primary" />
                  <h3 className="font-display text-lg font-semibold text-foreground">Mission</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                    Deliver innovative, sustainable energy solutions that empower communities
                    and businesses with uninterrupted power.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="h-full rounded-3xl border border-foreground/8 bg-card p-6 shadow-[0_20px_50px_-35px_rgba(8,28,21,0.35)]">
                  <Eye className="mb-4 size-5 text-primary" />
                  <h3 className="font-display text-lg font-semibold text-foreground">Vision</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                    Be Ethiopia’s leading provider of advanced energy storage and solar
                    systems across every sector.
                  </p>
                </div>
              </StaggerItem>
            </Stagger>

            <FadeUp delay={0.15} className="mt-10">
              <div className="rounded-3xl border border-primary/10 bg-primary/[0.03] p-6">
                <div className="mb-5 flex items-center gap-2 text-primary">
                  <Sparkles className="size-4" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                    Our Journey
                  </p>
                </div>
                <ol className="space-y-5">
                  {TIMELINE.map((item, i) => (
                    <li key={item.year} className="relative flex gap-4 pl-2">
                      {i < TIMELINE.length - 1 ? (
                        <span className="absolute left-[1.15rem] top-8 h-[calc(100%-0.5rem)] w-px bg-primary/15" />
                      ) : null}
                      <span className="relative z-[1] mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                          {item.year}
                        </p>
                        <p className="mt-1 font-semibold text-foreground">{item.title}</p>
                        <p className="mt-1 text-sm text-foreground/55">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
}
