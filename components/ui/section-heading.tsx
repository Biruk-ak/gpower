import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 text-xs font-semibold uppercase tracking-[0.22em]",
            light ? "text-accent" : "text-primary"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-balance",
          light ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg text-pretty",
            light ? "text-white/70" : "text-foreground/60"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export { SectionHeading };
