const testimonials = [
  {
    quote:
      "AI247 replaced our overnight support queue with fully governed automation. CSAT rose from 3.2 to 4.7 in under one quarter.",
    author: "Priya Sharma",
    role: "Head of Operations",
    company: "TechServe Solutions",
  },
  {
    quote:
      "Our AI sales employee handles lead qualification and follow-up without misses. Qualified pipeline volume jumped 40% in month one.",
    author: "Rajesh Mehta",
    role: "VP Sales",
    company: "CloudNine Enterprises",
  },
  {
    quote:
      "Data residency and compliance support made procurement easy. The rollout moved from legal review to production very quickly.",
    author: "Sarah Chen",
    role: "CTO",
    company: "FinEdge",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-20 md:py-28 lg:py-32">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Customer Results</span>
          <h2 className="section-title">Trusted by Teams That Need Reliability</h2>
          <p className="section-subtitle mx-auto">
            Real outcomes from operations, sales, and security-focused leaders.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((testimonial) => (
            <article key={testimonial.author} className="surface-card flex h-full flex-col p-6">
              <div className="mb-5 flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg key={`${testimonial.author}-${index}`} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm leading-relaxed text-muted sm:text-base">&ldquo;{testimonial.quote}&rdquo;</p>

              <div className="mt-6 border-t border-border pt-4">
                <p className="text-base font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
