import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "~/components/cotton/utils";

const buttonVariant = cva(
  "inline-flex items-center justify-center rounded text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-gray-200 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "border border-gray-900 bg-gray-900 text-white shadow-sm shadow-color-shadow/5 hover:enabled:bg-gray-700",
        outline:
          "border border-gray-500 text-gray-700 shadow-sm shadow-color-shadow/5 hover:enabled:bg-gray-200 hover:enabled:text-gray-900",
        secondary:
          "border border-gray-100 bg-gray-100 text-gray-500 hover:enabled:opacity-80",
        ghost:
          "border border-transparent text-gray-700 hover:enabled:bg-gray-200 hover:enabled:text-gray-900",
        link: "border border-transparent text-gray-700 underline-offset-4 hover:enabled:underline hover:enabled:text-gray-900",
      },
      size: {
        default: "h-9 px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariant> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariant({
            variant,
            size,
            className,
          })
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

type ButtonPropsType = VariantProps<typeof buttonVariant>;

export { Button, buttonVariant };
export type { ButtonPropsType };
