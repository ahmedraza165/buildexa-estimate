import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { trades, clientTypes } from "@/data/trades";

export const metadata: Metadata = {
  title: "Construction Estimating Services",
  description:
    "Cost estimating and material takeoff services for every trade: concrete, drywall, HVAC, plumbing, electrical, earthwork and more. Delivered in 24 to 48 hours in CSI MasterFormat.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Estimating services for every trade"
        sub="One consistent deliverable across all of them: an Excel workbook in CSI MasterFormat with quantities, waste factors, material costs, manhours and labor on every line."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {trades.map((t) => (
            <Link
              key={t.slug}
              href={`/services/${t.slug}`}
              className="group bg-white p-6 transition-colors hover:bg-paper"
            >
              <p className="font-mono text-xs font-semibold text-brand">DIV {t.division}</p>
              <h2 className="mt-2 font-display text-lg font-bold text-navy group-hover:text-brand">
                {t.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-steel">{t.short}</p>
              <p className="mt-4 text-sm font-bold text-brand">Learn more →</p>
            </Link>
          ))}
        </div>

        <div className="mt-16">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand">
            By client
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold uppercase text-navy">
            Who we work with
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {clientTypes.map((c) => (
              <div key={c.slug} className="border-l-4 border-brand bg-white p-6">
                <h3 className="font-display text-lg font-bold text-navy">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{c.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
