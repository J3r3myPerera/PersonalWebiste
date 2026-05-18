"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrolledClass = scrolled
    ? isDark
      ? "border-b border-white/5 bg-ink-950/75 backdrop-blur-xl shadow-none"
      : "border-b border-black/5 bg-white/80 backdrop-blur-xl shadow-sm"
    : "border-b border-transparent bg-transparent";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolledClass}`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a
          href="#top"
          className="group flex items-center gap-2 font-display text-lg font-semibold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/15 font-mono text-sm text-accent-soft ring-1 ring-accent/30 transition-all group-hover:bg-accent/25">
            JP
          </span>
          <span className="hidden sm:inline">Jeremy Perera</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-2 text-sm text-ink-200 transition-colors hover:bg-white/[0.05] hover:text-white nav-link"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <a href="#contact" className="btn-primary !px-4 !py-2 text-sm">
            Let&apos;s talk
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-ink-200 mobile-menu-btn"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden">
          <div className="container-page pb-4">
            <ul className="mobile-menu grid gap-1 rounded-2xl border border-white/10 bg-ink-900/80 p-2 backdrop-blur-xl">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="mobile-menu-link block rounded-xl px-4 py-3 text-sm text-ink-100 hover:bg-white/[0.05] hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
