import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { site } from "@/content/site";
import {
  formatDate,
  getPost,
  posts,
  publishedPosts,
  topics,
} from "@/content/writing";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return { title: "Not found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/writing/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/writing/${post.slug}`,
      publishedTime: post.date,
      authors: [site.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const topicLabel =
    topics.find((topic) => topic.id === post.topic)?.label ?? post.topic;

  const index = publishedPosts.findIndex((item) => item.slug === post.slug);
  const next = publishedPosts[index - 1];
  const previous = publishedPosts[index + 1];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/writing/${post.slug}`,
  };

  return (
    <article className="content-section section-shell post-article">
      <div className="section-heading">
        <Link href={`/writing#${post.topic}`} className="eyebrow">
          {topicLabel.toUpperCase()}
        </Link>
        <span className="section-line" aria-hidden="true" />
        <time dateTime={post.date} className="eyebrow post-date">
          {formatDate(post.date)}
        </time>
      </div>

      <h1>{post.title}</h1>

      <div className="post-body">
        {post.body.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>

      <nav className="post-nav" aria-label="More writing">
        {previous ? (
          <Link href={`/writing/${previous.slug}`} className="post-nav-link">
            <span className="eyebrow">PREVIOUS</span>
            <span>{previous.title}</span>
          </Link>
        ) : (
          <span />
        )}

        {next ? (
          <Link
            href={`/writing/${next.slug}`}
            className="post-nav-link post-nav-next"
          >
            <span className="eyebrow">NEXT</span>
            <span>{next.title}</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>

      <Link href="/writing" className="wide-link">
        <span>ALL WRITING</span>
        <ArrowUpRight size={20} aria-hidden="true" />
      </Link>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </article>
  );
}
