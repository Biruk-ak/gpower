"use client";

import { FAQS } from "@/data/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeUp } from "@/components/animations/reveal";

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Answers before you go solar"
          description="Everything you need to know about savings, warranties, installation, and support."
        />

        <FadeUp className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeUp>
      </Container>
    </section>
  );
}
