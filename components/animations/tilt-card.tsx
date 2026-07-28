"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTilt } from "@/hooks/use-tilt";
import { cn } from "@/lib/utils";

export function TiltCard({
  children,
  className,
  max = 7,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const { style, onMouseMove, onMouseLeave } = useTilt(max);
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.div>
  );
}
