"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/use-magnetic";

export function MagneticButton({
  children,
  className,
  strength = 0.3,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic(strength);
  const reduce = useReducedMotion();
  const innerRef = useRef<HTMLDivElement>(null);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={(node) => {
        ref.current = node;
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn("inline-flex will-change-transform transition-transform duration-200 ease-out", className)}
    >
      <motion.div ref={innerRef} whileTap={{ scale: 0.97 }}>
        {children}
      </motion.div>
    </div>
  );
}
