import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import { posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.cover] },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const dateFmt = new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: post.cover,
    author: { "@type": "Organization", name: "Buildexa Estimate" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article>
        <header className="relative">
          <Image
            src={post.cover}
            alt={post.coverAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/80" />
          <div className="relative mx-auto max-w-3xl px-4 py-16 md:py-24">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand">
              {post.category} · {dateFmt} · {post.readMinutes} min read
            </p>
            <h1 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight text-white md:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">{post.excerpt}</p>
          </div>
          <div className="ruler-ticks relative" aria-hidden="true" />
        </header>

        <div className="mx-auto max-w-3xl px-4 py-14">
          {post.sections.map((s, i) => (
            <section key={i}>
              {s.heading && (
                <h2 className="mb-4 mt-10 font-display text-2xl font-bold text-navy">
                  {s.heading}
                </h2>
              )}
              {s.paragraphs.map((p, j) => (
                <p key={j} className="mb-5 leading-relaxed text-[#3d4655]">
                  {p}
                </p>
              ))}
            </section>
          ))}

          <div className="mt-12 border-2 border-brand bg-white p-8 text-center">
            <h2 className="font-display text-xl font-bold uppercase text-navy">
              Bidding a job this week?
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-steel">
              Upload your plans and get a detailed takeoff back in 24 to 48
              hours. Your quote arrives within one business hour.
            </p>
            <Link
              href="/contact"
              className="btn-brand mt-5 inline-block bg-brand px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-dark"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </article>

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-display text-xl font-bold uppercase text-navy">Keep reading</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="lift group flex flex-col overflow-hidden border border-line bg-paper"
              >
                <div className="relative h-36">
                  <Image
                    src={p.cover}
                    alt={p.coverAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="font-mono text-xs font-semibold uppercase text-brand">
                    {p.category} · {p.readMinutes} min
                  </p>
                  <h3 className="mt-2 font-display font-bold leading-snug text-navy transition-colors group-hover:text-brand">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
