"use client";

import { useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function ServicesAccordion({ onOpenContact }) {
  const [openIndex, setOpenIndex] = useState(0);

  const capabilities = [
    {
      title: "CONVERSION-FOCUSED SCALABLE DESIGN SYSTEMS",
      description:
        "Reusable, growth-ready design systems and high-converting modern user interfaces engineered to turn visitors into long-term enterprise customers while keeping consistency across multi-platform codebases.",
      techs: ["Next.js 16", "React 19", "Tailwind CSS v4", "Figma Tokens", "Framer Motion"],
      preview: {
        badge: "Design Tokens & UI Kit",
        metric: "4.8x",
        metricLabel: "Faster Dev Velocity",
        highlight: "Production-ready component libraries with automatic accessibility and dark mode.",
      },
    },
    {
      title: "PRODUCT ENGINEERING & INTERFACE ARCHITECTURE",
      description:
        "Full-cycle custom software development from zero to production. We build complex single-page applications, distributed microservices, multi-tenant SaaS architectures, and high-performance APIs.",
      techs: ["TypeScript", "Node.js", "GraphQL", "PostgreSQL", "Redis", "gRPC"],
      preview: {
        badge: "Zero-Downtime Microservices",
        metric: "99.99%",
        metricLabel: "System Reliability",
        highlight: "Decoupled domain services designed to scale horizontally across regions.",
      },
    },
    {
      title: "AUTONOMOUS AI AGENTS & LLM INTEGRATION",
      description:
        "Harness the next wave of generative AI. We develop private enterprise RAG pipelines, autonomous multi-agent task execution systems, intelligent chat interfaces, and automated code review workflows.",
      techs: ["OpenAI API", "LangChain", "Vector DBs (Pinecone)", "Llama 3", "Python FastAPI"],
      preview: {
        badge: "Cognitive Enterprise AI",
        metric: "12x",
        metricLabel: "Workflow Acceleration",
        highlight: "Secure private data inference with strict enterprise role-based access control.",
      },
    },
    {
      title: "CLOUD INFRASTRUCTURE, KUBERNETES & DEVOPS",
      description:
        "Modernize your deployment pipelines. We implement declarative Infrastructure-as-Code (Terraform), auto-scaling Kubernetes clusters, automated CI/CD releases, and 24/7 observability monitoring.",
      techs: ["AWS / GCP", "Kubernetes (EKS)", "Terraform", "Docker", "Prometheus & Grafana"],
      preview: {
        badge: "Cloud-Native Infrastructure",
        metric: "< 15ms",
        metricLabel: "Global Edge Latency",
        highlight: "Automated rolling zero-downtime canary deployments and instant rollbacks.",
      },
    },
    {
      title: "ENTERPRISE DATA PLATFORMS & REAL-TIME ANALYTICS",
      description:
        "Turn high-volume event streams into actionable real-time intelligence. We architect event-driven distributed data meshes, real-time analytics dashboards, and institutional compliance reporting.",
      techs: ["Apache Kafka", "ClickHouse", "Snowflake", "dbt", "WebSockets"],
      preview: {
        badge: "High-Throughput Analytics",
        metric: "250K+",
        metricLabel: "Events Per Second",
        highlight: "Sub-second event ingestion and real-time interactive business intelligence.",
      },
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-36 bg-[#F8FAFC] border-t border-gray-200">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          
          {/* Left Column: Fixed / Sticky Title */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span>SERVICES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase tracking-tight text-neutral-950 leading-[1.08]">
              ENGINEERED FOR IMPACT
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-neutral-600 leading-relaxed font-normal">
              We partner with visionary founders and enterprise leaders to build
              bulletproof software products. Every solution is delivered with
              exhaustive code reviews, test suites, and transparent sprint velocity.
            </p>

            <div className="pt-4">
              <button
                onClick={onOpenContact}
                className="group rounded-full bg-black text-white hover:bg-neutral-800 px-7 py-4 text-sm font-semibold flex items-center gap-3 transition-all duration-300 shadow-md cursor-pointer"
              >
                <span>Schedule Discovery Call</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Hairline Dividers & Expandable Accordion (Wilbur Style) */}
          <div className="lg:col-span-8 border-t border-neutral-900">
            {capabilities.map((cap, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={cap.title}
                  className="border-b border-neutral-900 transition-colors duration-300"
                >
                  {/* Header Row */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full py-7 sm:py-8 flex items-center justify-between text-left group cursor-pointer"
                  >
                    <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold uppercase tracking-tight text-neutral-950 pr-6 group-hover:text-neutral-700 transition-colors">
                      {cap.title}
                    </h3>
                    <div className="w-11 h-11 rounded-full border border-neutral-300 group-hover:border-black flex items-center justify-center shrink-0 transition-colors">
                      {isOpen ? (
                        <ArrowUpRight className="w-5 h-5 text-black" />
                      ) : (
                        <ArrowDown className="w-5 h-5 text-neutral-600 group-hover:text-black transition-colors" />
                      )}
                    </div>
                  </button>

                  {/* Expandable Body */}
                  {isOpen && (
                    <div className="pb-8 pt-2 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                      <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-4xl">
                        {cap.description}
                      </p>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-2.5 pt-1">
                        {cap.techs.map((t) => (
                          <span
                            key={t}
                            className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-gray-300 text-neutral-800 shadow-xs"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Visual Preview Box (Replicating Wilbur's expanded card visual) */}
                      <div className="rounded-2xl p-6 sm:p-8 bg-neutral-900 text-white border border-neutral-800 shadow-lg relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40">
                            {cap.preview.badge}
                          </span>
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-extrabold text-white">
                              {cap.preview.metric}
                            </span>
                            <span className="text-xs text-neutral-400 uppercase tracking-wide">
                              {cap.preview.metricLabel}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                          {cap.preview.highlight}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
