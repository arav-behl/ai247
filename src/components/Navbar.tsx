"use client";

import { useState } from "react";

const navLinks = [
  { href: "#features", label: "Use Cases" },
  { href: "#how-it-works", label: "Services" },
  { href: "#security", label: "Security" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "FAQ" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm">
      <div className="section-shell">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5" aria-label="AI247 home">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-white">
              <span className="text-sm font-extrabold">AI</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              AI<span className="text-accent">247</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="button-base button-primary text-sm"
              style={{ minHeight: "2.5rem", padding: "0.5rem 1.25rem" }}
            >
              Book a Call
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:border-accent hover:text-accent md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen ? (
          <div className="border-t border-border pb-4 pt-3 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-card-hover hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-3 border-t border-border pt-3">
              <a
                href="#contact"
                className="button-base button-primary w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Call
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
