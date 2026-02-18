"use client";

import { useState } from "react";

const highlights = [
  {
    title: "Free Discovery Session",
    description: "We identify the first workflows that can produce measurable ROI quickly.",
  },
  {
    title: "Custom Demo",
    description: "See AI247 configured for your specific use case and operating constraints.",
  },
  {
    title: "No Long-Term Lock-In",
    description: "Start small, prove value, and scale only when the model is working for your team.",
  },
];

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    employees: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-gradient w-full py-20 md:py-28 lg:py-32">
      <div className="section-shell">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
          <div className="surface-card p-6 md:p-8 lg:p-10">
            <span className="section-kicker">Get Started</span>
            <h2 className="section-title">Ready to Deploy Your First AI Employee?</h2>
            <p className="section-subtitle">
              Book a working session and we will map your first production use case in one call.
            </p>

            <div className="mt-8 space-y-5">
              {highlights.map((item) => (
                <div key={item.title} className="flex gap-3 rounded-xl border border-border bg-white p-4">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card p-6 md:p-8 lg:p-10">
            {submitted ? (
              <div className="py-8 text-center md:py-10">
                <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-success/15 text-success">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-5 text-2xl font-semibold">Thanks, request received.</h3>
                <p className="mt-2 text-sm text-muted sm:text-base">
                  Our team will contact you within 24 hours to schedule your walkthrough.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold">Book a Demo</h3>
                <p className="mt-1 text-sm text-muted sm:text-base">
                  Share your details and we will get back with a tailored rollout plan.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        className="form-control"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold">Work Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className="form-control"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold">Company</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => updateField("company", e.target.value)}
                        className="form-control"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold">Company Size</label>
                      <select
                        required
                        value={formData.employees}
                        onChange={(e) => updateField("employees", e.target.value)}
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
                    <label className="mb-2 block text-sm font-semibold">Primary Workflow to Automate</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      rows={4}
                      className="form-control resize-none"
                      placeholder="Example: customer support triage, lead qualification, or invoice processing"
                    />
                  </div>

                  <button type="submit" className="button-base button-primary w-full">
                    Book My Demo
                  </button>
                  <p className="text-center text-xs text-muted sm:text-sm">
                    No credit card required. Typical response time: under 24 hours.
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
