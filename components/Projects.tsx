"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Folder } from "lucide-react";

type Project = {
  title: string;
  period: string;
  description: string;
  tags: string[];
  highlight?: boolean;
  href?: string;
};

const projects: Project[] = [
  {
    title: "Federated Learning for Personal Finance Prediction",
    period: "Final Year Project · 2024 – 2025",
    description:
      "Designed and implemented a complete Federated Learning system to predict disposable income from real-world finance data. Built custom FedAvg, FedProx, and an original SmartFedProx strategy — featuring adaptive μ, divergence-aware client selection, and server-side μ tuning. Delivered both a bespoke simulation framework and a parallel Flower (flwr) implementation, with a FastAPI dashboard, WandB experiment tracking, CI/CD, and AWS EC2 deployment.",
    tags: ["Final Year Project", "Python", "PyTorch", "Federated Learning", "FastAPI", "Flower"],
    highlight: true,
    href: "https://github.com/J3r3myPerera/FLRegressionFwr",
  },
  {
    title: "The Predictor — AI Stock Forecasting App",
    period: "Aug 2022 – Apr 2023",
    description:
      "AI-powered web application for stock price prediction. Led the team and contributed to the data science component. Selected to participate in Microsoft Imagine Cup 2023.",
    tags: ["Team Lead", "Data Science", "Python", "Web"],
    highlight: true,
  },
  {
    title: "MLP Neural Networks & Partitioning Clustering",
    period: "Apr 2023 – May 2023",
    description:
      "Energy-forecasting research project in R: pre-processed a real-world dataset, performed partitioning clustering, and built an MLP neural network for prediction.",
    tags: ["R", "Machine Learning", "Forecasting"],
  },
  {
    title: "Appointment Application",
    period: "Jan 2023",
    description:
      "Desktop-style doctor appointment system built in Java, with a clean Java Swing GUI and structured OOP design.",
    tags: ["Java", "Swing", "OOP"],
  },
  {
    title: "HTTP & Java Server",
    period: "Feb 2023",
    description:
      "Built a small HTTP server and a Java client that talks to it through a local server port — a hands-on dive into networking fundamentals.",
    tags: ["Java", "HTTP", "Networking"],
  },
  {
    title: "Hotel Booking Application",
    period: "2022",
    description:
      "Hotel reservation system implemented in Java with a focus on clean state management and a simple, usable interface.",
    tags: ["Java", "OOP"],
  },
  {
    title: "Personal Website Projects",
    period: "Apr 2023 – Present",
    description:
      "A series of personal site experiments hosted on Firebase, built with vanilla HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JS", "Firebase"],
  },
  {
    title: "The Art of Coffee",
    period: "2021",
    description:
      "Group coursework: a small e-commerce-style coffee ordering site with an add-to-cart flow, built in HTML, CSS, and JavaScript.",
    tags: ["Team Project", "Frontend", "JS"],
  },
  {
    title: "The Score — Cricket Scoring App",
    period: "SLIIT CodeFest 2019",
    description:
      "Cricket scoring application built in Python as part of the college team — advanced to the competition quarter-finals.",
    tags: ["Python", "Competition"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-page">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">04 — Academic Projects</span>
            <h2 className="heading-lg">Things I&apos;ve built and shipped.</h2>
            <p className="mt-4 text-ink-300">
              A selection of projects from university, competitions, and side
              experiments — spanning web, desktop, and machine learning.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const Tag = p.href ? motion.a : motion.div;
            const linkProps = p.href ? { href: p.href, target: "_blank", rel: "noreferrer" } : {};
            return (
            <Tag
              key={p.title}
              {...(linkProps as object)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
              className={`card flex flex-col ${p.href ? "group" : ""} ${
                p.highlight
                  ? "md:col-span-2 lg:col-span-2 lg:row-span-1"
                  : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent-soft ring-1 ring-accent/20">
                  <Folder size={18} />
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
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
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
            </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
