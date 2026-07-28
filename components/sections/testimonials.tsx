"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeUp } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4500, stopOnInteraction: true })]
  );
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="testimonials" className="relative overflow-hidden bg-secondary py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <Container>
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            className="max-w-2xl"
            eyebrow="Testimonials"
            title="What our clients say"
            description="Real feedback from healthcare, government, and business partners across Ethiopia."
          />
          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="icon"
              aria-label="Previous testimonial"
              onClick={scrollPrev}
            >
              <ChevronLeft className="size-5" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              aria-label="Next testimonial"
              onClick={scrollNext}
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>

        <FadeUp>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {TESTIMONIALS.map((item) => (
                <article
                  key={item.id}
                  className="min-w-0 shrink-0 grow-0 basis-full rounded-[1.75rem] border border-border/70 bg-card/70 p-7 shadow-[0_30px_80px_-45px_rgba(8,28,21,0.4)] backdrop-blur-xl sm:basis-[85%] md:basis-[48%] md:p-8"
                >
                  <Quote className="mb-5 size-8 text-accent" />
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-base leading-relaxed text-foreground/75 md:text-lg">
                    “{item.quote}”
                  </p>
                  <div className="mt-8 flex items-center gap-4 border-t border-foreground/8 pt-6">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.name}</p>
                      <p className="text-sm text-foreground/50">{item.company}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </FadeUp>

        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all",
                selected === i ? "w-8 bg-primary" : "w-2 bg-foreground/15 hover:bg-foreground/30"
              )}
              onClick={() => emblaApi?.scrollTo(i)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
