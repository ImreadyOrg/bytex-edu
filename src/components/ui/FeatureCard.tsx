import type { FeatureItem } from "@/types";
import { AppIcon } from "@/lib/icons";

interface FeatureCardProps {
  readonly feature: FeatureItem;
  readonly index: number;
}

export default function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <div
      className={`
        group flex items-start gap-4 p-6
        rounded-xl
        bg-surface-dark-card/50 hover:bg-surface-dark-card
        border border-white/5 hover:border-white/10
        transition-all duration-300 ease-out
        hover:translate-y-[-2px]
      `}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <span
        className="
          flex-shrink-0
          w-10 h-10 flex items-center justify-center
          rounded-lg bg-white/5
          group-hover:scale-110 transition-transform duration-300
        "
        aria-hidden="true"
      >
        <AppIcon name={feature.icon} size="md" className="text-white/90" />
      </span>
      <div>
        <h3 className="text-white font-semibold text-base mb-1.5">
          {feature.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
