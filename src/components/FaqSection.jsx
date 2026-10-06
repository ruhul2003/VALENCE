"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does Valence integrate with existing engineering teams?",
      answer:
        "We operate as an elite embedded squad or an autonomous capability pod. We plug directly into your Slack, Jira/Linear, GitHub/GitLab, and sprint ceremonies, adapting to your branching strategy and architectural standards from Day 1.",
    },
    {
      question: "Who owns the intellectual property and source code produced?",
      answer:
        "You retain 100% full legal ownership of all intellectual property, source repositories, documentation, design files, and cloud infrastructure configurations. Nothing is locked into proprietary Valence runtimes.",
    },
    {
      question: "What is your typical project kickoff timeline and sprint cadence?",
      answer:
        "Discovery and architectural design typically conclude within 7 to 10 business days. Development starts immediately with 1-week or 2-week agile sprints, featuring working code deliveries, staging deployments, and live walkthroughs every single Friday.",
    },
    {
      question: "Can Valence build private, compliant AI and LLM workflows?",
      answer:
        "Yes. We specialize in private enterprise inference, local vector storage, and zero-data-retention AI pipelines that comply with strict SOC2 Type II, HIPAA, and GDPR standards. Your proprietary training and customer data are never exposed.",
    },
    {
      question: "What post-launch maintenance and SLA support do you provide?",
      answer:
        "We offer tier-1 24/7/365 production observability, proactive security patching, auto-scaling audits, and guaranteed response SLAs (<15 minutes for critical incidents) under our Managed Software Operations agreements.",
    },
  ];

  return (
    <section id="faq" className="py-24 lg:py-36 bg-[#F8FAFC] dark:bg-[#080B11] border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-neutral-500 dark:text-neutral-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-cyan-400" />
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase tracking-tight text-neutral-950 dark:text-white">
            FREQUENTLY ASKED QUESTIONS.
          </h2>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="max-w-6xl space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -2 }}
                className={`rounded-2xl transition-all duration-300 border relative overflow-hidden ${
                  isOpen
                    ? "bg-white dark:bg-[#0E131F] border-black/30 dark:border-cyan-400/40 shadow-lg dark:shadow-[0_0_25px_-5px_rgba(34,211,238,0.15)]"
                    : "bg-white/60 dark:bg-[#0B0F17]/60 border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-[#0E131F]"
                }`}
              >
                {isOpen && (
                  <motion.div
                    layoutId="activeFaqBar"
                    className="absolute left-0 top-0 bottom-0 w-1.5 bg-black dark:bg-cyan-400"
                  />
                )}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full py-6 sm:py-7 px-6 sm:px-8 flex items-center justify-between text-left group cursor-pointer"
                >
                  <span className="text-base sm:text-lg lg:text-xl font-bold text-neutral-950 dark:text-white pr-4 group-hover:text-neutral-700 dark:group-hover:text-cyan-300 transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-black text-white dark:bg-cyan-400 dark:text-black"
                        : "bg-gray-100 text-neutral-700 dark:bg-white/10 dark:text-neutral-200 group-hover:bg-gray-200 dark:group-hover:bg-white/20"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-7 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
