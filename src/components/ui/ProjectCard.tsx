import type { ProjectItem } from "@/types";

interface ProjectCardProps {
  readonly project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="
        group flex-shrink-0 w-[280px]
        p-5 rounded-xl
        bg-white border border-border-default
        hover:border-brand-orange/30
        hover:shadow-lg hover:shadow-brand-orange/5
        transition-all duration-300 ease-out
        hover:translate-y-[-2px]
        cursor-pointer
      "
    >
      <p
        className={`
          text-xs font-bold tracking-[0.1em] uppercase mb-3
          ${project.categoryColor}
        `}
      >
        {project.category}
      </p>
      <h4 className="text-text-primary font-semibold text-base mb-2 leading-snug">
        {project.title}
      </h4>
      <p className="text-text-muted text-xs">
        {project.meta}
      </p>
    </div>
  );
}
