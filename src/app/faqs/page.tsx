import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about the Buildexa construction estimating service: turnaround time, pricing, accuracy, file formats and revisions.",
};

const faqs = [
  {
    q: "How fast will I get my estimate?",
    a: "Standard turnaround is 24 to 48 hours from when we receive your plans and confirm the quote. Large multi trade projects may take longer. We tell you the exact delivery time in the quote, and we hit it.",
  },
  {
    q: "How much does an estimate cost?",
    a: "Pricing depends on project size and the number of trades, not a percentage of project value. You get a fixed price in the quote before any work starts. No hourly billing and no surprises. Monthly plans are available for contractors bidding several jobs a month.",
  },
  {
    q: "What do I need to send you?",
    a: "PDF drawings are enough. Architectural, structural, MEP or civil sheets, depending on the scope. Send them through the quote form, by email, or as a Dropbox, Drive or OneDrive link for large sets. Addenda and spec books help but are not required to start.",
  },
  {
    q: "What format is the estimate delivered in?",
    a: "An Excel workbook in CSI MasterFormat. Every line shows the drawing reference, quantity, waste factor, unit, material cost, manhours and labor cost, with a summary sheet carrying overhead, profit, insurance and contingency. Download real examples on the Samples page.",
  },
  {
    q: "How accurate are your estimates?",
    a: "Quantities are measured from your drawings with professional takeoff software and reviewed by a second estimator before delivery. Pricing uses current cost data adjusted to your project location. Where drawings are incomplete, assumptions are stated on the line, never hidden.",
  },
  {
    q: "Do you work in my state?",
    a: "We serve contractors across all 50 states and adjust labor and material pricing to the project location. Recent work spans Arizona, Nevada, California, Florida, Texas, Missouri and Kentucky.",
  },
  {
    q: "What if I need changes after delivery?",
    a: "Minor revisions such as a missed addendum or a scope clarification are included free within the first week. Major scope changes with new drawings or added trades are quoted separately, with the same fixed price approach.",
  },
  {
    q: "Is my project information confidential?",
    a: "Yes. Your drawings and estimates are never shared, and we are happy to sign an NDA. The samples we publish carry no client contact details.",
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="FAQs"
        title="Questions contractors ask us"
        sub="Straight answers about turnaround, pricing, accuracy and the deliverable. For anything else, call or WhatsApp us."
      />
      <section className="mx-auto max-w-3xl px-4 py-16">
        <div className="space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="border border-line bg-white p-6">
              <summary className="cursor-pointer font-display font-bold text-navy marker:text-brand">
                {f.q}
              </summary>
              <p className="mt-3 leading-relaxed text-steel">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
