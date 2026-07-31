"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS, SITE } from "@/constants";
import { useScrolled } from "@/hooks/use-scrolled";
import { useActiveSection } from "@/hooks/use-active-section";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.replace("#", ""));

export function Navbar() {
  const scrolled = useScrolled(24);
  const active = useActiveSection(SECTION_IDS);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={cn(
            "mx-auto mt-3 flex h-16 max-w-7xl items-center justify-between rounded-full px-4 transition-all duration-500 sm:px-6 lg:px-4",
            scrolled
              ? "mx-4 border border-border bg-card/80 shadow-[0_20px_50px_-30px_rgba(8,28,21,0.55)] backdrop-blur-xl dark:border-white/10 dark:bg-card/70 sm:mx-6 lg:mx-auto"
              : "bg-transparent"
          )}
        >
          <Link
            href="#home"
            className="group relative z-10 flex items-center"
            aria-label={`${SITE.name} home`}
          >
            <Logo priority size="md" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-primary" : "text-foreground/65 hover:text-foreground"
                  )}
                >
                  {item.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <MagneticButton>
              <Button asChild size="lg">
                <Link href="#contact">
                  Contact
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </MagneticButton>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/10 bg-card/70 text-foreground backdrop-blur-md"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-dark/40 backdrop-blur-sm"
              aria-label="Close menu overlay"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="absolute inset-x-4 top-24 overflow-hidden rounded-3xl border border-border/60 bg-card/90 p-6 shadow-2xl backdrop-blur-xl"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              aria-label="Mobile"
            >
              <ul className="space-y-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-medium text-foreground hover:bg-primary/5"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                      <ArrowUpRight className="size-4 text-primary" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Button asChild className="mt-4 w-full" size="lg">
                <Link href="#contact" onClick={() => setOpen(false)}>
                  Contact
                </Link>
              </Button>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
