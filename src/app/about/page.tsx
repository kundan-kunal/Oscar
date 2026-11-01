import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { interests, site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — background, interests and the thinking behind this site.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About — ${site.name}`,
    description: `About ${site.name} — background, interests and the thinking behind this site.`,
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="content-section section-shell page-intro">
        <SectionHeading label="ABOUT" />
        <h1>
          Curious by nature.
          <br />
          <span>Driven by possibility.</span>
        </h1>
        <p>
          I am interested in how ideas become something real — whether that
          means building a digital product, understanding a business, solving a
          problem or exploring a new perspective.
        </p>
      </section>

      <section className="content-section section-shell">
        <SectionHeading label="01 — WHAT I DO" />
        <Reveal className="prose-columns">
          <p>
            Most of my time goes into the space where technology meets the
            business around it: what gets built, why it gets built, and whether
            the thing that shipped actually solved the problem it set out to.
          </p>
          <p>
            I like the parts other people find tedious — the constraints, the
            trade-offs, the numbers underneath a decision. They are usually
            where the interesting answer is hiding.
          </p>
          <p>
            This site collects that work alongside the reading and the thinking
            that feeds it. Some of it is finished. A lot of it is not, and I
            have stopped treating that as a reason to keep it private.
          </p>
        </Reveal>
      </section>

      <section className="content-section section-shell">
        <SectionHeading label="02 — WHAT I WRITE ABOUT" />
        <div className="interest-list">
          {interests.map((interest, index) => (
            <Reveal key={interest.number} delay={index * 0.06}>
              <Link href={interest.href} className="interest-row">
                <span className="interest-number">{interest.number}</span>
                <h3>{interest.title}</h3>
                <p>{interest.description}</p>
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

      <section className="content-section section-shell">
        <SectionHeading label="03 — ELSEWHERE" />
        <Reveal>
          <Link href="/writing" className="wide-link">
            <span>READ THE JOURNAL</span>
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
