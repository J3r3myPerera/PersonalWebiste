import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-wrap items-center justify-between gap-5 py-9 font-mono text-xs tracking-[0.04em] text-ink-faint">
        <span className="tabular-nums">© {year} Jeremy Perera</span>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">Colombo, Sri Lanka</span>
          <a
            href="https://github.com/J3r3myPerera"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-[2px] text-ink-faint transition-colors duration-200 hover:text-ink focus:outline-none focus-visible:text-ink focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
          >
            <Github size={15} />
          </a>
          <a
            href="https://linkedin.com/in/dinuka-jeremy"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-[2px] text-ink-faint transition-colors duration-200 hover:text-ink focus:outline-none focus-visible:text-ink focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
          >
            <Linkedin size={15} />
          </a>
        </div>

        <a
          href="#top"
          className="rounded-[2px] text-ink-faint transition-colors duration-200 hover:text-ink focus:outline-none focus-visible:text-ink focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
