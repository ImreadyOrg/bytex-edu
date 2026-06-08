import { BUNDLED_FEATURES, STATS } from "@/lib/constants";

export default function BundledFeaturesSection() {
  const leftFeatures = BUNDLED_FEATURES.slice(0, 3);
  const rightFeatures = BUNDLED_FEATURES.slice(3, 6);

  const backgrounds = [
    "rgba(255,107,43,0.15)", // Orange
    "rgba(0,196,159,0.15)",  // Teal
    "rgba(123,92,240,0.15)", // Purple
    "rgba(255,216,77,0.15)", // Yellow
    "rgba(255,107,43,0.15)", // Orange
    "rgba(0,196,159,0.15)",  // Teal
  ];

  return (
    <section className="section navy-bg" id="bundled">
      <div className="section-eyebrow">What&apos;s bundled with every device</div>
      <h2 className="section-h2">
        More than a laptop.
        <br />
        A career head-start.
      </h2>
      <p className="section-sub">
        The device is just the hardware. Here&apos;s the ecosystem that comes
        activated with it.
      </p>

      <div className="bundled-grid">
        <div className="bundled-left">
          {leftFeatures.map((feature, i) => (
            <div className="bundle-item" key={feature.title}>
              <div
                className="bundle-num"
                style={{ background: backgrounds[i] }}
              >
                {feature.icon}
              </div>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bundled-right">
          {rightFeatures.map((feature, i) => (
            <div className="bundle-item" key={feature.title}>
              <div
                className="bundle-num"
                style={{ background: backgrounds[i + 3] }}
              >
                {feature.icon}
              </div>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: "52px",
          padding: "36px",
          background: "rgba(255,107,43,0.1)",
          border: "1px solid rgba(255,107,43,0.2)",
          borderRadius: "20px",
        }}
      >
        <div className="stat-row" style={{ justifyContent: "space-around" }}>
          {STATS.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <div className="stat-num">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
