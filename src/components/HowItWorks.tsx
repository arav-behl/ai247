const steps = [
  {
    number: 1,
    title: "Kickoff",
    description:
      "We align on goals, map your systems (Google/Microsoft stack), assess security posture, and plan integrations.",
  },
  {
    number: 2,
    title: "Build & Harden",
    description:
      "Install OpenClaw, harden the environment, connect integrations, build workflows, configure your AI employee's persona.",
  },
  {
    number: 3,
    title: "Go Live",
    description:
      "Your AI employee starts working the same day. Training session for your team. Documentation delivered.",
  },
  {
    number: 4,
    title: "14-Day Hypercare",
    description:
      "Fast fixes, tuning, and adjustments via your dedicated Slack Connect channel. We dial in the workflows.",
  },
  {
    number: 5,
    title: "Managed Care",
    description:
      "Ongoing monitoring, updates, drift checks, and scaling support. Your AI employee stays sharp.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 lg:py-32">
      <div className="section-shell">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">How It Works</span>
          <h2 className="section-title">Live in under a day. Optimized over weeks.</h2>
          <p className="section-subtitle mx-auto">
            Most teams go live same-day. The hypercare period fine-tunes everything to your
            workflows.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical center line - desktop only */}
          <div className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-border md:block" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div key={step.number} className="relative md:flex md:items-center md:py-10">
                  {/* Left column */}
                  <div className={`hidden md:block md:w-1/2 md:pr-12 ${!isLeft ? "md:invisible" : ""}`}>
                    {isLeft && (
                      <div className="text-right">
                        <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                        <p className="mt-2 text-sm text-muted sm:text-base">{step.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Center circle - desktop */}
                  <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:flex">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white text-lg font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Mobile layout: circle + text inline */}
                  <div className="flex items-start gap-4 md:hidden">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-white font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                      <p className="mt-1 text-sm text-muted">{step.description}</p>
                    </div>
                  </div>

                  {/* Right column */}
                  <div className={`hidden md:block md:w-1/2 md:pl-12 ${isLeft ? "md:invisible" : ""}`}>
                    {!isLeft && (
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                        <p className="mt-2 text-sm text-muted sm:text-base">{step.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
