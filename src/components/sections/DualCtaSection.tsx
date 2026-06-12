"use client";

import Link from "next/link";
import { AppIcon } from "@/lib/icons";
import type { IconName } from "@/lib/icons";

const STUDENT_TAGS: { icon: IconName; label: string }[] = [
  { icon: "graduation-cap", label: "Engineering" },
  { icon: "bar-chart-3", label: "Management" },
  { icon: "credit-card", label: "No-cost EMI" },
];

const COLLEGE_TAGS: { icon: IconName; label: string }[] = [
  { icon: "monitor", label: "Budget Lab" },
  { icon: "brain", label: "AI Lab" },
  { icon: "microscope", label: "Research Lab" },
];

export default function DualCtaSection() {
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
          {STUDENT_TAGS.map((tag) => (
            <span className="dual-tag" key={tag.label}>
              <AppIcon name={tag.icon} size="xs" />
              {tag.label}
            </span>
          ))}
        </div>
        <Link href="/bundles" className="dual-cta-btn orange">
          Explore Devices &amp; Projects
          <AppIcon name="chevron-right" size="xs" className="inline-block ml-1" />
        </Link>
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
          {COLLEGE_TAGS.map((tag) => (
            <span className="dual-tag" key={tag.label}>
              <AppIcon name={tag.icon} size="xs" />
              {tag.label}
            </span>
          ))}
        </div>
        <Link href="/labs" className="dual-cta-btn outline">
          Set Up Your Lab
          <AppIcon name="chevron-right" size="xs" className="inline-block ml-1" />
        </Link>
      </div>
    </section>
  );
}
