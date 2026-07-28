"use client";

import Image from "next/image";
import { PRODUCTS } from "@/data/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Stagger, StaggerItem } from "@/components/animations/reveal";
import { TiltCard } from "@/components/animations/tilt-card";

export function Products() {
  return (
    <section id="products" className="relative bg-secondary py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Products"
          title="Premium systems engineered for performance"
          description="Battery storage, solar modules, smart inverters, and complete ESS packages — selected for reliability in Ethiopian conditions."
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2" stagger={0.1}>
          {PRODUCTS.map((product) => (
            <StaggerItem key={product.id}>
              <TiltCard className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-foreground/8 bg-card shadow-[0_24px_60px_-40px_rgba(8,28,21,0.4)] transition duration-500 hover:shadow-[0_30px_70px_-30px_rgba(11,110,79,0.3)] sm:flex-row">
                  <div className="relative aspect-[4/3] overflow-hidden bg-dark sm:aspect-auto sm:w-[42%]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-contain p-4 transition duration-700 group-hover:scale-105 sm:object-cover sm:p-0"
                    />
                    <div className="absolute left-4 top-4">
                      <Badge className="bg-card/90 shadow-sm">{product.category}</Badge>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      {product.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                      {product.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="rounded-full bg-primary/8 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
