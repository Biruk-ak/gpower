"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/animations/magnetic-button";

export function StickyCTA() {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShow(latest > 700);
  });

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-40 hidden sm:block"
      initial={false}
      animate={{
        opacity: show ? 1 : 0,
        y: show ? 0 : 20,
        pointerEvents: show ? "auto" : "none",
      }}
      transition={{ duration: 0.3 }}
    >
      <MagneticButton>
        <Button
          asChild
          size="icon"
          className="h-12 w-12 shadow-2xl"
          aria-label="Back to home"
        >
          <Link href="#home">
            <ArrowUp className="size-5" />
          </Link>
        </Button>
      </MagneticButton>
    </motion.div>
  );
}
