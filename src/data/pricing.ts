export type Plan = {
  name: string;
  price: string;
  period: string;
  blurb: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Single Estimate",
    price: "From $200",
    period: "per project",
    blurb: "For contractors who need one accurate estimate for an upcoming bid. Final price depends on project size and the number of trades.",
    features: [
      "Any single trade or full project scope",
      "Delivery in 24 to 48 hours",
      "Excel workbook in CSI MasterFormat",
      "Materials and labor split on every line",
      "Free revision within the first week",
      "Free consultation before you bid",
    ],
    cta: "Get a Fixed Quote",
  },
  {
    name: "Monthly Plan",
    price: "$1,999",
    period: "per month",
    blurb: "For contractors bidding steadily every month. Covers 10 to 15 estimates with priority scheduling and one point of contact.",
    features: [
      "10 to 15 estimates every month",
      "Any trade, any project type",
      "Priority turnaround inside 24 hours",
      "Unlimited revisions",
      "Bid filing support and consultation",
      "Cancel any month, no contract lock",
    ],
    cta: "Start a Monthly Plan",
    highlighted: true,
  },
  {
    name: "Dedicated Estimator",
    price: "Custom",
    period: "tailored to your volume",
    blurb: "A named estimator working as part of your team. For GCs and high volume subcontractors who want an estimating desk without the hire.",
    features: [
      "Dedicated estimator assigned to your company",
      "Feasibility studies and budget checks",
      "Material takeoffs and priced estimates",
      "Bid calendar and scheduling support",
      "Unlimited revision rounds",
      "Direct line on WhatsApp and phone",
    ],
    cta: "Talk to Us",
  },
];

export const pricingFaqs = [
  {
    q: "What decides the price of a single estimate?",
    a: "Project size in square feet, the number of trades, and how complete the drawings are. You always get the exact fixed price in the quote before we start, so there are no surprises on the invoice.",
  },
  {
    q: "Is the first consultation really free?",
    a: "Yes. Send your plans and we review them, confirm scope and price, and answer your questions before you commit to anything.",
  },
  {
    q: "What if I need more than 15 estimates in a month?",
    a: "The monthly plan flexes. If your volume grows we quote the difference honestly or move you to a dedicated estimator, whichever costs you less.",
  },
  {
    q: "Do you offer refunds?",
    a: "If we miss the agreed delivery time or the estimate does not match the agreed scope, we make it right or refund the project. It has rarely come to that.",
  },
];
