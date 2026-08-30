"use client";

import { motion } from "framer-motion";

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
      "Designed and implemented a complete Federated Learning system to predict disposable income from real-world finance data. Built custom FedAvg, FedProx and an original SmartFedProx strategy, featuring adaptive μ, divergence-aware client selection and server-side μ tuning. Delivered both a bespoke simulation framework and a parallel Flower (flwr) implementation, with a FastAPI dashboard, WandB experiment tracking, CI/CD and AWS EC2 deployment.",
    tags: [
      "Final Year Project",
      "Python",
      "PyTorch",
      "Federated Learning",
      "FastAPI",
      "Flower",
    ],
    highlight: true,
    href: "https://github.com/J3r3myPerera/FLRegressionFwr",
  },
  {
    title: "Tea Factory Ops: Sri Lanka Green-Leaf Supply Chain Platform",
    period: "Collaborative · 2025 – Present",
    description:
      "Two-person SaaS project digitising Sri Lanka's green-leaf tea supply chain, replacing entirely paper-based factory operations with a web ERP and companion mobile app. Covers daily leaf intake, supplier management, automatic monthly payment calculation, production tracking and quality assessment. Built as a full-stack monorepo; Phase 2 targets an Uber-style two-sided marketplace for suppliers and factories.",
    tags: [
      "Next.js 15",
      "TypeScript",
      "Supabase",
      "Expo",
      "Turborepo",
      "Tailwind CSS",
    ],
    highlight: true,
    href: "https://github.com/J3r3myPerera/tea-factory-board-leaf-project",
  },
  {
    title: "AI Running Tool: Scalable SaaS",
    period: "In Progress · 2026",
    description:
      "A scalable SaaS platform built to help runners train smarter using AI-driven insights. Architected from the ground up for multi-tenant scalability, with a focus on clean, extensible infrastructure that can grow from a single user to thousands.",
    tags: ["SaaS", "Scalable Architecture", "AI", "In Progress"],
    highlight: true,
    href: "https://github.com/J3r3myPerera/AIRunningTool",
  },
  {
    title: "Resume Builder: Scalable SaaS",
    period: "In Progress · 2026",
    description:
      "A scalable SaaS product for building and managing professional resumes, designed with a multi-tenant architecture and a modern, extensible stack to support growth from individual users to a full customer base.",
    tags: ["SaaS", "Scalable Architecture", "In Progress"],
    highlight: true,
    href: "https://github.com/J3r3myPerera/ResumeBuilder",
  },
  {
    title: "The Predictor: AI Stock Forecasting App",
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
      "Energy-forecasting research project in R: pre-processed a real-world dataset, performed partitioning clustering and built an MLP neural network for prediction.",
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
      "Built a small HTTP server and a Java client that talks to it through a local server port, a hands-on dive into networking fundamentals.",
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
      "A series of personal site experiments hosted on Firebase, built with vanilla HTML, CSS and JavaScript.",
    tags: ["HTML", "CSS", "JS", "Firebase"],
  },
  {
    title: "The Art of Coffee",
    period: "2021",
    description:
      "Group coursework: a small e-commerce-style coffee ordering site with an add-to-cart flow, built in HTML, CSS and JavaScript.",
    tags: ["Team Project", "Frontend", "JS"],
  },
  {
    title: "The Score: Cricket Scoring App",
    period: "SLIIT CodeFest 2019",
    description:
      "Cricket scoring application built in Python as part of the college team, advancing to the competition quarter-finals.",
    tags: ["Python", "Competition"],
  },
];

const [leadProject, ...restProjects] = projects;

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-page py-[clamp(60px,9vw,128px)]">
        <div className="mb-[clamp(40px,6vw,64px)] flex flex-wrap items-start gap-[clamp(28px,5vw,80px)]">
          <div className="min-w-[150px] shrink-0 grow-0 basis-[180px]">
            <span className="section-num">04</span>
            <span className="section-label">Selected Work</span>
          </div>
          <div className="min-w-[min(100%,320px)] flex-1 basis-[520px]">
            <h2 className="heading-section mb-3 max-w-[16ch]">
              Things I&rsquo;ve built and shipped.
            </h2>
            <p className="lede max-w-[60ch]">
              Projects from university, collaborative work, competitions and
              side experiments, spanning web, mobile and machine learning.
            </p>
          </div>
        </div>

        {/* Lead project */}
        <motion.a
          href={leadProject.href}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="card-raise block p-[clamp(28px,4vw,52px)] text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
              Featured · Final Year Project
            </span>
            <span className="meta">{leadProject.period}</span>
          </div>
          <h3 className="mt-4 max-w-[22ch] font-serif text-[clamp(1.6rem,3vw,2.5rem)] font-medium leading-[1.14] tracking-[-0.015em]">
            {leadProject.title}
          </h3>
          <p className="mt-5 max-w-[78ch] text-[1.02rem] leading-[1.78] text-ink-muted">
            {leadProject.description}
          </p>
          <div className="mt-6 font-mono text-xs tracking-[0.06em] text-ink-faint">
            {leadProject.tags.join("   ·   ")}
          </div>
        </motion.a>

        {/* Project index */}
        <div className="mt-9 rule-list">
          {restProjects.map((p, i) => {
            const Row = p.href ? motion.a : motion.div;
            const linkProps = p.href
              ? { href: p.href, target: "_blank", rel: "noreferrer" }
              : {};
            return (
              <Row
                key={p.title}
                {...(linkProps as object)}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: (i % 6) * 0.04 }}
                className="rule-row group flex flex-wrap items-baseline gap-[clamp(16px,4vw,48px)] px-1 py-7 text-ink transition-colors duration-200 hover:bg-surface focus:outline-none focus-visible:bg-surface focus-visible:ring-1 focus-visible:ring-accent"
              >
                <span className="shrink-0 grow-0 basis-[118px] font-mono text-[11.5px] tabular-nums tracking-[0.03em] text-ink-faint">
                  {p.period}
                </span>
                <div className="min-w-[min(100%,280px)] flex-1 basis-[420px]">
                  <div className="flex items-baseline justify-between gap-2.5">
                    <h3 className="font-serif text-[1.32rem] font-medium tracking-[-0.01em]">
                      {p.title}
                    </h3>
                    {p.href && (
                      <span className="font-mono text-[15px] text-ink-faint transition-[color,transform] duration-200 group-hover:-translate-y-px group-hover:text-accent">
                        ↗
                      </span>
                    )}
                  </div>
                  <p className="mt-2 max-w-[74ch] text-[0.95rem] leading-[1.66] text-ink-muted">
                    {p.description}
                  </p>
                  <div className="mt-3 font-mono text-[11px] tracking-[0.06em] text-ink-faint">
                    {p.tags.join("   ·   ")}
                  </div>
                </div>
              </Row>
            );
          })}
        </div>
      </div>
    </section>
  );
}
