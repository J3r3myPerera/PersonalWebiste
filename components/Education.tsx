"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy } from "lucide-react";

const education = [
  {
    school: "Informatics Institute of Technology",
    affiliation: "Affiliated with University of Westminster, UK",
    degree: "BEng (Hons) Software Engineering",
    period: "2021 – Present",
    notes: [
      "Software Development I — 76",
      "Software Development II — 60",
      "Mathematics for Computing — 76",
      "Computer Systems Fundamentals — 82",
      "Web Design & Development — 80",
    ],
  },
  {
    school: "St. Peter's College, Colombo 04",
    affiliation: "GCE Advanced Level",
    degree: "Information Technology · Combined Mathematics · Physics",
    period: "2017 – 2020",
    notes: ["Z-score 0.9190", "IT — A", "Combined Maths — S", "Physics — C"],
  },
];

const extras = [
  {
    title: "Debating",
    org: "Colombo Independent Debaters Society",
    body: "Vice President (2022 – Present). Quarter Finalist at the Cambridge University British Parliamentary Debating Championship (2022).",
  },
  {
    title: "Rotaract",
    org: "Rotaract Club of IIT",
    body: "Joint Chairperson of Sally's Manor (2022) and Treasurer of the Eco Brick Project (2022).",
  },
  {
    title: "Leadership",
    org: "St. Peter's College",
    body: "Senior Prefect (2019 – 2020) and Deputy House Captain (2019). President of YCS, Colombo South Deanery.",
  },
  {
    title: "ICT Club",
    org: "St. Peter's College",
    body: "Project Co-ordinator (2019 – 2020) — organised the College ICT day and supported students entering IT competitions.",
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-page">
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow">05 — Education & Beyond</span>
          <h2 className="heading-lg">
            Foundations in engineering, sharpened by community.
          </h2>
        </div>

        <div className="grid gap-10 md:gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-semibold text-white">
              <GraduationCap size={18} className="text-accent-soft" />
              Education
            </h3>
            <div className="grid gap-4">
              {education.map((e, i) => (
                <motion.div
                  key={e.school}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="card"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h4 className="font-display text-base font-semibold text-white">
                      {e.school}
                    </h4>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-ink-400">
                      {e.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-ink-300">{e.affiliation}</p>
                  <p className="mt-2 text-sm text-white">{e.degree}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {e.notes.map((n) => (
                      <li key={n} className="chip">
                        {n}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-semibold text-white">
              <Trophy size={18} className="text-accent-soft" />
              Beyond the classroom
            </h3>
            <div className="grid gap-4">
              {extras.map((x, i) => (
                <motion.div
                  key={x.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="card"
                >
                  <h4 className="font-display text-base font-semibold text-white">
                    {x.title}{" "}
                    <span className="text-ink-300">· {x.org}</span>
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">
                    {x.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
