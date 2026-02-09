"use client";

import { useState } from "react";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    employees: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your API
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 section-gradient">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Copy */}
          <div>
            <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
              Get Started
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
              Ready to Hire Your First{" "}
              <span className="gradient-text">AI Employee?</span>
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-10">
              Book a free demo with our team. We&apos;ll show you exactly how AI247
              can automate your workflows, cut costs, and scale your
              operations — all within 48 hours of signing up.
            </p>

            <div className="space-y-8">
              {[
                {
                  title: "Free 30-Minute Discovery Call",
                  description:
                    "We'll understand your business and identify where AI can have the most impact.",
                },
                {
                  title: "Custom Demo & Proof of Concept",
                  description:
                    "See your AI employee in action with your actual use case before you commit.",
                },
                {
                  title: "No Commitment Required",
                  description:
                    "14-day money-back guarantee. No long-term contracts. Cancel anytime.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <svg
                      className="h-4 w-4 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Form */}
          <div className="rounded-xl border border-border bg-card p-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-success/10 mb-6">
                  <svg
                    className="h-8 w-8 text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Thank You!
                </h3>
                <p className="text-muted">
                  We&apos;ve received your request. Our team will reach out within
                  24 hours to schedule your demo.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold mb-3">Book a Demo</h3>
                <p className="text-sm text-muted mb-8">
                  Fill in your details and we&apos;ll get back to you within 24
                  hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">
                        Company Size
                      </label>
                      <select
                        required
                        value={formData.employees}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            employees: e.target.value,
                          })
                        }
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      >
                        <option value="">Select size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-1000">201-1,000 employees</option>
                        <option value="1000+">1,000+ employees</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">
                      What would you like your AI employee to do?
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent resize-none"
                      placeholder="e.g., Handle customer support tickets, automate sales follow-ups, generate weekly reports..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                  >
                    Book My Free Demo
                  </button>
                  <p className="text-xs text-muted text-center">
                    No credit card required. We&apos;ll respond within 24 hours.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
