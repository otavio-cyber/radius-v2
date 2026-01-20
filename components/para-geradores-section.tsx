"use client"

import { motion } from "framer-motion"

export function ParaGeradoresSection() {
  return (
    <section id="servicos" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#8b1fa9] mb-12 font-['Play']"
        >
          Para geradores de energia
        </motion.h2>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#1e1b4b] mb-4 font-['Play']">
              Operação de Mineração Proprietárias
            </h3>
            <p className="text-gray-700 mb-4">
              Desenvolvemos projetos de mineração de Bitcoin que ajudam geradores a equilibrar suas redes e monetizar
              excedentes de energia.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Monetização de ativos em Constrained-off, Curtailment e Energia Vertida Turbinável (EVT)</li>
              <li>• Geração de receita com consumo de energia descontratada ou off grid.</li>
              <li>• Arbitragem energia e mineração de acordo com o PLD.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-[#ff6b35] mb-4 font-['Play']">
              Para geradores a partir de biomassa
            </h3>
            <p className="text-gray-700 mb-4">Ela analisa e eventualmente:</p>
            <ul className="space-y-2 text-gray-700">
              <li>
                • Projetos retrofitam de geradores/integram energias negativas de biomassa através de rota e metano
                emitiam pela biomassa.
              </li>
              <li>• Projetos novos geradores a partir de metano canalizado e balanceiam fora de época.</li>
              <li>
                • Projetar capacidade de captureção térmica em rota secundária e metano tratado de mineração Bitcoin.
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-[#ff6b35] mb-4 font-['Play']">Para geradores a partir de gás</h3>
            <p className="text-gray-700 mb-4">Usamos sinergias tecnológicas ao usar peakers:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Utilizamos energy avançado por gás para suportar peaker de metano queimar flexível.</li>
              <li>
                • Operamos com suportar sinérgico em modo sinérgico ao apoiar peaker de Bitcoin para conectara peaker
                off ou área com gás.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
