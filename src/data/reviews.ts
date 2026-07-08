export type Review = {
  quote: string;
  name: string;
  company: string;
  location: string;
  stars: number;
};

export const reviews: Review[] = [
  {
    quote:
      "The takeoff matched our field numbers almost exactly. We bid three more jobs a month now without hiring anyone.",
    name: "Mike T.",
    company: "Drywall contractor",
    location: "Florida",
    stars: 5,
  },
  {
    quote:
      "Sent plans Friday afternoon and had a full CSI estimate Monday morning before the bid meeting. That speed wins work.",
    name: "David R.",
    company: "General contractor",
    location: "Texas",
    stars: 5,
  },
  {
    quote:
      "Every line references the drawing sheet, so checking their quantities takes minutes instead of a weekend.",
    name: "Carlos M.",
    company: "Home builder",
    location: "Arizona",
    stars: 5,
  },
  {
    quote:
      "We moved to the monthly plan after two projects. Our estimating cost dropped by more than half and the numbers got tighter.",
    name: "James K.",
    company: "Commercial GC",
    location: "Missouri",
    stars: 5,
  },
  {
    quote:
      "They flagged two scope gaps in the drawings before we bid. That one catch paid for the estimate ten times over.",
    name: "Sarah L.",
    company: "Plumbing contractor",
    location: "Kentucky",
    stars: 5,
  },
  {
    quote:
      "Clean workbooks our suppliers can quote from directly. No rework, no decoding, just numbers we can trust.",
    name: "Robert H.",
    company: "Concrete contractor",
    location: "California",
    stars: 4,
  },
];
