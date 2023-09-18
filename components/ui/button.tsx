import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium ring-offset-yellow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-charcoal-950 dark:focus-visible:ring-charcoal-800",
  {
    variants: {
      variant: {
        default:
          "bg-charcoal-500 text-charcoal-50 hover:bg-yellow-500 border border-charcoal-500 hover:text-charcoal-500",
        destructive:
          "bg-red-500 text-charcoal-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-900/90",
        outline:
          "border border-charcoal-200 bg-yellow hover:bg-charcoal-500 hover:text-yellow-500 dark:border-charcoal-800 dark:bg-charcoal-950 dark:hover:bg-charcoal-800 dark:hover:text-charcoal-50",
        secondary:
          "bg-charcoal-100 text-charcoal-900 hover:bg-charcoal-100/80 dark:bg-charcoal-800 dark:text-charcoal-50 dark:hover:bg-charcoal-800/80",
        ghost:
          "hover:bg-charcoal-100 hover:text-charcoal-900 dark:hover:bg-charcoal-800 dark:hover:text-charcoal-50",
        link: "text-charcoal-900 underline-offset-4 hover:underline dark:text-charcoal-50",
      },
      size: {
        default: "px-8 py-1 text-sm",
        sm: "rounded-md px-3",
        lg: "rounded-md px-8",
        icon: "h-10 w-10",
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
