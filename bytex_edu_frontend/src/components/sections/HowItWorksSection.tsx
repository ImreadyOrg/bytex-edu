import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export default function HowItWorksSection() {
  return (
    <section className="section" id="how">
      <div className="section-eyebrow">How it works</div>
      <h2 className="section-h2">From curious to career-ready</h2>
      <p className="section-sub">
        One guided session gets you the right device and unlocks your first
        industry project.
      </p>
      <div className="steps-grid">
        {HOW_IT_WORKS_STEPS.map((step) => (
          <div className="step" key={step.num}>
            <div className="step-num">{step.num}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
