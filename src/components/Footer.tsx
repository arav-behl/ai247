const productLinks = [
  { label: "Capabilities", href: "#features" },
  { label: "Security", href: "#security" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

const companyLinks = ["About", "Careers", "Blog", "Partners"];
const legalLinks = ["Privacy", "Terms", "Cookie Policy", "DPDPA", "GDPR"];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white/60 py-14 md:py-16">
      <div className="section-shell">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-sm font-extrabold text-white">
                AI
              </div>
              <span className="text-2xl font-bold text-foreground">
                AI<span className="text-accent">247</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted sm:text-base">
              Enterprise-grade AI employees for support, operations, and growth workflows.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Product</h4>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-muted transition-colors hover:text-accent sm:text-base">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted transition-colors hover:text-accent sm:text-base">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Legal</h4>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted transition-colors hover:text-accent sm:text-base">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-sm text-muted">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} AI247. All rights reserved.</p>
            <p>Mumbai, Bangalore, San Francisco, New York</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
