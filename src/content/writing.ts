export type Topic = "technology" | "business" | "ideas" | "beyond";

export const topics: { id: Topic; label: string }[] = [
  { id: "technology", label: "Technology" },
  { id: "business", label: "Business" },
  { id: "ideas", label: "Thoughts & ideas" },
  { id: "beyond", label: "Beyond work" },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  topic: Topic;
  /** ISO date, used for sorting, <time> and sitemap lastModified. */
  date: string;
  /** Paragraphs. Swap for MDX once the writing outgrows plain prose. */
  body: string[];
};

/**
 * Placeholder entries so the route renders end to end — replace the bodies
 * with real writing. Adding a post is just another object in this array.
 */
export const posts: Post[] = [
  {
    slug: "why-this-site-exists",
    title: "Why this site exists",
    excerpt:
      "Notes, work and half-formed ideas kept scattering across apps. This is the place I decided to keep them instead.",
    topic: "ideas",
    date: "2026-01-14",
    body: [
      "For a long time my notes lived in whichever app was open at the time. Some in a notes app, some in message threads to myself, a few in documents I never opened again. None of it compounded.",
      "This site is an attempt to fix that. One place for the work, the reading and the thinking, where an idea can sit long enough to turn into something.",
      "The bar for publishing here is deliberately low. Not everything needs to be finished to be worth writing down.",
    ],
  },
  {
    slug: "building-in-the-open",
    title: "Building in the open",
    excerpt:
      "Working where other people can see the unfinished parts changes what you build, usually for the better.",
    topic: "technology",
    date: "2026-02-02",
    body: [
      "There is a particular kind of clarity that only shows up when you know someone else might read it. Explaining a decision forces you to actually have one.",
      "Most of what I build starts rough. Putting the rough version somewhere visible has been a better forcing function than any amount of private planning.",
    ],
  },
  {
    slug: "reading-the-numbers",
    title: "Reading the numbers",
    excerpt:
      "Every business tells a story in its numbers. Learning to read it is a different skill from learning to produce it.",
    topic: "business",
    date: "2026-03-09",
    body: [
      "Spreadsheets are easy to produce and hard to interrogate. The useful question is rarely what a number is, but what has to be true for it to hold.",
      "I keep coming back to the same habit: before trusting a figure, try to derive it a second way. The gap between the two is where the real understanding is.",
    ],
  },
];

export const publishedPosts = [...posts].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
