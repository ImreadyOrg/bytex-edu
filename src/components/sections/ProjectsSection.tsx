"use client";

import { PROJECTS_TICKER, PROJECTS_OUTCOMES } from "@/lib/constants";
import Link from "next/link";

export default function ProjectsSection() {
  const outcomeBgs = [
    "var(--orange-light)",
    "var(--teal-light)",
    "var(--purple-light)",
    "var(--yellow-light)",
  ];

  return (
    <section className="section light-bg" id="projects">
      <div className="section-eyebrow">What you&apos;ll actually build</div>
      <h2 className="section-h2">
        Real projects. Real companies.
        <br />
        Real proof for your resume.
      </h2>
      <p className="section-sub">
        Scroll through what your peers are working on right now — across
        engineering and management tracks.
      </p>

      <div className="projects-ticker-wrap">
        <div className="projects-ticker">
          {[...PROJECTS_TICKER, ...PROJECTS_TICKER].map((project, index) => (
            <div className="project-chip" key={`${project.title}-${index}`}>
              <div
                className="chip-domain"
                style={{ color: project.categoryColor }}
              >
                {project.category}
              </div>
              <div className="chip-title">{project.title}</div>
              <div className="chip-meta">{project.meta}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="projects-bottom">
        <ul className="outcomes-list">
          {PROJECTS_OUTCOMES.map((outcome, idx) => (
            <li key={outcome.title}>
              <div
                className="outcome-icon"
                style={{ background: outcomeBgs[idx] }}
              >
                {outcome.icon}
              </div>
              <div>
                <strong>{outcome.title}</strong>
                <p>{outcome.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="project-cta-card">
          <h3>Start building before others even settle in.</h3>
          <p>
            Students who work on real projects from Year 1 enter placement
            season with a portfolio — not just a transcript. The device is how
            you start.
          </p>
          <Link href="/bundles" className="btn-white">
            See Devices &amp; Unlock Projects →
          </Link>
          <div className="pcount-row">
            <div>
              <div className="pcount-num">50+</div>
              <div className="pcount-label">Project tracks</div>
            </div>
            <div>
              <div className="pcount-num">12+</div>
              <div className="pcount-label">Domains</div>
            </div>
            <div>
              <div className="pcount-num">100%</div>
              <div className="pcount-label">Mentor-reviewed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
