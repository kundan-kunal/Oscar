"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Writing", href: "#writing" },
  { label: "Beyond work", href: "#beyond" },
  { label: "Contact", href: "#contact" },
];

function Wordmark() {
  return (
    <a href="#" aria-label="Kundan Kunal home" className="wordmark">
      <span className="wordmark-main">KUN</span>
      <span className="wordmark-ending">
        <span>dan</span>
        <span>al</span>
      </span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <Wordmark />

        <span className="header-location">INDEPENDENTLY THINKING · INDIA</span>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
          <span>{menuOpen ? "CLOSE" : "MENU"}</span>
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="menu-content">
              <span className="eyebrow">EXPLORE</span>
              {navigation.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07 }}
                >
                  <span className="menu-index">0{index + 1}</span>
                  {item.label}
                  <ArrowUpRight size={22} />
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <section className="hero hero-visual" id="top">
        <div className="hero-image" />

        <div className="hero-topline">
          <span>PERSONAL SPACE / 2026</span>
          <span>TECHNOLOGY · BUSINESS · IDEAS</span>
        </div>

        <div className="hero-content">
          <motion.p
            className="eyebrow hero-intro"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            A PERSONAL CORNER OF THE INTERNET
          </motion.p>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Kundan <em>Kunal.</em>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Exploring the intersections of technology, business,
            ideas and everyday experiences.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <a href="#work" className="hero-button hero-button-primary">
              Explore Work <ArrowUpRight size={17} />
            </a>

            <a href="#writing" className="hero-button hero-button-secondary">
              Read My Writing
            </a>
          </motion.div>
        </div>

        <div className="hero-interests">
          <span className="interests-label">AREAS OF INTEREST</span>
          <span>Technology</span>
          <span>Business</span>
          <span>Writing</span>
          <span>Travel</span>
          <span>Photography</span>
        </div>
      </section>  

      <section id="about" className="content-section section-shell">
        <div className="section-heading">
          <span className="eyebrow">01 — A LITTLE ABOUT ME</span>
          <span className="section-line" />
        </div>

        <div className="about-grid">
          <h2>
            Curious by nature.
            <br />
            <span>Driven by possibility.</span>
          </h2>

          <div className="about-copy">
            <p>
              I am interested in how ideas become something real — whether
              that means building a digital product, understanding a business,
              solving a problem or exploring a new perspective.
            </p>
            <p>
              This website is a space to bring together the work I do, the
              things I learn and the experiences that shape how I think.
            </p>
            <a href="/about" className="text-link">
              MORE ABOUT ME <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section id="work" className="content-section section-shell">
        <div className="section-heading">
          <span className="eyebrow">02 — AREAS OF INTEREST</span>
          <span className="section-line" />
        </div>

        <div className="interest-list">
          {[
            ["01", "Technology", "Building, exploring and understanding digital products."],
            ["02", "Business", "Ideas, strategy, operations and the numbers behind them."],
            ["03", "Thoughts & ideas", "Observations, opinions and things worth thinking about."],
            ["04", "Beyond work", "Travel, photography, places and everyday experiences."],
          ].map(([number, title, description]) => (
            <div className="interest-row" key={number}>
              <span className="interest-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <ArrowUpRight className="interest-arrow" size={20} />
            </div>
          ))}
        </div>
      </section>

      <section id="writing" className="content-section section-shell">
        <div className="section-heading">
          <span className="eyebrow">03 — NOTES & PERSPECTIVES</span>
          <span className="section-line" />
        </div>

        <div className="journal-intro">
          <h2>
            Some thoughts
            <br />
            deserve a <span>place.</span>
          </h2>
          <p>
            A growing collection of articles, reflections, lessons and ideas.
            Written along the way, not just at the destination.
          </p>
        </div>

        <a href="/writing" className="wide-link">
          <span>EXPLORE THE JOURNAL</span>
          <ArrowUpRight size={20} />
        </a>
      </section>

      <section id="beyond" className="content-section section-shell beyond-section">
        <div className="section-heading">
          <span className="eyebrow">04 — OUTSIDE THE ROUTINE</span>
          <span className="section-line" />
        </div>

        <div className="beyond-content">
          <h2>
            Life is more
            <br />
            than the work
            <br />
            <span>we do.</span>
          </h2>
          <p>
            Places, people, photographs, journeys and small moments that make
            life interesting. A space for everything that doesn't fit into a
            job title.
          </p>
        </div>
      </section>

      <footer id="contact" className="site-footer section-shell">
        <span className="eyebrow">HAVE SOMETHING IN MIND?</span>
        <h2>Let's start a conversation.</h2>
        <a href="mailto:iamkkunal23@gmail.com" className="contact-link">
          GET IN TOUCH <ArrowUpRight size={18} />
        </a>

        <div className="footer-bottom">
          <Wordmark />
          <span>© 2026 KUNDAN KUNAL</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}