import { WHY_ITEMS } from "@/lib/constants";

export default function WhyBytexSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-surface-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Feature Points */}
          <div>
            {WHY_ITEMS.map((item, index) => (
              <div
                key={item.title}
                className={`flex items-start gap-4 ${
                  index < WHY_ITEMS.length - 1
                    ? "mb-8 pb-8 border-b border-border-light"
                    : ""
                }`}
              >
                <span
                  className="
                    flex-shrink-0 text-xl
                    w-10 h-10 flex items-center justify-center
                    rounded-full bg-brand-orange/10
                  "
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <div>
                  <h3 className="text-text-primary font-bold text-base mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - CTA Card */}
          <div className="bg-brand-orange rounded-3xl p-8 md:p-10 text-white shadow-2xl shadow-brand-orange/25">
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-4">
              Start building before others even settle in.
            </h2>
            <p className="text-white/90 text-base leading-relaxed mb-8">
              Students who work on real projects from Year 1 enter placement
              season with a portfolio — not just a transcript. The device is
              how you start.
            </p>

            <a
              href="#explore"
              className="
                inline-flex items-center gap-2
                bg-white text-brand-orange
                px-6 py-3 rounded-full
                font-semibold text-base
                shadow-lg shadow-black/10
                hover:shadow-xl hover:scale-[1.02]
                active:scale-[0.98]
                transition-all duration-300
              "
            >
              See Devices & Unlock Projects →
            </a>

            {/* Stats */}
            <div className="flex gap-8 mt-8 pt-8 border-t border-white/20">
              <div>
                <p className="text-2xl font-bold">50+</p>
                <p className="text-white/70 text-sm">Project tracks</p>
              </div>
              <div>
                <p className="text-2xl font-bold">12+</p>
                <p className="text-white/70 text-sm">Domains</p>
              </div>
              <div>
                <p className="text-2xl font-bold">100%</p>
                <p className="text-white/70 text-sm">Mentor-reviewed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
