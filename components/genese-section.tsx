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
      className="w-full pt-24 pb-28 relative overflow-hidden bg-[#dddddd]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* QUEM SOMOS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Title with gradient lines */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1.5 bg-gradient-to-r from-[#8b1fa9] via-[#e91e63] to-[#ff6b35] rounded-full mx-auto mb-6"
            />
            
            <h2 className="text-4xl md:text-6xl font-normal tracking-tight text-[#1e1b4b] mb-6">
              Quem Somos
            </h2>
            
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-[#ff6b35] to-[#e91e63] rounded-full mx-auto"
            />
          </div>

          {/* Single Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#1e1b4b] backdrop-blur-sm rounded-3xl p-10 md:p-14 border border-[#8b1fa9]/30"
          >
            <div className="space-y-7 text-white leading-relaxed text-lg">
  <p>
    A Radius Mining é uma empresa de desenvolvimento especializada na estruturação de projetos de mineração de Bitcoin, 
    com foco na integração de três pilares estratégicos: <strong>energia</strong>, <strong>capital</strong> e <strong>operações</strong>.
  </p>

  <p>
    Identificamos e desenvolvemos oportunidades em que a disponibilidade de energia, especialmente proveniente de 
    <strong>fontes renováveis</strong>, possa ser convertida em valor por meio da implantação de 
    data centers modulares de mineração de cripto ativos. Nossa atuação abrange desde a <strong>prospecção e negociação de energia</strong> 
    até a <strong>estruturação financeira</strong> e as <strong>operações técnicas</strong>.
  </p>

  <p>
    Com sede no Brasil, temos o compromisso de aproveitar o <strong>potencial energético renovável do país</strong> para 
    construir operações de mineração <strong>sustentáveis</strong>, <strong>escaláveis</strong> e de <strong>alta performance</strong>.
  </p>

  <p>
    Acreditamos que o futuro da mineração de Bitcoin está na capacidade de conectar 
    <strong>inteligência energética</strong>, 
    <strong>engenharia de infraestrutura</strong> e 
    <strong>estratégia de capital</strong>. 
    Nossa missão é entregar <strong>projetos robustos</strong>, alinhando energia limpa a operações altamente eficientes.
  </p>
</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default GeneseSection