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
    <section id="contact" className="relative w-full py-24 md:py-32 lg:py-40 section-gradient">
      <div className="section-shell">
        <div className="grid grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left side - Copy */}
          <div className="mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left">
            <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
              Get Started
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 md:mb-8">
              Ready to Hire Your First{" "}
              <span className="gradient-text">AI Employee?</span>
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed mb-8 md:mb-10">
              Book a free demo with our team. We&apos;ll show you exactly how AI247
              can automate your workflows, cut costs, and scale your
              operations — all within 48 hours of signing up.
            </p>

            <div className="mx-auto max-w-xl space-y-6 md:space-y-8 lg:mx-0">
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
                <div key={i} className="flex items-start gap-4 text-left md:gap-5">
                  <div className="flex h-9 w-9 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <svg
                      className="h-4 w-4 md:h-5 md:w-5 text-accent"
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
                    <h3 className="text-sm md:text-base font-semibold mb-1 md:mb-2">{item.title}</h3>
                    <p className="text-sm md:text-base text-muted">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Form */}
          <div className="mx-auto w-full max-w-2xl rounded-2xl border border-border bg-card p-6 md:p-8 lg:p-10">
            {submitted ? (
              <div className="text-center py-12 md:py-16">
                <div className="inline-flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-success/10 mb-6 md:mb-8">
                  <svg
                    className="h-8 w-8 md:h-10 md:w-10 text-success"
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
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                  Thank You!
                </h3>
                <p className="text-sm md:text-base text-muted">
                  We&apos;ve received your request. Our team will reach out within
                  24 hours to schedule your demo.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Book a Demo</h3>
                <p className="text-sm md:text-base text-muted mb-6 md:mb-8">
                  Fill in your details and we&apos;ll get back to you within 24
                  hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="form-control"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="form-control"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Company Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="form-control"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">
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
                        className="form-control"
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
                    <label className="mb-2 block text-sm font-medium">
                      What would you like your AI employee to do?
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="form-control resize-none"
                      placeholder="e.g., Handle customer support tickets, automate sales follow-ups, generate weekly reports..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="button-base button-primary w-full focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                  >
                    Book My Free Demo
                  </button>
                  <p className="text-xs md:text-sm text-muted text-center pt-1 md:pt-2">
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
