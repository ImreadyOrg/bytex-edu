interface BadgeProps {
  readonly children: React.ReactNode;
  readonly variant?: "default" | "highlight" | "tag";
  readonly className?: string;
}

const variantClasses = {
  default:
    "bg-white/80 backdrop-blur-sm border border-border-default text-text-primary shadow-sm",
  highlight:
    "bg-brand-orange/10 text-brand-orange border border-brand-orange/20 font-semibold",
  tag: "bg-surface-warm text-text-secondary border border-border-light",
};

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        px-4 py-2 rounded-full
        text-sm font-medium
        transition-all duration-200
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
