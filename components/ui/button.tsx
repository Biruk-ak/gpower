import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow-[0_10px_30px_-10px_rgba(11,110,79,0.55)] hover:bg-primary-dark hover:shadow-[0_14px_36px_-10px_rgba(11,110,79,0.65)] hover:-translate-y-0.5",
        secondary:
          "bg-card/90 text-foreground border border-foreground/10 backdrop-blur-sm hover:bg-card hover:border-primary/20 hover:-translate-y-0.5",
        outline:
          "border border-primary/25 bg-transparent text-primary hover:bg-primary/5 hover:border-primary/40",
        ghost: "text-foreground/80 hover:bg-foreground/5 hover:text-foreground",
        accent:
          "bg-accent text-dark shadow-[0_10px_30px_-12px_rgba(168,224,99,0.7)] hover:brightness-105 hover:-translate-y-0.5",
        dark: "bg-dark text-white hover:bg-dark/90 hover:-translate-y-0.5",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        xl: "h-14 px-10 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
