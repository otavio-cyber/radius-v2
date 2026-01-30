"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

const team = [
  {
    name: "Flávio G. M. Hernandez",
    role: "Founding Partner & CEO",
    description:
      "Atuação de destaque no setor de mining ao invés de experiencia no setor de mining.",
    image: "/images/flavio.webp",
  },
  {
    name: "Cleoberto Wagner",
    role: "Diretor de O&M",
    description:
      "Especialista em operação e manutenção de ativos de energia, com forte atuação em gestão de contratos, eficiência operacional e maximização de performance.",
    image: "/images/cleoberto.webp",
  },
  {
    name: "Leonardo Mideia",
    role: "Partner & Chairman",
    description:
      "Ampla experiência no mercado de comercialização de energia, com atuação na orientação estratégica da companhia e na geração de valor de longo prazo para acionistas e parceiros.",
    image: "/images/leonardo.webp",
  },
  {
    name: "Rodrigo Moreira",
    role: "Partner & Board Member",
    description:
      "Trajetória consolidada na comercialização de energia, com destaque para aplicação de modelos estatísticos e abordagem analítica no suporte a decisões estratégicas.",
    image: "/images/rodrigo.webp",
  },
]

export function MentesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = team[activeIndex]

  return (
    <section id="mentes" className="w-full py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          viewport={{ once: true }}
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#ff6b35]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.02 }}
          viewport={{ once: true }}
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#1e1b4b]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h3 className="text-4xl md:text-5xl font-normal tracking-tight text-[#1e1b4b] font-['Play']">
            Equipe e Operação
          </h3>
        </motion.div>

        {/* GRID DE 4 FOTOS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-5xl mx-auto">
          {team.map((member, index) => {
            const isActive = index === activeIndex

            return (
              <motion.button
                key={member.name}
                onClick={() => setActiveIndex(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group cursor-pointer transition-all duration-300 rounded-2xl overflow-hidden
                  ${isActive 
                    ? "ring-4 ring-[#ff6b35] shadow-2xl scale-105" 
                    : "ring-2 ring-gray-200 hover:ring-gray-300 opacity-60 hover:opacity-80"
                  }`}
              >
                {/* Portrait Image */}
                <div className="aspect-[3/4] bg-gradient-to-br from-[#8b1fa9] via-[#6b21a8] to-[#581c87] relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Active Overlay */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-[#ff6b35]/20 to-transparent"
                    />
                  )}
                </div>

                {/* Name Badge */}
                <div className={`absolute bottom-0 left-0 right-0 p-3 md:p-4 text-center transition-all duration-300
                  ${isActive 
                    ? "bg-[#ff6b35] text-white" 
                    : "bg-white/95 text-gray-700"}`}
                >
                  <h4 className="text-sm md:text-base font-normal font-['Play'] leading-tight">
                    {member.name.split(' ')[0]} {member.name.split(' ')[member.name.split(' ').length - 1]}
                  </h4>
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* INFORMAÇÕES DO SÓCIO ATIVO */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 text-center"
            >
              {/* Nome completo */}
              <h3 className="text-3xl md:text-4xl font-normal text-[#ff6b35] font-['Play'] mb-2">
                {active.name}
              </h3>

              {/* Underline */}
              <div className="w-24 h-1 bg-gradient-to-r from-[#ff6b35] to-[#e91e63] rounded-full mx-auto mb-6" />

              {/* Qualificação */}
              <p className="text-xl md:text-2xl text-[#1e1b4b] font-medium mb-6">
                {active.role}
              </p>

              {/* Descrição */}
              <p className="text-gray-600 leading-relaxed text-lg">
                {active.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default MentesSection