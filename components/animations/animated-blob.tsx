"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedBlob({
  className,
  color = "primary",
  delay = 0,
}: {
  className?: string;
  color?: "primary" | "accent" | "dark";
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const colors = {
    primary: "bg-primary/25",
    accent: "bg-accent/35",
    dark: "bg-foreground/15",
  };

  return (
    <motion.div
      aria-hidden
      className={cn(
        "absolute rounded-full blur-3xl",
        colors[color],
        className
      )}
      animate={
        reduce
          ? undefined
          : {
              x: [0, 30, -20, 0],
              y: [0, -25, 15, 0],
              scale: [1, 1.12, 0.94, 1],
            }
      }
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}
