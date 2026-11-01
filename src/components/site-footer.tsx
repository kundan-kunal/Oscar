import { ArrowUpRight } from "lucide-react";

import { Wordmark } from "@/components/wordmark";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer id="contact" className="site-footer section-shell">
      <span className="eyebrow">HAVE SOMETHING IN MIND?</span>
      <h2>Let&rsquo;s start a conversation.</h2>
      <a href={`mailto:${site.email}`} className="contact-link">
        GET IN TOUCH <ArrowUpRight size={18} aria-hidden="true" />
      </a>

      <div className="footer-bottom">
        <Wordmark />
        <span>© {site.copyrightYear} KUNDAN KUNAL</span>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
