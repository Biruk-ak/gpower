import Image from "next/image";
import { cn } from "@/lib/utils";

const SIZES = {
  sm: { className: "h-10 w-auto", width: 80, height: 86 },
  md: { className: "h-12 w-auto sm:h-14", width: 112, height: 121 },
  lg: { className: "h-16 w-auto sm:h-20", width: 140, height: 151 },
} as const;

export function Logo({
  className,
  priority = false,
  size = "md",
}: {
  className?: string;
  priority?: boolean;
  size?: keyof typeof SIZES;
}) {
  const config = SIZES[size];

  return (
    <span className={cn("relative inline-flex shrink-0 items-center", className)}>
      <Image
        src="/images/logo.png"
        alt="G-Power — Light Up Your Life"
        width={config.width}
        height={config.height}
        priority={priority}
        className={cn("object-contain", config.className)}
      />
    </span>
  );
}
