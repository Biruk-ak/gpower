"use client";

import Image from "next/image";
import Link from "next/link";
import { BatteryCharging, Sun, Wrench, ArrowUpRight, Check } from "lucide-react";
import { SERVICES } from "@/data/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Stagger, StaggerItem } from "@/components/animations/reveal";
import { TiltCard } from "@/components/animations/tilt-card";
import { MagneticButton } from "@/components/animations/magnetic-button";

const ICONS = {
  sun: Sun,
  battery: BatteryCharging,
  wrench: Wrench,
} as const;

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-dark py-24 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(168,224,99,0.12),_transparent_55%)]" />
      <Container className="relative">
        <SectionHeading
          light
          eyebrow="Premium Services"
          title="Comprehensive green energy solutions"
          description="From solar installation to advanced storage and lifelong support — engineered for Ethiopian homes, businesses, and critical infrastructure."
        />

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3" stagger={0.12}>
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS] ?? Sun;
            return (
              <StaggerItem key={service.id} variant="scaleIn">
                <TiltCard className="h-full">
                  <article className="group gradient-border flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white/[0.04] transition duration-500 hover:bg-white/[0.07]">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
                      <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-accent backdrop-blur-md transition group-hover:scale-110 group-hover:bg-accent group-hover:text-dark">
                        <Icon className="size-5" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/60">
                        {service.description}
                      </p>
                      <ul className="mt-5 space-y-2.5">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-white/75">
                            <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </Stagger>

        <div className="mt-12 flex justify-center">
          <MagneticButton>
            <Button asChild variant="accent" size="xl">
              <Link href="#contact">
                Request a Free Consultation
                <ArrowUpRight />
              </Link>
            </Button>
          </MagneticButton>
        </div>
      </Container>
    </section>
  );
}
