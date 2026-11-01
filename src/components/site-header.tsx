"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { Wordmark } from "@/components/wordmark";
import { navigation, site } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const { body } = document;
    const main = document.getElementById("main-content");
    // Captured now so the cleanup restores focus to the same node.
    const toggle = toggleRef.current;

    // Keep the page behind the overlay out of the tab order and unscrollable.
    const scrollbarWidth = window.innerWidth - body.clientWidth;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;
    main?.setAttribute("inert", "");

    const panel = panelRef.current;
    if (panel) {
      // focus() is a no-op while the overlay is still computed as
      // visibility:hidden. Reading a layout property forces the style flush
      // for the freshly added .is-open class, so the link is focusable now.
      void panel.offsetHeight;
      panel.querySelector<HTMLAnchorElement>("a")?.focus();
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key !== "Tab") return;

      // Cycle focus between the menu links and the close button.
      const focusable = [
        ...(panelRef.current?.querySelectorAll<HTMLElement>("a[href]") ?? []),
        toggle,
      ].filter((el): el is HTMLElement => Boolean(el));

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
      main?.removeAttribute("inert");
      toggle?.focus();
    };
  }, [open, close]);

  return (
    <>
      <header className="site-header">
        <Wordmark />

        <span className="header-location">{site.location}</span>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={menuId}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
          <span>{open ? "CLOSE" : "MENU"}</span>
        </button>
      </header>

      {/* Sibling of the header, not a child: a sticky header creates its own
          stacking context, which would trap this fixed overlay inside it. */}
      <nav
        id={menuId}
        className={`menu-overlay${open ? " is-open" : ""}`}
        aria-label="Site"
        inert={!open}
      >
        <div className="menu-content" ref={panelRef}>
          <span className="eyebrow menu-eyebrow">EXPLORE</span>
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              style={{ transitionDelay: `${0.05 + index * 0.05}s` }}
            >
              <span className="menu-index">0{index + 1}</span>
              <span>{item.label}</span>
              <ArrowUpRight size={22} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
