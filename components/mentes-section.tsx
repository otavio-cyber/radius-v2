"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const team = [
  {
    name: "Flávio G. M. Hernandez",
    role: "Engenharia & Arquitetura Operacional",
    description:
      "Especialista em infraestrutura de datacenters e integração energética.",
    image: "/images/flavio.jpg",
  },
  {
    name: "Cleoberto Wagner",
    role: "Energia & Estratégia Setorial",
    description:
      "Profundo conhecimento em geração e mercado de energia, com foco em contratos e viabilidade.",
    image: "/images/cleoberto.jpg",
  },
  {
    name: "Leonardo Mideia",
    role: "Capital & Estruturação Financeira",
    description:
      "Estrutura modelos econômicos e estratégicos que sustentam projetos robustos.",
    image: "/images/leonardo.jpg",
  },
  {
    name: "Rodrigo Moreira",
    role: "Operações & Performance Técnica",
    description:
      "Especialista em O&M, garantindo eficiência, estabilidade térmica e continuidade operacional.",
    image: "/images/rodrigo.jpg",
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

        {/* CONTAINER PRINCIPAL COM NAVEGAÇÃO */}
        <div className="relative max-w-5xl mx-auto">
          {/* Card Container com background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100"
          >
            <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-start">
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
                    {/* Nome com underline */}
                    <div>
                      <h3 className="text-3xl md:text-4xl font-normal text-[#ff6b35] font-['Play'] mb-1">
                        {active.name}
                      </h3>
                      <div className="w-full h-0.5 bg-[#ff6b35] rounded-full mb-6" />
                    </div>

                    {/* Qualificação */}
                    <p className="text-lg md:text-xl text-[#1e1b4b] font-medium">
                      {active.role}
                    </p>

                    {/* Descrição */}
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                      {active.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* COLUNA DIREITA - CARD DO SÓCIO */}
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full max-w-[280px] lg:w-[280px]"
                  >
                    {/* Card com imagem */}
                    <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-[#ff6b35]">
                      {/* Portrait Image */}
                      <div className="aspect-[3/4] bg-gradient-to-br from-[#8b1fa9] via-[#6b21a8] to-[#581c87] relative overflow-hidden">
                        <Image
                          src={active.image}
                          alt={active.name}
                          fill
                          className="object-cover"
                          sizes="280px"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                        {/* Name Badge at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 bg-[#ff6b35] text-white p-4 text-center">
                          <h4 className="text-lg font-normal font-['Play']">
                            {active.name}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Indicadores de progresso - dentro do card */}
            <div className="flex gap-2 mt-8 justify-center lg:justify-start">
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

          {/* NAVIGATION CONTROLS - FORA DO CARD */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4 lg:-mx-20">
            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrevious}
              className="pointer-events-auto w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border-2 border-[#ff6b35] text-[#ff6b35] 
                         shadow-lg hover:bg-[#ff6b35] hover:text-white transition-all duration-300 
                         flex items-center justify-center group"
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
                         flex items-center justify-center group"
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