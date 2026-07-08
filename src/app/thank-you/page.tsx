import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Request Received",
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <section className="blueprint">
      <div className="mx-auto flex max-w-3xl flex-col items-start px-4 py-24 md:py-32">
        <p className="mb-4 inline-block border border-brand px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-brand">
          Request received
        </p>
        <h1 className="font-display text-4xl font-extrabold uppercase leading-tight text-white md:text-5xl">
          Your request is in.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-white/75">
          Expect a fixed quote and delivery time within one business hour,
          Monday to Saturday, 9am to 6pm ET. In a hurry? Call{" "}
          <a href={site.phoneHref} className="font-mono text-white underline">
            {site.phone}
          </a>{" "}
          and we will pull your plans up right away.
        </p>
        <div className="mt-8 flex gap-3">
          <Link
            href="/samples"
            className="bg-brand px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-dark"
          >
            Browse sample estimates
          </Link>
          <Link
            href="/"
            className="border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
