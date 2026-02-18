const implementationPlans = [
  {
    name: "Remote",
    description: "Anywhere — first agent + hardening + 14-day hypercare",
    price: "$400",
  },
  {
    name: "In-person",
    description: "SF Bay Area — first agent + hardening + 14-day hypercare",
    price: "$800",
  },
  {
    name: "Additional agent",
    description: "CEO, EA, Sales, Finance — deploy your exec team",
    price: "+$200",
  },
];

const managedCarePlans = [
  {
    name: "Care Standard",
    description: "Up to 2 agents, monitoring, support, 2 hrs/mo",
    price: "$500",
    suffix: "/mo",
  },
  {
    name: "Care Plus",
    description: "Up to 5 agents, priority support, monthly review",
    price: "$1,000",
    suffix: "/mo",
  },
  {
    name: "Care Enterprise",
    description: "SLA, fleet standards, audit logs, security reviews",
    price: "Contact Us",
    suffix: "",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-gradient py-20 md:py-28 lg:py-32">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Pricing</span>
          <h2 className="section-title">Transparent pricing. No surprises.</h2>
          <p className="section-subtitle mx-auto">
            From first agent to fleet-wide deployment. Implementation includes 14 days of hypercare.
            Ongoing support via Managed Care plans.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[680px]">
          {/* Implementation section */}
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted">
            Implementation
          </p>
          <div className="surface-card divide-y divide-border overflow-hidden">
            {implementationPlans.map((plan) => (
              <div key={plan.name} className="flex items-start justify-between gap-4 p-5">
                <div>
                  <p className="text-base font-semibold text-foreground">{plan.name}</p>
                  <p className="mt-0.5 text-sm text-muted">{plan.description}</p>
                </div>
                <p className="shrink-0 text-lg font-bold text-foreground">{plan.price}</p>
              </div>
            ))}
          </div>

          {/* Managed Care section */}
          <p className="mb-3 mt-8 text-xs font-bold uppercase tracking-wider text-muted">
            Managed Care
          </p>
          <div className="surface-card divide-y divide-border overflow-hidden">
            {managedCarePlans.map((plan) => (
              <div key={plan.name} className="flex items-start justify-between gap-4 p-5">
                <div>
                  <p className="text-base font-semibold text-foreground">{plan.name}</p>
                  <p className="mt-0.5 text-sm text-muted">{plan.description}</p>
                </div>
                <p className="shrink-0 text-lg font-bold text-foreground">
                  {plan.price}
                  {plan.suffix ? (
                    <span className="text-sm font-normal text-muted">{plan.suffix}</span>
                  ) : null}
                </p>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <a
            href="#contact"
            className="button-base button-primary mt-8 w-full py-3.5 text-base"
          >
            Book a free call
          </a>
        </div>
      </div>
    </section>
  );
}
