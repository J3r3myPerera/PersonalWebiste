"use client";

import { motion } from "framer-motion";

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
    title: "Associate Software Engineer",
    period: "Jul 2024 — Present",
    location: "Colombo, Sri Lanka",
    bullets: [
      "Contributing to enterprise software products used by customers around the world.",
      "Working across the stack: building features, debugging real-world issues and collaborating across distributed teams.",
      "Continuously sharpening engineering fundamentals: code quality, testing and design.",
    ],
    tags: ["Enterprise", "Full-stack", "Agile"],
  },
  {
    company: "Commercial Bank of Ceylon PLC",
    title: "Intern",
    period: "Feb 2021 — Sep 2021",
    location: "Head Office, Colombo 11",
    bullets: [
      "Engaged with customers across phone, email and in-person channels to provide accurate information.",
      "Partnered with internal teams to analyse and resolve customer issues efficiently.",
      "Worked on bank-issued endorsements end-to-end.",
    ],
    tags: ["Customer ops", "Problem solving", "Banking"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <div className="section-rail">
          <span className="section-num">02</span>
          <span className="section-label">Experience</span>
        </div>

        <div className="section-body">
          <h2 className="heading-section mb-11 max-w-[18ch]">
            Where I&rsquo;ve been building things.
          </h2>

          <div className="rule-list">
            {roles.map((r, i) => (
              <motion.div
                key={r.company}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rule-row flex flex-wrap gap-[clamp(20px,4vw,56px)] py-8"
              >
                <div className="min-w-[130px] flex-initial basis-[150px]">
                  <div className="font-mono text-[11.5px] tabular-nums tracking-[0.06em]">
                    {r.period}
                  </div>
                  <div className="mt-1.5 text-[12.5px] text-ink-faint">
                    {r.location}
                  </div>
                </div>

                <div className="min-w-[min(100%,280px)] flex-1 basis-[380px]">
                  <h3 className="font-serif text-[1.45rem] font-medium tracking-[-0.01em]">
                    {r.title}
                  </h3>
                  <div className="mt-1.5 font-mono text-xs uppercase tracking-[0.06em] text-accent">
                    {r.company}
                  </div>

                  <ul className="mt-4 max-w-[64ch] space-y-2">
                    {r.bullets.map((b) => (
                      <li
                        key={b}
                        className="relative pl-5 text-[0.97rem] leading-[1.72] text-ink-muted"
                      >
                        <span className="absolute left-0 top-0 font-mono text-ink-faint">
                          ·
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 font-mono text-xs tracking-[0.06em] text-ink-faint">
                    {r.tags.join("   ·   ")}
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
