"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "", isSolid = true, showLabel = false }) {
  const { isDark, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center opacity-0 pointer-events-none ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
        showLabel
          ? "px-4 py-2 gap-3 w-full border"
          : "w-10 h-10 lg:w-11 lg:h-11 border"
      } ${
        isDark
          ? "bg-white/10 text-cyan-300 border-white/15 hover:bg-white/15 hover:border-cyan-400/40 shadow-[0_0_15px_-3px_rgba(34,211,238,0.25)]"
          : isSolid
          ? "bg-black/5 text-neutral-800 border-black/10 hover:bg-black/10 hover:border-black/20"
          : "bg-white/15 text-white border-white/25 hover:bg-white/25 hover:border-white/40 shadow-sm"
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300" strokeWidth={2.2} />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" strokeWidth={2.2} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {showLabel && (
        <span className="text-sm font-semibold tracking-wide flex-1 text-left">
          {isDark ? "Dark Theme" : "Light Theme"}
        </span>
      )}
    </motion.button>
  );
}
