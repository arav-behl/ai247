export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient pt-16">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success"></span>
          </span>
          Now serving enterprises across India & the US
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          Your AI Employee,
          <br />
          <span className="gradient-text">Working 24/7</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted leading-relaxed mb-10">
          Deploy enterprise-grade AI employees that handle customer support,
          manage operations, and automate workflows — around the clock. No
          holidays, no downtime, no burnout.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#contact"
            className="w-full sm:w-auto rounded-lg bg-accent px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-accent-hover animate-pulse-glow"
          >
            Book a Demo
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto rounded-lg border border-border px-8 py-3.5 text-base font-medium text-foreground transition-all hover:bg-card"
          >
            See How It Works
          </a>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm text-muted">
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
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-xl border border-border bg-card p-1 shadow-2xl shadow-accent-glow">
            <div className="rounded-lg bg-background border border-border overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                <div className="ml-4 flex-1 rounded-md bg-card px-3 py-1 text-xs text-muted">
                  dashboard.ai247.com
                </div>
              </div>
              {/* Dashboard content mock */}
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="rounded-lg bg-card border border-border p-4">
                    <p className="text-xs text-muted mb-1">Active AI Employees</p>
                    <p className="text-2xl font-bold text-accent">12</p>
                    <p className="text-xs text-success mt-1">All operational</p>
                  </div>
                  <div className="rounded-lg bg-card border border-border p-4">
                    <p className="text-xs text-muted mb-1">Tasks Completed Today</p>
                    <p className="text-2xl font-bold">1,847</p>
                    <p className="text-xs text-success mt-1">+23% from yesterday</p>
                  </div>
                  <div className="rounded-lg bg-card border border-border p-4">
                    <p className="text-xs text-muted mb-1">Cost Savings</p>
                    <p className="text-2xl font-bold text-success">$48,200</p>
                    <p className="text-xs text-muted mt-1">This month</p>
                  </div>
                </div>
                <div className="rounded-lg bg-card border border-border p-4">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-medium">AI Employee Activity</p>
                    <p className="text-xs text-muted">Live</p>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: "Support Agent", task: "Resolving ticket #4821", status: "active" },
                      { name: "Data Analyst", task: "Generating Q4 report", status: "active" },
                      { name: "Sales Assistant", task: "Following up with 3 leads", status: "active" },
                    ].map((agent, i) => (
                      <div key={i} className="flex items-center justify-between rounded-md bg-background border border-border px-4 py-2.5">
                        <div className="flex items-center gap-3">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-success"></span>
                          </span>
                          <div>
                            <p className="text-sm font-medium">{agent.name}</p>
                            <p className="text-xs text-muted">{agent.task}</p>
                          </div>
                        </div>
                        <span className="text-xs text-success capitalize">{agent.status}</span>
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
