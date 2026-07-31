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

const WHATSAPP_NUMBER = CONTACT.phone;
const WHATSAPP_LINK = `https://wa.me/${CONTACT.phone.replace(/\D/g, "")}`;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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
                external: false,
              },
              {
                icon: WhatsAppIcon,
                label: "WhatsApp",
                value: WHATSAPP_NUMBER,
                href: WHATSAPP_LINK,
                external: true,
              },
              {
                icon: Mail,
                label: "Email",
                value: CONTACT.email,
                href: `mailto:${CONTACT.email}`,
                external: false,
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
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
