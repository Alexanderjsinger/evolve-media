/** Words and facts for the site. Edit here first when refining copy. */

export const name = "Kindling Works";
export const descriptor =
  "Marketing for owner-led businesses. Run by Alex Singer.";
export const person = "Alexander";
export const fullName = "Alexander Singer";

export const email = "alexander.jeffrey.singer@gmail.com";

/** Public origin, no trailing slash. A1: keep the current workers.dev URL. */
export const siteUrl = "https://evolve-media.toastisadog.workers.dev";

export const linkedInUrl = "{{ALEX: LinkedIn URL}}";

export const responseTime = "24 hours";

/** Analytics vendor ID, e.g. G-XXXX. Not provided yet. */
export const analyticsId = "{{ALEX: analytics measurement ID}}";

export const price =
  "I work with a small list of owners. I choose who fits, and I quote each engagement for the business and the work.";

export const headlineLead = "Plan. Create. Publish. Then";
export const headlineAccent = "keep it growing.";

export const audience =
  "owner-led businesses under 50 people that need a marketing lead without hiring one";

export const positioning =
  "I run marketing for owner-led businesses under 50 people so they have a marketing lead without hiring one.";

export const locationLine =
  "I work with owners nationwide. The specialty is local and focused growth.";

export const lede =
  "I’m Alexander. I draw clients I want to work with, run the marketing and the site, then keep making the live work better.";

export const stages = [
  {
    id: "plan",
    num: "01",
    label: "Plan",
    body:
      "Search, Google Ads, social, and the website start with who the buyer is, which channel is worth the effort, and what working will mean.",
  },
  {
    id: "create",
    num: "02",
    label: "Create",
    body:
      "The website, the ads, and the posts become pages, campaigns, email, and social creative people can act on.",
  },
  {
    id: "publish",
    num: "03",
    label: "Publish",
    body:
      "Google Ads, social, and search go live, with tracking so a month leaves a record.",
  },
  {
    id: "keep",
    num: "04",
    label: "Keep",
    body:
      "SEO, listings, and the live site keep improving from what the record shows, including when someone asks an AI tool who to hire.",
  },
] as const;

export const bestFit =
  "Owners of businesses with about 50 people or fewer, who want a person running the marketing and will stay with it long enough for the work to compound.";

export const firstProof =
  "{{ALEX: first testimonial from A6. Exact quote, full name, role, business, permission, optional link.}}";

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
] as const;

export const stories = [
  {
    id: "xtreme-mats",
    client: "Xtreme Mats",
    industry: "Ecommerce",
    years: "",
    role: "Marketing Partner.",
    situationLabel: "The problem",
    situation:
      "Xtreme Mats sells protection for cabinets, drawers, appliances, and RVs at xtrememats.com. Xtreme Golf Cart Mats is the spin-off: custom-fit mats sold by cart make at xtremegolfcartmats.com. The golf-cart buyer is a different person from the kitchen buyer.",
    title: "Splitting one brand into two buyer sites",
    actions: [
      "Gave each buyer their own site and their own message.",
      "Kept the two audiences separate in the marketing.",
      "Kept the brand effort integrated so recognition on one side can support the other.",
    ],
    result:
      "This is an approach case. No result is stated yet. {{ALEX: Xtreme Mats result from A5. Revisit.}}",
    quote:
      "{{ALEX: Xtreme Mats testimonial from A6, with full name, role, business, and permission.}}",
    summary:
      "Cabinet, drawer, appliance, and RV mats on one site. Golf cart mats, by cart make, on another.",
    crop: {
      src: "/work/xtrememats.jpg",
      alt: "The xtrememats.com homepage",
    },
    links: [
      { href: "https://xtrememats.com", label: "xtrememats.com" },
      { href: "https://xtremegolfcartmats.com", label: "xtremegolfcartmats.com" },
    ],
  },
  {
    id: "caruso-caruso",
    client: "Caruso Caruso",
    industry: "Retail",
    years: "",
    role: "Founder of Abroad Digital.",
    situationLabel: "The business",
    situation:
      "Caruso Caruso is a Detroit-area apparel shop in Birmingham, Michigan. Denim, casual wear, and Detroit apparel, in the store and online at carusocaruso.com.",
    title: "Advertising and social for a Birmingham apparel shop",
    actions: ["Ran advertising campaigns.", "Managed the social media."],
    result:
      "No published result yet. {{ALEX: Caruso result from A4. Revisit 5x ROAS with platform, timeframe, and what return counted.}}",
    quote:
      "{{ALEX: Caruso Caruso testimonial from A6, with full name, role, business, and permission.}}",
    summary:
      "Advertising and social for a Detroit-area apparel shop in Birmingham, in the store and online.",
    crop: {
      src: "/work/carusocaruso.jpg",
      alt: "The carusocaruso.com homepage",
    },
    links: [{ href: "https://carusocaruso.com", label: "carusocaruso.com" }],
  },
] as const;

