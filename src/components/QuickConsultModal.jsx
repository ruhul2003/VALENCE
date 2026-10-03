"use client";

import { useState } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";

export default function QuickConsultModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setTimeout(() => {
      // keep sent confirmation
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-gray-200 shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-6 pr-8">
          <div className="flex items-center gap-2">
            <span className="font-black italic text-lg tracking-widest text-black">
              ///
            </span>
            <span className="font-extrabold text-base tracking-[0.16em] text-black">
              VALENCE
            </span>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 ml-2">
              Fast Response
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-neutral-950">
            Book Architecture Discovery
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600">
            Speak directly with a Principal Cloud & AI Architect. We respond in under 4 hours.
          </p>
        </div>

        {sent ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-neutral-900">
              Inquiry Dispatched
            </h4>
            <p className="text-xs text-neutral-600">
              We have queued your discovery request. Check your inbox ({email}) for calendar booking availability.
            </p>
            <button
              onClick={() => {
                setSent(false);
                onClose();
              }}
              className="mt-2 px-5 py-2 rounded-full bg-black text-white text-xs font-semibold"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                Work Email
              </label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:outline-none text-sm text-neutral-900"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                Brief Scope / Target Architecture
              </label>
              <textarea
                rows={3}
                required
                placeholder="E.g. Migrating to microservices, implementing LLM agents, scaling Next.js SaaS..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full p-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:outline-none text-sm text-neutral-900 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-full bg-black hover:bg-neutral-800 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
            >
              <span>Submit Discovery Request</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
