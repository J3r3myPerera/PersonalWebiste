"use client";

import { motion } from "framer-motion";

const traits = [
  {
    no: "01",
    title: "Engineer at heart",
    body: "I care about clean architecture, readable code and the small details that make software feel solid.",
  },
  {
    no: "02",
    title: "Curious by default",
    body: "From web apps to neural networks in R, I love wandering across the stack and learning along the way.",
  },
  {
    no: "03",
    title: "Team-first mindset",
    body: "Years of debating and leading clubs taught me that great work is almost always a conversation.",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <div className="section-rail">
          <span className="section-num">01</span>
          <span className="section-label">About</span>
        </div>

        <div className="section-body">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-section mb-7 max-w-[16ch]">
              A developer with a builder&rsquo;s mindset.
            </h2>
            <p className="mb-4 max-w-[62ch] text-[1.06rem] leading-[1.78] text-ink-muted">
              I&rsquo;m a software engineer based in Sri Lanka, currently
              shipping enterprise-grade software as an{" "}
              <span className="text-ink">
                Associate Software Engineer at IFS
              </span>
              . I hold a BEng in Software Engineering from the Informatics
              Institute of Technology, affiliated with the University of
              Westminster, UK.
            </p>
            <p className="mb-11 max-w-[62ch] text-[1.06rem] leading-[1.78] text-ink-muted">
              Outside of code I&rsquo;ve spent years debating competitively,
              including a quarter-final at the Cambridge University British
              Parliamentary Championship, and leading community projects with
              Rotaract. I bring that same energy into every team I&rsquo;m part
              of.
            </p>
          </motion.div>

          <div className="border-t border-line">
            {traits.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rule-row flex items-baseline gap-[clamp(16px,3vw,40px)] py-6"
              >
                <span className="shrink-0 pt-0.5 font-mono text-xs text-ink-faint">
                  {t.no}
                </span>
                <div>
                  <h3 className="mb-1.5 font-serif text-[1.35rem] font-medium tracking-[-0.01em]">
                    {t.title}
                  </h3>
                  <p className="max-w-[56ch] text-[0.98rem] leading-[1.7] text-ink-muted">
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
