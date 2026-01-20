"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"

const numbers = [
  { number: "01", title: "Título", description: "Descrição" },
  { number: "02", title: "Título", description: "Descrição" },
  { number: "03", title: "Título", description: "Descrição" },
  { number: "04", title: "Título", description: "Descrição" },
]

interface NumerosSectionProps {
  onNavigate?: (direction: "left" | "down") => void
  isHorizontalView?: boolean
}

export function NumerosSection({ onNavigate, isHorizontalView = false }: NumerosSectionProps) {
  const [touchStart, setTouchStart] = useState<{ x: number } | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isHorizontalView) return
    setTouchStart({ x: e.touches[0].clientX })
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isHorizontalView || !touchStart || !onNavigate) return

    const deltaX = e.changedTouches[0].clientX - touchStart.x
    const threshold = 50

    if (deltaX > threshold) onNavigate("left")

    setTouchStart(null)
  }

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={
        isHorizontalView
          ? "relative h-screen flex items-center bg-white px-10 md:px-20"
          : "py-16 px-10 md:px-20 bg-white"
      }
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#8b1fa9] mb-12 font-['Play']"
        >
          Números relevantes
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {numbers.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: index % 2 === 0 ? -20 : 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl font-bold text-[#8b1fa9] mb-4 font-['Play']">
                {item.number}
              </div>
              <h3 className="text-xl font-bold text-[#1e1b4b] mb-2 font-['Play']">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ⬅️ Navegação lateral */}
      {isHorizontalView && onNavigate && (
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          onClick={() => onNavigate("left")}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#8b1fa9]/20 backdrop-blur-md border border-[#8b1fa9]/40 flex items-center justify-center text-[#8b1fa9] hover:bg-[#8b1fa9]/30 transition-all hover:scale-110 z-20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </motion.button>
      )}

      {/* ⬇️ Navegação para Gênese */}
      {isHorizontalView && onNavigate && (
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          onClick={() => onNavigate("down")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#8b1fa9]/20 backdrop-blur-md border border-[#8b1fa9]/40 flex items-center justify-center text-[#8b1fa9] hover:bg-[#8b1fa9]/30 transition-all hover:scale-110 z-20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 9l-6 6-6-6" />
          </svg>
        </motion.button>
      )}
    </section>
  )
}
