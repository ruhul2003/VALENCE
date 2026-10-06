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
      className="border-y border-black/5 dark:border-white/10 bg-[#F8FAFC] dark:bg-[#080B11] py-6 sm:py-8 overflow-hidden select-none transition-colors duration-300"
    >
      <div className="relative w-full overflow-hidden">
        {/* Soft edge gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-48 bg-gradient-to-r from-[#F8FAFC] dark:from-[#080B11] to-transparent z-10 pointer-events-none transition-colors duration-300" />
        <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-48 bg-gradient-to-l from-[#F8FAFC] dark:from-[#080B11] to-transparent z-10 pointer-events-none transition-colors duration-300" />

        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {/* Repeated list for smooth infinite scroll */}
          {[...technologies, ...technologies, ...technologies].map((tech, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white dark:bg-[#0E131F] border border-gray-200/80 dark:border-white/10 shadow-xs hover:shadow-lg dark:hover:border-cyan-400/40 transition-all cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-sm font-bold tracking-tight text-neutral-900 dark:text-neutral-100 uppercase">
                {tech.name}
              </span>
              <span className="text-[11px] font-medium text-neutral-400 dark:text-neutral-400 border-l border-gray-200 dark:border-white/10 pl-2">
                {tech.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
