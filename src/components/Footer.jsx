"use client";

import { ArrowUp, Github, Linkedin, Twitter, MessageSquareCode } from "lucide-react";

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F8FAFC] border-t border-gray-200 pt-20 pb-12 text-neutral-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Footer Columns (Wilbur Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-gray-200">
          
          {/* Col 1: Brand & Address (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center tracking-tighter">
              <span className="font-black italic text-2xl mr-1 tracking-widest text-black">
                ///
              </span>
              <span className="font-extrabold text-2xl tracking-[0.18em] text-black">
                VALENCE
              </span>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed max-w-sm">
              Delivering enterprise software architecture, autonomous AI platforms,
              and distributed cloud engineering that build lasting enterprise value.
            </p>

            <div className="pt-2 text-xs text-neutral-500 space-y-1">
              <span className="font-bold text-neutral-800 uppercase block tracking-wider">
                Headquarters
              </span>
              <p>500 Howard Street, Suite 400</p>
              <p>San Francisco, CA 94105, USA</p>
            </div>
          </div>

          {/* Col 2: Navigation Links (2.5 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-900">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-600">
              <li>
                <a href="#projects" className="hover:text-black transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-black transition-colors">
                  About Valence
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-black transition-colors">
                  Core Services
                </a>
              </li>
              <li>
                <a href="#ai-excellence" className="hover:text-black transition-colors">
                  AI Architecture
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-black transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-black transition-colors">
                  FAQ & Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social Media (2.5 cols) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-900">
              Social Media
            </h4>
            <div className="flex flex-col space-y-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-sm text-neutral-600 hover:text-black transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-sm text-neutral-600 hover:text-black transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-sm text-neutral-600 hover:text-black transition-colors"
              >
                <Twitter className="w-4 h-4" />
                <span>Twitter / X</span>
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-sm text-neutral-600 hover:text-black transition-colors"
              >
                <MessageSquareCode className="w-4 h-4" />
                <span>Discord Lab</span>
              </a>
            </div>
          </div>

          {/* Col 4: Agency Statement & CTA Button (3 cols) */}
          <div className="md:col-span-3 space-y-6">
            <p className="text-sm text-neutral-600 leading-relaxed">
              A high-precision software engineering practice focusing on building
              resilient, performant, human-centered digital products for future scale.
            </p>

            <button
              onClick={onOpenContact}
              className="rounded-full bg-black text-white hover:bg-neutral-800 px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              Get in touch
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Live Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              All Systems Operational (99.99% SLA)
            </span>
            <span>•</span>
            <span>&copy; {new Date().getFullYear()} VALENCE Technologies Ltd.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-black transition-colors">
              Privacy Policy
            </a>
            <a href="#hero" className="hover:text-black transition-colors">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-colors ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
