"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";

export default function QuickConsultModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 dark:bg-black/80 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#0E131F] border border-gray-200 dark:border-white/10 shadow-2xl p-6 sm:p-8"
          >
            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 flex items-center justify-center text-gray-700 dark:text-gray-200 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </motion.button>

            {/* Modal Header */}
            <div className="space-y-2 mb-6 pr-8">
              <div className="flex items-center gap-2">
                <span className="font-black italic text-lg tracking-widest text-black dark:text-white">
                  ///
                </span>
                <span className="font-extrabold text-base tracking-[0.16em] text-black dark:text-white">
                  VALENCE
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950/60 text-cyan-800 dark:text-cyan-300 border border-transparent dark:border-cyan-800/40 ml-2">
                  Fast Response
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-neutral-950 dark:text-white">
                Book Architecture Discovery
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                Speak directly with a Principal Cloud & AI Architect. We respond in under 4 hours.
              </p>
            </div>

            {sent ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-neutral-900 dark:text-white">
                  Inquiry Dispatched
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  We have queued your discovery request. Check your inbox ({email}) for calendar booking availability.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    onClose();
                  }}
                  className="mt-2 px-5 py-2 rounded-full bg-black text-white hover:bg-neutral-800 dark:bg-cyan-400 dark:text-black dark:hover:bg-cyan-300 text-xs font-semibold cursor-pointer transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-11 px-4 rounded-xl bg-gray-50 dark:bg-[#080B11] border border-gray-200 dark:border-white/15 focus:border-black dark:focus:border-cyan-400 focus:outline-none text-sm text-neutral-900 dark:text-white transition-colors placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                    Brief Scope / Target Architecture
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="E.g. Migrating to microservices, implementing LLM agents, scaling Next.js SaaS..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-[#080B11] border border-gray-200 dark:border-white/15 focus:border-black dark:focus:border-cyan-400 focus:outline-none text-sm text-neutral-900 dark:text-white resize-none transition-colors placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full h-12 rounded-full bg-black hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
                >
                  <span>Submit Discovery Request</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            )}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
