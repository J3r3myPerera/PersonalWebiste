import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-sm text-ink-400 sm:flex-row">
        <p>
          © {year} Jeremy Perera. Built with{" "}
          <span className="text-ink-200">Next.js</span> &{" "}
          <span className="text-ink-200">Tailwind CSS</span>.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/J3r3myPerera"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-white"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/dinuka-jeremy"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-white"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
