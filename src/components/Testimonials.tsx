const testimonials = [
  {
    quote:
      "It feels like hiring an employee rather than opening another chat window.",
    author: "MacStories",
    role: "Review",
  },
  {
    quote:
      "Within an hour it had built a fully featured kanban board where I could assign it tasks and track their state.",
    author: "MacStories",
    role: "Review",
  },
  {
    quote:
      "One user cleared nearly 6,000 emails from their inbox on the first day.",
    author: "Turing College",
    role: "",
  },
  {
    quote:
      "I cancelled $400 in AI subscriptions today. This isn't ChatGPT. It's an AI that actually lives in my business.",
    author: "Business owner",
    role: "Clawdbot user",
  },
  {
    quote:
      "Genuinely the most incredible sci-fi takeoff-adjacent thing I have seen recently.",
    author: "Andrej Karpathy",
    role: "Former Director of AI, Tesla",
  },
  {
    quote:
      "Your slots are going insanely fast. Already sent referrals to friends.",
    author: "Nemke Kostic",
    role: "BBQ Capital",
  },
  {
    quote:
      "You're solving a problem that people like me probably wouldn't take the time to solve ourselves.",
    author: "Andrew Blanchard",
    role: "CEO, insurance & benefits technology",
  },
];

function QuoteCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div className="surface-card mx-3 inline-block w-[340px] shrink-0 p-6 align-top">
      <p className="text-sm leading-relaxed text-muted sm:text-base">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-4 border-t border-border pt-3">
        <p className="text-sm font-semibold text-foreground">{author}</p>
        {role ? <p className="text-xs text-muted">{role}</p> : null}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4);

  return (
    <section className="py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">From Real Businesses</span>
          <h2 className="section-title">What Clawdbot did for them today</h2>
          <p className="section-subtitle mx-auto">
            These aren&apos;t hypotheticals. These are workflows running right now in real
            businesses.
          </p>
        </div>
      </div>

      {/* Marquee row 1 - scrolls left */}
      <div className="relative mt-12 overflow-hidden">
        <div className="flex min-w-max animate-marquee-left">
          {[...row1, ...row1].map((t, i) => (
            <QuoteCard key={`r1-${i}`} quote={t.quote} author={t.author} role={t.role} />
          ))}
        </div>
      </div>

      {/* Marquee row 2 - scrolls right */}
      <div className="relative mt-6 overflow-hidden">
        <div className="flex min-w-max animate-marquee-right">
          {[...row2, ...row2, ...row2].map((t, i) => (
            <QuoteCard key={`r2-${i}`} quote={t.quote} author={t.author} role={t.role} />
          ))}
        </div>
      </div>
    </section>
  );
}
