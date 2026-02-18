const securityFeatures = [
  "SOC 2 Type II audited controls",
  "AES-256 at rest and TLS 1.3 in transit",
  "Data residency across India, US, EU, and Singapore",
  "Role-based access control with audit trails",
  "GDPR and DPDPA alignment",
  "24/7 threat detection and incident response",
];

const trustMetrics = [
  { label: "Encryption", value: "256-bit" },
  { label: "Uptime SLA", value: "99.9%" },
  { label: "Breaches", value: "0" },
  { label: "Monitoring", value: "24/7" },
];

export default function Security() {
  return (
    <section id="security" className="section-gradient w-full py-20 md:py-28 lg:py-32">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="surface-card p-6 md:p-8 lg:p-10">
            <span className="section-kicker">Enterprise Security</span>
            <h2 className="section-title">Compliance and Security Built In</h2>
            <p className="section-subtitle">
              AI247 ships with the controls enterprise teams expect. Security is not an add-on,
              it is part of every deployment by default.
            </p>

            <ul className="mt-8 grid gap-3">
              {securityFeatures.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-border bg-white px-4 py-3"
                >
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-success/15 text-success">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm text-foreground sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-card flex flex-col justify-between p-6 md:p-8 lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted">Trust Snapshot</p>
              <h3 className="mt-2 text-2xl font-semibold text-foreground">Security Metrics That Matter</h3>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-4">
              {trustMetrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-border bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">{metric.label}</p>
                  <p className="mt-1 text-2xl font-bold text-foreground">{metric.value}</p>
                </div>
              ))}
            </div>

            <p className="mt-7 rounded-lg border border-accent/20 bg-accent/10 px-4 py-3 text-sm text-accent">
              Need private cloud or on-prem deployment? Enterprise architecture support is available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
