"use client";

import { motion } from "framer-motion";

const groups = [
  {
    title: "Languages",
    items: [
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "R",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Frameworks & Tools",
    items: [
      "Next.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Firebase",
      "FastAPI",
      "Flower (flwr)",
      "WandB",
      "Plotly",
    ],
  },
  {
    title: "ML & Data",
    items: [
      "PyTorch",
      "Scikit-Learn",
      "Federated Learning",
      "MLP Neural Networks",
      "Data Preprocessing",
    ],
  },
  {
    title: "Practices",
    items: [
      "Agile",
      "Git & GitHub",
      "CI/CD",
      "Code Review",
      "Testing",
      "Problem Solving",
    ],
  },
  {
    title: "Strengths",
    items: [
      "Team Work",
      "Communication",
      "Presenting",
      "Time Management",
      "Creativity",
      "Research",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <div className="section-rail">
          <span className="section-num">03</span>
          <span className="section-label">Skills</span>
        </div>

        <div className="section-body">
          <h2 className="heading-section mb-3 max-w-[18ch]">
            The toolkit I bring to a problem.
          </h2>
          <p className="lede mb-11 max-w-[60ch]">
            A mix of languages, frameworks and habits picked up through
            coursework, projects and shipping real software.
          </p>

          <div className="rule-list">
            {groups.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rule-row flex flex-wrap gap-[clamp(16px,4vw,48px)] py-6"
              >
                <h3 className="min-w-[140px] flex-initial basis-[170px] font-serif text-[1.25rem] font-medium tracking-[-0.01em]">
                  {g.title}
                </h3>
                <div className="flex-1 basis-[360px] pt-0.5 font-mono text-[12.5px] leading-[2] tracking-[0.05em] text-ink-muted">
                  {g.items.join("   ·   ")}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
