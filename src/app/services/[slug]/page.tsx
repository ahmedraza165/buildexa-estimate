import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import CtaBand from "@/components/CtaBand";
import { trades } from "@/data/trades";
import { samples } from "@/data/samples";

const tradeImages: Record<string, { src: string; alt: string }> = {
  "concrete-estimating-services": { src: "/images/site-sunset.jpg", alt: "Crew placing rebar ahead of a concrete pour" },
  "drywall-estimating-services": { src: "/images/renovation.jpg", alt: "Interior renovation in progress" },
  "hvac-estimating-services": { src: "/images/building-modern.jpg", alt: "Commercial towers with large mechanical scope" },
  "plumbing-estimating-services": { src: "/images/building-white.jpg", alt: "Modern building with full plumbing systems" },
  "electrical-estimating-services": { src: "/images/crane-sky.jpg", alt: "High rise construction with cranes" },
  "earthwork-estimating-services": { src: "/images/hero-site.jpg", alt: "Open site prepared for foundations" },
  "landscaping-estimating-services": { src: "/images/residence-modern.jpg", alt: "Modern residence with finished landscaping" },
  "paving-estimating-services": { src: "/images/hero-site.jpg", alt: "Large flat site ready for paving" },
  "flooring-estimating-services": { src: "/images/timber-interior.jpg", alt: "Finished timber interior" },
  "masonry-estimating-services": { src: "/images/building-white.jpg", alt: "Masonry and concrete building envelope" },
  "roofing-estimating-services": { src: "/images/crane-sky.jpg", alt: "Roof structure rising on a high rise build" },
  "framing-lumber-estimating-services": { src: "/images/timber-interior.jpg", alt: "Exposed timber framing in a finished home" },
};

export function generateStaticParams() {
  return trades.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const trade = trades.find((t) => t.slug === slug);
  if (!trade) return {};
  return {
    title: `${trade.name} Services`,
    description: `${trade.short} Delivered in 24 to 48 hours in CSI MasterFormat with materials and labor split.`,
  };
}

export default async function TradePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trade = trades.find((t) => t.slug === slug);
  if (!trade) notFound();

  const related = samples.filter((s) => s.tradeSlug === trade.slug);
  const siblings = trades.filter((t) => t.slug !== trade.slug).slice(0, 6);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: trade.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        eyebrow={`CSI Division ${trade.division}`}
        title={`${trade.name} Services`}
        sub={trade.short}
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <p className="text-lg leading-relaxed text-navy">{trade.intro}</p>

          {tradeImages[trade.slug] && (
            <div className="relative mt-8 h-56 md:h-72">
              <Image
                src={tradeImages[trade.slug].src}
                alt={tradeImages[trade.slug].alt}
                fill
                className="border border-line object-cover"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
              <div className="absolute bottom-0 left-0 bg-brand px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide text-white">
                Division {trade.division} · {trade.name}
              </div>
            </div>
          )}

          <h2 className="mt-12 font-display text-2xl font-bold uppercase text-navy">
            Included in every estimate
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {trade.includes.map((item) => (
              <li key={item} className="flex gap-3 border border-line bg-white p-4 text-sm text-navy">
                <span aria-hidden="true" className="mt-1.5 block h-2 w-2 shrink-0 bg-brand" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-2xl font-bold uppercase text-navy">
            The deliverable
          </h2>
          <p className="mt-4 leading-relaxed text-steel">
            An Excel workbook organized by CSI division. Every line shows the
            drawing or schedule reference, quantity, waste factor, unit,
            material cost, manhours and labor cost. A summary sheet rolls the
            divisions up and carries overhead, profit, insurance and
            contingency. You can hand it to a supplier for pricing or plug in
            your own rates.
          </p>

          {related.length > 0 && (
            <>
              <h2 className="mt-12 font-display text-2xl font-bold uppercase text-navy">
                Related sample work
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {related.map((s) => (
                  <Link key={s.title} href="/samples" className="group border border-line bg-white p-5 hover:border-brand">
                    <p className="font-mono text-xs text-brand">{s.type}</p>
                    <h3 className="mt-1 font-display font-bold text-navy group-hover:text-brand">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase text-steel">{s.location}</p>
                  </Link>
                ))}
              </div>
            </>
          )}

          <h2 className="mt-12 font-display text-2xl font-bold uppercase text-navy">
            Frequently asked
          </h2>
          <div className="mt-6 space-y-4">
            {trade.faqs.map((f) => (
              <details key={f.q} className="group border border-line bg-white p-5">
                <summary className="cursor-pointer font-semibold text-navy marker:text-brand">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-steel">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <aside>
          <div className="sticky top-24 border border-line bg-white p-6">
            <h2 className="font-display text-lg font-bold uppercase text-navy">
              Get a {trade.name.toLowerCase()} quote
            </h2>
            <p className="mb-5 mt-1 text-sm text-steel">
              Upload plans and get a price back within one business hour.
            </p>
            <QuoteForm compact />
            <div className="mt-6 border-t border-line pt-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-steel">
                Other services
              </p>
              <ul className="space-y-2 text-sm">
                {siblings.map((t) => (
                  <li key={t.slug}>
                    <Link href={`/services/${t.slug}`} className="text-navy hover:text-brand">
                      {t.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </section>
      <CtaBand title={`Need a ${trade.name.toLowerCase()} takeoff this week?`} />
    </>
  );
}
