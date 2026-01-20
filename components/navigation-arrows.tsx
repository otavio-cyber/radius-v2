"use client"

import { motion } from "framer-motion"

interface NavigationArrowsProps {
  navState: "hero" | "stack" | "transformamos" | "vertical"
  onNavigate: (direction: "left" | "right" | "down") => void
}

export function NavigationArrows({ navState, onNavigate }: NavigationArrowsProps) {
  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {/* Left Arrow */}
      {navState === "hero" && (
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          onClick={() => onNavigate("left")}
          className="pointer-events-auto absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </motion.button>
      )}

      {navState === "stack" && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          onClick={() => onNavigate("right")}
          className="pointer-events-auto absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#8b1fa9]/20 backdrop-blur-md border border-[#8b1fa9]/40 flex items-center justify-center text-[#8b1fa9] hover:bg-[#8b1fa9]/30 transition-all hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </motion.button>
      )}

      {/* Right Arrow */}
      {navState === "hero" && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          onClick={() => onNavigate("right")}
          className="pointer-events-auto absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </motion.button>
      )}

      {navState === "transformamos" && (
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          onClick={() => onNavigate("left")}
          className="pointer-events-auto absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#8b1fa9]/20 backdrop-blur-md border border-[#8b1fa9]/40 flex items-center justify-center text-[#8b1fa9] hover:bg-[#8b1fa9]/30 transition-all hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </motion.button>
      )}

      {/* Down Arrow */}
      {navState === "hero" && (
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          onClick={() => onNavigate("down")}
          className="pointer-events-auto absolute bottom-8 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 9l-6 6-6-6" />
          </svg>
        </motion.button>
      )}
    </div>
  )
}
