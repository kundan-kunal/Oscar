import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { interests } from "@/content/site";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="about" className="content-section section-shell">
        <SectionHeading label="01 — A LITTLE ABOUT ME" />

        <Reveal className="about-grid">
          <h2>
            Curious by nature.
            <br />
            <span>Driven by possibility.</span>
          </h2>

          <div className="about-copy">
            <p>
              I am interested in how ideas become something real — whether that
              means building a digital product, understanding a business,
              solving a problem or exploring a new perspective.
            </p>
            <p>
              This website is a space to bring together the work I do, the
              things I learn and the experiences that shape how I think.
            </p>
            <Link href="/about" className="text-link">
              MORE ABOUT ME <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>

      <section id="work" className="content-section section-shell">
        <SectionHeading label="02 — AREAS OF INTEREST" />

        <div className="interest-list">
          {interests.map((interest, index) => (
            <Reveal key={interest.number} delay={index * 0.06}>
              <Link href={interest.href} className="interest-row">
                <span className="interest-number">{interest.number}</span>
                <h3>{interest.title}</h3>
                <p>{interest.description}</p>
                <ArrowUpRight className="interest-arrow" size={20} aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="writing" className="content-section section-shell">
        <SectionHeading label="03 — NOTES & PERSPECTIVES" />

        <Reveal className="journal-intro">
          <h2>
            Some thoughts
            <br />
            deserve a <span>place.</span>
          </h2>
          <p>
            A growing collection of articles, reflections, lessons and ideas.
            Written along the way, not just at the destination.
          </p>
        </Reveal>

        <Reveal>
          <Link href="/writing" className="wide-link">
            <span>EXPLORE THE JOURNAL</span>
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

      <section id="beyond" className="content-section section-shell">
        <SectionHeading label="04 — OUTSIDE THE ROUTINE" />

        <Reveal className="beyond-content">
          <h2>
            Life is more
            <br />
            than the work
            <br />
            <span>we do.</span>
          </h2>
          <p>
            Places, people, photographs, journeys and small moments that make
            life interesting. A space for everything that doesn&rsquo;t fit into
            a job title.
          </p>
        </Reveal>
      </section>
    </>
  );
}
