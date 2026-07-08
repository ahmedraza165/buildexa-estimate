import Image from "next/image";

/* A stylized miniature of a Buildexa estimate workbook, used instead of stock photos. */
export default function SheetPreview({ division, rows }: { division: string; rows: string[][] }) {
  return (
    <div className="overflow-hidden border border-line bg-white text-[10px] leading-relaxed shadow-sm">
      <div className="flex items-center justify-between gap-2 border-b border-line bg-white px-3 py-1.5">
        <Image
          src="/logo-full.png"
          alt="Buildexa Estimate letterhead"
          width={86}
          height={28}
          className="h-6 w-auto"
        />
        <span className="truncate font-mono text-[9px] font-semibold uppercase tracking-wider text-brand">
          {division}
        </span>
      </div>
      <div className="flex items-center justify-between bg-navy px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-white">
        <span>Material Takeoff &amp; Cost Estimate</span>
        <span className="text-white/50">CSI Format</span>
      </div>
      <div className="grid grid-cols-[1fr_3fr_1.2fr_1fr_1.4fr] gap-px bg-line font-mono">
        {["Sr#", "Description", "Qty", "Unit", "Total"].map((h) => (
          <div key={h} className="bg-paper px-2 py-1 font-semibold uppercase text-steel">
            {h}
          </div>
        ))}
        {rows.map((r, i) =>
          r.map((cell, j) => (
            <div
              key={`${i}-${j}`}
              className={`bg-white px-2 py-1 ${j === 4 ? "text-right font-semibold text-navy" : "text-steel"}`}
            >
              {cell}
            </div>
          ))
        )}
      </div>
      <div className="flex justify-between border-t-2 border-brand bg-paper px-3 py-1.5 font-mono font-bold text-navy">
        <span className="uppercase">Trade total</span>
        <span className="text-brand">$ ●●●,●●●</span>
      </div>
    </div>
  );
}
