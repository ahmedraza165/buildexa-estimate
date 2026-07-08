import Link from "next/link";
import Image from "next/image";
import QuoteForm from "@/components/QuoteForm";
import CtaBand from "@/components/CtaBand";
import SheetPreview from "@/components/SheetPreview";
import Stars from "@/components/Stars";
import { trades } from "@/data/trades";
import { samples } from "@/data/samples";
import { stats } from "@/data/site";
import { posts } from "@/data/posts";
import { plans } from "@/data/pricing";
import { reviews } from "@/data/reviews";

const offerings = [
  {
    title: "GC and Subcontractor Estimates",
    body: "Full multi trade estimates and single trade takeoffs, priced with current local costs and ready for bid day.",
    img: "/images/hero-site.jpg",
    alt: "Crew reviewing a large rebar deck on site",
    href: "/services",
  },
  {
    title: "Estimates for Architects and Developers",
    body: "Concept budgets, design stage checks and bid validation, so the design and the budget stay in the same room.",
    img: "/images/building-modern.jpg",
    alt: "Modern commercial towers",
    href: "/services",
  },
  {
    title: "Monthly Takeoff Plans",
    body: "10 to 15 estimates a month at a fixed price, with priority turnaround and the same estimator on every job.",
    img: "/images/drafting-sketch.jpg",
    alt: "Estimator working through project drawings",
    href: "/pricing",
  },
  {
    title: "Bid Filing and Consultation",
    body: "Scope reviews, bid calendars and honest advice on which jobs are worth your estimating hours.",
    img: "/images/handshake.jpg",
    alt: "Contractor agreement handshake",
    href: "/contact",
  },
];

const whyUs = [
  {
    title: "Fastest turnaround",
    body: "Standard delivery in 24 to 48 hours, agreed in writing on every quote. Rush bids are quoted honestly.",
  },
  {
    title: "Fixed, fair prices",
    body: "Single estimates from 200 dollars, quoted before work starts. No hourly billing and no surprises.",
  },
  {
    title: "Confidential handling",
    body: "Your drawings and numbers are never shared. We sign NDAs without fuss.",
  },
  {
    title: "Accurate and detailed",
    body: "Every quantity references a drawing sheet or schedule tag, with waste factors visible on each line.",
  },
  {
    title: "Bid winning track record",
    body: "98 percent accuracy measured against bid day results across 1,500 plus delivered estimates.",
  },
  {
    title: "Real support",
    body: "Phone, email and WhatsApp answered by estimators, not a call center. Free revision within the first week.",
  },
];

const softwareTools = [
  "Planswift",
  "Bluebeam Revu",
  "RSMeans",
  "Trimble",
  "Xactimate",
  "FastPIPE",
  "FastDUCT",
  "Quest",
];

