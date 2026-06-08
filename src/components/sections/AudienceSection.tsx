import { AUDIENCE_ITEMS } from "@/lib/constants";

export default function AudienceSection() {
  return (
    <section className="section">
      <div className="section-eyebrow">Who is Bytex Edu for?</div>
      <h2 className="section-h2">Built for every college journey</h2>
      <p className="section-sub">
        Students who want a career edge, parents making a smart investment, and
        colleges that want better outcomes — all in one place.
      </p>
      <div className="audience-grid">
        {AUDIENCE_ITEMS.map((item) => (
          <div
            key={item.title}
            className={`audience-card ${item.isPrimary ? "featured" : ""}`}
          >
            {item.isPrimary && <div className="featured-tag">Primary focus</div>}
            <span className="audience-icon">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
