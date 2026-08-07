"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CONTACT, NAV_ITEMS, SITE, SOCIALS } from "@/constants";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/ui/social-icons";
import { Logo } from "@/components/ui/logo";

const FOOTER_PRODUCTS = [
  { label: "Battery Storage", href: "#products" },
  { label: "Solar Modules", href: "#products" },
  { label: "Smart Inverters", href: "#products" },
  { label: "ESS Packages", href: "#products" },
];

const FOOTER_SERVICES = [
  { label: "Solar Installation", href: "#services" },
  { label: "Energy Storage", href: "#services" },
  { label: "Maintenance", href: "#services" },
  { label: "Consulting", href: "#contact" },
];

const SOCIAL_ICONS = {
  linkedin: LinkedInIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: XIcon,
} as const;

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-dark text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(168,224,99,0.12),_transparent_50%)]" />
      <Container className="relative py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="#home" className="inline-flex items-center" aria-label={`${SITE.name} home`}>
              <Logo size="lg" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              {SITE.description}
            </p>
            <form
              className="mt-8"
              onSubmit={(e) => {
                e.preventDefault();
                if (!email.includes("@")) return;
                setDone(true);
                setEmail("");
              }}
            >
              <p className="mb-3 text-sm font-semibold">Newsletter</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="border-white/10 bg-white/5 text-white placeholder:text-white/35"
                  aria-label="Newsletter email"
                />
                <Button type="submit" variant="accent" className="shrink-0">
                  <ArrowUpRight />
                </Button>
              </div>
              {done ? (
                <p className="mt-2 text-xs text-accent">Thanks for subscribing.</p>
              ) : null}
            </form>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/40">
              Quick Links
            </p>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-sm text-white/65 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/40">
              Products
            </p>
            <ul className="space-y-2.5">
              {FOOTER_PRODUCTS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="link-underline text-sm text-white/65 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/40">
              Services
            </p>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="link-underline text-sm text-white/65 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-2 text-sm text-white/55">
              {CONTACT.phones.map((phone) => (
                <p key={phone}>{phone}</p>
              ))}
              <p>{CONTACT.email}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <div className="flex gap-3">
            {SOCIALS.map((social) => {
              const Icon = SOCIAL_ICONS[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent hover:text-dark"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
