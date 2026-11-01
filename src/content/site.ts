export const site = {
  name: "Kundan Kunal",
  shortName: "Kundan",
  role: "Technology, Business & Ideas",
  location: "INDEPENDENTLY THINKING · INDIA",
  email: "iamkkunal23@gmail.com",
  description:
    "Exploring the intersections of technology, business, ideas and everyday experiences.",
  /**
   * Used by metadataBase, sitemap and robots. Set NEXT_PUBLIC_SITE_URL in the
   * deployment environment; the fallback only keeps local builds working.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /**
   * Static on purpose: reading the clock at render time is a request-time API
   * under `cacheComponents` and would opt the page out of prerendering.
   */
  copyrightYear: 2026,
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navigation: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/#work" },
  { label: "Writing", href: "/writing" },
  { label: "Beyond work", href: "/#beyond" },
  { label: "Contact", href: "/#contact" },
];

export const interestTags = [
  "Technology",
  "Business",
  "Writing",
  "Travel",
  "Photography",
];

export type Interest = {
  number: string;
  title: string;
  description: string;
  href: string;
};

export const interests: Interest[] = [
  {
    number: "01",
    title: "Technology",
    description: "Building, exploring and understanding digital products.",
    href: "/writing#technology",
  },
  {
    number: "02",
    title: "Business",
    description: "Ideas, strategy, operations and the numbers behind them.",
    href: "/writing#business",
  },
  {
    number: "03",
    title: "Thoughts & ideas",
    description: "Observations, opinions and things worth thinking about.",
    href: "/writing#ideas",
  },
  {
    number: "04",
    title: "Beyond work",
    description: "Travel, photography, places and everyday experiences.",
    href: "/#beyond",
  },
];
