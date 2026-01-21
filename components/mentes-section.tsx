"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const team = [
  {
    name: "Flávio G. M. Hernandez",
    role: "Engenharia & Arquitetura Operacional",
    description:
      "Especialista em infraestrutura de datacenters e integração energética.",
    image: "/placeholder-portrait-1.jpg",
  },
  {
    name: "Cleoberto Wagner",
    role: "Energia & Estratégia Setorial",
    description:
      "Profundo conhecimento em geração e mercado de energia, com foco em contratos e viabilidade.",
    image: "/placeholder-portrait-2.jpg",
  },
  {
    name: "Leonardo Mideia",
    role: "Capital & Estruturação Financeira",
    description:
      "Estrutura modelos econômicos e estratégicos que sustentam projetos robustos.",
    image: "/placeholder-portrait-3.jpg",
  },
  {
    name: "Rodrigo Moreira",
    role: "Operações & Performance Técnica",
    description:
      "Especialista em O&M, garantindo eficiência, estabilidade térmica e continuidade operacional.",
    image: "/placeholder-portrait-4.jpg",
  },
]

export function MentesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = team[activeIndex]

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? team.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === team.length - 1 ? 0 : prev + 1))
  }

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
            Mentes por Trás da Engenharia
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Transformamos energia em infraestrutura e infraestrutura em operações
            rentáveis e escaláveis.
          </p>
        </motion.div>

        {/* LAYOUT PRINCIPAL COM NAVEGAÇÃO */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* COLUNA ESQUERDA - INFORMAÇÕES */}
            <div className="order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {/* Nome */}
                  <div>
                    <h3 className="text-4xl md:text-5xl font-normal text-[#ff6b35] font-['Play'] mb-2">
                      {active.name}
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#ff6b35] to-[#e91e63] rounded-full" />
                  </div>

                  {/* Qualificação */}
                  <p className="text-xl md:text-2xl text-[#1e1b4b] font-medium">
                    {active.role}
                  </p>

                  {/* Descrição */}
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {active.description}
                  </p>

                  {/* Indicadores de progresso */}
                  <div className="flex gap-2 pt-4">
                    {team.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-1 rounded-full transition-all duration-300
                          ${index === activeIndex 
                            ? "bg-[#ff6b35] w-12" 
                            : "bg-gray-300 w-8 hover:bg-gray-400"}`}
                        aria-label={`Ver ${team[index].name}`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* COLUNA DIREITA - CARD DO SÓCIO */}
            <div className="order-1 lg:order-2 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#ff6b35] lg:max-w-md mx-auto"
                >
                  {/* Portrait Image */}
                  <div className="aspect-[3/4] lg:aspect-[4/5] bg-gradient-to-br from-[#8b1fa9] via-[#6b21a8] to-[#581c87] relative overflow-hidden">
                    {/* Placeholder - replace with actual <Image> component */}
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <div className="text-center">
                        <div className="text-8xl mb-4">👤</div>
                        <div className="text-sm font-medium">{active.name.split(' ')[0]}</div>
                      </div>
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Name Badge at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 bg-[#ff6b35] text-white p-6">
                      <h4 className="text-2xl font-normal font-['Play']">
                        {active.name}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* NAVIGATION CONTROLS */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none lg:px-0 px-4">
            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrevious}
              className="pointer-events-auto w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border-2 border-[#ff6b35] text-[#ff6b35] 
                         shadow-lg hover:bg-[#ff6b35] hover:text-white transition-all duration-300 
                         flex items-center justify-center group lg:-translate-x-20"
              aria-label="Sócio anterior"
            >
              <ChevronLeft className="w-6 h-6 lg:w-7 lg:h-7" />
            </motion.button>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="pointer-events-auto w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border-2 border-[#ff6b35] text-[#ff6b35] 
                         shadow-lg hover:bg-[#ff6b35] hover:text-white transition-all duration-300 
                         flex items-center justify-center group lg:translate-x-20"
              aria-label="Próximo sócio"
            >
              <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MentesSection