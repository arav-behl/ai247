const activityItems = [
  { agent: "Support AI", task: "Closed ticket #4821", time: "45 sec ago" },
  { agent: "Ops AI", task: "Processed 71 invoices", time: "2 min ago" },
  { agent: "Sales AI", task: "Sent 12 personalized follow-ups", time: "5 min ago" },
];

const metricCards = [
  { label: "Tasks Completed Today", value: "1,847", trend: "+23%" },
  { label: "Avg. Resolution Time", value: "12m", trend: "-48%" },
  { label: "Monthly Cost Saved", value: "$48,200", trend: "live" },
];

export default function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,118,110,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,118,110,0.08) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage: "radial-gradient(circle at center, black 34%, transparent 78%)",
        }}
      />

      <div className="section-shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="animate-rise-in">
            <span className="section-kicker">
              <span className="h-2 w-2 rounded-full bg-success" />
              Live across India and the US
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Your AI Employee,
              <br />
              <span className="text-accent">Working 24/7</span>
            </h1>

            <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">
              Deploy enterprise-grade AI employees for support, operations, and revenue workflows.
              They learn your process and execute it with consistent quality, every hour of the day.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="button-base button-primary sm:min-w-[12rem]">
                Book a Demo
              </a>
              <a href="#how-it-works" className="button-base button-outline sm:min-w-[12rem]">
                See the Rollout Plan
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted">
              <span className="rounded-full border border-border bg-white px-3 py-1.5">SOC 2 Type II</span>
              <span className="rounded-full border border-border bg-white px-3 py-1.5">99.9% SLA</span>
              <span className="rounded-full border border-border bg-white px-3 py-1.5">India + US Regions</span>
            </div>
          </div>

          <div className="relative">
            <div className="surface-card relative overflow-hidden p-5 sm:p-6 lg:p-7">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-sky-500 to-amber-500" />

              <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="text-sm font-semibold text-muted">AI Workforce Console</p>
                  <p className="text-lg font-semibold">Operations Snapshot</p>
                </div>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  Live
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {metricCards.map((card) => (
                  <div key={card.label} className="rounded-xl border border-border bg-card p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">{card.label}</p>
                    <p className="mt-2 text-2xl font-bold text-foreground">{card.value}</p>
                    <p className="mt-1 text-xs font-semibold text-success">{card.trend}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-border bg-white p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-semibold">Recent Activity</p>
                  <p className="text-xs text-muted">last 5 min</p>
                </div>
                <div className="space-y-2.5">
                  {activityItems.map((item) => (
                    <div
                      key={item.agent}
                      className="flex items-center justify-between rounded-lg border border-border bg-card px-3 py-2.5"
                    >
                      <div>
                        <p className="text-sm font-semibold text-foreground">{item.agent}</p>
                        <p className="text-xs text-muted">{item.task}</p>
                      </div>
                      <span className="text-xs font-medium text-muted">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="animate-drift absolute -bottom-6 -left-5 rounded-xl border border-border bg-white px-4 py-3 shadow-lg">
              <p className="text-xs font-semibold text-muted">Average first response</p>
              <p className="text-lg font-bold text-accent">17 seconds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
