"use client";

import { useState } from "react";

const plans = [
  {
    name: "Starter",
    description: "For small businesses getting started with AI automation",
    priceUSD: 499,
    priceINR: 39999,
    period: "/month",
    highlight: false,
    features: [
      "1 AI Employee",
      "Up to 5,000 interactions/month",
      "Email & chat support channels",
      "Basic analytics dashboard",
      "Standard integrations (Slack, Email)",
      "48-hour deployment",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    description: "For growing companies that need powerful AI workforce",
    priceUSD: 999,
    priceINR: 74999,
    period: "/month",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Up to 5 AI Employees",
      "Up to 50,000 interactions/month",
      "All support channels (WhatsApp, Slack, etc.)",
      "Advanced analytics & reporting",
      "CRM & ERP integrations",
      "24-hour priority deployment",
      "Dedicated account manager",
      "Custom training on your data",
    ],
    cta: "Book a Demo",
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom requirements",
    priceUSD: null,
    priceINR: null,
    period: "",
    highlight: false,
    features: [
      "Unlimited AI Employees",
      "Unlimited interactions",
      "All channels + custom integrations",
      "White-label option available",
      "Dedicated infrastructure",
      "On-premise / private cloud deployment",
      "Custom SLA (up to 99.99%)",
      "24/7 phone & Slack support",
      "Quarterly business reviews",
    ],
    cta: "Contact Sales",
  },
];

export default function Pricing() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");

  const formatPrice = (usd: number | null, inr: number | null) => {
    if (usd === null || inr === null) return "Custom";
    if (currency === "USD") return `$${usd.toLocaleString()}`;
    return `₹${inr.toLocaleString()}`;
  };

  return (
    <section id="pricing" className="relative w-full py-24 md:py-32 lg:py-40 section-gradient">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
            Pricing
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Hire an AI Employee for a{" "}
            <span className="text-muted">Fraction of the Cost</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted text-base md:text-lg leading-relaxed mb-8 md:mb-10 px-4">
            No hidden fees. No long-term contracts. Deploy in days, not months.
            Pay only for what you use.
          </p>

          {/* Currency toggle */}
          <div className="inline-flex items-center rounded-xl border border-border bg-card p-1.5 md:p-2">
            <button
              onClick={() => setCurrency("USD")}
              className={`rounded-lg px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base font-medium transition-all ${
                currency === "USD"
                  ? "bg-accent text-white"
                  : "text-muted hover:text-foreground"
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency("INR")}
              className={`rounded-lg px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base font-medium transition-all ${
                currency === "INR"
                  ? "bg-accent text-white"
                  : "text-muted hover:text-foreground"
              }`}
            >
              INR (₹)
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-start pt-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-6 md:p-8 lg:p-10 transition-all duration-300 ${
                plan.highlight
                  ? "border-accent/50 bg-card md:scale-[1.02] shadow-xl shadow-accent-glow"
                  : "border-border bg-card hover:border-border-light"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-accent px-4 md:px-5 py-1 md:py-1.5 text-xs md:text-sm font-medium text-white whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">{plan.name}</h3>
                <p className="text-sm md:text-base text-muted">{plan.description}</p>
              </div>

              <div className="mb-6 md:mb-8">
                <div className="flex items-baseline gap-1 md:gap-2">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    {formatPrice(plan.priceUSD, plan.priceINR)}
                  </span>
                  {plan.priceUSD !== null && (
                    <span className="text-muted text-sm md:text-base">{plan.period}</span>
                  )}
                </div>
                {plan.priceUSD !== null && (
                  <p className="text-xs md:text-sm text-muted mt-1 md:mt-2">
                    per AI employee deployed
                  </p>
                )}
              </div>

              <a
                href="#contact"
                className={`block w-full rounded-xl px-4 md:px-6 py-3 md:py-4 text-center text-sm md:text-base font-medium transition-all ${
                  plan.highlight
                    ? "bg-accent text-white hover:bg-accent-hover"
                    : "border border-border text-foreground hover:bg-card-hover"
                }`}
              >
                {plan.cta}
              </a>

              <div className="mt-6 md:mt-10 pt-6 md:pt-8 border-t border-border">
                <ul className="space-y-3 md:space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 md:gap-4 text-sm md:text-base">
                      <svg
                        className="h-5 w-5 md:h-6 md:w-6 text-success shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 md:mt-16 text-center px-4">
          <p className="text-sm md:text-base text-muted">
            All plans include enterprise-grade security, free onboarding, and
            a 14-day money-back guarantee.{" "}
            <a href="#contact" className="text-accent hover:underline">
              Talk to sales
            </a>{" "}
            for custom volume pricing.
          </p>
        </div>
      </div>
    </section>
  );
}
