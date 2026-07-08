import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { stats } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Buildexa Estimate is a team of professional construction estimators and quantity surveyors serving US contractors with accurate estimates and takeoffs in 24 to 48 hours.",
};

const values = [
  {
    title: "Traceable numbers",
    body: "Every quantity references the drawing sheet or schedule tag it came from. If we assumed something, the assumption is written on the line, never buried in a unit price.",
  },
  {
    title: "Materials and labor, separated",
    body: "Quantity, waste, material cost, manhours and labor cost are separate columns on every line, so you can swap in your own crew rates or supplier quotes without rebuilding the estimate.",
  },
  {
    title: "Deadlines are the product",
    body: "A perfect estimate after bid day is worth nothing. Standard turnaround is 24 to 48 hours. Rush bids are quoted honestly, and if we cannot hit your date we say so up front.",
  },
];

const tools = ["Planswift", "Bluebeam Revu", "RSMeans data", "Xactimate", "Trimble", "Excel deliverable"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Buildexa"
        title="Estimators who think like contractors"
        sub="We are a team of construction estimators, quantity surveyors and trade specialists producing estimates that contractors can take straight to bid day."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-6 py-8 text-center">
              <p className="font-mono text-3xl font-semibold text-brand">{s.value}</p>
              <p className="mt-2 text-sm text-steel">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold uppercase text-navy">
              Why contractors keep coming back
            </h2>
            <div className="mt-8 space-y-6">
              {values.map((v) => (
                <div key={v.title} className="border-l-4 border-brand bg-white p-6">
                  <h3 className="font-display font-bold text-navy">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold uppercase text-navy">
              How we work
            </h2>
            <p className="mt-6 leading-relaxed text-steel">
              Every project is assigned to an estimator who specializes in that
              trade. A mechanical estimator prices your HVAC job, not a
              generalist. Quantities come off the drawings with professional
              takeoff software, pricing comes from current cost data adjusted
              to the project location, and a second estimator reviews the
              workbook before it ships.
            </p>
            <p className="mt-4 leading-relaxed text-steel">
              The deliverable is always the same: a clean Excel workbook in CSI
              MasterFormat that your team, your suppliers and the lender behind
              your client can all read without translation.
            </p>
            <p className="mb-3 mt-8 text-xs font-bold uppercase tracking-widest text-steel">
              Tools we work with
            </p>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="border border-line bg-white px-4 py-2 font-mono text-xs font-semibold text-navy">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="relative h-44">
                <Image
                  src="/images/blueprint-desk.jpg"
                  alt="Estimator measuring quantities from drawings"
                  fill
                  className="border border-line object-cover"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>
              <div className="relative h-44">
                <Image
                  src="/images/site-sunset.jpg"
                  alt="Crew placing rebar on an active site"
                  fill
                  className="border border-line object-cover"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
