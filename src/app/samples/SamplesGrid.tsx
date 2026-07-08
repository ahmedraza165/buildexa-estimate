"use client";

import { useState } from "react";
import Link from "next/link";
import SheetPreview from "@/components/SheetPreview";
import { samples } from "@/data/samples";

const filters = ["All", ...Array.from(new Set(samples.map((s) => s.trade)))];

function ExcelIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 3v12m0 0l-4-4m4 4l4-4" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}

export default function SamplesGrid() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? samples : samples.filter((s) => s.trade === active);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`border px-4 py-2 text-sm font-semibold transition-colors ${
              active === f
                ? "border-brand bg-brand text-white"
                : "border-line bg-white text-navy hover:border-brand hover:text-brand"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((s) => (
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
              <h2 className="mt-1 font-display text-lg font-bold text-navy">{s.title}</h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-steel">
                {s.trade} · {s.location}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-steel">{s.scope}</p>
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
                <a
                  href={s.file}
                  download
                  className="btn-brand inline-flex items-center gap-2 bg-brand px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white hover:bg-brand-dark"
                >
                  <ExcelIcon />
                  Download Excel
                </a>
                <Link
                  href={`/services/${s.tradeSlug}`}
                  className="text-xs font-bold text-navy hover:text-brand"
                >
                  Service details →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-10 max-w-2xl text-sm text-steel">
        Every download is a real workbook from a delivered project, prepared on
        Buildexa letterhead. Open it in Excel or Google Sheets and you will see
        the exact structure your estimate arrives in.
      </p>
    </section>
  );
}
