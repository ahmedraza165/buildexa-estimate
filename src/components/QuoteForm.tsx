"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { trades } from "@/data/trades";
import { site } from "@/data/site";

type Status = "idle" | "sending" | "whatsapp";

export default function QuoteForm({
  compact = false,
  dark = false,
}: {
  compact?: boolean;
  dark?: boolean;
}) {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");

  const inputCls = dark
    ? "w-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 transition-colors focus:border-brand focus:outline-none"
    : "w-full border border-line bg-white px-4 py-3 text-sm text-navy placeholder-steel transition-colors focus:border-brand focus:outline-none";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (String(data.get("_honey") || "").length > 0) return;
    setStatus("sending");

    // primary path: our own API route, delivered through Resend
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 20000);
      const res = await fetch("/api/quote", {
        method: "POST",
        body: data,
        signal: controller.signal,
      });
      clearTimeout(timer);
      const json = await res.json().catch(() => null);
      if (res.ok && json && json.ok === true) {
        router.push("/thank-you");
        return;
      }
    } catch {
      // fall through to whatsapp
    }

    // fallback path: hand the lead over on WhatsApp so nothing is lost
    const lines = [
      "New quote request from the website",
      `Name: ${data.get("name") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
      `Trade: ${data.get("trade") || ""}`,
      `Project: ${data.get("message") || ""}`,
    ].filter((l) => !l.endsWith(": "));
    window.open(
      `${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener"
    );
    setStatus("whatsapp");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <input required name="name" placeholder="Your name" className={inputCls} />
      <input required type="email" name="email" placeholder="Email address" className={inputCls} />
      <input name="phone" placeholder="Phone (optional)" className={inputCls} />

      {!compact && (
        <>
          <select name="trade" className={inputCls} defaultValue="">
            <option value="" disabled>
              Which trade do you need estimated?
            </option>
            <option>Full project (all trades)</option>
            {trades.map((t) => (
              <option key={t.slug}>{t.name}</option>
            ))}
            <option>Other / not sure</option>
          </select>
          <textarea
            name="message"
            rows={3}
            placeholder="Tell us about the project: type, location and bid date. You can also paste a link to your plans on Dropbox or Drive."
            className={inputCls}
          />
          <label className={`text-xs ${dark ? "text-white/60" : "text-steel"}`}>
            Attach plans (PDF, up to 10 MB. For larger sets share a link above.)
            <input
              type="file"
              name="attachment"
              accept=".pdf,.zip,.xlsx,.dwg"
              className={`mt-1 block w-full text-xs ${dark ? "text-white/70" : "text-steel"} file:mr-3 file:border-0 file:bg-navy file:px-3 file:py-2 file:text-xs file:font-semibold file:text-white`}
            />
          </label>
        </>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-brand bg-brand px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-dark disabled:opacity-60"
      >
        {status === "sending" ? "Sending your request" : "Get My Free Quote"}
      </button>

      {status === "whatsapp" ? (
        <p className={`text-xs font-semibold ${dark ? "text-white" : "text-navy"}`}>
          Our email service is busy right now, so we opened WhatsApp with your
          details prefilled. Press send there and we reply within the hour. You
          can also email your plans to{" "}
          <a href={`mailto:${site.email}`} className="text-brand underline">
            {site.email}
          </a>
          .
        </p>
      ) : (
        <p className={`text-xs ${dark ? "text-white/60" : "text-steel"}`}>
          Quote within one business hour. Estimate in 24 to 48 hours.
        </p>
      )}
    </form>
  );
}
