import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/content/site";
import { formatDate, publishedPosts, topics } from "@/content/writing";

const description =
  "Articles, reflections and notes on technology, business and the ideas in between.";

export const metadata: Metadata = {
  title: "Writing",
  description,
  alternates: { canonical: "/writing" },
  openGraph: {
    title: `Writing — ${site.name}`,
    description,
    url: "/writing",
  },
};

export default function WritingPage() {
  return (
    <>
      <section className="content-section section-shell page-intro">
        <SectionHeading label="WRITING" />
        <h1>
          Some thoughts
          <br />
          deserve a <span>place.</span>
        </h1>
        <p>{description}</p>

        {publishedPosts.length > 0 && (
          <nav className="topic-nav" aria-label="Topics">
            {topics.map((topic) => (
              <a key={topic.id} href={`#${topic.id}`}>
                {topic.label}
              </a>
            ))}
          </nav>
        )}
      </section>

      {publishedPosts.length === 0 ? (
        <section className="content-section section-shell">
          <p className="empty-state">
            Nothing published yet — the first pieces are on their way.
          </p>
        </section>
      ) : (
        topics.map((topic) => {
          const topicPosts = publishedPosts.filter(
            (post) => post.topic === topic.id,
          );

          if (topicPosts.length === 0) return null;

          return (
            <section
              key={topic.id}
              id={topic.id}
              className="content-section section-shell"
            >
              <SectionHeading label={topic.label.toUpperCase()} />

              <div className="post-list">
                {topicPosts.map((post, index) => (
                  <Reveal key={post.slug} delay={index * 0.06}>
                    <Link
                      href={`/writing/${post.slug}`}
                      className="post-row"
                    >
                      <time dateTime={post.date} className="post-date">
                        {formatDate(post.date)}
                      </time>
                      <h2>{post.title}</h2>
                      <p>{post.excerpt}</p>
                      <ArrowUpRight
                        className="interest-arrow"
                        size={20}
                        aria-hidden="true"
                      />
                    </Link>
                  </Reveal>
                ))}
              </div>
            </section>
          );
        })
      )}
    </>
  );
}
