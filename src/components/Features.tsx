const features = [
  {
    code: "CS",
    title: "Customer Support Agent",
    description:
      "Resolves customer tickets across chat and email with policy-accurate responses trained on your docs.",
  },
  {
    code: "DA",
    title: "Data & Analytics",
    description:
      "Monitors KPIs continuously, flags anomalies, and auto-generates management-ready reports.",
  },
  {
    code: "SL",
    title: "Sales & Lead Ops",
    description:
      "Qualifies inbound leads and runs follow-up sequences with complete CRM context.",
  },
  {
    code: "OP",
    title: "Operations Workflows",
    description:
      "Automates repetitive back-office work from invoice handling to approvals and reminders.",
  },
  {
    code: "KM",
    title: "Knowledge Assistant",
    description:
      "Searches internal policies and answers team questions with audit-ready source citations.",
  },
  {
    code: "MC",
    title: "Multi-Channel Integrations",
    description:
      "Works across WhatsApp, Slack, Email, CRM, ERP, and your existing system stack.",
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full py-20 md:py-28 lg:py-32">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Capabilities</span>
          <h2 className="section-title">One Platform. Multiple AI Employees.</h2>
          <p className="section-subtitle mx-auto">
            Launch specialized AI employees for each business function while keeping governance,
            reporting, and security in one place.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="surface-card group p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-sm font-bold text-accent">
                {feature.code}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
