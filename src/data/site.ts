/** Words and facts for the site. Edit here first when refining copy. */

export const name = "Evolve Media";
export const person = "Alexander";
export const email = "alexander.jeffrey.singer@gmail.com";

/** Public origin, no trailing slash. Empty until a domain is chosen. */
export const siteUrl = "";

export const price =
  "Monthly marketing starts at $1,500. Projects are quoted from the job.";

export const headline = "Plan. Create. Publish. Then evolve it.";

export const lede =
  "Digital marketing for owners who don’t have a department for it. I’m Alexander. I run the marketing, the site, and the systems behind them, then I keep making the live work better.";

export const stages = [
  {
    id: "plan",
    label: "Plan",
    body: "Who the buyer is, and what the work is for.",
  },
  {
    id: "create",
    label: "Create",
    body: "The site, the campaigns, and the message.",
  },
  {
    id: "publish",
    label: "Publish",
    body: "It goes live, with tracking, so the result can be seen.",
  },
  {
    id: "evolve",
    label: "Evolve",
    body: "AI, and the next version of what is already in market.",
  },
] as const;

export const bestFit =
  "Owners of businesses with about 50 people or fewer, who want a person running the marketing and will stay with it long enough for the work to compound.";

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
] as const;

export const stories = [
  {
    id: "xtreme-mats",
    eyebrow: "Ecommerce",
    client: "Xtreme Mats",
    line: "One brand. Two buyers.",
    summary:
      "Cabinet, drawer, appliance, and RV mats on one site. Golf cart mats, by cart make, on another. Separate audiences. Integrated marketing.",
    paragraphs: [
      "Xtreme Mats sells protection for cabinets, drawers, appliances, and RVs. That store is xtrememats.com.",
      "Xtreme Golf Cart Mats is the spin-off. Custom-fit mats, sold by cart make, live on xtremegolfcartmats.com. The person shopping for a golf cart floor is a different buyer from the person protecting a kitchen.",
      "The marketing keeps those audiences separate, each with its own site and its own message, and keeps the brand effort integrated. Recognition built on one side can support the other. Each buyer lands on the product that matches them.",
    ],
    figure: "",
    links: [
      { href: "https://xtrememats.com", label: "xtrememats.com" },
      { href: "https://xtremegolfcartmats.com", label: "xtremegolfcartmats.com" },
    ],
  },
  {
    id: "caruso-caruso",
    eyebrow: "Retail",
    client: "Caruso Caruso",
    line: "One campaign returned 5x ROAS.",
    figure: "5x",
    summary:
      "Advertising and social for a Detroit-area apparel shop in Birmingham, in the store and online.",
    paragraphs: [
      "Caruso Caruso is a Detroit-area apparel shop in Birmingham, Michigan. Denim, casual wear, and Detroit apparel, in the store and online at carusocaruso.com.",
      "I ran advertising campaigns and managed the social media. One campaign returned 5x ROAS.",
    ],
    links: [{ href: "https://carusocaruso.com", label: "carusocaruso.com" }],
  },
] as const;

export const offers = [
  {
    num: "01",
    stage: "Plan",
    title: "Digital marketing",
    short:
      "Advertising, social, and search, run as one effort, including the places people ask AI tools for a recommendation.",
    long: "Advertising, social, and search, run as one marketing effort. The work is to bring the right people to the business and give you a clear read on what they did next. It also includes showing up when someone asks an AI tool who to hire, what to buy, or where to go.",
  },
  {
    num: "02",
    stage: "Create",
    title: "Websites",
    short:
      "A site that can sell, book, or explain the business, sound enough for the marketing to land.",
    long: "The place the marketing sends people. A new site, a rebuild, or the one you already have, kept in shape so a campaign has somewhere sound to land. It should sell, book, or explain the business.",
  },
  {
    num: "03",
    stage: "Publish",
    title: "Technical setup",
    short:
      "Domain, email, store, analytics, and tracking, connected so a month of marketing leaves a record.",
    long: "Domain, email, store, analytics, and tracking. Connected, so you can see what the marketing did. The setup is there to make the marketing judgeable.",
  },
  {
    num: "04",
    stage: "Evolve",
    title: "AI in the work",
    short:
      "The business shows up when people ask AI tools for an answer, and the marketing work gets faster and more carefully optimized.",
    long: "Two jobs. Visibility: the business is present when people ask AI tools, alongside the usual search results. Practitioners call that AEO and GEO, answer engine optimization and generative engine optimization. Workflow: AI makes the marketing and the day-to-day online work faster and more carefully optimized.",
  },
] as const;

export const steps = [
  {
    num: "01",
    title: "You write",
    body: "I read the business.",
  },
  {
    num: "02",
    title: "We fix the foundation",
    body: "The site, the tracking, and the offer. Marketing depends on them.",
  },
  {
    num: "03",
    title: "Then it runs",
    body: "Monthly marketing from $1,500, or a project with a defined end.",
  },
] as const;

export const faqs = [
  {
    q: "Who is this for?",
    a: "Owners of businesses with about 50 people or fewer who need digital marketing. The work includes ecommerce, retail, fitness, services, and lead generation.",
  },
  {
    q: "What does $1,500 a month cover?",
    a: "A monthly engagement with Alexander. The mix follows the business. Common work is advertising, social, and the website and tracking that marketing depends on. Showing up in AI answers is part of that marketing. $1,500 is the minimum. Scope is set to the business.",
  },
  {
    q: "Where does AI fit?",
    a: "In two places. The business can be named when people ask AI tools for an answer. And the marketing work gets faster and more carefully optimized.",
  },
  {
    q: "Where do you work?",
    a: "With owners wherever the business is.",
  },
] as const;

export const needs = [
  "Marketing",
  "Website",
  "Technical setup",
  "AI visibility",
  "Not sure",
] as const;
