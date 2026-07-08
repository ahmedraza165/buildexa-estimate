import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog: Estimating and Bidding Know How",
  description:
    "In depth articles on construction estimating, takeoffs, CSI divisions, estimate pricing and winning more bids, written by the estimators at Buildexa.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Estimating and bidding know how"
        sub="In depth articles from working estimators. How estimates are built, what they cost, how to read them, and how contractors win more of the right jobs."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Link
          href={`/blog/${featured.slug}`}
          className="lift group grid overflow-hidden border border-line bg-white md:grid-cols-[1.1fr_1.3fr]"
        >
          <div className="relative h-64 md:h-auto">
            <Image
              src={featured.cover}
              alt={featured.coverAlt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 45vw, 100vw"
            />
          </div>
          <div className="p-8 md:p-10">
            <p className="font-mono text-xs font-semibold uppercase text-brand">
              Featured · {featured.category} · {featured.readMinutes} min read
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold leading-snug text-navy transition-colors group-hover:text-brand md:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-3 leading-relaxed text-steel">{featured.excerpt}</p>
            <p className="mt-5 text-sm font-bold text-brand">Read article →</p>
          </div>
        </Link>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
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
                <h2 className="mt-2 flex-1 font-display text-lg font-bold leading-snug text-navy transition-colors group-hover:text-brand">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-steel">{p.excerpt}</p>
                <p className="mt-4 text-sm font-bold text-brand">Read article →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
