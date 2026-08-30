"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#volunteer", label: "Volunteer" },
  { href: "#opensource", label: "Open Source" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Track which section is under the header so the nav can show where you are.
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      // Band just below the sticky header, so the "current" section is the
      // one you are actually reading rather than one scrolling past.
      { rootMargin: "-66px 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="container-page flex h-[66px] items-center justify-between gap-6"
      >
        <a
          href="#top"
          className="group flex items-center gap-3 text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
        >
          <span className="grid h-[30px] w-[30px] place-items-center border border-line-strong font-mono text-xs font-semibold tracking-[0.04em] transition-colors duration-200 group-hover:border-accent group-hover:text-accent">
            JP
          </span>
          <span className="font-serif text-[17px] font-medium tracking-[-0.01em]">
            Jeremy Perera
          </span>
        </a>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center xl:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="nav-link"
                  aria-current={active === l.href ? "true" : undefined}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <a
            href="#contact"
            className="group hidden h-[30px] items-center gap-2 whitespace-nowrap rounded-[2px] bg-accent px-3.5 font-mono text-[11px] uppercase leading-none tracking-[0.1em] text-white transition-[filter,transform] duration-200 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-95 sm:inline-flex"
          >
            Let&apos;s talk
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="icon-btn h-[30px] w-[30px] xl:hidden"
          >
            {open ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-bg xl:hidden">
          <ul id="mobile-menu" className="container-page py-2">
            {links.map((l) => (
              <li key={l.href} className="border-b border-line last:border-b-0">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === l.href ? "true" : undefined}
                  className={`flex items-center justify-between py-3 font-mono text-[11.5px] uppercase tracking-[0.12em] transition-colors duration-200 hover:text-ink ${
                    active === l.href ? "text-ink" : "text-ink-muted"
                  }`}
                >
                  {l.label}
                  {active === l.href && (
                    <span aria-hidden className="text-accent">
                      —
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
