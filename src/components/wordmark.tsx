import Link from "next/link";

import { site } from "@/content/site";

export function Wordmark() {
  return (
    <Link href="/" aria-label={`${site.name} — home`} className="wordmark">
      {/* Reads as KUNdan / KUNal. The link's aria-label carries the real
          name, so the glyphs themselves are decorative. */}
      <span className="wordmark-main">KUN</span>
      <span className="wordmark-ending">
        <span>dan</span>
        <span>al</span>
      </span>
    </Link>
  );
}
