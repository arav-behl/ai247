const productLinks = [
  { label: "Use Cases", href: "#features" },
  { label: "Services", href: "#how-it-works" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#contact" },
];

const companyLinks = ["About", "Careers", "Blog", "Partners"];
const legalLinks = ["Privacy", "Terms", "Cookie Policy"];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white py-14 md:py-16">
      <div className="section-shell">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-sm font-extrabold text-white">
                AI
              </div>
              <span className="text-xl font-bold text-foreground">
                AI<span className="text-accent">247</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted sm:text-base">
              We deploy, harden, and maintain AI employees for your business — working 24/7.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Product</h4>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-accent sm:text-base"
                  >
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
                  <a
                    href="#"
                    className="text-sm text-muted transition-colors hover:text-accent sm:text-base"
                  >
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
                  <a
                    href="#"
                    className="text-sm text-muted transition-colors hover:text-accent sm:text-base"
                  >
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
            <p>San Francisco, CA</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
