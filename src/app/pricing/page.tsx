import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { plans, pricingFaqs } from "@/data/pricing";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Pricing Plans",
  description:
    "Simple pricing for construction estimating: single estimates from $200, monthly plans covering 10 to 15 bids, and dedicated estimators for high volume contractors.",
};

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 shrink-0 text-brand" aria-hidden="true">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple pricing. No hourly billing."
        sub="Every estimate is a fixed price agreed before work starts. Pick the model that fits how often you bid."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`lift relative flex flex-col border bg-white p-8 ${
                p.highlighted ? "border-2 border-brand shadow-xl" : "border-line"
              }`}
            >
              {p.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand px-4 py-1 font-mono text-xs font-bold uppercase tracking-widest text-white">
                  Most popular
                </span>
              )}
              <h2 className="font-display text-xl font-bold uppercase text-navy">{p.name}</h2>
              <p className="mt-4 font-mono text-4xl font-semibold text-brand">{p.price}</p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-steel">{p.period}</p>
              <p className="mt-4 text-sm leading-relaxed text-steel">{p.blurb}</p>
              <ul className="mt-6 flex-1 space-y-3 border-t border-line pt-6 text-sm text-navy">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`btn-brand mt-8 block px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide ${
                  p.highlighted
                    ? "bg-brand text-white hover:bg-brand-dark"
                    : "border-2 border-navy text-navy hover:bg-navy hover:text-white"
                }`}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-steel">
          Not sure which fits? Send your plans and we will recommend the
          cheapest option for your volume. Call{" "}
          <a href={site.phoneHref} className="font-mono font-semibold text-brand">
            {site.phone}
          </a>{" "}
          or use the quote form.
        </p>
      </section>

      {/* guarantee band */}
      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand">
              The Buildexa guarantee
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase text-navy">
              Accurate, on time, or we make it right
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="border-t-4 border-brand bg-paper p-5">
                <p className="font-mono text-2xl font-semibold text-brand">98%</p>
                <p className="mt-1 text-sm text-steel">accuracy measured against bid day results</p>
              </div>
              <div className="border-t-4 border-brand bg-paper p-5">
                <p className="font-mono text-2xl font-semibold text-brand">48 hrs</p>
                <p className="mt-1 text-sm text-steel">standard delivery, agreed in writing on every quote</p>
              </div>
              <div className="border-t-4 border-brand bg-paper p-5">
                <p className="font-mono text-2xl font-semibold text-brand">$0</p>
                <p className="mt-1 text-sm text-steel">for your first consultation and plan review</p>
              </div>
            </div>
          </div>
          <div className="relative hidden h-80 lg:block">
            <Image
              src="/images/handshake.jpg"
              alt="Contractor and estimator agreeing on a project"
              fill
              className="border border-line object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="absolute -bottom-4 -left-4 bg-brand px-5 py-3 font-mono text-sm font-bold uppercase tracking-wide text-white">
              Fixed price. Agreed first.
            </div>
          </div>
        </div>
      </section>

      {/* pricing FAQs */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="font-display text-2xl font-bold uppercase text-navy">
          Pricing questions
        </h2>
        <div className="mt-8 space-y-4">
          {pricingFaqs.map((f) => (
            <details key={f.q} className="border border-line bg-white p-6">
              <summary className="cursor-pointer font-display font-bold text-navy marker:text-brand">
                {f.q}
              </summary>
              <p className="mt-3 leading-relaxed text-steel">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBand
        title="Get your exact price today"
        sub="Upload your plans and we reply with a fixed quote within one business hour."
      />
    </>
  );
}
