export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="section-shell">
        {/* Main footer */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 py-12 md:py-16 lg:py-20">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-xl bg-accent">
                <svg
                  className="h-5 w-5 md:h-6 md:w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                  />
                </svg>
              </div>
              <span className="text-xl md:text-2xl font-bold tracking-tight">
                AI<span className="text-accent">247</span>
              </span>
            </div>
            <p className="text-sm md:text-base text-muted leading-relaxed mb-4 md:mb-6">
              Enterprise-grade AI employees that work 24/7. Automate your
              business operations with AI that never sleeps.
            </p>
            <div className="flex gap-3 md:gap-4">
              <a
                href="#"
                className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-xl border border-border text-muted transition-colors hover:text-foreground hover:border-border-light"
                aria-label="Twitter"
              >
                <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-xl border border-border text-muted transition-colors hover:text-foreground hover:border-border-light"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm md:text-base font-semibold mb-4 md:mb-6">Product</h4>
            <ul className="space-y-3 md:space-y-4">
              {["Features", "Security", "Pricing", "Integrations", "API"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-sm md:text-base text-muted transition-colors hover:text-foreground"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm md:text-base font-semibold mb-4 md:mb-6">Company</h4>
            <ul className="space-y-3 md:space-y-4">
              {["About", "Blog", "Careers", "Contact", "Partners"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm md:text-base text-muted transition-colors hover:text-foreground"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm md:text-base font-semibold mb-4 md:mb-6">Legal</h4>
            <ul className="space-y-3 md:space-y-4">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "GDPR",
                "DPDPA Compliance",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm md:text-base text-muted transition-colors hover:text-foreground"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6 border-t border-border py-6 md:py-8">
          <p className="text-xs md:text-sm text-muted">
            &copy; {new Date().getFullYear()} AI247. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 text-xs md:text-sm text-muted">
            <span>Mumbai</span>
            <span className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-border"></span>
            <span>Bangalore</span>
            <span className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-border"></span>
            <span>San Francisco</span>
            <span className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-border"></span>
            <span>New York</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
