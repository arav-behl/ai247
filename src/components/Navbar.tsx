"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border">
      <div className="section-shell">
        <div className="flex h-[4.5rem] items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
              <svg
                className="h-5 w-5 text-white"
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
            <span className="text-xl font-bold tracking-tight md:text-2xl">
              AI<span className="text-accent">247</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-10">
            <a
              href="#features"
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              Features
            </a>
            <a
              href="#security"
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              Security
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              Pricing
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <a
              href="#contact"
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              Sign In
            </a>
            <a
              href="#contact"
              className="button-base button-primary min-w-[9.75rem]"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-muted transition-colors hover:bg-card hover:text-foreground md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-border pb-6 pt-5 md:hidden">
            <div className="flex flex-col items-center gap-4 text-center">
              <a
                href="#features"
                className="text-base text-muted transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#security"
                className="text-base text-muted transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Security
              </a>
              <a
                href="#how-it-works"
                className="text-base text-muted transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="text-base text-muted transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <div className="mt-1 flex w-full max-w-sm flex-col gap-3 border-t border-border pt-4">
                <a
                  href="#contact"
                  className="button-base button-outline w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
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
          </div>
        )}
      </div>
    </nav>
  );
}
