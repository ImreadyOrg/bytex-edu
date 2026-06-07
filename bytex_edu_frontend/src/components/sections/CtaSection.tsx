import Button from "@/components/ui/Button";

export default function CtaSection() {
  return (
    <section
      id="explore"
      className="relative py-20 md:py-28 bg-brand-navy overflow-hidden"
    >
      {/* Decorative elements */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-orange/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-brand-orange text-sm font-bold tracking-[0.15em] uppercase mb-4">
          Ready to start?
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Your career starts with
          <br />
          <span className="text-brand-orange">the right device.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Get a device bundled with industry projects, mentorship, and a
          verified portfolio. Join thousands of students building real work
          experience from Day 1.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" size="lg" href="#contact">
            Explore Devices & Projects →
          </Button>
          <Button variant="outline" size="lg" href="#contact" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
            Talk to an Advisor
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-gray-500 text-sm">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Free shipping
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No-cost EMI
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Official warranty
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Setup included
          </span>
        </div>
      </div>
    </section>
  );
}
