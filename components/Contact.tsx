"use client";

import { motion } from "framer-motion";

const socials = [
  {
    label: "Email",
    handle: "dinukajeremy@gmail.com",
    href: "mailto:dinukajeremy@gmail.com",
  },
  {
    label: "GitHub",
    handle: "@J3r3myPerera",
    href: "https://github.com/J3r3myPerera",
  },
  {
    label: "LinkedIn",
    handle: "dinuka-jeremy",
    href: "https://linkedin.com/in/dinuka-jeremy",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-page py-[clamp(64px,10vw,140px)]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-start gap-[clamp(32px,6vw,88px)]"
        >
          <div className="min-w-[min(100%,320px)] flex-1 basis-[440px]">
            <div className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
              <span className="text-accent">08</span> &nbsp;/&nbsp; Contact
            </div>
            <h2 className="max-w-[14ch] font-serif text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[1.04] tracking-[-0.025em]">
              Got an idea, a role, or just want to say hi?
            </h2>
            <p className="mt-7 max-w-[52ch] text-[1.06rem] leading-[1.76] text-ink-muted">
              I&rsquo;m always open to interesting conversations, about
              software, side projects, debating, or coffee. Pick whichever
              channel works for you.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:dinukajeremy@gmail.com" className="btn-primary">
                Send me an email <span className="font-mono">↗</span>
              </a>
              <a
                href="https://linkedin.com/in/dinuka-jeremy"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          <div className="min-w-[280px] flex-1 basis-[320px]">
            <ul className="rule-list">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="rule-row flex items-center justify-between gap-4 py-5 text-ink transition-[padding] hover:pl-2"
                  >
                    <span>
                      <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">
                        {s.label}
                      </span>
                      <span className="mt-1 block text-[1.05rem]">
                        {s.handle}
                      </span>
                    </span>
                    <span className="font-mono text-base text-accent">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
