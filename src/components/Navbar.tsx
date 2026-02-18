"use client";

import { useState } from "react";

const navLinks = [
  { href: "#features", label: "Capabilities" },
  { href: "#security", label: "Security" },
  { href: "#how-it-works", label: "Process" },
  { href: "#pricing", label: "Pricing" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 pt-3">
      <div className="section-shell">
        <div className="glass-card rounded-2xl px-4 shadow-lg shadow-black/5 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-2.5" aria-label="AI247 home">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-white shadow-md shadow-accent/25">
                <span className="text-sm font-extrabold">AI</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                AI<span className="text-accent">247</span>
              </span>
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <a href="#contact" className="button-base button-outline">
                Talk to Sales
              </a>
              <a href="#contact" className="button-base button-primary">
                Book a Demo
              </a>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white text-foreground transition-colors hover:border-accent hover:text-accent md:hidden"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {mobileMenuOpen ? (
            <div className="border-t border-border pb-4 pt-3 md:hidden">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-muted transition-colors hover:bg-card hover:text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-3 grid grid-cols-1 gap-2 border-t border-border pt-3">
                <a
                  href="#contact"
                  className="button-base button-outline w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Talk to Sales
                </a>
                <a
                  href="#contact"
                  className="button-base button-primary w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book a Demo
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
