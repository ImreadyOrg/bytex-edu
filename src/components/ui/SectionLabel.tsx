interface SectionLabelProps {
  readonly children: React.ReactNode;
  readonly variant?: "orange" | "white";
  readonly className?: string;
}

export default function SectionLabel({
  children,
  variant = "orange",
  className = "",
}: SectionLabelProps) {
  const colorClass =
    variant === "orange" ? "text-brand-orange" : "text-brand-orange-light";

  return (
    <p
      className={`
        text-sm font-bold tracking-[0.15em] uppercase
        ${colorClass}
        ${className}
      `}
    >
      {children}
    </p>
  );
}
