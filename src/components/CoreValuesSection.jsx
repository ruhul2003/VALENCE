"use client";

import Image from "next/image";
import { Cpu, Terminal, Layers } from "lucide-react";

export default function CoreValuesSection() {
  const values = [
    {
      icon: Terminal,
      number: "01",
      title: "ENGINEERING PRECISION",
      description:
        "Every line of TypeScript, Go, or Python is written to withstand extreme concurrency, strict memory profiles, and comprehensive CI/CD verification.",
    },
    {
      icon: Cpu,
      number: "02",
      title: "AI-FIRST ARCHITECTURE",
      description:
        "We embed intelligent inference, agentic orchestration, and semantic search directly into the foundation of your enterprise software stack.",
    },
    {
      icon: Layers,
      number: "03",
      title: "UNCOMPROMISING SPEED",
      description:
        "From edge caching and sub-10ms database queries to ultra-fast client-side hydration, performance is treated as a fundamental feature.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span>OUR CORE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-neutral-950">
            WHAT EXCELLENCE MEANS TO US
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.number}
                className="group relative rounded-3xl p-8 bg-[#F8FAFC] border border-gray-200/80 hover:border-black/30 hover:bg-white transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 shadow-xs flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-light text-neutral-400 group-hover:text-black transition-colors">
                      {val.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-neutral-950 uppercase mb-3">
                    {val.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-gray-200/60 flex items-center text-xs font-bold uppercase tracking-wider text-neutral-400 group-hover:text-black transition-colors">
                  <span>Learn Protocol</span>
                  <span className="ml-2 font-normal transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
