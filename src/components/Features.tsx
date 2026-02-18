const features = [
  {
    title: "Inbound Lead Qualification",
    description:
      "Catches every form fill, DM, and inquiry the moment it lands. Scores leads, enriches them with company data, drafts personalized follow-ups, and routes hot prospects to the right rep — before the lead goes cold.",
    tags: ["Sales", "Revenue"],
    icon: (
      <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Inbox & Calendar Command Center",
    description:
      "Triages thousands of emails, drafts context-aware replies, schedules meetings across time zones, and flags what matters. One user cleared 6,000 emails on day one.",
    tags: ["Exec Productivity"],
    icon: (
      <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Invoice & Expense Tracking",
    description:
      "Monitors incoming invoices, matches them against POs, flags discrepancies, and sends payment reminders before anything goes overdue. Pulls monthly spend summaries by vendor, category, or team — without touching a spreadsheet.",
    tags: ["Finance", "Admin"],
    icon: (
      <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Client Communication & Status Updates",
    description:
      "Drafts weekly status updates for every active client, pulling progress from project tools, Slack threads, and internal notes. Sends them on schedule, follows up on unanswered questions, and keeps your client relationships warm without you writing a single email.",
    tags: ["Account Management", "Services"],
    icon: (
      <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Automated Reporting & Analytics",
    description:
      "Pulls data from Meta Ads, Google Analytics, CRMs, and more. Generates branded PDFs, investor one-pagers, and cross-references revenue against external data — then emails the report to your team.",
    tags: ["Finance", "Operations"],
    icon: (
      <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Bug Detection & Technical Fixes",
    description:
      "Scans your website, finds tracking bugs (like 56% of leads with no source tagged), and fixes them — while you are in the field running your actual business.",
    tags: ["Engineering", "Marketing"],
    icon: (
      <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 lg:py-32">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Real Business Use Cases</span>
          <h2 className="section-title">
            This isn&apos;t a chatbot. It&apos;s a digital employee that does real work.
          </h2>
          <p className="section-subtitle mx-auto">
            From lead qualification to financial reporting, these are the workflows running in
            production today.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <article key={feature.title} className="surface-card p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {feature.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {feature.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-border-light px-2.5 py-1 text-xs font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
