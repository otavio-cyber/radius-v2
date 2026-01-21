"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"

interface GeneseSectionProps {
  onNavigate?: (direction: "up" | "down") => void
}

export function GeneseSection({ onNavigate }: GeneseSectionProps) {
  const [touchStartY, setTouchStartY] = useState<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY === null || !onNavigate) return

    const deltaY = e.changedTouches[0].clientY - touchStartY
    const threshold = 50

    if (deltaY > threshold) onNavigate("up")
    if (deltaY < -threshold) onNavigate("down")

    setTouchStartY(null)
  }

  return (
    <section
      id="genese"
      className="w-full pt-24 pb-28 relative overflow-hidden"
      style={{ backgroundColor: "#DBDBE0" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Decorative Elements - Inspired by logo pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large central circle - subtle */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.03 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, #1e1b4b 0%, transparent 70%)" }}
        />

        {/* Orbiting dots - navy */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`navy-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.08, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="absolute rounded-full bg-[#1e1b4b]"
            style={{
              width: i % 2 === 0 ? "60px" : "40px",
              height: i % 2 === 0 ? "60px" : "40px",
              top: `${15 + i * 15}%`,
              left: `${10 + (i % 3) * 30}%`,
            }}
          />
        ))}

        {/* Orbiting dots - purple */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`purple-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.06, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 + i * 0.1 }}
            className="absolute rounded-full bg-[#8B3A9E]"
            style={{
              width: i % 2 === 0 ? "50px" : "35px",
              height: i % 2 === 0 ? "50px" : "35px",
              top: `${20 + i * 14}%`,
              right: `${8 + (i % 3) * 28}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* QUEM SOMOS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-[#1e1b4b] text-center mb-12">
            Quem Somos
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-14 shadow-[0_20px_60px_rgba(30,27,75,0.12)] border border-white/60"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700 leading-relaxed">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="space-y-4"
              >
                <p>
                  A Radius Mining é uma empresa de desenvolvimento especializada na estruturação de projetos de mineração de Bitcoin,
                  com foco na integração de três pilares estratégicos: energia, capital e operações.
                </p>

                <p>
                  Identificamos e desenvolvemos oportunidades em que a disponibilidade de energia, especialmente proveniente de fontes
                  renováveis, possa ser convertida em valor por meio da implantação de data centers modulares de mineração de criptoativos.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="space-y-4"
              >
                <p>
                  Nossa atuação abrange desde a prospecção e negociação de energia até a estruturação financeira e as operações técnicas.
                  Com sede no Brasil, temos o compromisso de aproveitar o potencial energético renovável do país.
                </p>

                <p>
                  Acreditamos que o futuro da mineração de Bitcoin está na capacidade de conectar inteligência energética, engenharia de
                  infraestrutura e estratégia de capital, entregando operações sustentáveis, escaláveis e de alta performance.
                </p>

                <p className="font-semibold text-[#F0672D] pt-2">
                  Radius Mining – soluções em mineração, energizando o futuro.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default GeneseSection