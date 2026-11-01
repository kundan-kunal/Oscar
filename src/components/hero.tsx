import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import heroImage from "@/assets/hero-mountains.jpg";
import { interestTags, site } from "@/content/site";

export function Hero() {
  return (
    <section className="hero-visual" id="top">
      <Image
        src={heroImage}
        alt=""
        fill
        // The hero is the LCP element, so it loads in the <head> rather than
        // waiting to be discovered in the body.
        preload
        placeholder="blur"
        // Next 16 only permits qualities listed in next.config (default [75]).
        sizes="100vw"
        className="hero-image"
      />

      <div className="hero-topline">
        <span>PERSONAL SPACE / 2026</span>
        <span>TECHNOLOGY · BUSINESS · IDEAS</span>
      </div>

      <div className="hero-content">
        <p className="eyebrow hero-intro">A PERSONAL CORNER OF THE INTERNET</p>

        <h1 className="hero-name">
          Kundan <em>Kunal.</em>
        </h1>

        <p className="hero-description">{site.description}</p>

        <div className="hero-actions">
          <Link href="/#work" className="hero-button hero-button-primary">
            Explore Work <ArrowUpRight size={17} aria-hidden="true" />
          </Link>

          <Link href="/writing" className="hero-button hero-button-secondary">
            Read My Writing
          </Link>
        </div>
      </div>

      <div className="hero-interests">
        <span className="interests-label">AREAS OF INTEREST</span>
        {interestTags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </section>
  );
}
