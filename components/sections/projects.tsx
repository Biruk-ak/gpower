"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { PROJECTS } from "@/data/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeUp } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Powering progress across industries"
          description="From specialty hospitals to government offices — proven installations delivering uninterrupted energy."
        />

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-5 md:grid-cols-6 md:auto-rows-[240px]">
          {PROJECTS.map((project, i) => (
            <FadeUp
              key={project.id}
              delay={i * 0.08}
              className={cn(
                "group relative overflow-hidden rounded-[1.75rem]",
                project.span === "tall" && "md:col-span-2 md:row-span-2",
                project.span === "wide" && "md:col-span-4 md:row-span-1",
                project.span === "normal" && "md:col-span-3 md:row-span-1",
                !project.span && "md:col-span-3"
              )}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/25 to-transparent opacity-80 transition duration-500 group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 transition duration-500 group-hover:translate-y-0">
                <span className="inline-flex rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent backdrop-blur-sm">
                  {project.category}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-white sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-white/70">
                  <MapPin className="size-3.5" />
                  {project.location}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
