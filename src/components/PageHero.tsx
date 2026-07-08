export default function PageHero({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <section className="blueprint">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <p className="mb-3 inline-block border border-brand px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-brand">
          {eyebrow}
        </p>
        <h1 className="font-display text-3xl font-extrabold uppercase leading-tight text-white md:text-5xl">
          {title}
        </h1>
        {sub && <p className="mt-4 max-w-2xl text-lg text-white/75">{sub}</p>}
      </div>
      <div className="ruler-ticks" aria-hidden="true" />
    </section>
  );
}
