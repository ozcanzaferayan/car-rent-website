import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-xs leading-160 font-semibold ring-offset-background transition-colors disabled:pointer-events-none ring-ring gap-2",
  {
    variants: {
      variant: {
        default: `
          bg-primary text-primary-foreground 
          hover:bg-primary 
          active:bg-primary-700 
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:ring-1  
          disabled:opacity-40`,
        secondary: `
          bg-primary-0 text-secondary-400 border border-secondary-300 
          hover:border-secondary-400 hover:text-secondary-500 
          active:bg-primary-100 active:border-secondary-300 
          active:text-secondary-500
          disabled:border-primary-100
          `,
        ghost: `
           bg-transparent text-secondary-200 
           hover:bg-primary-0 hover:text-secondary-500
           active:bg-primary-100 active:text-secondary-500
           focus:border focus:border-secondary-200 focus:text-secondary-500
           disabled:text-secondary-400
        `,
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[37px] min-w-[37px]",
        sm: "h-[29px] min-w-[29px]",
        lg: "h-[52px] min-w-[52px] text-md leading-150",
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
