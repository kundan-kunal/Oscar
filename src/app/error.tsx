"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="content-section section-shell page-intro">
      <div className="section-heading">
        <span className="eyebrow">SOMETHING BROKE</span>
        <span className="section-line" aria-hidden="true" />
      </div>
      <h1>
        That didn&rsquo;t
        <br />
        <span>go to plan.</span>
      </h1>
      <p>
        An unexpected error stopped this page from rendering
        {error.digest ? ` (reference ${error.digest})` : ""}.
      </p>
      <div className="page-actions">
        <button
          type="button"
          onClick={reset}
          className="hero-button hero-button-primary"
        >
          Try again
        </button>
      </div>
    </section>
  );
}
