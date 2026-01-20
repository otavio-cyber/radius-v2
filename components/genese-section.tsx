"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"

const pillars = [
  {
    title: "Missão",
    description:
      "Transformar energia disponível em valor sustentável por meio de engenharia, tecnologia e operações eficientes em mineração de Bitcoin.",
  },
  {
    title: "Visão",
    description:
      "Ser referência em projetos de mineração integrados à energia limpa, entregando operações escaláveis e de alta performance.",
  },
  {
    title: "Valores",
    description:
      "Eficiência energética, precisão técnica, transparência e compromisso com inovação sustentável.",
  },
]

interface GeneseSectionProps {
  onNavigate: (direction: "up") => void
}

export function GeneseSection({ onNavigate }: GeneseSectionProps) {
  const [touchStart, setTouchStart] = useState<{ y: number } | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({ y: e.touches[0].clientY })
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return

    const deltaY = e.changedTouches[0].clientY - touchStart.y
    const threshold = 50

    if (deltaY > threshold) onNavigate("up")

    setTouchStart(null)
  }

  return (
    <section
      id="genese"
      className="w-full pt-16 pb-28 relative"
      style={{ backgroundColor: "#DBDBE0" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* CONTROLADOR UP */}
        <div className="flex justify-center mb-6 pt-6">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => onNavigate("up")}
            className="w-14 h-14 rounded-full bg-[#8b1fa9]/20 backdrop-blur-md border border-[#8b1fa9]/40 flex items-center justify-center text-[#8b1fa9] hover:bg-[#8b1fa9]/30 transition-all hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </motion.button>
        </div>

        {/* QUEM SOMOS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1e1b4b] font-['Play'] text-center mb-12">
            Quem Somos
          </h2>

          <div className="bg-white/70 backdrop-blur rounded-3xl p-8 md:p-14 shadow-[0_12px_45px_rgba(0,0,0,0.08)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  A Radius Mining é uma empresa de desenvolvimento especializada na estruturação de projetos de mineração de Bitcoin,
                  com foco na integração de três pilares estratégicos: energia, capital e operações.
                </p>

                <p>
                  Identificamos e desenvolvemos oportunidades em que a disponibilidade de energia, especialmente proveniente de fontes
                  renováveis, possa ser convertida em valor por meio da implantação de data centers modulares de mineração de criptoativos.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  Nossa atuação abrange desde a prospecção e negociação de energia até a estruturação financeira e as operações técnicas.
                  Com sede no Brasil, temos o compromisso de aproveitar o potencial energético renovável do país.
                </p>

                <p>
                  Acreditamos que o futuro da mineração de Bitcoin está na capacidade de conectar inteligência energética, engenharia de
                  infraestrutura e estratégia de capital, entregando operações sustentáveis, escaláveis e de alta performance.
                </p>

                <p className="font-semibold text-[#1e1b4b] pt-2">
                  Radius Mining – soluções em mineração, energizando o futuro.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* HEADER GÊNESE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1e1b4b] font-['Play']">
            Gênese Radius Mining
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mt-4">
            A estrutura intelectual e operacional que fundamenta nossa atuação — energia, engenharia e capital em
            sinergia contínua.
          </p>
        </motion.div>

        {/* PILARES */}
        <div className="grid md:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-10 bg-white rounded-3xl shadow-[0_10px_35px_rgba(0,0,0,0.08)] border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-3 text-[#8b1fa9] font-['Play']">
                {pillar.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
