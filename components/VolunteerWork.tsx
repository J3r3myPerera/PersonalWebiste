"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Heart } from "lucide-react";

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
      "Designed, built, and continue to actively develop the official website for St. Mary's Church. A volunteer effort to give the parish a modern, accessible digital presence — covering services, events, and community information.",
    tags: ["Web Development", "HTML", "CSS", "JavaScript", "Volunteer"],
    href: "https://github.com/J3r3myPerera/StMarysChurchWebsite",
    status: "ongoing",
  },
];

const statusStyles: Record<VolunteerProject["status"], string> = {
  live: "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20",
  ongoing: "bg-accent/10 text-accent-soft ring-1 ring-accent/20",
  completed: "bg-ink-400/10 text-ink-300 ring-1 ring-ink-400/20",
};

const statusLabel: Record<VolunteerProject["status"], string> = {
  live: "Live",
  ongoing: "Active",
  completed: "Completed",
};

export default function VolunteerWork() {
  return (
    <section id="volunteer" className="section">
      <div className="container-page">
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow">06 — Volunteer Work</span>
          <h2 className="heading-lg">
            Building things for the community, not the résumé.
          </h2>
          <p className="mt-4 text-ink-300">
            Outside of work and university I give my time to projects that
            matter to the people around me. Giving back through code is one of
            the most rewarding things I do.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
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
              className="card group flex flex-col"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-soft ring-1 ring-accent/20">
                    <Heart size={18} />
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[p.status]}`}
                  >
                    {statusLabel[p.status]}
                  </span>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-ink-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                />
              </div>

              <div className="mt-5 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="font-display text-base font-semibold text-white sm:text-lg">
                    {p.title}
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-ink-400">
                    {p.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-accent-soft">
                  {p.org}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">
                  {p.description}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}

          {/* Placeholder card — easy for Jeremy to add future volunteer projects */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center rounded-2xl border border-dashed border-white/10 p-8 text-center"
          >
            <div>
              <p className="text-sm font-medium text-ink-300">
                More to come.
              </p>
              <p className="mt-1 text-sm text-ink-400">
                Always looking for meaningful projects to contribute to.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
