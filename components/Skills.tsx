"use client";

import { motion } from "framer-motion";

const groups = [
  {
    title: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "R", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Tools",
    items: ["Next.js", "React", "Node.js", "Tailwind CSS", "Firebase", "FastAPI", "Flower (flwr)", "WandB", "Plotly"],
  },
  {
    title: "ML & Data",
    items: ["PyTorch", "Scikit-Learn", "Federated Learning", "MLP Neural Networks", "Data Preprocessing"],
  },
  {
    title: "Practices",
    items: ["Agile", "Git & GitHub", "CI/CD", "Code Review", "Testing", "Problem Solving"],
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
      <div className="container-page">
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow">03 — Skills</span>
          <h2 className="heading-lg">The toolkit I bring to a problem.</h2>
          <p className="mt-4 text-ink-300">
            A mix of languages, frameworks, and habits I&apos;ve picked up
            through coursework, projects, and shipping real software.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card"
            >
              <h3 className="font-display text-base font-semibold text-white">
                {g.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="chip">
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
