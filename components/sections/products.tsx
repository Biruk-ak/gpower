"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { PRODUCTS } from "@/data/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Stagger, StaggerItem } from "@/components/animations/reveal";
import { TiltCard } from "@/components/animations/tilt-card";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

function ProductCard({ product }: { product: Product }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <TiltCard className={cn("h-full", showDetails && "relative z-20")}>
      <article className="group relative z-0 flex h-full flex-col overflow-visible rounded-[1.75rem] border border-foreground/8 bg-card shadow-[0_24px_60px_-40px_rgba(8,28,21,0.4)] transition duration-500 hover:z-10 hover:shadow-[0_30px_70px_-30px_rgba(11,110,79,0.3)] sm:flex-row">
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-[1.75rem] bg-dark sm:aspect-auto sm:w-[42%] sm:rounded-l-[1.75rem] sm:rounded-tr-none">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, 25vw"
            className={
              product.id === "elevator"
                ? "object-cover transition duration-700 group-hover:scale-105"
                : "object-contain p-4 transition duration-700 group-hover:scale-105 sm:object-cover sm:p-0"
            }
          />
          <div className="absolute left-4 top-4">
            <Badge className="bg-card/90 shadow-sm">{product.category}</Badge>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
          <h3
            className={cn(
              "font-display text-2xl text-foreground",
              product.id === "elevator" ? "font-bold" : "font-semibold"
            )}
          >
            {product.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground/60">
            {product.description}
          </p>
          {product.features.length > 0 ? (
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
          ) : null}

          {product.details ? (
            <div className="relative mt-5">
              <button
                type="button"
                onClick={() => setShowDetails((open) => !open)}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:text-primary-dark"
                aria-expanded={showDetails}
              >
                {showDetails ? "View less" : "View more..."}
                <ChevronDown
                  className={cn(
                    "size-4 transition-transform duration-300",
                    showDetails && "rotate-180"
                  )}
                />
              </button>

              {showDetails ? (
                <div className="absolute left-0 top-[calc(100%+0.5rem)] z-20 w-[min(100%,22rem)] rounded-2xl border border-foreground/10 bg-card p-3 shadow-[0_20px_50px_-20px_rgba(8,28,21,0.45)] sm:w-[min(28rem,120%)]">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                    {product.details.title}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {product.details.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg bg-primary/8 px-2.5 py-1 text-xs font-medium text-foreground/75"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ) : null}

          {product.ctaLabel && product.ctaHref ? (
            <div className="mt-6">
              <Button asChild>
                <Link href={product.ctaHref}>
                  {product.ctaLabel}
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>
          ) : null}
        </div>
      </article>
    </TiltCard>
  );
}

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
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
