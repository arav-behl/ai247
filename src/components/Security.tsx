const securityFeatures = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "SOC 2 Type II Certified",
    description: "Our infrastructure meets the highest standards for security, availability, and confidentiality. Audited annually by independent third parties.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "End-to-End Encryption",
    description: "All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Your business data never leaves your secure environment without authorization.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: "Data Residency Options",
    description: "Choose where your data lives. We offer deployment in India (Mumbai), US (Virginia), EU (Frankfurt), and Singapore to meet your compliance requirements.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Role-Based Access Control",
    description: "Fine-grained permissions ensure your AI employees only access what they need. Full audit trails for every action, every interaction.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "GDPR & DPDPA Compliant",
    description: "Fully compliant with India's Digital Personal Data Protection Act (DPDPA) and the EU's GDPR. We take privacy regulations seriously across every jurisdiction.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "24/7 Security Monitoring",
    description: "Continuous threat detection and incident response. Our security team monitors for anomalies around the clock so you can sleep peacefully.",
  },
];

export default function Security() {
  return (
    <section id="security" className="relative w-full py-24 md:py-32 lg:py-40 section-gradient">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
            Enterprise Security
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Security That Enterprises{" "}
            <span className="text-muted">Demand</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted text-base md:text-lg leading-relaxed px-4">
            We built AI247 with enterprise-grade security from day one. Your
            data, your rules — we just make the AI work.
          </p>
        </div>

        {/* Security features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-card p-6 md:p-8 transition-all duration-300 hover:bg-card-hover hover:border-border-light"
            >
              <div className="mb-4 md:mb-5 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{feature.title}</h3>
              <p className="text-sm md:text-base text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust banner */}
        <div className="mt-16 md:mt-20 rounded-2xl border border-border bg-card p-8 md:p-12 lg:p-14 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-muted">
            <div className="flex flex-col items-center gap-2 md:gap-3">
              <span className="text-2xl md:text-4xl font-bold text-foreground">256-bit</span>
              <span className="text-xs md:text-sm">AES Encryption</span>
            </div>
            <div className="flex flex-col items-center gap-2 md:gap-3">
              <span className="text-2xl md:text-4xl font-bold text-foreground">99.9%</span>
              <span className="text-xs md:text-sm">Uptime SLA</span>
            </div>
            <div className="flex flex-col items-center gap-2 md:gap-3">
              <span className="text-2xl md:text-4xl font-bold text-foreground">0</span>
              <span className="text-xs md:text-sm">Data Breaches</span>
            </div>
            <div className="flex flex-col items-center gap-2 md:gap-3">
              <span className="text-2xl md:text-4xl font-bold text-foreground">24/7</span>
              <span className="text-xs md:text-sm">Security Monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
