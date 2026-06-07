import SectionLabel from "@/components/ui/SectionLabel";
import FeatureCard from "@/components/ui/FeatureCard";
import { BUNDLED_FEATURES } from "@/lib/constants";

export default function BundledFeaturesSection() {
  return (
    <section
      id="whats-included"
      className="relative py-20 md:py-28 bg-brand-navy overflow-hidden"
    >
      {/* Decorative gradient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-orange/5 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <SectionLabel variant="white" className="mb-3">
            What&apos;s bundled with every device
          </SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            More than a laptop.
            <br />
            A career head-start.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            The device is just the hardware. Here&apos;s the ecosystem that comes
            activated with it.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {BUNDLED_FEATURES.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
