"use client";

import { ArrowRight, Download, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-20 sm:pb-20 sm:pt-32 lg:pt-40">
      <div className="absolute inset-0 -z-10 bg-aurora" />
      <div className="absolute inset-0 -z-10 bg-grid" />

      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="eyebrow">
            <Sparkles size={12} className="text-accent-soft" />
            Available for collaboration
          </span>

          <h1 className="heading-xl">
            <span className="gradient-text">Hi, I&apos;m Jeremy.</span>
            <br />
            <span className="text-ink-300">
              I build software that feels{" "}
              <span className="relative inline-block">
                <span className="thoughtful-word relative z-10 text-white">
                  thoughtful
                </span>
                <span className="thoughtful-glow absolute inset-x-0 bottom-1 -z-0 h-3 bg-accent/30 blur-md" />
              </span>
              .
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
            Associate Software Developer at{" "}
            <span className="font-medium text-white">IFS</span>. I enjoy turning
            ambiguous problems into clean, reliable products — across web,
            backend, and a bit of data along the way.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a href="#projects" className="btn-primary">
              View my work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
            <a
              href="/cv.pdf"
              download="Jeremy_Perera_CV.pdf"
              className="btn-ghost"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-300">
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} className="text-accent-soft" />
              Colombo, Sri Lanka
            </span>
            <a
              href="https://github.com/J3r3myPerera"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <Github size={14} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/dinuka-jeremy"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pointer-events-none mt-20 hidden md:block"
        >
          <div className="relative mx-auto h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
