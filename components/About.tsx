"use client";

import { motion } from "framer-motion";
import { Code2, Compass, Users } from "lucide-react";

const traits = [
  {
    icon: Code2,
    title: "Engineer at heart",
    body: "I care about clean architecture, readable code, and the small details that make software feel solid.",
  },
  {
    icon: Compass,
    title: "Curious by default",
    body: "From web apps to neural networks in R — I love wandering across the stack and learning along the way.",
  },
  {
    icon: Users,
    title: "Team-first mindset",
    body: "Years of debating and leading clubs taught me that great work is almost always a conversation.",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="eyebrow">01 — About</span>
            <h2 className="heading-lg">
              A developer with a builder&apos;s mindset.
            </h2>
            <p className="mt-6 text-ink-300">
              I&apos;m a software engineer based in Sri Lanka, currently
              shipping enterprise-grade software as an{" "}
              <span className="text-white">Associate Software Developer at IFS</span>.
              I hold a BEng in Software Engineering from the Informatics
              Institute of Technology (affiliated with the University of
              Westminster, UK).
            </p>
            <p className="mt-4 text-ink-300">
              Outside of code, I&apos;ve spent years debating competitively —
              including a quarter-final at the Cambridge University British
              Parliamentary Championship — and leading community projects with
              Rotaract. I bring that same energy into every team I&apos;m part
              of.
            </p>
          </motion.div>

          <div className="grid gap-4 lg:col-span-7">
            {traits.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card group flex items-start gap-4"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-soft ring-1 ring-accent/20 transition-all group-hover:bg-accent/20">
                  <t.icon size={18} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">
                    {t.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-300">
                    {t.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
