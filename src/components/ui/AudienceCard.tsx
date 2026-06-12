import type { AudienceItem } from "@/types";
import { AppIcon } from "@/lib/icons";

interface AudienceCardProps {
  readonly audience: AudienceItem;
}

export default function AudienceCard({ audience }: AudienceCardProps) {
  return (
    <div
      className={`
        relative group p-6 rounded-2xl
        bg-white
        transition-all duration-300 ease-out
        hover:translate-y-[-4px]
        ${
          audience.isPrimary
            ? "border-2 border-dashed border-brand-orange shadow-lg shadow-brand-orange/10"
            : "border border-border-default hover:border-border-orange/30 hover:shadow-lg hover:shadow-brand-orange/5"
        }
      `}
    >
      {audience.isPrimary && (
        <span className="absolute top-4 right-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full">
          Primary focus
        </span>
      )}
      <span
        className="
          audience-icon block mb-4
          group-hover:scale-110 transition-transform duration-300 w-fit
        "
        aria-hidden="true"
      >
        <AppIcon name={audience.icon} size="xl" className="text-text-primary" />
      </span>
      <h3 className="text-text-primary font-bold text-lg mb-2">
        {audience.title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed">
        {audience.description}
      </p>
    </div>
  );
}
