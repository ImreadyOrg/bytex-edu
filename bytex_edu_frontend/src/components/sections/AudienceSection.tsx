import SectionLabel from "@/components/ui/SectionLabel";
import AudienceCard from "@/components/ui/AudienceCard";
import { AUDIENCE_ITEMS } from "@/lib/constants";

export default function AudienceSection() {
  return (
    <section id="audience" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <SectionLabel className="mb-3">Who is Bytex Edu for?</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary leading-tight mb-4">
            Built for every college journey
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
            Students who want a career edge, parents making a smart investment,
            and colleges that want better outcomes — all in one place.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUDIENCE_ITEMS.map((audience) => (
            <AudienceCard key={audience.title} audience={audience} />
          ))}
        </div>
      </div>
    </section>
  );
}
