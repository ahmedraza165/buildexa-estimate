import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import SamplesGrid from "./SamplesGrid";

export const metadata: Metadata = {
  title: "Sample Estimates",
  description:
    "Download real construction estimates delivered by Buildexa: hotel finishes, hospital GC estimates, earthwork, plumbing, paving, landscaping and more, all in CSI MasterFormat.",
};

export default function SamplesPage() {
  return (
    <>
      <PageHero
        eyebrow="Proof, not promises"
        title="Sample estimates"
        sub="Real projects we estimated for hotels, hospitals, federal facilities, retail and residential clients. Every file below is a real workbook you can download and open. It is the same format your estimate arrives in: CSI divisions, quantities, waste, materials, manhours and labor."
      />
      <SamplesGrid />
      <CtaBand
        title="Like what you see in the samples?"
        sub="Send your own plans and get the same workbook for your project, priced within one business hour."
      />
    </>
  );
}