const homeFaqs = [
  {
    q: "How fast will I get my estimate?",
    a: "Standard turnaround is 24 to 48 hours from confirmed quote. Large multi trade projects may take longer, and the exact delivery time is agreed in writing before we start.",
  },
  {
    q: "How much does an estimate cost?",
    a: "Single estimates start around 200 dollars depending on project size and trades. You get a fixed price in the quote before any work starts. See the Pricing page for plans.",
  },
  {
    q: "What do I need to send you?",
    a: "PDF drawings are enough. Send them through the quote form, by email, or as a Dropbox or Drive link for large sets.",
  },
  {
    q: "What format is the estimate delivered in?",
    a: "An Excel workbook in CSI MasterFormat with materials, manhours and labor split on every line. Download real examples on the Samples page.",
  },
  {
    q: "Can I see samples before I commit?",
    a: "Yes. Eleven real delivered estimates are free to download on the Samples page, covering concrete, drywall, HVAC, plumbing, earthwork, finishes and more.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO with photo background */}
      <section className="relative">
        <Image
          src="/images/hero-site.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/85" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 md:py-24 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <div>
            <p className="mb-4 inline-block border border-brand bg-ink/60 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-brand">
              Bid more. Win more.
            </p>
            <h1 className="font-display text-4xl font-extrabold uppercase leading-[1.05] text-white md:text-5xl lg:text-6xl">
              Accurate construction estimates in{" "}
              <span className="text-brand">24 to 48 hours.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Buildexa Estimate delivers detailed cost estimates and material
              takeoffs for general contractors, subcontractors, home builders
              and developers across the United States. CSI MasterFormat, with
              every quantity traceable to your drawings.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/samples"
                className="border border-white/40 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
              >
                Download Free Samples
              </Link>
              <Link
                href="/pricing"
                className="border border-white/40 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
              >
                See Pricing
              </Link>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-2 gap-px border border-white/15 bg-white/15 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-ink/90 px-4 py-4">
                  <p className="font-mono text-xl font-semibold text-brand">{s.value}</p>
                  <p className="mt-1 text-xs text-white/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 shadow-2xl lg:p-8">
            <h2 className="font-display text-xl font-bold uppercase text-navy">
              Get a free quote
            </h2>
            <p className="mb-5 mt-1 text-sm text-steel">
              Tell us about the job. We reply within one business hour.
            </p>
            <QuoteForm />
          </div>
        </div>
        <div className="ruler-ticks relative" aria-hidden="true" />
      </section>

      {/* WHAT WE OFFER */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand">
          What we offer
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold uppercase text-navy md:text-4xl">
          Estimating support for every side of the table
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((o) => (
            <Link key={o.title} href={o.href} className="lift group flex flex-col border border-line bg-white">
              <div className="relative h-40">
                <Image
                  src={o.img}
                  alt={o.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-1 bg-brand" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display font-bold leading-snug text-navy transition-colors group-hover:text-brand">
                  {o.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">{o.body}</p>
                <p className="mt-3 text-sm font-bold text-brand">Learn more →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand">
            Why Buildexa
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase text-navy md:text-4xl">
            Six reasons contractors stay
          </h2>
          <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w, i) => (
              <div key={w.title} className="bg-white p-6">
                <p className="font-mono text-sm font-semibold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-navy">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRADES */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand">
              What we estimate
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase text-navy md:text-4xl">
              Every trade. One format.
            </h2>
          </div>
          <Link href="/services" className="text-sm font-bold text-brand hover:underline">
            View all services →
          </Link>
        </div>
        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {trades.map((t) => (
            <Link
              key={t.slug}
              href={`/services/${t.slug}`}
              className="group bg-white p-6 transition-colors hover:bg-paper"
            >
              <p className="font-mono text-xs font-semibold text-brand">DIV {t.division}</p>
              <h3 className="mt-2 font-display text-lg font-bold text-navy transition-colors group-hover:text-brand">
                {t.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{t.short}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* COLLAGE + COPY */}
      <section className="blueprint">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:py-24 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative h-44 sm:h-56">
              <Image src="/images/crane-sky.jpg" alt="Tower cranes over a high rise build" fill className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
            </div>
            <div className="relative mt-8 h-44 sm:h-56">
              <Image src="/images/residence-modern.jpg" alt="Modern custom residence" fill className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
            </div>
            <div className="relative -mt-8 h-44 sm:h-56">
              <Image src="/images/site-sunset.jpg" alt="Rebar crew working on site" fill className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
            </div>
            <div className="relative h-44 sm:h-56">
              <Image src="/images/renovation.jpg" alt="Interior renovation in progress" fill className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
            </div>
          </div>
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand">
              Residential to federal
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase text-white md:text-4xl">
              From the first pour to the final finish, we price it all
            </h2>
            <p className="mt-4 text-white/75">
              Custom homes, hotel towers, hospitals, car washes, police
              headquarters and military facilities. Our sample library shows
              real delivered work across six states, and the same careful
              format scales from a single trade to a full CSI estimate.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/85">
              <li className="flex gap-3">
                <span className="mt-1.5 block h-2 w-2 shrink-0 bg-brand" />
                Residential, commercial, industrial, civil and public sector
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 block h-2 w-2 shrink-0 bg-brand" />
                New construction, renovation and tenant improvement
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 block h-2 w-2 shrink-0 bg-brand" />
                Plan and spec, design build, and budget stage checks
              </li>
            </ul>
            <Link
              href="/samples"
              className="btn-brand mt-8 inline-block bg-brand px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-dark"
            >
              See the proof
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand">
          How it works
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold uppercase text-navy md:text-4xl">
          Plans in. Estimate out.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
          {[
            {
              n: "01",
              title: "Upload your plans",
              body: "Send PDF drawings through the quote form, by email, or as a Dropbox or Drive link. Any format, any trade, any state.",
            },
            {
              n: "02",
              title: "Get a fixed quote",
              body: "Within one business hour you get the price and delivery time for your estimate. No surprises and no hourly billing.",
            },
            {
              n: "03",
              title: "Receive your estimate",
              body: "In 24 to 48 hours you get an Excel workbook in CSI format, with quantities, waste, material costs, manhours and labor on every line.",
            },
          ].map((s) => (
            <div key={s.n} className="lift border-t-4 border-brand bg-white p-6">
              <p className="font-mono text-3xl font-semibold text-brand">{s.n}</p>
              <h3 className="mt-3 font-display text-lg font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand">
                Pricing
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold uppercase text-navy md:text-4xl">
                Fixed prices, agreed before work starts
              </h2>
            </div>
            <Link href="/pricing" className="text-sm font-bold text-brand hover:underline">
              Full pricing details →
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((p) => (
              <Link
                key={p.name}
                href="/pricing"
                className={`lift flex flex-col border bg-paper p-7 ${
                  p.highlighted ? "border-2 border-brand" : "border-line"
                }`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg font-bold uppercase text-navy">{p.name}</h3>
                  {p.highlighted && (
                    <span className="bg-brand px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-white">
                      Popular
                    </span>
                  )}
                </div>
                <p className="mt-3 font-mono text-3xl font-semibold text-brand">{p.price}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-steel">{p.period}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-steel">{p.blurb}</p>
                <p className="mt-4 text-sm font-bold text-brand">{p.cta} →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLES */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand">
              Proof, not promises
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase text-navy md:text-4xl">
              Download real estimates
            </h2>
          </div>
          <Link href="/samples" className="text-sm font-bold text-brand hover:underline">
            Browse all samples →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {samples
            .filter((s) => s.featured)
            .map((s) => (
              <div key={s.title} className="lift flex flex-col border border-line bg-white">
                <div className="p-4">
                  <SheetPreview
                    division={s.trade}
                    rows={[
                      ["13", "Per drawings and schedules", "3,970", "SF", "●●●"],
                      ["14", "Waste factor applied", "1,650", "SF", "●●●"],
                      ["15", "Labor and manhours split", "904", "SF", "●●●"],
                    ]}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 pt-1">
                  <p className="font-mono text-xs text-brand">{s.type}</p>
                  <h3 className="mt-1 font-display text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-steel">
                    {s.trade} · {s.location}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-steel">{s.scope}</p>
                  <a href={s.file} download className="mt-4 text-sm font-bold text-brand hover:underline">
                    Download the Excel file →
                  </a>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* SOFTWARE STRIP */}
      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <p className="text-center font-mono text-xs font-semibold uppercase tracking-widest text-steel">
            Takeoffs and pricing built with industry standard tools
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {softwareTools.map((t) => (
              <span
                key={t}
                className="border border-line bg-paper px-5 py-2.5 font-mono text-sm font-semibold text-navy"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand">
            Customer reviews
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase text-navy md:text-4xl">
            98 percent of clients rate us five stars
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-steel">
            Contractors across the country trust Buildexa numbers on bid day.
            Here is what a few of them say.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="lift flex flex-col border border-line bg-white p-6">
              <Stars count={r.stars} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-navy">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy font-display text-sm font-bold text-white">
                  {r.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-bold text-navy">{r.name}</span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-steel">
                    {r.company} · {r.location}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:py-20 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand">
              FAQs
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase text-navy">
              Questions contractors ask first
            </h2>
            <p className="mt-4 text-steel">
              Straight answers on turnaround, pricing and the deliverable. The
              full list lives on the FAQ page.
            </p>
            <Link
              href="/faqs"
              className="btn-brand mt-6 inline-block bg-navy px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-ink"
            >
              All FAQs
            </Link>
            <div className="relative mt-8 hidden h-56 lg:block">
              <Image
                src="/images/drafting-sketch.jpg"
                alt="Reviewing project drawings"
                fill
                className="border border-line object-cover"
                sizes="30vw"
              />
            </div>
          </div>
          <div className="space-y-4">
            {homeFaqs.map((f) => (
              <details key={f.q} className="border border-line bg-paper p-6">
                <summary className="cursor-pointer font-display font-bold text-navy marker:text-brand">
                  {f.q}
                </summary>
                <p className="mt-3 leading-relaxed text-steel">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand">
              From the blog
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase text-navy">
              Estimating know how
            </h2>
          </div>
          <Link href="/blog" className="text-sm font-bold text-brand hover:underline">
            All articles →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="lift group flex flex-col overflow-hidden border border-line bg-white"
            >
              <div className="relative h-44">
                <Image
                  src={p.cover}
                  alt={p.coverAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-xs font-semibold uppercase text-brand">
                  {p.category} · {p.readMinutes} min
                </p>
                <h3 className="mt-2 flex-1 font-display text-lg font-bold leading-snug text-navy transition-colors group-hover:text-brand">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand
        title="Got your plans ready? Let us talk"
        sub="Upload the drawings and get a fixed quote within one business hour. Your estimate is back in 24 to 48 hours."
      />
    </>
  );
}
