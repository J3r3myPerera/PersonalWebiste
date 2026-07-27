import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-wrap items-center justify-between gap-5 py-9 font-mono text-xs tracking-[0.04em] text-ink-faint">
        <span>© {year} Jeremy Perera</span>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">Colombo, Sri Lanka</span>
          <a
            href="https://github.com/J3r3myPerera"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-faint transition-colors hover:text-ink"
          >
            <Github size={15} />
          </a>
          <a
            href="https://linkedin.com/in/dinuka-jeremy"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-faint transition-colors hover:text-ink"
          >
            <Linkedin size={15} />
          </a>
        </div>

        <a
          href="#top"
          className="text-ink-faint transition-colors hover:text-ink"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
