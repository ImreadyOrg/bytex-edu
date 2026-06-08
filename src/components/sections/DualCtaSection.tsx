"use client";

export default function DualCtaSection() {
  const handleOpenDeviceModal = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-device-modal"));
  };

  const handleOpenCollegeModal = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-college-modal"));
  };

  return (
    <section className="dual-cta">
      <div className="dual-panel left-panel">
        <div className="dual-eyebrow" style={{ color: "var(--orange)" }}>
          For students &amp; parents
        </div>
        <div className="dual-h2">
          Find your device. Unlock your first project.
        </div>
        <div className="dual-sub">
          Three tiers. Every stream covered. Industry projects bundled in.
          Student pricing revealed on sign-up.
        </div>
        <div className="dual-icons">
          <span className="dual-tag">🎒 Engineering</span>
          <span className="dual-tag">📊 Management</span>
          <span className="dual-tag">💳 No-cost EMI</span>
        </div>
        <a
          href="#"
          className="dual-cta-btn orange"
          onClick={handleOpenDeviceModal}
        >
          Explore Devices &amp; Projects →
        </a>
      </div>
      <div className="dual-panel right-panel">
        <div className="dual-eyebrow" style={{ color: "var(--teal)" }}>
          For colleges &amp; institutions
        </div>
        <div className="dual-h2">Set up the lab your students deserve.</div>
        <div className="dual-sub">
          Budget labs, mainstream AI labs, high-class AI research labs —
          request architecture and pricing for your institution.
        </div>
        <div className="dual-icons">
          <span className="dual-tag">🖥️ Budget Lab</span>
          <span className="dual-tag">🤖 AI Lab</span>
          <span className="dual-tag">🔬 Research Lab</span>
        </div>
        <a
          href="#"
          className="dual-cta-btn outline"
          onClick={handleOpenCollegeModal}
        >
          Set Up Your Lab →
        </a>
      </div>
    </section>
  );
}
