"use client";

import { motion } from "framer-motion";

type Contribution = {
  title: string;
  upstream: string;
  upstreamHref: string;
  fork: string;
  forkHref: string;
  description: string;
  role: string;
  tags: string[];
};

const contributions: Contribution[] = [
  {
    title: "transformers",
    upstream: "huggingface/transformers",
    upstreamHref: "https://github.com/huggingface/transformers",
    fork: "J3r3myPerera/transformers",
    forkHref: "https://github.com/J3r3myPerera/transformers",
    description:
      "The model-definition framework for state-of-the-art machine learning, spanning text, vision, audio and multimodal models for both inference and training. Actively contributing code and reviewing pull requests on one of the most widely used ML libraries in the world.",
    role: "Contributor · Code Reviewer",
    tags: ["Python", "Machine Learning", "NLP", "Hugging Face"],
  },
  {
    title: "prefect",
    upstream: "PrefectHQ/prefect",
    upstreamHref: "https://github.com/PrefectHQ/prefect",
    fork: "J3r3myPerera/prefect",
    forkHref: "https://github.com/J3r3myPerera/prefect",
    description:
      "A workflow orchestration framework for building resilient data pipelines in Python, making it straightforward to add scheduling, retries, caching and event-driven automation to any script.",
    role: "Contributor",
    tags: ["Python", "TypeScript", "Workflow Orchestration", "Data Pipelines"],
  },
  {
    title: "stats",
    upstream: "exelban/stats",
    upstreamHref: "https://github.com/exelban/stats",
    fork: "J3r3myPerera/stats",
    forkHref: "https://github.com/J3r3myPerera/stats",
    description:
      "A feature-rich macOS menu bar system monitor covering CPU, GPU, memory, disk, network, battery, sensors and Bluetooth devices. Contributing to one of the most popular open-source macOS utilities, written primarily in Swift.",
    role: "Contributor",
    tags: ["Swift", "macOS", "System Monitoring"],
  },
  {
    title: "running-heatmap",
    upstream: "moresamwilson/running-heatmap",
    upstreamHref: "https://github.com/moresamwilson/running-heatmap",
    fork: "J3r3myPerera/running-heatmap",
    forkHref: "https://github.com/J3r3myPerera/running-heatmap",
    description:
      "Turns a Strava data export into an interactive HTML heatmap with six switchable layers: frequency (linear & log), pace, heart rate and gradient (absolute & directional). No API key needed, just your Strava zip export.",
    role: "Contributor",
    tags: ["Python", "Jupyter Notebook", "Data Visualisation", "Strava"],
  },
];

export default function OpenSource() {
  return (
    <section id="opensource" className="section">
      <div className="section-inner">
        <div className="section-rail">
          <span className="section-num">07</span>
          <span className="section-label">Open Source</span>
        </div>

        <div className="section-body">
          <h2 className="heading-section mb-3 max-w-[18ch]">
            Contributing to projects I actually use.
          </h2>
          <p className="lede mb-10 max-w-[60ch]">
            Giving back to the tools and communities that make software better.
            Here&rsquo;s where I&rsquo;m actively contributing.
          </p>

          <div className="rule-list">
            {contributions.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rule-row flex flex-wrap items-baseline gap-[clamp(16px,4vw,48px)] px-1 py-7 transition-colors hover:bg-surface"
              >
                <div className="min-w-[130px] flex-initial basis-[150px]">
                  <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-accent">
                    {c.role}
                  </div>
                </div>

                <div className="min-w-[min(100%,280px)] flex-1 basis-[400px]">
                  <div className="flex items-baseline justify-between gap-2.5">
                    <h3 className="font-serif text-[1.35rem] font-medium tracking-[-0.01em]">
                      <a
                        href={c.forkHref}
                        target="_blank"
                        rel="noreferrer"
                        className="text-ink transition-colors hover:text-accent"
                      >
                        {c.title}
                      </a>
                    </h3>
                    <span className="font-mono text-[15px] text-ink-faint">
                      ↗
                    </span>
                  </div>

                  <div className="mt-1.5 font-mono text-[11.5px] text-ink-faint">
                    forked from{" "}
                    <a
                      href={c.upstreamHref}
                      target="_blank"
                      rel="noreferrer"
                      className="text-ink-faint transition-colors hover:text-accent"
                    >
                      {c.upstream}
                    </a>
                  </div>

                  <p className="mt-3 max-w-[74ch] text-[0.95rem] leading-[1.68] text-ink-muted">
                    {c.description}
                  </p>

                  <div className="mt-3.5 font-mono text-[11px] tracking-[0.06em] text-ink-faint">
                    {c.tags.join("   ·   ")}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
