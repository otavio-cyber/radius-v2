"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"

const cards = [
  { title: "Gestão de capital", delay: 0 },
  { title: "Eficiência operacional", delay: 0.1 },
  { title: "Custo do kWh", delay: 0.2 },
  { title: "Escalabilidade", delay: 0.3 },
]

interface StackEstrategicaProps {
  onNavigate: (direction: "left" | "right" | "down") => void
}

export function StackEstrategica({ onNavigate }: StackEstrategicaProps) {
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY })
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return

    const deltaX = e.changedTouches[0].clientX - touchStart.x
    const deltaY = e.changedTouches[0].clientY - touchStart.y
    const threshold = 50

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > threshold) onNavigate("right")   // 👉 volta para Hero
      else if (deltaX < -threshold) onNavigate("left")
    } else {
      if (deltaY < -threshold) onNavigate("down")
    }

    setTouchStart(null)
  }

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="h-screen py-28 px-4 bg-white relative overflow-hidden flex items-center"
    >
      {/* Background glows */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#8b1fa9]/30 to-[#1e1b4b]/40 blur-3xl rounded-full opacity-60" />
      <div className="absolute -bottom-48 -left-48 w-[28rem] h-[28rem] bg-gradient-to-tr from-[#1e1b4b]/30 to-[#8b1fa9]/40 blur-3xl rounded-full opacity-50" />

      <div className="max-w-7xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-[#1e1b4b] tracking-tight mb-10 font-['Play'] text-center"
        >
          Stack Estratégica
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-700 mb-20 leading-relaxed max-w-2xl text-center mx-auto"
        >
          Estruturação de projetos de mineração de Bitcoin. Consolidação do nosso foco em três pilares estratégicos:{" "}
          <strong className="text-[#8b1fa9]">energia, capital e operações</strong>.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: index % 2 === 0 ? -25 : 30 }}
              transition={{ duration: 0.6, delay: card.delay + 0.3 }}
              className="group bg-gradient-to-br from-white via-[#f7f2fa] to-[#ebe5f5] p-8 rounded-2xl shadow-lg border border-white hover:shadow-2xl hover:-translate-y-4 hover:scale-[1.03] transition-all duration-300 backdrop-blur-lg relative overflow-hidden cursor-default"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#8b1fa9]/0 to-[#8b1fa9]/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="mb-4 flex items-center justify-center">
                <div className="w-14 h-14 rounded-xl bg-[#8b1fa9]/15 flex items-center justify-center backdrop-blur-sm border border-[#8b1fa9]/20">
                  <svg
                    className="w-7 h-7 text-[#8b1fa9]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 1v22M1 12h22" />
                  </svg>
                </div>
              </div>

              <h3 className="font-bold text-xl text-[#1e1b4b]">{card.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      <NavigationControllers onNavigate={onNavigate} />
    </section>
  )
}

function NavigationControllers({
  onNavigate,
}: {
  onNavigate: (direction: "right" | "down") => void
}) {
  return (
    <>
      {/* 👉 Voltar para Hero */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        onClick={() => onNavigate("right")}
        className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#8b1fa9]/20 backdrop-blur-md border border-[#8b1fa9]/40 flex items-center justify-center text-[#8b1fa9] hover:bg-[#8b1fa9]/30 transition-all hover:scale-110 z-20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </motion.button>

      {/* 👇 Próxima seção */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        onClick={() => onNavigate("down")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#8b1fa9]/20 backdrop-blur-md border border-[#8b1fa9]/40 flex items-center justify-center text-[#8b1fa9] hover:bg-[#8b1fa9]/30 transition-all hover:scale-110 z-20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 9l-6 6-6-6" />
        </svg>
      </motion.button>
    </>
  )
}
