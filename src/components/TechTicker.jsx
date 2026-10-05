"use client";

import { motion } from "framer-motion";

export default function TechTicker() {
  const technologies = [
    { name: "Next.js 16", tag: "App Router" },
    { name: "React 19", tag: "Concurrent Core" },
    { name: "Tailwind CSS v4", tag: "Design Engine" },
    { name: "TypeScript", tag: "Type-Safe" },
    { name: "Node.js", tag: "Microservices" },
    { name: "Python", tag: "AI / ML Pipelines" },
    { name: "Kubernetes", tag: "Cloud Orchestration" },
    { name: "AWS Cloud", tag: "Scalable Infra" },
    { name: "Docker", tag: "Containers" },
    { name: "PostgreSQL", tag: "Distributed Relational" },
    { name: "Redis", tag: "High-Throughput In-Memory" },
    { name: "GraphQL", tag: "Declarative API" },
    { name: "OpenAI & Claude", tag: "LLM Agents" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-y border-black/5 bg-[#F8FAFC] py-6 sm:py-8 overflow-hidden select-none"
    >
      <div className="relative w-full overflow-hidden">
        {/* Soft edge gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-48 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-48 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {/* Repeated list for smooth infinite scroll */}
          {[...technologies, ...technologies, ...technologies].map((tech, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.08, y: -3, borderColor: "rgba(0, 0, 0, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white border border-gray-200/80 shadow-xs hover:shadow-lg transition-shadow cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-sm font-bold tracking-tight text-neutral-900 uppercase">
                {tech.name}
              </span>
              <span className="text-[11px] font-medium text-neutral-400 border-l border-gray-200 pl-2">
                {tech.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
