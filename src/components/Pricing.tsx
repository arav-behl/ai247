"use client";

import { useState } from "react";

type PricingPlan = {
  name: string;
  description: string;
  priceUSD: number | null;
  priceINR: number | null;
  features: string[];
  cta: string;
  highlight: boolean;
  badge?: string;
};

const plans: PricingPlan[] = [
  {
    name: "Starter",
    description: "For teams beginning with focused workflow automation.",
    priceUSD: 499,
    priceINR: 39999,
    features: [
      "1 AI employee",
      "Up to 5,000 interactions/month",
      "Email and chat channels",
      "Core analytics dashboard",
      "Standard integrations",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Professional",
    description: "For growth-stage companies scaling customer and ops workflows.",
    priceUSD: 999,
    priceINR: 74999,
    features: [
      "Up to 5 AI employees",
      "Up to 50,000 interactions/month",
      "WhatsApp, Slack, email, and CRM",
      "Advanced analytics and reporting",
      "Priority onboarding support",
    ],
    cta: "Book a Demo",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    description: "For organizations needing dedicated infrastructure and controls.",
    priceUSD: null,
    priceINR: null,
    features: [
      "Unlimited AI employees",
      "Unlimited interactions",
      "Dedicated infra or private cloud",
      "Custom SLA up to 99.99%",
      "24/7 enterprise support",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

const usdFormatter = new Intl.NumberFormat("en-US");
const inrFormatter = new Intl.NumberFormat("en-IN");

export default function Pricing() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");

  const formatPrice = (usd: number | null, inr: number | null) => {
    if (usd === null || inr === null) return "Custom";
    return currency === "USD" ? `$${usdFormatter.format(usd)}` : `₹${inrFormatter.format(inr)}`;
  };

  return (
    <section id="pricing" className="section-gradient w-full py-20 md:py-28 lg:py-32">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Pricing</span>
          <h2 className="section-title">Predictable Pricing, Fast ROI</h2>
          <p className="section-subtitle mx-auto">
            Start with one AI employee and scale as your operations expand. No hidden fees.
          </p>

          <div className="surface-card mx-auto mt-8 grid w-full max-w-xs grid-cols-2 gap-2 p-2">
            <button type="button" onClick={() => setCurrency("USD")} className="button-toggle" aria-pressed={currency === "USD"}>
              USD
            </button>
            <button type="button" onClick={() => setCurrency("INR")} className="button-toggle" aria-pressed={currency === "INR"}>
              INR
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`surface-card relative flex flex-col p-6 md:p-8 ${
                plan.highlight ? "border-accent/40 bg-white shadow-xl shadow-accent/15" : ""
              }`}
            >
              {plan.badge ? (
                <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                  {plan.badge}
                </span>
              ) : null}

              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted">{plan.description}</p>

              <div className="mt-6">
                <p className="text-4xl font-bold text-foreground">{formatPrice(plan.priceUSD, plan.priceINR)}</p>
                {plan.priceUSD !== null ? <p className="mt-1 text-sm text-muted">per month</p> : null}
              </div>

              <a href="#contact" className={`button-base mt-6 w-full ${plan.highlight ? "button-primary" : "button-outline"}`}>
                {plan.cta}
              </a>

              <ul className="mt-6 space-y-3 border-t border-border pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-muted sm:text-base">
                    <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-success/15 text-success">
                      <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
