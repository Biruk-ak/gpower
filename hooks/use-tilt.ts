"use client";

import { useSyncExternalStore, type MouseEvent } from "react";
import { useMotionValue, useSpring } from "framer-motion";

function subscribeFinePointer(onStoreChange: () => void) {
  const mql = window.matchMedia("(pointer: fine)");
  mql.addEventListener("change", onStoreChange);
  return () => mql.removeEventListener("change", onStoreChange);
}

function getFinePointer() {
  return window.matchMedia("(pointer: fine)").matches;
}

export function useTilt(max = 8) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(x, { stiffness: 200, damping: 20 });
  const enabled = useSyncExternalStore(
    subscribeFinePointer,
    getFinePointer,
    () => false
  );

  const onMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!enabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set((px - 0.5) * max * 2);
    y.set((0.5 - py) * max * 2);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { style: { rotateX, rotateY, transformPerspective: 900 }, onMouseMove, onMouseLeave };
}
