const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Book a demo call with our team. We'll understand your business processes, pain points, and where AI employees can have the most impact.",
    detail: "30-minute discovery call",
  },
  {
    number: "02",
    title: "We Deploy Your AI Employee",
    description:
      "Our team configures and trains your AI employee on your specific data, processes, and tools. We handle the entire setup — you just approve.",
    detail: "Deployed within 48 hours",
  },
  {
    number: "03",
    title: "Monitor & Optimize",
    description:
      "Your AI employee starts working immediately. Track performance through our dashboard, and our team continuously optimizes for better results.",
    detail: "Real-time analytics dashboard",
  },
  {
    number: "04",
    title: "Scale As You Grow",
    description:
      "Add more AI employees as your needs evolve. From one support agent to an entire AI workforce — scale up or down with no long-term contracts.",
    detail: "No lock-in, cancel anytime",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative w-full py-24 md:py-32 lg:py-40">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
            How It Works
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Live in 48 Hours.{" "}
            <span className="text-muted">Not 48 Days.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted text-base md:text-lg leading-relaxed px-4">
            We handle all the complexity. You get a working AI employee that
            integrates with your existing tools and processes.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute top-[56px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px bg-border"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center px-2 md:px-4">
                {/* Step number */}
                <div className="inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border-2 border-accent bg-background text-accent font-bold text-sm md:text-base mb-6 md:mb-8 relative z-10">
                  {step.number}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">{step.title}</h3>
                <p className="text-sm md:text-base text-muted leading-relaxed mb-3 md:mb-4">
                  {step.description}
                </p>
                <span className="inline-block rounded-full bg-accent/10 px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm font-medium text-accent">
                  {step.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          {/* Without AI247 */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-10">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-red-500/10">
                <svg className="h-5 w-5 md:h-6 md:w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold">Without AI247</h3>
            </div>
            <ul className="space-y-4 md:space-y-5">
              {[
                "Hire, train, and manage large teams for basic tasks",
                "Customer queries go unanswered overnight",
                "Manual data entry and report generation",
                "Missed follow-ups cost you deals",
                "High attrition in repetitive roles",
                "Scaling means months of hiring",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 md:gap-4 text-sm md:text-base text-muted">
                  <svg className="h-5 w-5 md:h-6 md:w-6 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* With AI247 */}
          <div className="rounded-2xl border border-accent/30 bg-card p-6 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-accent/[0.03]"></div>
            <div className="relative">
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-success/10">
                  <svg className="h-5 w-5 md:h-6 md:w-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-semibold">With AI247</h3>
              </div>
              <ul className="space-y-4 md:space-y-5">
                {[
                  "AI employees handle repetitive work instantly",
                  "24/7 customer support — no timezone gaps",
                  "Automated reports and real-time dashboards",
                  "AI follows up on every lead, every time",
                  "Zero attrition — AI doesn't quit",
                  "Scale up in hours, not months",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 md:gap-4 text-sm md:text-base text-foreground">
                    <svg className="h-5 w-5 md:h-6 md:w-6 text-success shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
