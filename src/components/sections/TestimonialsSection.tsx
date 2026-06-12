import { TESTIMONIALS } from "@/lib/constants";
import { AppIcon } from "@/lib/icons";

export default function TestimonialsSection() {
  return (
    <section className="section light-bg">
      <div className="section-eyebrow">Student voices</div>
      <h2 className="section-h2">Real students. Real decisions.</h2>
      <div className="testimonials-grid">
        {TESTIMONIALS.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.name}>
            <div className="stars" aria-label={`${testimonial.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, index) => (
                <AppIcon
                  key={index}
                  name="star"
                  size="sm"
                  className={
                    index < testimonial.rating
                      ? "text-[var(--orange)] fill-[var(--orange)]"
                      : "text-[var(--border)]"
                  }
                  strokeWidth={index < testimonial.rating ? 0 : 1.75}
                />
              ))}
            </div>
            <blockquote>{testimonial.quote}</blockquote>
            <div className="testimonial-author">
              <div
                className="author-avatar"
                style={{ background: testimonial.avatarBg }}
              >
                {testimonial.avatarText}
              </div>
              <div>
                <div className="author-name">{testimonial.name}</div>
                <div className="author-detail">{testimonial.detail}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
