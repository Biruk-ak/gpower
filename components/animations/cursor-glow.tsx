"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { useMediaQuery } from "@/hooks/use-media-query";

export function CursorGlow() {
  const { x, y } = useMousePosition();
  const reduce = useReducedMotion();
  const finePointer = useMediaQuery("(pointer: fine)");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!finePointer) return;
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    window.addEventListener("mousemove", show, { once: true });
    document.addEventListener("mouseleave", hide);
    return () => document.removeEventListener("mouseleave", hide);
  }, [finePointer]);

  if (reduce || !finePointer) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 mix-blend-multiply blur-3xl"
      animate={{
        x,
        y,
        opacity: visible ? 0.35 : 0,
      }}
      transition={{ type: "spring", stiffness: 120, damping: 30, mass: 0.4 }}
      style={{
        background:
          "radial-gradient(circle, rgba(168,224,99,0.55) 0%, rgba(11,110,79,0.18) 45%, transparent 70%)",
      }}
    />
  );
}
