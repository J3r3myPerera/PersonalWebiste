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

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      <nav className="container-page flex h-[66px] items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3 text-ink">
          <span className="grid h-[30px] w-[30px] place-items-center border border-line-strong font-mono text-xs font-semibold tracking-[0.04em]">
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
                <a href={l.href} className="nav-link">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <a
            href="#contact"
            className="hidden h-[30px] items-center bg-accent px-3 font-mono text-[11px] uppercase tracking-[0.1em] text-white transition-[filter] hover:brightness-110 sm:inline-flex"
          >
            Let&apos;s talk
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
                  className="block py-3 font-mono text-[11.5px] uppercase tracking-[0.12em] text-ink-muted transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
