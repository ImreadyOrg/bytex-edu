import { type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-orange text-white hover:bg-brand-orange-dark shadow-lg shadow-brand-orange/25 hover:shadow-brand-orange/40",
  secondary:
    "bg-brand-dark text-white hover:bg-brand-navy shadow-lg shadow-brand-dark/25",
  outline:
    "bg-transparent text-brand-dark border-2 border-brand-dark hover:bg-brand-dark hover:text-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `
    inline-flex items-center justify-center gap-2
    font-semibold rounded-full
    transition-all duration-300 ease-out
    transform hover:scale-[1.02] active:scale-[0.98]
    cursor-pointer
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `.trim();

  if (href) {
    return (
      <a href={href} className={classes} role="button">
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
