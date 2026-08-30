"use client";

import { motion } from "framer-motion";

const education = [
  {
    school: "Informatics Institute of Technology",
    affiliation: "Affiliated with University of Westminster, UK",
    degree: "BEng (Hons) Software Engineering",
    period: "2021 – Present",
    notes: [
      "Software Development I: 76",
      "Software Development II: 60",
      "Mathematics for Computing: 76",
      "Computer Systems Fundamentals: 82",
      "Web Design & Development: 80",
    ],
  },
  {
    school: "St. Peter's College, Colombo 04",
    affiliation: "GCE Advanced Level",
    degree: "Information Technology · Combined Mathematics · Physics",
    period: "2017 – 2020",
    notes: ["Z-score 0.9190", "IT: A", "Combined Maths: S", "Physics: C"],
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
    body: "Project Co-ordinator (2019 – 2020): organised the College ICT day and supported students entering IT competitions.",
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-inner">
        <div className="section-rail">
          <span className="section-num">05</span>
          <span className="section-label">Education</span>
        </div>

        <div className="section-body">
          <h2 className="heading-section mb-11 max-w-[20ch]">
            Foundations in engineering, sharpened by community.
          </h2>

          <div className="rule-list mb-14">
            {education.map((e, i) => (
              <motion.div
                key={e.school}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rule-row py-7"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <h3 className="font-serif text-[1.4rem] font-medium tracking-[-0.01em]">
                    {e.school}
                  </h3>
                  <span className="font-mono text-[11.5px] tabular-nums text-ink-faint">
                    {e.period}
                  </span>
                </div>
                <div className="mt-1.5 text-[0.95rem] text-ink-muted">
                  {e.affiliation}
                </div>
                <div className="mt-2 text-[0.98rem] font-medium text-accent">
                  {e.degree}
                </div>
                <div className="mt-4 font-mono text-[11.5px] tabular-nums leading-[1.9] tracking-[0.05em] text-ink-muted">
                  {e.notes.join("   ·   ")}
                </div>
              </motion.div>
            ))}
          </div>

          <h3 className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
            Beyond the classroom
          </h3>
          <div className="rule-list">
            {extras.map((x, i) => (
              <motion.div
                key={x.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rule-row flex flex-wrap gap-[clamp(16px,3vw,40px)] py-6"
              >
                <div className="min-w-[140px] flex-initial basis-[170px]">
                  <div className="font-serif text-[1.15rem] font-medium">
                    {x.title}
                  </div>
                  <div className="mt-1 font-mono text-[11px] tracking-[0.03em] text-accent">
                    {x.org}
                  </div>
                </div>
                <p className="max-w-[62ch] flex-1 basis-[340px] text-[0.96rem] leading-[1.7] text-ink-muted">
                  {x.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
