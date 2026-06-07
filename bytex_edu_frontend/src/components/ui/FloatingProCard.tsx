export default function FloatingProCard() {
  return (
    <div className="relative">
      {/* Background decorative cards */}
      <div
        className="
          absolute -right-4 -bottom-4 w-full h-full
          rounded-2xl bg-gradient-to-br from-brand-purple/20 to-brand-teal/20
          border border-brand-purple/30
          animate-float-delayed
        "
        aria-hidden="true"
      />
      <div
        className="
          absolute -right-2 -bottom-2 w-full h-full
          rounded-2xl bg-gradient-to-br from-brand-green/15 to-brand-teal/15
          border border-brand-green/30
          animate-float
        "
        aria-hidden="true"
      />

      {/* Main card */}
      <div
        className="
          relative z-10
          bg-white rounded-2xl
          p-6 shadow-2xl shadow-black/10
          border border-border-default
          w-[320px]
          animate-float
        "
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-brand-green" aria-hidden="true" />
          <span className="text-xs font-bold text-text-muted tracking-wide uppercase">
            Most Popular
          </span>
          <span className="text-xs text-text-muted">—</span>
          <span className="text-xs font-bold text-brand-purple tracking-wide uppercase">
            Pro Tier
          </span>
        </div>

        <h3 className="text-text-primary font-bold text-lg mb-1">
          Your device is ready. Your projects await.
        </h3>

        <p className="text-text-secondary text-sm mb-4 leading-relaxed">
          3 industry projects · 2 mentor sessions ·<br />
          Portfolio profile · Placement referrals
        </p>

        <button
          className="
            text-brand-orange text-sm font-semibold
            hover:underline transition-all duration-200
            cursor-pointer
          "
          type="button"
        >
          + Unlock on purchase
        </button>
      </div>

      {/* Portfolio building chip */}
      <div
        className="
          absolute -bottom-8 -right-6 z-20
          bg-brand-orange text-white
          px-4 py-2 rounded-full
          text-sm font-semibold
          shadow-lg shadow-brand-orange/30
          animate-float-delayed
          cursor-pointer hover:scale-105 transition-transform duration-200
        "
      >
        Portfolio building →
      </div>
    </div>
  );
}
