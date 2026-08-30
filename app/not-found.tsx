import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found — Jeremy Perera",
};

const suggestions = [
  { href: "/#projects", label: "Selected work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <main
      id="main"
      className="relative grid min-h-[100dvh] place-items-center overflow-hidden"
    >
      <div className="ambient-glow absolute inset-0" aria-hidden />

      <div className="container-page py-[clamp(64px,12vw,140px)]">
        <span className="section-num">404</span>
        <span className="section-label">Page not found</span>

        <h1 className="heading-section mt-7 max-w-[16ch]">
          This page moved, or it never existed.
        </h1>
        <p className="lede mt-5 max-w-[52ch]">
          The link you followed doesn&rsquo;t point anywhere on this site. The
          sections below are the ones worth your time.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a href="/" className="btn-primary">
            Back to the homepage <span className="font-mono">→</span>
          </a>
          <a href="/#contact" className="btn-ghost">
            Tell me what broke
          </a>
        </div>

        <ul className="rule-list mt-14 max-w-[520px]">
          {suggestions.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                className="rule-row group flex items-center justify-between gap-4 py-5 text-ink"
              >
                <span className="font-serif text-[1.2rem] font-medium tracking-[-0.01em]">
                  {s.label}
                </span>
                <span className="font-mono text-base text-accent transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
