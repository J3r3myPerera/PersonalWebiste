"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@J3r3myPerera",
    href: "https://github.com/J3r3myPerera",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "/in/dinuka-jeremy",
    href: "https://linkedin.com/in/dinuka-jeremy",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "dinukajeremy@gmail.com",
    href: "mailto:dinukajeremy@gmail.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="contact-card relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-5 sm:p-8 lg:p-14"
        >
          <div className="contact-blob-purple absolute -right-32 -top-32 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="contact-blob-pink absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <span className="eyebrow">07 — Contact</span>
              <h2 className="heading-lg">
                Got an idea, role, or just want to say hi?
              </h2>
              <p className="mt-4 max-w-xl text-ink-300">
                I&apos;m always open to interesting conversations — whether
                it&apos;s about software, side projects, debating, or coffee.
                Pick whichever channel works for you.
              </p>

              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href="mailto:dinukajeremy@gmail.com"
                  className="btn-primary"
                >
                  Send me an email <ArrowUpRight size={16} />
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

            <div className="lg:col-span-5">
              <ul className="grid gap-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="social-link-row group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-accent/40 hover:bg-white/[0.05]"
                    >
                      <span className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent-soft ring-1 ring-accent/20">
                          <s.icon size={18} />
                        </span>
                        <span>
                          <span className="block text-sm font-medium text-white">
                            {s.label}
                          </span>
                          <span className="block max-w-[140px] truncate font-mono text-xs text-ink-300 sm:max-w-none">
                            {s.handle}
                          </span>
                        </span>
                      </span>
                      <ArrowUpRight
                        size={18}
                        className="text-ink-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
