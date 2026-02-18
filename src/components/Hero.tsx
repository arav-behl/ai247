export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center hero-gradient pb-20 pt-28 md:pt-32">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative section-shell text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted md:mb-10 md:gap-3 md:px-5">
          <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-success"></span>
          </span>
          Now serving enterprises across India & the US
        </div>

        {/* Main headline */}
        <h1 className="mx-auto mb-6 max-w-5xl px-4 text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:mb-8 md:text-5xl lg:text-6xl xl:text-7xl">
          Your AI Employee,
          <br />
          <span className="gradient-text">Working 24/7</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-10 max-w-3xl px-4 text-base leading-relaxed text-muted sm:text-lg md:mb-12 md:text-xl">
          Deploy enterprise-grade AI employees that handle customer support,
          manage operations, and automate workflows — around the clock. No
          holidays, no downtime, no burnout.
        </p>

        {/* CTA Buttons */}
        <div className="mb-16 flex flex-col items-center justify-center gap-4 px-4 sm:flex-row md:mb-20 md:gap-6">
          <a
            href="#contact"
            className="button-base button-primary animate-pulse-glow w-full sm:w-auto sm:min-w-[12.5rem]"
          >
            Book a Demo
          </a>
          <a
            href="#how-it-works"
            className="button-base button-outline w-full sm:w-auto sm:min-w-[12.5rem]"
          >
            See How It Works
          </a>
        </div>

        {/* Social proof */}
        <div className="flex flex-col items-center justify-center gap-5 px-4 text-sm text-muted sm:flex-row sm:gap-8 lg:gap-12">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-success" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            SOC 2 Compliant
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-success" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            99.9% Uptime SLA
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-success" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Trusted by 150+ Companies
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="mx-auto mt-16 max-w-5xl md:mt-20">
          <div className="rounded-2xl border border-border bg-card p-1.5 shadow-2xl shadow-accent-glow">
            <div className="rounded-xl bg-background border border-border overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-3 border-b border-border px-5 py-4">
                <div className="h-3.5 w-3.5 rounded-full bg-red-500/80"></div>
                <div className="h-3.5 w-3.5 rounded-full bg-yellow-500/80"></div>
                <div className="h-3.5 w-3.5 rounded-full bg-green-500/80"></div>
                <div className="ml-4 flex-1 rounded-lg bg-card px-4 py-1.5 text-sm text-muted">
                  dashboard.ai247.com
                </div>
              </div>
              {/* Dashboard content mock */}
              <div className="p-6 sm:p-8 md:p-10">
                <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <div className="rounded-xl bg-card border border-border p-6">
                    <p className="text-sm text-muted mb-2">Active AI Employees</p>
                    <p className="text-3xl font-bold text-accent">12</p>
                    <p className="text-sm text-success mt-2">All operational</p>
                  </div>
                  <div className="rounded-xl bg-card border border-border p-6">
                    <p className="text-sm text-muted mb-2">Tasks Completed Today</p>
                    <p className="text-3xl font-bold">1,847</p>
                    <p className="text-sm text-success mt-2">+23% from yesterday</p>
                  </div>
                  <div className="rounded-xl bg-card border border-border p-6">
                    <p className="text-sm text-muted mb-2">Cost Savings</p>
                    <p className="text-3xl font-bold text-success">$48,200</p>
                    <p className="text-sm text-muted mt-2">This month</p>
                  </div>
                </div>
                <div className="rounded-xl bg-card border border-border p-6">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <p className="text-base font-medium">AI Employee Activity</p>
                    <p className="text-sm text-muted">Live</p>
                  </div>
                  <div className="space-y-4">
                    {[
                      { name: "Support Agent", task: "Resolving ticket #4821", status: "active" },
                      { name: "Data Analyst", task: "Generating Q4 report", status: "active" },
                      { name: "Sales Assistant", task: "Following up with 3 leads", status: "active" },
                    ].map((agent, i) => (
                      <div key={i} className="flex flex-col gap-3 rounded-lg border border-border bg-background px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                        <div className="flex items-center gap-4">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success"></span>
                          </span>
                          <div>
                            <p className="text-base font-medium">{agent.name}</p>
                            <p className="text-sm text-muted">{agent.task}</p>
                          </div>
                        </div>
                        <span className="text-sm text-success capitalize sm:text-right">{agent.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
