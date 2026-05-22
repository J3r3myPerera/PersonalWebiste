"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GitFork } from "lucide-react";

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
      "The model-definition framework for state-of-the-art machine learning — spanning text, vision, audio, and multimodal models for both inference and training. Actively contributing code and reviewing pull requests on one of the most widely used ML libraries in the world.",
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
      "A workflow orchestration framework for building resilient data pipelines in Python — making it straightforward to add scheduling, retries, caching, and event-driven automation to any script.",
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
      "A feature-rich macOS menu bar system monitor covering CPU, GPU, memory, disk, network, battery, sensors, and Bluetooth devices. Contributing to one of the most popular open-source macOS utilities, written primarily in Swift.",
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
      "Turns a Strava data export into an interactive HTML heatmap with six switchable layers — frequency (linear & log), pace, heart rate, and gradient (absolute & directional). No API key needed, just your Strava zip export.",
    role: "Contributor",
    tags: ["Python", "Jupyter Notebook", "Data Visualisation", "Strava"],
  },
];

export default function OpenSource() {
  return (
    <section id="opensource" className="section">
      <div className="container-page">
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow">07 — Open Source</span>
          <h2 className="heading-lg">
            Contributing to projects I actually use.
          </h2>
          <p className="mt-4 text-ink-300">
            I believe in giving back to the tools and communities that make
            software better. Here are the open-source projects I&apos;m
            actively contributing to.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {contributions.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card flex flex-col"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-soft ring-1 ring-accent/20">
                    <GitFork size={18} />
                  </div>
                  <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent-soft ring-1 ring-accent/20">
                    {c.role}
                  </span>
                </div>
                <a
                  href={c.forkHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${c.title} on GitHub`}
                  className="group/link text-ink-400 transition-all hover:-translate-y-0.5 hover:translate-x-0.5 hover:text-white"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>

              <div className="mt-5 flex-1">
                <h3 className="font-display text-base font-semibold text-white sm:text-lg">
                  {c.title}
                </h3>

                <div className="mt-1 flex items-center gap-1.5 font-mono text-[11px] text-ink-400">
                  <GitFork size={11} />
                  <span>forked from</span>
                  <a
                    href={c.upstreamHref}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-accent-soft"
                  >
                    {c.upstream}
                  </a>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-ink-300">
                  {c.description}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={c.forkHref}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[11px] text-ink-400 transition-colors hover:text-accent-soft"
                >
                  {c.fork}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
