"use client"

import { motion } from "framer-motion"

export function TransformamosSection({ showInVertical = false }: { showInVertical?: boolean }) {
  const content = (
    <section
      id="transformamos"
      className={`py-16 px-4 bg-gray-50 ${!showInVertical ? "h-screen flex items-center" : ""}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={showInVertical ? { opacity: 0, y: 20 } : false}
          whileInView={showInVertical ? { opacity: 1, y: 0 } : {}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#8b1fa9] mb-4 font-['Play']"
        >
          Transformamos energia em valor.
        </motion.h2>
        <p className="text-xl text-gray-700 mb-8">Do potencial desperdiçado à geração de capital.</p>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            A Radius Mining é uma empresa de desenvolvimento especializada na estruturação de projetos de mineração de
            Bitcoin, com foco na integração de três pilares estratégicos: energia, capital e operações.
          </p>

          <p>
            Identificamos e desenvolvemos oportunidades em que a disponibilidade de energia, especialmente proveniente
            de fontes renováveis, possa ser convertida em valor por meio da implantação de data centers modulares de
            mineração de criptoativos.
          </p>

          <p>
            Nossa atuação abrange desde a prospecção e negociação de energia até a estruturação financeira e as
            operações técnicas.
          </p>

          <p>
            Com sede no Brasil, temos o compromisso de aproveitar o potencial energético renovável do país para
            construir operações de mineração sustentáveis, escaláveis e de alta performance.
          </p>

          <p>
            Acreditamos que o futuro da mineração de Bitcoin está na capacidade de conectar inteligência energética,
            engenharia de infraestrutura e estratégia de capital.
          </p>

          <p>Nossa missão é entregar projetos robustos, alinhando energia limpa a operações altamente eficientes.</p>

          <p className="font-bold text-[#8b1fa9]">Radius Mining – soluções em mineração, energizando o futuro.</p>
        </div>
      </div>
    </section>
  )

  return showInVertical ? (
    content
  ) : (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      {content}
    </motion.div>
  )
}
