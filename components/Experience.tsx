"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
};

const roles: Role[] = [
  {
    company: "IFS",
    title: "Associate Software Developer",
    period: "Present",
    location: "Colombo, Sri Lanka",
    bullets: [
      "Contributing to enterprise software products used by customers around the world.",
      "Working across the stack — building features, debugging real-world issues, and collaborating across distributed teams.",
      "Continuously sharpening engineering fundamentals: code quality, testing, and design.",
    ],
    tags: ["Enterprise", "Full-stack", "Agile"],
  },
  {
    company: "Commercial Bank of Ceylon PLC",
    title: "Intern",
    period: "Feb 2021 – Sep 2021",
    location: "Head Office, Colombo 11",
    bullets: [
      "Engaged with customers across phone, email, and in-person channels to provide accurate information.",
      "Partnered with internal teams to analyse and resolve customer issues efficiently.",
      "Worked on bank-issued endorsements end-to-end.",
    ],
    tags: ["Customer ops", "Problem solving", "Banking"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-page">
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow">02 — Experience</span>
          <h2 className="heading-lg">Where I&apos;ve been building things.</h2>
        </div>

        <ol className="relative">
          {/* timeline line */}
          <div
            aria-hidden
            className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-white/10 via-white/10 to-transparent sm:left-5"
          />

          {roles.map((r, i) => (
            <motion.li
              key={r.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative mb-8 pl-14 last:mb-0 sm:pl-16"
            >
              <span className="timeline-icon absolute left-0 top-1.5 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-ink-900 text-accent-soft shadow-[0_0_0_4px_rgba(124,92,255,0.08)] sm:h-10 sm:w-10">
                <Briefcase size={16} />
              </span>

              <div className="card">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-base font-semibold text-white sm:text-xl">
                    {r.title}{" "}
                    <span className="text-ink-300">· {r.company}</span>
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-wider text-ink-300">
                    {r.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-ink-300">{r.location}</p>

                <ul className="mt-4 space-y-2">
                  {r.bullets.map((b) => (
                    <li
                      key={b}
                      className="relative pl-5 text-sm leading-relaxed text-ink-200"
                    >
                      <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent/80" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
