"use client";

import { motion } from "framer-motion";

type VolunteerProject = {
  title: string;
  org: string;
  period: string;
  description: string;
  tags: string[];
  href: string;
  status: "live" | "ongoing" | "completed";
};

const volunteerProjects: VolunteerProject[] = [
  {
    title: "St. Mary's Church Website",
    org: "St. Mary's Church",
    period: "Ongoing",
    description:
      "Designed, built and continue to actively develop the official website for St. Mary's Church. A volunteer effort to give the parish a modern, accessible digital presence, covering services, events and community information.",
    tags: ["Web Development", "HTML", "CSS", "JavaScript"],
    href: "https://stmarysmaharagama.org/",
    status: "live",
  },
];

const statusLabel: Record<VolunteerProject["status"], string> = {
  live: "Live",
  ongoing: "Active",
  completed: "Completed",
};

export default function VolunteerWork() {
  return (
    <section id="volunteer" className="section">
      <div className="section-inner">
        <div className="section-rail">
          <span className="section-num">06</span>
          <span className="section-label">Volunteer</span>
        </div>

        <div className="section-body">
          <h2 className="heading-section mb-3 max-w-[18ch]">
            Building for the community, not the r&eacute;sum&eacute;.
          </h2>
          <p className="lede mb-10 max-w-[60ch]">
            Outside of work and university, I give my time to projects that
            matter to the people around me. Giving back through code is one of
            the most rewarding things I do.
          </p>

          <div className="grid gap-4">
            {volunteerProjects.map((p, i) => (
              <motion.a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="block rounded border border-line-strong p-[clamp(24px,3vw,40px)] text-ink transition-colors hover:border-accent"
              >
                <div className="flex flex-wrap items-center justify-between gap-3.5">
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-accent">
                    <span className="h-[7px] w-[7px] rounded-full bg-[#3fbf7a]" />
                    {statusLabel[p.status]}
                  </span>
                  <span className="meta">
                    {p.href.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-[1.6rem] font-medium tracking-[-0.01em]">
                  {p.title}
                </h3>
                <div className="mt-1.5 font-mono text-xs text-ink-muted">
                  {p.org} · {p.period}
                </div>
                <p className="mt-4 max-w-[70ch] text-[0.98rem] leading-[1.75] text-ink-muted">
                  {p.description}
                </p>
                <div className="mt-5 font-mono text-xs tracking-[0.06em] text-ink-faint">
                  {p.tags.join("   ·   ")}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
