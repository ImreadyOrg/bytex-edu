"use client";

import Link from "next/link";
import { AppIcon } from "@/lib/icons";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge fade-up">
          <AppIcon name="graduation-cap" size="xs" className="inline-block mr-1.5 -mt-0.5" />
          Admission Season 2026 — Enrollments Open
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
          <Link href="/bundles" className="btn-primary">
            Explore Devices &amp; Projects
            <AppIcon name="chevron-right" size="xs" className="inline-block ml-1" />
          </Link>
          <Link href="/labs" className="btn-college">
            Set Up Your Lab
            <AppIcon name="building-2" size="xs" className="inline-block ml-1.5" />
          </Link>
        </div>
        <div className="hero-trust fade-up d4">
          <div className="trust-pill">
            <AppIcon name="check" size="xs" className="inline-block mr-1 text-[var(--teal)]" />
            <strong>Industry projects</strong> included
          </div>
          <div className="trust-pill">
            <AppIcon name="check" size="xs" className="inline-block mr-1 text-[var(--teal)]" />
            <strong>No-cost EMI</strong> available
          </div>
          <div className="trust-pill">
            <AppIcon name="check" size="xs" className="inline-block mr-1 text-[var(--teal)]" />
            <strong>Mentor-reviewed</strong> portfolio
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
              <AppIcon name="badge-check" size="xs" className="inline-block mr-1 -mt-0.5" />
              Industry verified
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
              <AppIcon name="zap" size="xs" className="inline-block mr-1 -mt-0.5" />
              Week 1 of 10
            </div>
          </div>
          <div className="journey-card card-front">
            <div className="card-eyebrow" style={{ color: "var(--orange)" }}>
              <AppIcon name="star" size="xs" className="inline-block mr-1 -mt-0.5" />
              Most Popular — Pro Tier
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
              Unlock on purchase
            </div>
          </div>
          <div className="floating-chip">
            <AppIcon name="folder-open" size="xs" className="inline-block mr-1 -mt-0.5" />
            Portfolio building
            <AppIcon name="chevron-right" size="xs" className="inline-block ml-0.5" />
          </div>
        </div>
      </div>
    </section>
  );
}
