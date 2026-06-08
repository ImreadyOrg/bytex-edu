"use client";

export default function HeroSection() {
  const handleOpenDeviceModal = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-device-modal"));
  };

  const handleOpenCollegeModal = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-college-modal"));
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge fade-up">
          🎓 Admission Season 2026 — Enrolments Open
        </div>
        <h1 className="fade-up d1">
          Get a device.
          <br />
          Unlock <em>real industry</em>
          <br />
          projects with it.
        </h1>
        <p className="hero-sub fade-up d2">
          Bytex Edu bundles career-accelerating industry projects, mentorship
          and a verified portfolio with every student device — so you don&apos;t
          just own a laptop, you own your future.
        </p>
        <div className="hero-ctas fade-up d3">
          <a
            href="#"
            className="btn-primary"
            onClick={handleOpenDeviceModal}
          >
            Explore Devices &amp; Projects →
          </a>
          <a
            href="#"
            className="btn-college"
            onClick={handleOpenCollegeModal}
          >
            Set Up Your Lab 🏛️
          </a>
        </div>
        <div className="hero-trust fade-up d4">
          <div className="trust-pill">
            ✓ <strong>Industry projects</strong> included
          </div>
          <div className="trust-pill">
            ✓ <strong>No-cost EMI</strong> available
          </div>
          <div className="trust-pill">
            ✓ <strong>Mentor-reviewed</strong> portfolio
          </div>
        </div>
      </div>
      <div className="hero-visual fade-up d2">
        <div className="card-stack">
          <div className="journey-card card-back">
            <div className="card-eyebrow" style={{ color: "var(--purple)" }}>
              Level 3 — Builder
            </div>
            <div className="card-title">Mentor Review Complete</div>
            <div className="card-meta">
              Automated Inventory System · GitHub · Demo video ready
            </div>
            <div
              className="card-tag"
              style={{
                backgroundColor: "var(--purple-light)",
                color: "var(--purple)",
              }}
            >
              🎯 Industry verified
            </div>
          </div>
          <div className="journey-card card-mid">
            <div className="card-eyebrow" style={{ color: "var(--teal)" }}>
              New project unlocked
            </div>
            <div className="card-title">Smart Campus Energy Monitor</div>
            <div className="card-meta">
              IoT · Team of 4 · Mentor assigned
            </div>
            <div
              className="card-tag"
              style={{
                backgroundColor: "var(--teal-light)",
                color: "#007A62",
              }}
            >
              ⚡ Week 1 of 10
            </div>
          </div>
          <div className="journey-card card-front">
            <div className="card-eyebrow" style={{ color: "var(--orange)" }}>
              🔥 Most Popular — Pro Tier
            </div>
            <div className="card-title">
              Your device is ready. Your projects await.
            </div>
            <div className="card-meta">
              3 industry projects · 2 mentor sessions · Portfolio profile ·
              Placement referrals
            </div>
            <div
              className="card-tag"
              style={{
                backgroundColor: "var(--orange-light)",
                color: "var(--orange)",
                border: "1.5px solid var(--orange-mid)",
              }}
            >
              ✦ Unlock on purchase
            </div>
          </div>
          <div className="floating-chip">📁 Portfolio building →</div>
        </div>
      </div>
    </section>
  );
}
