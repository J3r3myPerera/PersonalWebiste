"use client";

import { motion } from "framer-motion";

const heroFacts = [
  { k: "Role", v: "Assoc. Software Eng · IFS" },
  { k: "Based in", v: "Colombo, Sri Lanka" },
  { k: "Focus", v: "Web · Backend · ML" },
  { k: "Status", v: "Open to collaboration" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-[clamp(52px,8vw,96px)] pt-[clamp(56px,11vw,132px)]"
    >
      <div
        aria-hidden
        className="ambient-glow absolute inset-x-0 -top-24 h-[560px]"
      />

      <motion.div
        className="container-page"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-[clamp(28px,5vw,48px)] flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
          <span className="inline-flex items-center gap-2 text-accent">
            <span className="relative flex h-[7px] w-[7px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-accent" />
            </span>
            Available for collaboration
          </span>
          <span className="text-ink-faint/60">/</span>
          <span>Colombo, Sri Lanka</span>
        </div>

        <h1 className="font-serif text-[clamp(3.1rem,10vw,7rem)] font-medium leading-[0.92] tracking-[-0.025em]">
          Jeremy
          <br />
          Perera
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="my-[clamp(28px,4vw,40px)] h-0.5 w-[min(340px,60%)] origin-left bg-accent"
        />

        <div className="flex flex-wrap items-start gap-[clamp(32px,6vw,72px)]">
          <div className="min-w-[min(100%,300px)] flex-1 basis-[440px]">
            <p className="max-w-[24ch] font-serif text-[clamp(1.5rem,2.7vw,2.15rem)] font-normal leading-[1.32] tracking-[-0.01em]">
              Associate Software Engineer at{" "}
              <span className="italic text-accent">IFS</span>. I turn ambiguous
              problems into clean, reliable software.
            </p>
            <p className="mt-6 max-w-[52ch] text-base leading-[1.75] text-ink-muted">
              Across web, backend, and applied machine learning, with a research
              streak in federated learning and a habit of shipping.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                View selected work <span className="font-mono">→</span>
              </a>
              <a href="#contact" className="btn-ghost">
                Get in touch
              </a>
              <a
                href="/cv.pdf"
                download="Jeremy_Perera_CV.pdf"
                className="btn-quiet"
              >
                Download CV <span className="font-mono">↓</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-faint">
              <a
                href="https://github.com/J3r3myPerera"
                target="_blank"
                rel="noreferrer"
                className="rounded-[2px] text-ink-faint transition-colors duration-200 hover:text-ink focus:outline-none focus-visible:text-ink focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
              >
                GitHub ↗
              </a>
              <span className="text-ink-faint/60">/</span>
              <a
                href="https://linkedin.com/in/dinuka-jeremy"
                target="_blank"
                rel="noreferrer"
                className="rounded-[2px] text-ink-faint transition-colors duration-200 hover:text-ink focus:outline-none focus-visible:text-ink focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <dl className="min-w-[240px] flex-initial basis-[300px] border-t border-line">
            {heroFacts.map((f) => (
              <div
                key={f.k}
                className="flex justify-between gap-4 border-b border-line py-3.5 transition-colors duration-200 hover:border-line-strong"
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">
                  {f.k}
                </dt>
                <dd className="m-0 text-right text-[13.5px] tabular-nums">
                  {f.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    </section>
  );
}
