"use client";

import { useState } from "react";
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
    <section id="faq" className="py-24 lg:py-32 bg-[#F8FAFC] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-neutral-950">
            FREQUENTLY ASKED QUESTIONS.
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-white border-black/20 shadow-md"
                    : "bg-white/60 border-gray-200 hover:border-gray-300 hover:bg-white"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full py-6 px-6 sm:px-8 flex items-center justify-between text-left group cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-neutral-950 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-black text-white" : "bg-gray-100 text-neutral-700 group-hover:bg-gray-200"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 text-sm sm:text-base text-neutral-600 leading-relaxed animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
