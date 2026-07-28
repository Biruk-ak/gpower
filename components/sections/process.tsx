"use client";

import { PROCESS } from "@/data/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeUp, Stagger, StaggerItem } from "@/components/animations/reveal";

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="From consultation to lifelong support"
          description="A clear, refined journey designed for speed, precision, and lasting performance."
        />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-accent to-primary/20 md:left-1/2 md:block"
          />

          <Stagger className="space-y-8 md:space-y-0" stagger={0.12}>
            {PROCESS.map((step, index) => {
              const left = index % 2 === 0;
              return (
                <StaggerItem key={step.id}>
                  <div
                    className={`relative grid items-center gap-6 md:grid-cols-2 md:gap-12 ${
                      left ? "" : "md:[&>*:first-child]:order-2"
                    }`}
                  >
                    <FadeUp className={left ? "md:text-right" : "md:text-left"}>
                      <article className="rounded-[1.75rem] border border-foreground/8 bg-card p-7 shadow-[0_24px_60px_-40px_rgba(8,28,21,0.4)]">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                          Step {step.step}
                        </p>
                        <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                          {step.description}
                        </p>
                      </article>
                    </FadeUp>

                    <div className="absolute left-6 top-8 z-[1] flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-white shadow-lg md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                      {step.step}
                    </div>

                    <div className="hidden md:block" />
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