export const offers = [
  {
    num: "01",
    stage: "Project",
    title: "Foundation",
    who: "Owner-led businesses under 50 people that need a marketing lead without hiring one, when the site and tracking need a fix first.",
    short:
      "A project to audit and fix the site, the tracking, the listings, the offer, and lead follow-up.",
    long: "A project with a defined end. Audit and fix the foundation marketing depends on. Scoped and quoted for the business.",
    price: "{{ALEX: foundation fee structure from A8}}",
    term: "Quoted from the job. Defined end.",
    deliverables: [
      "Website audit and the fixes it needs to sell, book, or explain the business.",
      "Tracking connected so a month of marketing leaves a record.",
      "Google Business Profile set up or cleaned up.",
      "The offer, written so a stranger can tell what to buy or book.",
      "Lead follow-up: how an inquiry is answered so it does not go cold.",
    ],
    whatYoullSee:
      "A written read of the site, tracking, listings, and follow-up, plus what was fixed. No promised numbers.",
  },
  {
    num: "02",
    stage: "Monthly",
    title: "Monthly marketing",
    who: "Owner-led businesses under 50 people that need a marketing lead without hiring one.",
    short:
      "SEO, Google Ads, social, and the site, run by me month to month when it helps the business.",
    long: "Ongoing marketing with me when it helps the business. The mix follows the opportunity. I don’t work on, or charge for, ways you won’t benefit.",
    price: "{{ALEX: monthly engagement terms from A8}}",
    term: "{{ALEX: contract term from A8}}",
    deliverables: [
      "{{ALEX: what monthly retainer includes each month, from A8}}",
      "{{ALEX: reporting cadence from A8}}",
      "{{ALEX: whether ad spend is billed separately, from A8}}",
    ],
    whatYoullSee:
      "The measures that match the work, as they apply to the business: calls, bookings, orders, or cost per customer. No promised numbers.",
  },
  {
    num: "03",
    stage: "Project",
    title: "Website",
    who: "Owner-led businesses under 50 people that need a site that can sell, book, or explain the business.",
    short:
      "Build or rebuild a site that can sell, book, or explain the business. Quoted from the job.",
    long: "A new site or a rebuild of the one you have. Scoped and quoted per job.",
    price: "{{ALEX: example website fee structure from A8}}",
    term: "Quoted from the job. Defined end.",
    deliverables: [
      "{{ALEX: example website scope from A8}}",
      "A live site, with tracking on it.",
    ],
    whatYoullSee:
      "A live site, and the tracking on it. Traffic and conversions are reported once tracking is in place. No promised numbers.",
  },
] as const;

export const notAFit =
  "I don’t work on, or charge for, ways you won’t benefit. {{ALEX: any other not-included rules from A8}}";

export const aiHelp = {
  title: "Where AI helps",
  items: [
    "Faster lead response and follow-up. Auto-replies, routing, and templates, so inquiries do not go cold.",
    "Showing up when customers ask search and AI tools. An accurate Google Business Profile, consistent listings, and clear site content.",
  ],
} as const;

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
    body: "Monthly marketing with me, or a project with a defined end.",
  },
] as const;

export const nextSteps = [
  {
    num: "01",
    title: "I read it",
    body: "I reply within 24 hours.",
  },
  {
    num: "02",
    title: "A short call",
    body: "We see if it is a fit.",
  },
  {
    num: "03",
    title: "A written plan",
    body: "Scope and fee in writing, before any work starts.",
  },
] as const;

export const faqs = [
  {
    q: "Who is this for?",
    a: "Owner-led businesses under 50 people that need a marketing lead without hiring one.",
  },
  {
    q: "How do you charge?",
    a: "Each engagement is tailored to the client and the work. I quote in writing before anything starts. {{ALEX: how fees and ad spend are handled, from A8}}",
  },
  {
    q: "Where does AI fit?",
    a: "In the work, not as a separate product. Faster replies to inquiries, and a site and listings that can be found when someone asks search or AI tools.",
  },
  {
    q: "Where do you work?",
    a: "Nationwide. The specialty is local and focused growth.",
  },
] as const;

export const needs = [
  "Marketing",
  "Website",
  "Foundation",
  "Showing up in search and AI answers",
  "Not sure",
] as const;

export const budgetRanges = [
  "Monthly marketing with me",
  "A defined project",
  "Foundation first, then monthly",
  "Not sure",
] as const;

export const credentials = [
  "Head of Marketing and Director roles.",
  "Team leadership.",
  "CXL Product Marketing certification.",
  "Wayne State BBA.",
] as const;

export const headshot = "{{ALEX: headshot file}}";

export const howHeWorks =
  "I work with the owner, and I do the work. I choose who I take on, and the list stays small enough for that to stay true. Each engagement is scoped for the business. I don’t work on, or charge for, ways you won’t benefit.";

export const aboutTestimonials =
  "{{ALEX: 1 or 2 testimonials from A6, each with exact quote, full name, role, business, permission, and optional link.}}";

export const workIntro =
  "Selected clients from my consultancy work, with what I did and what changed.";

export const privacyNote =
  "I collect your name, business, and how to reach you, plus whatever you choose to add. I use it only to reply.";

export const pageMeta = {
  home: {
    title: "Kindling Works | Digital marketing for owner-led businesses",
    description: `${positioning} ${locationLine}`,
  },
  work: {
    title: "Selected work | Kindling Works",
    description:
      "Xtreme Mats and Caruso Caruso: what I did, and what can be stated so far. For owner-led businesses under 50 people. Nationwide.",
  },
  services: {
    title: "Foundation, monthly marketing, and websites | Kindling Works",
    description: `Foundation, monthly marketing, and websites for ${audience}. ${locationLine}`,
  },
  about: {
    title: "Alexander Singer | Kindling Works",
    description: `Alexander Singer runs Kindling Works for ${audience}. ${locationLine}`,
  },
  start: {
    title: "Tell me about the business | Kindling Works",
    description:
      "Tell Alexander about the business. I reply within 24 hours.",
  },
} as const;

export const pending = (value: string) => value.includes("{{ALEX:");

export const linkedInIsLive = /^https?:\/\//i.test(linkedInUrl);

export const analyticsIsLive = /^(G-[A-Z0-9]+|UA-\d+-\d+)$/i.test(analyticsId);
