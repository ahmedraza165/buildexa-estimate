export type Sample = {
  title: string;
  trade: string;
  tradeSlug: string;
  location: string;
  type: string;
  scope: string;
  file: string;
  featured?: boolean;
};

export const samples: Sample[] = [
  {
    title: "Hotel Tower Finishes Package",
    trade: "Flooring & Finishes",
    tradeSlug: "flooring-estimating-services",
    location: "Las Vegas, NV",
    type: "Hospitality · 309,000 SF",
    scope: "Division 09 finishes for a full hotel renovation. Carpet, LVT and tile by finish tag, with a division summary carrying overhead, profit and contingency.",
    file: "/downloads/hotel-finishes-estimate.xlsx",
    featured: true,
  },
  {
    title: "Community Hospital",
    trade: "Full GC Estimate",
    tradeSlug: "concrete-estimating-services",
    location: "Bethany, MO",
    type: "Healthcare · New build",
    scope: "Complete general contractor estimate across all CSI divisions, with general conditions and a division wise summary.",
    file: "/downloads/community-hospital-gc-estimate.xlsx",
    featured: true,
  },
  {
    title: "Police Headquarters",
    trade: "Sitework Takeoff",
    tradeSlug: "earthwork-estimating-services",
    location: "Hollywood, FL",
    type: "Civic · New construction",
    scope: "Site takeoff for a new police headquarters. Earthwork, utilities and exterior improvements quantified from the civil set.",
    file: "/downloads/police-headquarters-sitework-takeoff.xlsx",
  },
  {
    title: "Military Support Facility",
    trade: "Earthwork",
    tradeSlug: "earthwork-estimating-services",
    location: "San Tan Valley, AZ",
    type: "Federal · Base bid and option",
    scope: "Earthwork estimate with separate base bid and bid option sheets. Cut and fill, excavation, milling and grading.",
    file: "/downloads/military-facility-earthwork-estimate.xlsx",
    featured: true,
  },
  {
    title: "Interstate Welcome Center",
    trade: "Plumbing",
    tradeSlug: "plumbing-estimating-services",
    location: "Carter County, KY",
    type: "Civic · Renovation",
    scope: "Plumbing renovation estimate. Demolition of existing piping and fixtures, plus new waste, vent and water piping by diameter.",
    file: "/downloads/welcome-center-plumbing-estimate.xlsx",
  },
  {
    title: "Express Car Wash",
    trade: "Commercial",
    tradeSlug: "concrete-estimating-services",
    location: "Surprise, AZ",
    type: "Retail · New build",
    scope: "Ground up commercial estimate with a summary sheet. Sitework through finishes for an express car wash.",
    file: "/downloads/car-wash-commercial-estimate.xlsx",
  },
  {
    title: "Retail Plaza Paving",
    trade: "Paving",
    tradeSlug: "paving-estimating-services",
    location: "Fountain Hills, AZ",
    type: "Retail · Site package",
    scope: "Asphalt paving, milling, curbs and striping for a retail plaza site package.",
    file: "/downloads/retail-plaza-paving-estimate.xlsx",
  },
  {
    title: "Recreation Center Landscape",
    trade: "Landscaping",
    tradeSlug: "landscaping-estimating-services",
    location: "Tucson, AZ",
    type: "Civic · Exterior improvements",
    scope: "Landscape estimate. Sod and mulching by SF, decomposed granite, trees, shrubs and ground cover by schedule tag.",
    file: "/downloads/recreation-center-landscaping-estimate.xlsx",
  },
  {
    title: "Custom Residence Drywall",
    trade: "Drywall",
    tradeSlug: "drywall-estimating-services",
    location: "Residential",
    type: "Residential · Interiors",
    scope: "Residential drywall estimate. Board by type and thickness, framing, taping and finishing.",
    file: "/downloads/residential-drywall-estimate.xlsx",
  },
  {
    title: "Multifamily Concrete Package",
    trade: "Concrete",
    tradeSlug: "concrete-estimating-services",
    location: "Los Angeles, CA",
    type: "Residential · Structure",
    scope: "Concrete package with a summary sheet. Foundations, slabs, formwork and rebar for a multifamily project.",
    file: "/downloads/multifamily-concrete-estimate.xlsx",
  },
  {
    title: "Commercial HVAC System",
    trade: "HVAC",
    tradeSlug: "hvac-estimating-services",
    location: "Commercial",
    type: "Commercial · Mechanical",
    scope: "Mechanical estimate with a summary sheet. Ductwork by gauge, scheduled equipment, piping, insulation and air distribution.",
    file: "/downloads/commercial-hvac-estimate.xlsx",
  },
];
