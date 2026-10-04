"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F8FAFC] border-t border-gray-200 pt-20 pb-12 text-neutral-800">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        
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

          {/* Col 3: Social Media (2.5 cols) with inline crisp SVGs */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-900">
              Social Media
            </h4>
            <div className="flex flex-col space-y-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-sm text-neutral-600 hover:text-black transition-colors group"
              >
                <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-sm text-neutral-600 hover:text-black transition-colors group"
              >
                <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-sm text-neutral-600 hover:text-black transition-colors group"
              >
                <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>X / Twitter</span>
              </a>

              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-sm text-neutral-600 hover:text-black transition-colors group"
              >
                <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <span>Discord Community</span>
              </a>
            </div>
          </div>

          {/* Col 4: Agency Statement & CTA Button (3 cols) */}
          <div className="md:col-span-3 space-y-6">
            <p className="text-sm text-neutral-600 leading-relaxed">
              A high-precision software engineering practice focusing on building
              resilient, performant, human-centered digital products for future scale.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenContact}
              className="rounded-full bg-black text-white hover:bg-neutral-800 px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              Get in touch
            </motion.button>
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
            <motion.button
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-colors ml-2 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

      </div>
    </footer>
  );
}
