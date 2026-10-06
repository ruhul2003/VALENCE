"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const MotionLink = motion.create(Link);

export default function ProjectsSection({ onOpenContact }) {
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  const categories = ["ALL", "AI AGENTS", "FINTECH", "CLOUD INFRA"];

  const projects = [
    {
      number: "01",
      title: "AETHERFLOW AI",
      category: "AI AGENTS",
      displayCategory: "AUTONOMOUS ENTERPRISE AGENTS",
      description:
        "Full-stack agentic orchestration platform coordinating multi-step analytical workflows across distributed cloud clusters with real-time token telemetry.",
      image: "/assets/project-novaflow.jpg",
      tags: ["Next.js 16", "Python", "FastAPI", "Redis Streams", "OpenAI"],
      metrics: "97.8% Accuracy • 48ms Inference",
    },
    {
      number: "02",
      title: "ALGOFIN MATRIX",
      category: "FINTECH",
      displayCategory: "FINTECH & ALGORITHMIC TRADING",
      description:
        "Institutional-grade order execution terminal and real-time market depth visualization handling 150,000+ orders per second with zero drift.",
      image: "/assets/project-apexscale.jpg",
      tags: ["React 19", "WebSockets", "Rust Engine", "TimescaleDB", "Tailwind"],
      metrics: "$1.2B+ Volume • <1.2ms Roundtrip",
    },
    {
      number: "03",
      title: "HYPERSCALE CLOUD MESH",
      category: "CLOUD INFRA",
      displayCategory: "SERVERLESS INFRASTRUCTURE",
      description:
        "Distributed multi-region container orchestration fabric providing automated Canary deployments and self-healing cluster recovery.",
      image: "/assets/hero-ai-card.jpg",
      tags: ["Kubernetes", "Go", "Terraform", "eBPF", "AWS EKS"],
      metrics: "99.999% SLA • Global Edge Mesh",
    },
    {
      number: "04",
      title: "MEDISYNAPSE HEALTH",
      category: "AI AGENTS",
      displayCategory: "HEALTHCARE DATA FABRIC",
      description:
        "HIPAA-compliant federated health analytics platform bridging hospital records, real-time diagnostic telemetry, and clinical research.",
      image: "/assets/engineers-team.jpg",
      tags: ["Next.js", "FHIR API", "PostgreSQL", "Zero-Trust", "Docker"],
      metrics: "4.5M Patient Records • SOC2 Type II",
    },
  ];

  const filteredProjects =
    selectedFilter === "ALL"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 lg:py-36 bg-white dark:bg-[#080B11] border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row (Wilbur Layout) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-neutral-500 dark:text-neutral-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-cyan-400" />
              <span>OUR WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase tracking-tight text-neutral-950 dark:text-white">
              OUR LATEST PROJECTS.
            </h2>
          </div>

          <MotionLink
            href="/projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group self-start md:self-auto rounded-full bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 px-7 py-4 text-sm font-semibold flex items-center gap-3 transition-all duration-300 shadow-md cursor-pointer"
          >
            <span>View all Projects</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </MotionLink>
        </motion.div>

        {/* Filter Category Pills with Framer Motion layoutId */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {categories.map((cat) => {
            const isSelected = selectedFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300 cursor-pointer ${
                  isSelected
                    ? "text-white dark:text-black font-extrabold"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="activeProjectPill"
                    className="absolute inset-0 rounded-full bg-black dark:bg-white z-0 shadow-sm"
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Massive Numerals */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          <AnimatePresence>
            {filteredProjects.map((proj, idx) => (
              <motion.div
                key={proj.number}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col space-y-4"
              >
                
                {/* Massive Numeral (Wilbur signature style) */}
                <div className="flex items-baseline justify-between border-b border-gray-100 dark:border-neutral-800 pb-2">
                  <span className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-neutral-900 dark:text-white tracking-tight">
                    {proj.number}
                  </span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-cyan-300 transition-colors">
                    {proj.displayCategory}
                  </span>
                </div>

                {/* Project Card Image Container */}
                <div className="relative aspect-[16/10] lg:aspect-[16/9.5] w-full rounded-3xl overflow-hidden bg-neutral-900 border border-gray-200/80 dark:border-white/10 group-hover:border-black/30 dark:group-hover:border-cyan-400/40 shadow-md group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />
                  
                  {/* Metric pill inside card */}
                  <div className="absolute top-5 right-5 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold tracking-wide">
                    {proj.metrics}
                  </div>

                  {/* Bottom title inside card */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div className="text-white space-y-1">
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase">
                        {proj.title}
                      </h3>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 45 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="w-12 h-12 rounded-full bg-white text-black dark:bg-cyan-400 dark:text-black flex items-center justify-center shadow-lg cursor-pointer"
                    >
                      <ArrowUpRight className="w-6 h-6" />
                    </motion.div>
                  </div>
                </div>

                {/* Project Description and Tags */}
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed pt-1 font-normal">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-2.5 pt-1">
                  {proj.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.08, y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-[#0E131F] text-neutral-700 dark:text-neutral-300 border border-transparent dark:border-white/10 hover:bg-neutral-900 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-black transition-colors cursor-default shadow-xs"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
