"use client";

import { useEffect, useState } from "react";
import { trades } from "@/data/trades";
import { site } from "@/data/site";

export default function QuoteForm({
  compact = false,
  dark = false,
}: {
  compact?: boolean;
  dark?: boolean;
}) {
  const [submitting, setSubmitting] = useState(false);
  // formsubmit needs an absolute redirect URL; resolve it from wherever the site is hosted
  const [thankYouUrl, setThankYouUrl] = useState(`https://${site.domain}/thank-you`);
  useEffect(() => {
    setThankYouUrl(`${window.location.origin}/thank-you`);
  }, []);

  const inputCls = dark
    ? "w-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 transition-colors focus:border-brand focus:outline-none"
    : "w-full border border-line bg-white px-4 py-3 text-sm text-navy placeholder-steel transition-colors focus:border-brand focus:outline-none";

  return (
    <form
      action={`https://formsubmit.co/${site.email}`}
      method="POST"
      encType="multipart/form-data"
      onSubmit={() => setSubmitting(true)}
      className="flex flex-col gap-3"
    >
      <input type="hidden" name="_subject" value="New quote request from buildexaestimate.com" />
      <input type="hidden" name="_next" value={thankYouUrl} />
      <input type="hidden" name="_captcha" value="false" />
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
        disabled={submitting}
        className="btn-brand bg-brand px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-dark disabled:opacity-60"
      >
        {submitting ? "Sending your request" : "Get My Free Quote"}
      </button>
      <p className={`text-xs ${dark ? "text-white/60" : "text-steel"}`}>
        Quote within one business hour. Estimate in 24 to 48 hours.
      </p>
    </form>
  );
}
