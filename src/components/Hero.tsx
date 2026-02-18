export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Dot grid background */}
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />

      <div className="section-shell relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Kicker */}
          <span className="section-kicker">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            Enterprise-Grade AI Deployment
          </span>

          {/* Headline */}
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Your next employee
            <br />
            <span className="text-accent">never sleeps.</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg leading-relaxed">
            We deploy, harden, and maintain{" "}
            <strong className="font-semibold text-foreground">OpenClaw / Clawdbot</strong> as
            always-on AI employees for your business — connected to your email, CRM, calendar, and
            every tool your team uses. Not a chatbot. A digital worker that{" "}
            <strong className="font-semibold text-foreground">
              runs operations while you run the company.
            </strong>
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact" className="button-base button-primary text-base px-6 py-3">
              Get Your AI Employee
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a href="#features" className="button-base button-outline text-base px-6 py-3">
              See What It Does
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap items-start justify-center gap-10 md:gap-16">
            {/* Integrations */}
            <div className="flex flex-col items-center gap-2">
              <svg
                className="h-6 w-6 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <p className="text-2xl font-bold text-foreground">40+</p>
              <p className="text-sm text-muted">Integrations</p>
            </div>

            {/* Always running */}
            <div className="flex flex-col items-center gap-2">
              <svg
                className="h-6 w-6 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-2xl font-bold text-foreground">24/7</p>
              <p className="text-sm text-muted">Always running</p>
            </div>

            {/* Data stays with you */}
            <div className="flex flex-col items-center gap-2">
              <svg
                className="h-6 w-6 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
              </svg>
              <p className="text-2xl font-bold text-foreground">Your Machine</p>
              <p className="text-sm text-muted">Data stays with you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
