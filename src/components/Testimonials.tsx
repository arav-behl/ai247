const testimonials = [
  {
    quote:
      "AI247 replaced our entire night shift support team. Our CSAT score went from 3.2 to 4.7 in three months. The ROI was immediate.",
    author: "Priya Sharma",
    role: "Head of Operations",
    company: "TechServe Solutions, Mumbai",
  },
  {
    quote:
      "We deployed an AI sales assistant and saw a 40% increase in qualified leads within the first month. It follows up on every single prospect — something our team could never do.",
    author: "Rajesh Mehta",
    role: "VP of Sales",
    company: "CloudNine Enterprises, Bangalore",
  },
  {
    quote:
      "The security standards sold us. SOC 2 compliance, data residency in India, and DPDPA compliance — it checked every box our legal team had.",
    author: "Sarah Chen",
    role: "CTO",
    company: "FinEdge Inc., San Francisco",
  },
  {
    quote:
      "We were skeptical about AI handling customer complaints. After the pilot, our resolution time dropped from 4 hours to 12 minutes. We're now rolling out across all departments.",
    author: "Amit Patel",
    role: "CEO",
    company: "QuickCommerce, Delhi",
  },
  {
    quote:
      "AI247's deployment speed is unmatched. We went from initial call to a fully operational AI employee in 36 hours. No other vendor came close.",
    author: "Michael Torres",
    role: "Director of Innovation",
    company: "Apex Retail Group, New York",
  },
  {
    quote:
      "Managing inventory across 200+ SKUs was a nightmare. Our AI employee now handles reorder alerts, supplier communication, and demand forecasting automatically.",
    author: "Deepika Nair",
    role: "Supply Chain Manager",
    company: "FreshBasket, Hyderabad",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Trusted by Companies{" "}
            <span className="text-muted">Across the Globe</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted text-lg">
            From startups in Bangalore to enterprises in New York — see why
            businesses choose AI247 for their AI workforce.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-border-light"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-muted leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent font-semibold text-sm">
                  {testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-medium">{testimonial.author}</p>
                  <p className="text-xs text-muted">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
