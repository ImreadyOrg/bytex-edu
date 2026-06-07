import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/constants";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <SectionLabel className="mb-3">What you&apos;ll actually build</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary leading-tight mb-4">
            Real projects. Real companies.
            <br />
            Real proof for your resume.
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
            Scroll through what your peers are working on right now — across
            engineering and management tracks.
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Cards */}
      <div className="relative">
        <div
          className="flex gap-5 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 snap-x snap-mandatory scrollbar-thin"
          role="list"
          aria-label="Career project examples"
        >
          {/* Left spacer for max-w-7xl alignment */}
          <div className="flex-shrink-0 w-0 lg:w-[calc((100vw-1280px)/2)]" aria-hidden="true" />

          {PROJECTS.map((project) => (
            <div key={project.title} className="snap-start" role="listitem">
              <ProjectCard project={project} />
            </div>
          ))}

          {/* Right spacer */}
          <div className="flex-shrink-0 w-4" aria-hidden="true" />
        </div>

        {/* Scroll fade indicators */}
        <div
          className="absolute top-0 right-0 bottom-4 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
