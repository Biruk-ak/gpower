import { cn } from "@/lib/utils";

export function SectionSkeleton({
  height = "h-[28rem]",
  className,
}: {
  height?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl animate-pulse px-5 py-16 sm:px-6 lg:px-8",
        className
      )}
      aria-hidden
    >
      <div className="mx-auto mb-10 h-4 w-32 rounded-full bg-foreground/5" />
      <div className="mx-auto mb-4 h-10 w-2/3 max-w-xl rounded-2xl bg-foreground/8" />
      <div className="mx-auto mb-12 h-4 w-1/2 max-w-md rounded-full bg-foreground/5" />
      <div className={cn("w-full rounded-[1.75rem] bg-foreground/5", height)} />
    </div>
  );
}
