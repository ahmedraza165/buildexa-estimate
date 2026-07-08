import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Upload your plans and get a fixed quote within one business hour. Construction estimates delivered in 24 to 48 hours across the US.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get a quote"
        title="Upload plans. Price back in an hour."
        sub="Send us your drawings and a few details. We reply with a fixed price and delivery time within one business hour, Monday to Saturday."
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-[1.5fr_1fr]">
        <div className="border border-line bg-white p-6 md:p-10">
          <h2 className="font-display text-xl font-bold uppercase text-navy">
            Tell us about your project
          </h2>
          <p className="mb-6 mt-1 text-sm text-steel">
            Name and email are required. Everything else helps us quote
            faster.
          </p>
          <QuoteForm />
        </div>
        <aside className="space-y-6">
          <div className="blueprint p-8">
            <h2 className="font-display text-lg font-bold uppercase text-white">
              Prefer to talk?
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <p className="text-xs font-bold uppercase tracking-widest text-white/50">Phone</p>
                <a href={site.phoneHref} className="font-mono text-lg font-semibold text-white hover:text-brand">
                  {site.phone}
                </a>
              </li>
              <li>
                <p className="text-xs font-bold uppercase tracking-widest text-white/50">Email</p>
                <a href={`mailto:${site.email}`} className="text-white hover:text-brand">
                  {site.email}
                </a>
              </li>
              <li>
                <p className="text-xs font-bold uppercase tracking-widest text-white/50">WhatsApp</p>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand">
                  Message us on WhatsApp →
                </a>
              </li>
              <li>
                <p className="text-xs font-bold uppercase tracking-widest text-white/50">Hours</p>
                <p className="text-white/80">Monday to Saturday · 9am to 6pm ET</p>
              </li>
            </ul>
          </div>
          <div className="border border-line bg-white p-8">
            <h2 className="font-display text-lg font-bold uppercase text-navy">
              What happens next
            </h2>
            <ol className="mt-4 space-y-3 text-sm text-steel">
              <li className="flex gap-3">
                <span className="font-mono font-semibold text-brand">01</span>
                We review your plans and reply with a fixed quote within one business hour.
              </li>
              <li className="flex gap-3">
                <span className="font-mono font-semibold text-brand">02</span>
                You approve, and work starts immediately.
              </li>
              <li className="flex gap-3">
                <span className="font-mono font-semibold text-brand">03</span>
                Your estimate arrives in 24 to 48 hours as an Excel workbook in CSI format.
              </li>
            </ol>
          </div>
        </aside>
      </section>
    </>
  );
}
