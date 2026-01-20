"use client"

import { motion } from "framer-motion"

const team = [
  {
    name: "Flávio G. M. Hernandez",
    role: "Engenharia & Arquitetura Operacional",
    description: "Especialista em infraestrutura de datacenters e integração energética.",
  },
  {
    name: "Cleoberto Wagner",
    role: "Energia & Estratégia Setorial",
    description: "Profundo conhecimento em geração e mercado de energia, com foco em contratos e viabilidade.",
  },
  {
    name: "Leonardo Mideia",
    role: "Capital & Estruturação Financeira",
    description: "Estrutura modelos econômicos e estratégicos que sustentam projetos robustos.",
  },
  {
    name: "Rodrigo Moreira",
    role: "Operações & Performance Técnica",
    description: "Especialista em O&M, garantindo eficiência, estabilidade térmica e continuidade operacional.",
  },
]

export function MentesSection() {
  return (
    <section id="mentes" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1e1b4b] font-['Play']">
            Mentes por Trás da Engenharia
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Pessoas que transformam energia em infraestrutura, e infraestrutura em operações rentáveis e escaláveis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="overflow-hidden rounded-3xl shadow-md mb-6">
                <div className="w-full h-64 bg-gradient-to-br from-[#1e1b4b] to-[#8b1fa9] transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h4 className="text-xl font-semibold text-[#1e1b4b] font-['Play']">{member.name}</h4>
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>
              <p className="text-gray-700 text-sm leading-relaxed px-3">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
