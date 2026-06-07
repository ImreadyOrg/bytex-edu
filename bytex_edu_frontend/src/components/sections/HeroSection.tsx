import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FloatingProCard from "@/components/ui/FloatingProCard";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-surface-warm via-white to-surface-warm-alt"
    >
      {/* Decorative background gradient orbs */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-orange/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-purple/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            {/* Announcement Badge */}
            <Badge variant="default" className="mb-8">
              🎓 Admission Season 2026 — Enrolments Open
            </Badge>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-text-primary leading-[1.15] mb-6 tracking-tight">
              Get a device.
              <br />
              Unlock{" "}
              <em className="text-brand-orange not-italic font-bold italic">
                real industry
              </em>
              <br />
              projects with it.
            </h1>

            {/* Subtitle */}
            <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-lg">
              Bytex Edu bundles career-accelerating industry projects,
              mentorship and a verified portfolio with every student device
              — so you don&apos;t just own a laptop, you own your future.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="primary" size="lg" href="#explore">
                Explore Devices & Projects →
              </Button>
              <Button variant="secondary" size="lg" href="#lab">
                Set Up Your Lab 🏛
              </Button>
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3">
              {[
                "Industry projects included",
                "No-cost EMI available",
                "Mentor-reviewed portfolio",
              ].map((feature) => (
                <Badge key={feature} variant="tag">
                  <svg
                    className="w-3.5 h-3.5 text-brand-orange flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right Content - Floating Pro Card */}
          <div
            className="hidden lg:flex justify-center items-center animate-slide-in-right"
            aria-hidden="true"
          >
            <FloatingProCard />
          </div>
        </div>
      </div>
    </section>
  );
}
