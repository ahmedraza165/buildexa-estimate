import Link from "next/link";
import { site } from "@/data/site";

export default function CtaBand({
  title = "Ready to bid your next job?",
  sub = "Upload your plans and get a fixed quote within one business hour. Your estimate is back in 24 to 48 hours.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section className="blueprint">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-3xl font-bold uppercase text-white md:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-white/75">{sub}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="btn-brand bg-brand px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-dark"
          >
            Upload Plans for a Free Quote
          </Link>
          <a
            href={site.phoneHref}
            className="border border-white/30 px-8 py-4 text-center font-mono text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
