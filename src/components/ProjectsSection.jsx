"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsSection({ onOpenContact }) {
  const projects = [
    {
      number: "01",
      title: "AETHERFLOW AI",
      category: "AUTONOMOUS ENTERPRISE AGENTS",
      description:
        "Full-stack agentic orchestration platform coordinating multi-step analytical workflows across distributed cloud clusters with real-time token telemetry.",
      image: "/assets/project-novaflow.jpg",
      tags: ["Next.js 16", "Python", "FastAPI", "Redis Streams", "OpenAI"],
      metrics: "97.8% Accuracy • 48ms Inference",
    },
    {
      number: "02",
      title: "ALGOFIN MATRIX",
      category: "FINTECH & ALGORITHMIC TRADING",
      description:
        "Institutional-grade order execution terminal and real-time market depth visualization handling 150,000+ orders per second with zero drift.",
      image: "/assets/project-apexscale.jpg",
      tags: ["React 19", "WebSockets", "Rust Engine", "TimescaleDB", "Tailwind"],
      metrics: "$1.2B+ Volume • <1.2ms Roundtrip",
    },
    {
      number: "03",
      title: "HYPERSCALE CLOUD MESH",
      category: "SERVERLESS INFRASTRUCTURE",
      description:
        "Distributed multi-region container orchestration fabric providing automated Canary deployments and self-healing cluster recovery.",
      image: "/assets/hero-ai-card.jpg",
      tags: ["Kubernetes", "Go", "Terraform", "eBPF", "AWS EKS"],
      metrics: "99.999% SLA • Global Edge Mesh",
    },
    {
      number: "04",
      title: "MEDISYNAPSE HEALTH",
      category: "HEALTHCARE DATA FABRIC",
      description:
        "HIPAA-compliant federated health analytics platform bridging hospital records, real-time diagnostic telemetry, and clinical research.",
      image: "/assets/engineers-team.jpg",
      tags: ["Next.js", "FHIR API", "PostgreSQL", "Zero-Trust", "Docker"],
      metrics: "4.5M Patient Records • SOC2 Type II",
    },
  ];

  return (
    <section id="projects" className="py-24 lg:py-32 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Header Row (Wilbur Layout) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span>OUR WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-neutral-950">
              OUR LATEST PROJECTS.
            </h2>
          </div>

          <button
            onClick={onOpenContact}
            className="group self-start md:self-auto rounded-full bg-black text-white hover:bg-neutral-800 px-6 py-3.5 text-sm font-semibold flex items-center gap-3 transition-all duration-300 shadow-md cursor-pointer"
          >
            <span>View all Projects</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Projects Grid with Massive Numerals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((proj) => (
            <div key={proj.number} className="group flex flex-col space-y-4">
              
              {/* Massive Numeral (Wilbur signature style) */}
              <div className="flex items-baseline justify-between border-b border-gray-100 pb-2">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-light text-neutral-900 tracking-tight">
                  {proj.number}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 group-hover:text-black transition-colors">
                  {proj.category}
                </span>
              </div>

              {/* Project Card Image Container */}
              <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden bg-neutral-900 border border-gray-200/80 shadow-md group-hover:shadow-xl transition-all duration-500">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Metric pill inside card */}
                <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide">
                  {proj.metrics}
                </div>

                {/* Bottom title inside card */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div className="text-white space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight uppercase">
                      {proj.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Project Description and Tags */}
              <p className="text-sm text-neutral-600 leading-relaxed pt-1">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-gray-100 text-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
