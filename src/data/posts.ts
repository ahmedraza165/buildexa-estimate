export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readMinutes: number;
  cover: string;
  coverAlt: string;
  sections: { heading?: string; paragraphs: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "how-much-does-a-construction-estimate-cost",
    title: "How Much Does a Construction Estimate Cost in 2026?",
    excerpt:
      "Outsourced estimates run from about 150 dollars for a single trade to a few thousand for a full commercial project. Here is exactly what drives the price and what you should expect for your money.",
    date: "2026-07-01",
    category: "Pricing",
    readMinutes: 11,
    cover: "/images/site-sunset.jpg",
    coverAlt: "Construction crew working on a rebar site at golden hour",
    sections: [
      {
        paragraphs: [
          "Every week contractors ask us the same first question: what will this estimate cost me? It is a fair question, and the industry does itself no favors by hiding the answer behind contact forms. So here it is in plain numbers, along with what actually moves the price up or down, and how to judge whether an estimate is worth what you paid for it.",
          "The short version: single trade residential estimates typically run 150 to 350 dollars. Multi trade residential projects run 300 to 700 dollars. Single trade commercial estimates run 250 to 600 dollars. Full commercial projects with all CSI divisions run from 700 dollars into the low thousands, depending on size. Monthly plans covering 10 to 15 estimates typically run 1,500 to 2,500 dollars.",
        ],
      },
      {
        heading: "What actually drives the price",
        paragraphs: [
          "Estimating firms price on effort, and effort follows three things. First is the size of the drawing set. A 12 sheet custom home and a 300 sheet hospital are different animals, even for the same trade. Every additional sheet is more measuring, more cross checking and more room for the drawings to contradict each other.",
          "Second is the number of trades. A drywall only takeoff means one estimator working one scope. A full general contractor estimate means concrete, masonry, steel, carpentry, roofing, finishes, mechanical, electrical and sitework, often split across specialist estimators, then rolled into one summary. The coordination itself is work.",
          "Third is the condition of the documents. Complete, coordinated drawings with schedules price quickly. Half finished design development sets force the estimator to make and document assumptions, which takes longer and carries more risk. If your set is incomplete, expect either a higher price or a clearly stated list of assumptions. A firm that quotes the same price for any document quality is telling you something about how carefully they read your drawings.",
        ],
      },
      {
        heading: "The three pricing models you will meet",
        paragraphs: [
          "Per project pricing is the most common and the easiest to control. You send plans, the firm reviews them and quotes a fixed number, and you decide before any work starts. This is how we price single estimates at Buildexa, and we think it is the only honest way to sell a one off estimate.",
          "Monthly plans suit contractors who bid steadily. Instead of paying per estimate, you pay a flat monthly fee that covers a set volume, usually 10 to 15 projects. The per estimate cost drops sharply, turnaround gets priority, and you always know your estimating budget for the month. If you bid four or more jobs a month, run the math on a plan. It usually wins.",
          "Hourly billing still exists, typically 35 to 60 dollars per hour for offshore teams and 75 to 150 for US based estimators. Be careful here. Hourly pricing moves all the risk onto you, because you cannot verify how many hours a takeoff actually took. If a firm insists on hourly, ask for a capped maximum in writing.",
        ],
      },
      {
        heading: "What you should get for your money",
        paragraphs: [
          "A professional estimate is more than a number. At minimum you should receive a workbook organized by CSI division, with every line showing the drawing reference, the measured quantity, a visible waste factor, the unit, material cost, manhours and labor cost. A summary sheet should roll the divisions up and apply overhead, profit, insurance and contingency in the open.",
          "You should also get the assumptions in writing. Where the drawings were silent, what pricing date the material costs reflect, which addenda were included. An estimate without stated assumptions is a guess wearing a suit.",
          "Finally, you should get revision support. Addenda land, scopes shift, and a missed detail should not cost you a second full fee. A reasonable standard is free minor revisions within the first week, and that is what we include on every project.",
        ],
      },
      {
        heading: "Cheap estimates and what they actually cost",
        paragraphs: [
          "You will find estimates advertised for 50 dollars. Someone runs your plans through takeoff software at speed, exports whatever comes out, and moves to the next job. The line items will not reference your drawings, the waste factors will be invisible or missing, and nobody will call you when sheet A401 contradicts the finish schedule.",
          "The real cost of a bad estimate is not the fee. It is the bid you win at a losing number, or the bid you lose because phantom quantities pushed your price 8 percent high. Against either outcome, the difference between a 50 dollar estimate and a 300 dollar estimate is not a cost. It is the cheapest insurance in construction.",
        ],
      },
      {
        heading: "How Buildexa prices, in the open",
        paragraphs: [
          "Single estimates start around 200 dollars and the exact fixed price is confirmed in your quote before we start, within one business hour of receiving plans. Monthly plans run 1,999 dollars for 10 to 15 estimates with priority turnaround and unlimited revisions. High volume contractors can get a dedicated estimator at custom pricing.",
          "The first consultation costs nothing. Send the plans, get the price, and decide with the number in front of you. That is how buying an estimate should work.",
        ],
      },
    ],
  },
  {
    slug: "material-takeoff-vs-cost-estimate",
    title: "Material Takeoff vs. Cost Estimate: What Is the Difference?",
    excerpt:
      "Contractors use the two terms interchangeably, but a takeoff and an estimate are different deliverables at different prices. Knowing which one you need saves real money.",
    date: "2026-06-15",
    category: "Estimating Tips",
    readMinutes: 9,
    cover: "/images/blueprint-desk.jpg",
    coverAlt: "Estimator working through a set of construction drawings",
    sections: [
      {
        paragraphs: [
          "Ask five contractors what a takeoff is and you will get five overlapping answers. The confusion is understandable, because every estimate contains a takeoff, and plenty of firms use the words loosely in their marketing. But when you are buying estimating services, the difference decides what lands in your inbox, what it costs, and whether it actually helps you bid.",
          "This article draws the line clearly, shows what a professional version of each deliverable looks like, and gives you a simple rule for choosing between them.",
        ],
      },
      {
        heading: "A material takeoff is quantities only",
        paragraphs: [
          "A material takeoff, sometimes called a quantity takeoff or MTO, measures everything on the drawings and converts it into quantities you can order. Square feet of drywall by board type and thickness. Cubic yards of concrete by placement. Linear feet of pipe by diameter and material. Counts of fixtures, doors, devices and equipment.",
          "A good takeoff has recognizable structure. Every line references the drawing sheet or schedule tag it came from, so your foreman can verify any number in seconds. Waste factors appear as a visible column, not buried inside inflated quantities. Items are grouped the way you actually buy them, so a lumber yard or supply house can quote the list without rework.",
          "What a takeoff does not include is money. No material prices, no labor, no overhead. That is the entire point. Many subcontractors know their pricing better than anyone and only want the counting done accurately and fast.",
        ],
      },
      {
        heading: "A cost estimate adds pricing and labor",
        paragraphs: [
          "A cost estimate takes the same quantities and prices them. Current material costs from supplier data, adjusted for your project location. Manhours per unit based on production rates for each task. Labor rates by trade. Then the project level costs: general conditions, overhead, profit, insurance and contingency, each applied in the open on a summary sheet.",
          "The deliverable is a number you can bid with, organized by CSI division. A general contractor uses it to assemble a bid. A developer uses it to check feasibility before financing. An architect uses it to keep a design inside budget before the bid set goes out.",
          "The extra work is real, which is why an estimate costs more than a takeoff for the same project. You are paying for pricing research, labor knowledge and judgment, not just measurement.",
        ],
      },
      {
        heading: "A worked example",
        paragraphs: [
          "Take a 40 unit apartment renovation, drywall scope. The takeoff tells you: 84,000 square feet of half inch board, 12,600 square feet of moisture resistant board at the bathrooms and kitchens, 96,000 linear feet of joint tape, screw counts, corner bead by length, and a five percent waste factor shown on each line, all referenced to the partition schedule.",
          "The estimate takes those same lines and adds: board at current supplier pricing delivered to the zip code, hanging and finishing manhours at realistic production rates, local labor rates, and a summary carrying supervision, overhead and margin. The takeoff ends at what to buy. The estimate ends at what to bid.",
        ],
      },
      {
        heading: "Which one should you order?",
        paragraphs: [
          "Use a simple rule. If you self perform the work and trust your own pricing, order the takeoff and price it in house. You save money and keep your margins private. If you are a GC assembling a multi trade bid, validating a budget, or bidding a trade where your pricing is stale, order the full estimate.",
          "At Buildexa both deliverables use the same workbook format, with quantity, waste, unit cost, manhours, labor and total as separate columns. That means you can start with a takeoff today and upgrade it to a priced estimate later without anything being rebuilt. Download a sample from our Samples page and the structure explains itself.",
        ],
      },
    ],
  },
  {
    slug: "how-to-read-a-construction-estimate",
    title: "How to Read a Construction Estimate Like a Pro",
    excerpt:
      "Ten minutes with the right checklist tells you whether an estimate is solid or shaky. Here is exactly where experienced contractors look first.",
    date: "2026-06-08",
    category: "Estimating Tips",
    readMinutes: 10,
    cover: "/images/crane-sky.jpg",
    coverAlt: "Tower cranes over a high rise construction site",
    sections: [
      {
        paragraphs: [
          "An estimate lands in your inbox the night before a bid review. Forty pages of line items. You have twenty minutes. Where do you look?",
          "After thousands of estimates delivered and reviewed, we can tell you that experienced contractors check the same handful of places every time. This is that checklist, in the order that catches the most problems fastest.",
        ],
      },
      {
        heading: "Start at the summary sheet",
        paragraphs: [
          "Before any line item, read the summary. It shows the total by CSI division with overhead, profit, insurance and contingency applied. Two checks matter here. First, does the division mix make sense for the project type? A hotel renovation where finishes are not the largest division deserves a question. A ground up warehouse where sitework is tiny deserves another.",
          "Second, compute the cost per square foot and compare it against your experience for that building type in that market. This one number catches gross errors that no line by line reading will find in the time you have. If the summary passes both checks, the estimate has earned a closer read.",
        ],
      },
      {
        heading: "Check the general conditions",
        paragraphs: [
          "Division 01 is where weak estimates hide their gaps. Look for the items that always cost money: supervision, temporary facilities, equipment rental, dumpsters, final cleanup, permits, bonds and insurance. Each should be its own line with a real number or a clearly marked allowance.",
          "If general conditions appear as a single lump sum percentage with no breakdown, treat the whole estimate with caution. It usually means the estimator worked from a template rather than your project.",
        ],
      },
      {
        heading: "Trace five random lines back to the drawings",
        paragraphs: [
          "Pick five line items across different divisions and follow each one back to its source. A professional estimate makes this easy because every line carries a sheet reference or schedule tag. Find the wall type on the partition schedule. Find the fixture on the plumbing schedule. Measure one room of flooring against the finish plan.",
          "You are checking two things: that the reference exists, and that the quantity is plausible. Five verified lines will not prove the whole estimate, but five lines that fail tell you everything you need to know before bid day rather than after.",
        ],
      },
      {
        heading: "Read the waste factors and the assumptions",
        paragraphs: [
          "Waste should be a visible column, and the percentages should vary by material. Five percent on board, more on tile with a pattern repeat, more again on lumber cut from standard lengths. Uniform waste across every material is the signature of software defaults left untouched.",
          "Then find the assumptions and exclusions list. Every honest estimate has one, because every drawing set has silences. What matters is that the estimator wrote them down: which addenda are included, what pricing date the materials reflect, what was excluded and why. Missing assumptions do not mean the estimator made none. It means they did not tell you.",
        ],
      },
      {
        heading: "Check labor against your own crews",
        paragraphs: [
          "Material prices are easy to verify with a phone call. Labor is where estimates win or lose bids. Look at the manhours column for a scope you know cold and ask whether your crew hits those production rates. If the estimate says a crew hangs board twice as fast as yours ever has, the labor number is a wish, not a plan.",
          "This is also why the materials and labor split matters so much. A single blended number per line gives you nothing to check and nothing to negotiate with subs. Separate columns give you leverage and confidence.",
        ],
      },
      {
        heading: "The ten minute version",
        paragraphs: [
          "Summary sanity and cost per square foot. General conditions itemized. Five lines traced to the drawings. Waste factors varied and visible. Assumptions in writing. Labor rates you believe. Six checks, ten minutes, and you know whether the number in front of you deserves your signature.",
          "Every Buildexa estimate is built to pass this exact reading, because it is the reading we apply to our own work before it ships. Download any sample and run the checklist yourself.",
        ],
      },
    ],
  },
  {
    slug: "csi-divisions-explained",
    title: "CSI Divisions Explained: How Professional Estimates Are Organized",
    excerpt:
      "Why every serious construction estimate is organized into numbered divisions, what lives in each one, and how the structure protects your bid.",
    date: "2026-06-01",
    category: "Estimating Tips",
    readMinutes: 9,
    cover: "/images/building-modern.jpg",
    coverAlt: "Commercial towers organized in a city skyline",
    sections: [
      {
        paragraphs: [
          "Open any professional estimate, including every Buildexa sample, and you will see the same skeleton: numbered sections like 03 Concrete, 09 Finishes, 22 Plumbing and 31 Earthwork. That is the CSI MasterFormat, published by the Construction Specifications Institute, and it is the closest thing the US construction industry has to a shared filing system for scope.",
          "Understanding it takes ten minutes and pays off on every bid you touch afterward. Here is the working knowledge, without the standards body formality.",
        ],
      },
      {
        heading: "Why divisions matter to your bid",
        paragraphs: [
          "Divisions make estimates comparable, and comparability is protection. When your drywall sub quotes Division 09 and your estimate carries Division 09 at a certain number, any gap between the two shows up immediately. Without shared structure, comparing bids means reading every line of every quote and hoping you catch the scope that one sub included and another silently left out.",
          "Divisions also make the summary sheet possible. That one page rollup, with overhead, profit, insurance and contingency applied at the bottom, is the page a lender, owner or bonding agent actually reads. It only works because everyone agrees on what the categories mean.",
          "And divisions protect you across time. When you tracked your last ten jobs by division, you know your real historical cost for concrete or finishes per square foot. That history is the sharpest estimating tool a contractor owns, and it only accumulates if every estimate uses the same buckets.",
        ],
      },
      {
        heading: "The divisions you will meet on almost every job",
        paragraphs: [
          "Division 01, General Requirements, covers the cost of running the project rather than building it: supervision, temporary facilities, project overheads, cleanup, permits and bonds. Watch this division closely. It is where careless estimates hide gaps and where careful ones show their work.",
          "Divisions 02 through 14 are the building itself. Existing conditions and demolition in 02. Concrete in 03. Masonry in 04. Metals in 05. Wood and plastics in 06. Thermal and moisture protection, meaning roofing, waterproofing and insulation, in 07. Openings, meaning doors and windows, in 08. Finishes in 09, which on many commercial interiors is the largest single division.",
          "The mechanical family lives in the 20s: fire suppression in 21, plumbing in 22, HVAC in 23. Electrical is 26, with communications in 27 and safety systems in 28. Outside the building, earthwork is 31, exterior improvements like paving and landscaping are 32, and site utilities are 33.",
        ],
      },
      {
        heading: "How numbers get deeper: sections and levels",
        paragraphs: [
          "Within each division, MasterFormat drills down through numbered sections. Division 09 contains 09 29 00 for gypsum board, 09 30 00 for tiling, 09 65 00 for resilient flooring, 09 91 00 for painting. You do not need to memorize these. You need to recognize that a spec book and a good estimate use the same numbering, which means you can jump from an estimate line to the governing spec section in seconds.",
          "That jump matters in disputes. When a line item and a spec section share a number, there is no argument about which requirement the price was based on.",
        ],
      },
      {
        heading: "What this looks like in a Buildexa estimate",
        paragraphs: [
          "Our workbooks carry general conditions as Division 01 with indirect and direct costs separated. Bonding, equipment rental, field office and superintendent time each get their own line, so nothing hides inside trade unit prices. Each trade division then lists its work with the drawing reference, quantity, waste, materials, manhours and labor in separate columns.",
          "The summary sheet rolls every division into one page and applies overhead, profit, insurance and contingency in the open, ending at a net total you can bid with. Download any sample from the Samples page and you will see the full structure on a real project.",
        ],
      },
    ],
  },
  {
    slug: "in-house-estimator-vs-outsourced",
    title: "Hiring an Estimator vs. Outsourcing: The Real Cost Comparison",
    excerpt:
      "A full time estimator costs 85 to 120 thousand dollars a year fully loaded. Here is the honest math on when outsourcing wins, when it does not, and the hybrid most contractors land on.",
    date: "2026-05-18",
    category: "Bidding",
    readMinutes: 10,
    cover: "/images/drafting-sketch.jpg",
    coverAlt: "Working through project drawings and sketches at a desk",
    sections: [
      {
        paragraphs: [
          "Every growing contractor hits the same wall. The owner is estimating at night after running jobs all day, bids go out late or not at all, and win rates drop because there is no time to chase the right jobs and no energy to price them carefully. The standard fix is hiring an estimator.",
          "It is a good fix for some companies and an expensive mistake for others. The difference comes down to arithmetic that most contractors never sit down and do. So let us do it here, with real numbers.",
        ],
      },
      {
        heading: "The loaded cost of hiring",
        paragraphs: [
          "A mid level construction estimator earns 75 to 95 thousand dollars in most US markets, and senior commercial estimators clear six figures. But salary is the beginning, not the total. Payroll taxes add roughly 8 to 10 percent. Benefits add 15 to 25 percent depending on your health plan. Takeoff software runs 1,500 to 3,000 dollars per seat per year, cost data subscriptions add more, and there is a workstation, an office seat and management time on top.",
          "Realistically, the loaded cost lands between 85 and 120 thousand dollars a year. That buys roughly 40 to 60 detailed estimates annually for one estimator working normal hours, fewer if your projects are large or your documents are rough.",
          "Divide it out and your in house cost per estimate sits between 1,400 and 3,000 dollars. Read that number twice, because almost nobody who employs an estimator has ever computed it.",
        ],
      },
      {
        heading: "The outsourced math",
        paragraphs: [
          "Outsourced estimates price per project, typically 200 to 700 dollars for the bulk of residential and light commercial work, or on monthly plans around 2,000 dollars covering 10 to 15 estimates. A contractor bidding six jobs a month spends roughly 24,000 dollars a year on a plan, against 85 to 120 thousand for the hire, for comparable output.",
          "The structural advantage is that outsourcing converts a fixed cost into a variable one. Slow month, small bill. Busy month, the capacity flexes without overtime or a second hire. Slow months are exactly where in house desks quietly bleed money, because the salary arrives whether or not the bids do.",
        ],
      },
      {
        heading: "What the math leaves out",
        paragraphs: [
          "Now the honest caveats, because the arithmetic alone oversells outsourcing. An estimator on staff who also handles buyout, scopes subs, walks sites and maintains supplier relationships does far more than count quantities. If that is the role you need filled, an outsourced takeoff service complements it rather than replacing it.",
          "In house also wins on immediacy. A question gets answered by walking across the office. And on deeply repetitive niche work, a staff estimator who has priced your exact product forty times carries knowledge no outside firm matches on day one.",
          "Outsourcing carries its own risks worth naming: quality varies wildly between firms, communication across time zones can add friction, and a bad provider costs you bids before you discover they are bad. Vet with sample estimates, check that lines reference drawings, and start with one project before committing to a plan.",
        ],
      },
      {
        heading: "The hybrid most contractors land on",
        paragraphs: [
          "The pattern we see most among successful GCs is one senior estimator or owner who owns strategy, and outsourced capacity for volume. Strategy means choosing which jobs to chase, setting final margins, and holding relationships. Volume means the takeoffs and priced estimates that eat forty hours a week.",
          "That split lets a company bid twice as much work without a second hire, keeps institutional knowledge in the building, and puts the senior persons time where it actually wins work. It is exactly the gap a monthly estimating plan is built to fill: fixed cost, guaranteed turnaround, the same estimator learning your preferences project after project.",
          "Run your own numbers. Count last years estimates, divide your estimating cost by that count, and compare the result against a per project price. The answer usually makes the decision for you.",
        ],
      },
    ],
  },
  {
    slug: "how-to-win-more-bids-subcontractor",
    title: "How to Win More Bids as a Subcontractor: 9 Practical Tactics",
    excerpt:
      "Bid hit ratios in most trades sit between 10 and 20 percent. These nine habits move the number more than cutting your margin ever will.",
    date: "2026-05-04",
    category: "Bidding",
    readMinutes: 12,
    cover: "/images/handshake.jpg",
    coverAlt: "Contractor closing a deal with a handshake",
    sections: [
      {
        paragraphs: [
          "Most subs try to win more work by bidding more jobs or trimming margin. Both work briefly and hurt eventually. Bid everything and your estimates get sloppy. Cut margin and you win the jobs that break you.",
          "The subs with hit rates above 25 percent do something different. They bid fewer, better chosen jobs, faster and more clearly than everyone else. Here is that playbook, in nine tactics you can start using on the next invitation to bid.",
        ],
      },
      {
        heading: "Tactic 1: Qualify the GC before you price",
        paragraphs: [
          "Before opening the drawings, ask three questions. Is this GC shortlisted or just fishing for coverage? How many subs are bidding this trade? When does the job actually start? A bid to a GC who is not shortlisted is free consulting, and a trade with eight bidders is a lottery ticket.",
          "GCs answer these questions more often than you would expect, and the answers tell you where to spend your estimating hours. Ten careful bids to real opportunities beat thirty rushed bids to crowds.",
        ],
      },
      {
        heading: "Tactic 2: Bid the jobs that fit your crews",
        paragraphs: [
          "Your best margins come from work your teams have done ten times, in buildings they know, at sizes they handle comfortably. Every step outside that zone adds cost you will not see until the job is underway: slower production, more supervision, mistakes on unfamiliar details.",
          "Write down your sweet spot in one sentence, building type, size range, and travel radius, and grade every invitation against it. The discipline feels restrictive for a month and then your win rate starts telling you why it works.",
        ],
      },
      {
        heading: "Tactic 3: Read the general conditions before the drawings",
        paragraphs: [
          "Scope traps live in the front end documents, not the plans. Payment terms, retainage, liquidated damages, badge and escort requirements, working hours, cleanup obligations, and the classic phrase that quietly moves someone elses scope into yours.",
          "Ten minutes in Division 00 and 01 tells you what the job really costs beyond the work itself. Price those conditions or exclude them explicitly. Either is fine. Ignoring them is how profitable bids become unprofitable jobs.",
        ],
      },
      {
        heading: "Tactics 4 to 6: Price with precision, not padding",
        paragraphs: [
          "Fourth, work from a real quantity takeoff, not square foot guesses. Padding for uncertainty prices you out of close races, and close races are where most jobs are won. Real quantities let you bid tight with confidence instead of hoping the fat covers the misses.",
          "Fifth, show your scope. Attach a one page list of inclusions and exclusions to every bid. It makes your number comparable against other bids, kills scope disputes before they start, and marks you as the professional in the stack. GCs remember who made their leveling easy.",
          "Sixth, turn bids around fast. The first credible number in often becomes the number the GC carries in their own bid, and late numbers barely get read. Speed is a competitive weapon, and it is the one an outside estimating partner most directly buys you.",
        ],
      },
      {
        heading: "Tactics 7 to 9: Follow through like it matters",
        paragraphs: [
          "Seventh, call two days after submitting instead of emailing. Ask whether your number was in range and whether anything in your scope was unclear. Five minutes on the phone builds more relationship than fifty polished PDFs.",
          "Eighth, track every bid in a simple sheet: job, GC, your number, and the winning number whenever you can get it. After twenty bids the pattern tells you exactly where your pricing sits in your market, which is intelligence your competitors are not collecting.",
          "Ninth, when you lose, ask why. Say you are trying to sharpen your bids and would value one sentence of feedback. GCs answer more often than you would think, and the answer is free market data. Sometimes it even turns into the next invitation.",
        ],
      },
      {
        heading: "Where the hours come from",
        paragraphs: [
          "Every tactic above costs time, and time is what bidding season does not give you. That is the practical case for outsourcing the counting: a detailed takeoff back in 24 to 48 hours means you spend your hours qualifying GCs, reading general conditions and making calls, the parts only you can do.",
          "Win rate is a system, not a talent. Build the system and the percentage follows.",
        ],
      },
    ],
  },
];
