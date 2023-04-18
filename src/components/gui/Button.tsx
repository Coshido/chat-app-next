import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, FC } from "react";
import "material-icons/iconfont/material-icons.css";
import { cn } from "@/lib/utils";

const buttonVariance = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white hover:bg-dlate-800",
        ghost: "bg-transparent hover:text-slate-900 hover:bg-slate-200",
      },
      size: {
        deault: "h-10 py-2 px-4",
        sm: "h-9 px-2",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "deault",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariance> {
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  size,
  isLoading,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariance({ variant, size, className }))}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="material-icons-sharp animate-spin">rotate_right</span>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
