import StatItem from "@/components/ui/StatItem";
import { STATS } from "@/lib/constants";

export default function StatsBar() {
  return (
    <section
      id="stats"
      className="relative py-12 bg-gradient-to-r from-surface-warm via-surface-warm-alt to-surface-warm"
      aria-label="Platform statistics"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg shadow-brand-orange/5 border border-border-light p-8 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <StatItem key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
