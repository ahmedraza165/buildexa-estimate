export type Trade = {
  slug: string;
  name: string;
  division: string; // CSI division number
  short: string;
  intro: string;
  includes: string[];
  faqs: { q: string; a: string }[];
};

export const trades: Trade[] = [
  {
    slug: "concrete-estimating-services",
    name: "Concrete Estimating",
    division: "03",
    short: "Footings, slabs, foundations, rebar and formwork quantified to the cubic yard.",
    intro:
      "Our concrete estimators quantify every pour on your drawings. Footings, grade beams, slabs on grade, elevated slabs, walls, columns, curbs and site concrete are all measured, with rebar, mesh, formwork and finishing broken out on separate lines. That way you can decide what to self perform and what to sub out with real numbers in front of you.",
    includes: [
      "Footings, foundations and grade beams (CY)",
      "Slabs on grade and elevated slabs with thickness breakdowns",
      "Formwork (SFCA) and shoring",
      "Rebar and wire mesh tonnage by size",
      "Concrete finishing, curing and joint sealants",
      "Site concrete: sidewalks, curbs, gutters, pads",
    ],
    faqs: [
      {
        q: "Do you separate material and labor for concrete?",
        a: "Yes. Every line item shows quantity, waste factor, material cost, manhours and labor cost, plus a trade total. You can plug in your own crew rates if you prefer.",
      },
      {
        q: "Can you estimate from structural drawings only?",
        a: "Yes. We work from structural sets, architectural sets or both. If details are missing we state our assumptions clearly in the estimate rather than guessing silently.",
      },
    ],
  },
  {
    slug: "drywall-estimating-services",
    name: "Drywall Estimating",
    division: "09",
    short: "Board counts, framing, taping and finishing levels for commercial and residential jobs.",
    intro:
      "We deliver drywall takeoffs that field crews can actually use. Board counts by type and thickness, metal stud framing, insulation, taping and finishing levels, and ceilings, all organized wall type by wall type from your partition schedule.",
    includes: [
      "Gypsum board by type, thickness and fire rating",
      "Metal stud framing with gauge and spacing",
      "Acoustic and thermal insulation",
      "Taping, mudding and finish levels 1 through 5",
      "Suspended ceiling and specialty ceiling systems",
      "Corner bead, trims and accessories",
    ],
    faqs: [
      {
        q: "Do you follow the partition schedule?",
        a: "Yes. Quantities are grouped by wall type from your partition schedule, so your foreman can check any line against the drawings in seconds.",
      },
      {
        q: "Can you estimate residential drywall?",
        a: "Yes. From single family homes up to hotel towers, the format scales to the job. Our residential drywall sample shows exactly what you receive.",
      },
    ],
  },
  {
    slug: "hvac-estimating-services",
    name: "HVAC Estimating",
    division: "23",
    short: "Ductwork, equipment, piping and controls from mechanical sheets and schedules.",
    intro:
      "Our mechanical estimators take off ductwork by gauge and size, equipment from the schedules, refrigerant and hydronic piping, insulation, and controls. The estimate is organized so your project manager can hand it straight to suppliers for pricing.",
    includes: [
      "Ductwork by size, gauge and lining",
      "Equipment: RTUs, AHUs, splits, exhaust fans, VAVs",
      "Refrigerant, chilled water and condensate piping",
      "Duct and pipe insulation",
      "Grilles, registers, diffusers and dampers",
      "Testing, balancing and controls allowances",
    ],
    faqs: [
      {
        q: "Do you price equipment from the schedule?",
        a: "We list every scheduled unit with capacity and model basis and price it from current supplier data. If you have preferred vendors we can leave equipment as a quoted allowance instead.",
      },
      {
        q: "Can you handle design build HVAC bids?",
        a: "Yes. For plan and spec work we follow the documents exactly. For design build we can build the estimate from load assumptions and comparable projects.",
      },
    ],
  },
  {
    slug: "plumbing-estimating-services",
    name: "Plumbing Estimating",
    division: "22",
    short: "Waste, vent, water and gas piping with fixtures counted from riser diagrams.",
    intro:
      "From waste and vent risers to fixture counts, our plumbing estimates break out pipe by material, diameter and service. Our welcome center sample shows the format: every diameter of PVC waste and vent itemized separately with material and labor on each line.",
    includes: [
      "Waste, vent and storm piping by diameter and material",
      "Domestic water piping and insulation",
      "Gas piping and specialties",
      "Fixtures and trim by type (WC, LAV, sinks, drains)",
      "Water heaters, pumps and equipment",
      "Excavation and backfill for underground plumbing",
    ],
    faqs: [
      {
        q: "Do you include demolition of existing plumbing?",
        a: "Yes. Remodel estimates include a demolition division covering pipe removal and fixture disconnects, exactly as shown in our welcome center renovation sample.",
      },
      {
        q: "What piping materials can you price?",
        a: "PVC, CPVC, cast iron, copper of all types, PEX, carbon steel and more. Each is broken out by diameter with current material pricing.",
      },
    ],
  },
  {
    slug: "electrical-estimating-services",
    name: "Electrical Estimating",
    division: "26",
    short: "Gear, feeders, branch wiring, devices and fixtures from power and lighting plans.",
    intro:
      "Our electrical estimators count every device, fixture and homerun on your plans. Switchgear and panels come off the one line diagram, feeders and branch circuits off the floor plans, and lighting off the fixture schedule, all organized so you can compare supplier quotes line by line.",
    includes: [
      "Switchgear, panelboards and transformers",
      "Feeders and branch wiring with conduit and conductor by size",
      "Lighting fixtures by type from the fixture schedule",
      "Devices: receptacles, switches, occupancy sensors",
      "Fire alarm and low voltage rough in",
      "Site lighting and underground raceways",
    ],
    faqs: [
      {
        q: "Do you take off from the one line diagram?",
        a: "Yes. Gear and feeder quantities come from the one line diagram and panel schedules, cross checked against the floor plans.",
      },
      {
        q: "Can you split normal and emergency power?",
        a: "Yes. We can structure the estimate by system or by CSI section, whichever matches how you buy the work.",
      },
    ],
  },
  {
    slug: "earthwork-estimating-services",
    name: "Earthwork & Sitework Estimating",
    division: "31",
    short: "Cut and fill from grading plans, excavation, utilities and pad prep.",
    intro:
      "Using the grading and civil sheets, we calculate cut and fill volumes, topsoil strip and stockpile, utility trenching and pad prep. Our military facility sample shows the full scope, carried through both a base bid and a bid option in one workbook.",
    includes: [
      "Cut and fill volumes from existing versus proposed grades",
      "Topsoil strip, respread and disposal",
      "Trenching and backfill for site utilities",
      "Building pad and pavement subgrade prep",
      "Erosion control and SWPPP items",
      "Import and export haul quantities",
    ],
    faqs: [
      {
        q: "How do you calculate cut and fill?",
        a: "We model existing and proposed surfaces from the civil drawings and report balanced volumes with shrink and swell factors stated. Assumptions are always visible, never buried.",
      },
      {
        q: "Do you cover demolition and milling?",
        a: "Yes. Pavement milling, demolition of existing site items and removals are itemized in their own division.",
      },
    ],
  },
  {
    slug: "landscaping-estimating-services",
    name: "Landscaping Estimating",
    division: "32",
    short: "Planting, sod, mulch, irrigation and hardscape from landscape plans.",
    intro:
      "From the landscape sheets we quantify sod and mulching by square foot, trees, shrubs and ground cover by count and size, irrigation zones, and hardscape. Our recreation center sample itemizes sod, decomposed granite and planting with a waste factor visible on every line.",
    includes: [
      "Sod, seed and mulching areas by SF with waste factors",
      "Trees, shrubs and ground cover by size and count",
      "Decomposed granite and rock mulch by depth",
      "Irrigation piping, heads and controllers",
      "Landscape edging, boulders and site furnishings",
      "Maintenance and establishment periods",
    ],
    faqs: [
      {
        q: "Do you take off irrigation too?",
        a: "Yes. Mainline, laterals, heads, valves and controllers are counted per the irrigation plan and priced with current material costs.",
      },
      {
        q: "Can you match the plant schedule?",
        a: "Every plant line references the schedule tag, so your supplier can quote directly from the estimate.",
      },
    ],
  },
  {
    slug: "paving-estimating-services",
    name: "Paving Estimating",
    division: "32",
    short: "Asphalt, striping, curbs and site concrete for lots, roads and plazas.",
    intro:
      "We quantify asphalt by course, aggregate base, milling of existing pavement, striping and signage, and site concrete. Our retail plaza sample in Arizona covers exactly this scope, from subgrade prep through final striping.",
    includes: [
      "Asphalt paving by course thickness in SF and tons",
      "Aggregate base and subgrade preparation",
      "Milling and pulverizing existing pavement",
      "Curbs, gutters and valley gutters by LF",
      "Striping, markings and signage",
      "ADA ramps and detectable warnings",
    ],
    faqs: [
      {
        q: "Do you price by ton or square foot?",
        a: "Both. We convert areas and thicknesses into tonnage using standard densities and show both units, so you can check the numbers against plant quotes.",
      },
      {
        q: "Can you separate the base bid from alternates?",
        a: "Yes. Like our military facility sample, an estimate can carry a base bid sheet and bid option sheets in one workbook.",
      },
    ],
  },
  {
    slug: "flooring-estimating-services",
    name: "Flooring & Finishes Estimating",
    division: "09",
    short: "Carpet, LVT, tile, paint and wall finishes room by room from finish schedules.",
    intro:
      "Our finishes estimates follow the finish schedule room by room. Carpet and LVT by square foot with pattern waste, tile with substrate prep, base and transitions, and paint by system. Our hotel sample covers 309,000 SF of finishes organized by finish tag.",
    includes: [
      "Carpet, LVT, VCT and specialty flooring by finish tag",
      "Ceramic and porcelain tile with prep and setting materials",
      "Wall base, transitions and stair finishes",
      "Painting and wall coverings by system",
      "Floor prep, leveling and moisture mitigation",
      "Allowance items flagged clearly",
    ],
    faqs: [
      {
        q: "Do you follow finish tags?",
        a: "Yes. Every line references the finish schedule tag, so submittals and orders map straight to the estimate.",
      },
      {
        q: "How do you handle pattern waste?",
        a: "Waste factors are a visible column on every line, adjusted for pattern repeats and plank direction, never hidden inside unit prices.",
      },
    ],
  },
  {
    slug: "masonry-estimating-services",
    name: "Masonry Estimating",
    division: "04",
    short: "CMU, brick, stone, mortar, grout and reinforcing counted from wall sections.",
    intro:
      "We count block and brick by size and bond, quantify mortar, grout and reinforcing from the wall sections, and include flashing, lintels and accessories. Everything is organized by wall type so your crews can verify quantities fast.",
    includes: [
      "CMU by size, weight and fire rating",
      "Face brick and veneer by bond pattern",
      "Mortar, grout and rebar quantities",
      "Horizontal joint reinforcing and ties",
      "Lintels, flashing and weeps",
      "Scaffolding and cleaning allowances",
    ],
    faqs: [
      {
        q: "Do you include scaffolding?",
        a: "Scaffolding is carried as a visible general requirements line for masonry scopes. You decide whether to self perform or rent.",
      },
      {
        q: "Can you estimate restoration work?",
        a: "Yes. Tuckpointing, cleaning and repair scopes are quantified by elevation area from photos and drawings.",
      },
    ],
  },
  {
    slug: "roofing-estimating-services",
    name: "Roofing Estimating",
    division: "07",
    short: "Membrane, shingle and metal systems with insulation, flashing and accessories.",
    intro:
      "From the roof plans and details we quantify the full assembly. Deck prep, insulation by R value, membrane or shingles, flashing, edge metal, drains and penetrations, all in squares and linear feet your supplier can quote directly.",
    includes: [
      "TPO, EPDM, modified bitumen and shingle systems by square",
      "Tapered and flat insulation by R value",
      "Edge metal, coping and flashing by LF",
      "Drains, scuppers and penetrations by count",
      "Tear off and disposal for reroof projects",
      "Walk pads, safety and warranty items",
    ],
    faqs: [
      {
        q: "Do you handle reroof and tear off?",
        a: "Yes. Removal of the existing system, disposal and deck repair allowances are itemized separately from the new assembly.",
      },
      {
        q: "Can you estimate metal roofing?",
        a: "Standing seam and exposed fastener systems are taken off by panel, with clips, closures and trim counted.",
      },
    ],
  },
  {
    slug: "framing-lumber-estimating-services",
    name: "Framing & Lumber Takeoffs",
    division: "06",
    short: "Full lumber lists, engineered wood and hardware for builders.",
    intro:
      "For home builders and framing contractors we produce complete lumber takeoffs. Plates, studs, headers, joists, rafters, sheathing and engineered wood, formatted as an order ready list your yard can price the same day.",
    includes: [
      "Plates, studs and blocking by dimension and grade",
      "Headers, beams and engineered lumber",
      "Floor, wall and roof sheathing",
      "Truss coordination and hardware such as hangers and straps",
      "Exterior trim and siding quantities",
      "Nails, fasteners and adhesives allowances",
    ],
    faqs: [
      {
        q: "Is the takeoff order ready?",
        a: "Yes. The lumber list is formatted so a supplier can quote it without rework, with lengths optimized to standard stock.",
      },
      {
        q: "Do you count hardware?",
        a: "Hangers, straps, anchors and fasteners are counted per the structural details and shear schedules.",
      },
    ],
  },
];

export const clientTypes = [
  {
    slug: "general-contractors",
    name: "General Contractors",
    blurb: "Full multi trade estimates in CSI format with a division wise summary, overhead and profit. Bid more jobs without growing your estimating desk.",
  },
  {
    slug: "subcontractors",
    name: "Subcontractors",
    blurb: "Trade specific takeoffs with material and labor split, so you can plug in your own crew rates and supplier quotes.",
  },
  {
    slug: "home-builders",
    name: "Home Builders",
    blurb: "Order ready lumber lists and full residential estimates from plan sets, from a single custom home to a whole community.",
  },
  {
    slug: "architects-developers",
    name: "Architects & Developers",
    blurb: "Budget checks at every design stage: concept budgets, design development estimates and bid validation before you go to market.",
  },
];
