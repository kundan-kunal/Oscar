import type { MetadataRoute } from "next";

import { site } from "@/content/site";
import { publishedPosts } from "@/content/writing";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(
    `${publishedPosts[0]?.date ?? "2026-01-01"}T00:00:00Z`,
  );

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/about`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${site.url}/writing`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...publishedPosts.map((post) => ({
      url: `${site.url}/writing/${post.slug}`,
      lastModified: new Date(`${post.date}T00:00:00Z`),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
