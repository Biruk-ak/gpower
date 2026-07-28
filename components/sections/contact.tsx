"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Clock, Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { CONTACT } from "@/constants";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/animations/reveal";
import { MagneticButton } from "@/components/animations/magnetic-button";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(8, "Enter a valid phone number"),
  company: z.string().optional(),
  message: z.string().min(10, "Tell us a bit more about your project"),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 900));
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-secondary py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s design your energy future"
          description="Request a free consultation. Our engineers will assess your site and recommend the right solar or storage solution."
        />

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <FadeUp className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 lg:gap-5">
            {[
              {
                icon: Phone,
                label: "Phone",
                value: CONTACT.phone,
                href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
              },
              {
                icon: Mail,
                label: "Email",
                value: CONTACT.email,
                href: `mailto:${CONTACT.email}`,
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-2xl border border-foreground/8 bg-card p-5 transition hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-lg"
              >
                <item.icon className="mb-3 size-5 text-primary" />
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground/40">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">{item.value}</p>
              </a>
            ))}

            <div className="rounded-2xl border border-foreground/8 bg-card p-5 sm:col-span-2 lg:col-span-1">
              <div className="mb-3 flex items-center gap-2 text-primary">
                <MapPin className="size-5" />
                <p className="text-sm font-semibold">Visit Us</p>
              </div>
              <p className="text-sm leading-relaxed text-foreground/65">{CONTACT.address}</p>
            </div>

            <div className="rounded-2xl border border-foreground/8 bg-card p-5 sm:col-span-2 lg:col-span-1">
              <div className="mb-3 flex items-center gap-2 text-primary">
                <Clock className="size-5" />
                <p className="text-sm font-semibold">Business Hours</p>
              </div>
              <ul className="space-y-1.5 text-sm text-foreground/65">
                {CONTACT.hours.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.1} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="h-full rounded-[1.75rem] border border-foreground/8 bg-card p-6 shadow-[0_30px_80px_-45px_rgba(8,28,21,0.4)] sm:p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your name" {...register("name")} />
                  {errors.name ? (
                    <p className="text-xs text-red-600">{errors.name.message}</p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    {...register("email")}
                  />
                  {errors.email ? (
                    <p className="text-xs text-red-600">{errors.email.message}</p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="+251 ..." {...register("phone")} />
                  {errors.phone ? (
                    <p className="text-xs text-red-600">{errors.phone.message}</p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company (optional)</Label>
                  <Input id="company" placeholder="Organization" {...register("company")} />
                </div>
              </div>
              <div className="mt-5 space-y-2">
                <Label htmlFor="message">Project Details</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your energy needs..."
                  {...register("message")}
                />
                {errors.message ? (
                  <p className="text-xs text-red-600">{errors.message.message}</p>
                ) : null}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <MagneticButton>
                  <Button type="submit" size="xl" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="size-4" />
                  </Button>
                </MagneticButton>
                {sent ? (
                  <p className="flex items-center gap-2 text-sm font-medium text-primary">
                    <CheckCircle2 className="size-4" />
                    Message received — we’ll respond shortly.
                  </p>
                ) : null}
              </div>
            </form>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
