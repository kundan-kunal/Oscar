import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";

export default function NotFound() {
  return (
    <section className="content-section section-shell page-intro">
      <SectionHeading label="404 — PAGE NOT FOUND" />
      <h1>
        This page
        <br />
        <span>went wandering.</span>
      </h1>
      <p>
        The link may be out of date, or the page may never have existed. Either
        way, there is plenty else to read.
      </p>
      <div className="page-actions">
        <Link href="/" className="hero-button hero-button-primary">
          Back home <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
        <Link href="/writing" className="hero-button hero-button-outline">
          Read the journal
        </Link>
      </div>
    </section>
  );
}
