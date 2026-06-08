import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  return (
    <section className="section light-bg">
      <div className="section-eyebrow">Student voices</div>
      <h2 className="section-h2">Real students. Real decisions.</h2>
      <div className="testimonials-grid">
        {TESTIMONIALS.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.name}>
            <div className="stars">
              {"★".repeat(testimonial.rating)}
              {"☆".repeat(5 - testimonial.rating)}
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
