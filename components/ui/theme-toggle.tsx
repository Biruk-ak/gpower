"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const emptySubscribe = () => () => {};

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-border bg-card/80 text-foreground shadow-sm backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:text-primary",
        className
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {mounted ? (
        <>
          <Sun
            className={cn(
              "absolute size-4 transition-all duration-300",
              isDark
                ? "scale-0 rotate-90 opacity-0"
                : "scale-100 rotate-0 opacity-100"
            )}
          />
          <Moon
            className={cn(
              "absolute size-4 transition-all duration-300",
              isDark
                ? "scale-100 rotate-0 opacity-100"
                : "scale-0 -rotate-90 opacity-0"
            )}
          />
        </>
      ) : (
        <span className="size-4 rounded-full bg-foreground/20" />
      )}
    </button>
  );
}
