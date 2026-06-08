import type { StatItem as StatItemType } from "@/types";

interface StatItemProps {
  readonly stat: StatItemType;
  readonly index: number;
}

export default function StatItem({ stat, index }: StatItemProps) {
  return (
    <div
      className="text-center animate-counter"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <p className="text-3xl md:text-4xl font-bold text-brand-orange mb-1">
        {stat.value}
      </p>
      <p className="text-text-secondary text-sm">{stat.label}</p>
    </div>
  );
}
