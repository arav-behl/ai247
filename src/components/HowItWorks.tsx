const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We map your workflows, channels, and quality bars in a focused working session.",
    detail: "30-minute session",
  },
  {
    number: "02",
    title: "Deployment",
    description: "We configure and train your AI employee using your operating playbooks and data.",
    detail: "Go-live within 48 hours",
  },
  {
    number: "03",
    title: "Validation",
    description: "You review outputs in a controlled rollout while we tune prompts and policies.",
    detail: "Human-in-the-loop checks",
  },
  {
    number: "04",
    title: "Scale",
    description: "Expand to new processes and teams with the same governance and analytics layer.",
    detail: "No long-term lock-in",
  },
];

const withoutAi = [
  "High manual load for repetitive workflows",
  "Slow response times outside office hours",
  "Reporting and follow-ups slip through gaps",
  "Scaling requires more hiring and training",
];

const withAi = [
  "AI handles repeatable tasks instantly and consistently",
  "24/7 response coverage across key channels",
  "Automated reporting and proactive alerts",
  "Scale in days without adding operational headcount",
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-20 md:py-28 lg:py-32">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">How It Works</span>
          <h2 className="section-title">Production-Ready in 48 Hours</h2>
          <p className="section-subtitle mx-auto">
            We manage deployment complexity end-to-end so your team can start seeing value quickly.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number} className="surface-card p-6">
              <div className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
                Step {step.number}
              </div>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted sm:text-base">{step.description}</p>
              <p className="mt-4 text-sm font-semibold text-foreground">{step.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          <article className="surface-card p-6 md:p-8">
            <h3 className="text-xl font-semibold text-foreground md:text-2xl">Without AI247</h3>
            <ul className="mt-5 space-y-3">
              {withoutAi.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted sm:text-base">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="surface-card border-accent/30 bg-gradient-to-b from-white to-accent/5 p-6 md:p-8">
            <h3 className="text-xl font-semibold text-foreground md:text-2xl">With AI247</h3>
            <ul className="mt-5 space-y-3">
              {withAi.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground sm:text-base">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-success" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
