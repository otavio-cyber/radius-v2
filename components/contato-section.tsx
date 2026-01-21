"use client"

import { motion } from "framer-motion"

export function ContatoSection() {
  return (
    <section id="contato" className="py-24 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#8b1fa9] mb-4 font-['Play']"
        >
Minerar com propósito é transformar energia em futuro.        </motion.h2>
        <p className="text-gray-700 mb-8">
          Seja para discutir um novo projeto, explorar sinergias ou entender melhor como a mineração pode gerar
          eficiência energética, nosso time está pronto para conversar.
        </p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <input
              type="text"
              placeholder="Nome completo"
              required
              className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#8b1fa9]"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="E-mail"
              required
              className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#8b1fa9]"
            />
          </div>
          <div>
            <textarea
              rows={6}
              placeholder="Sua mensagem aqui"
              required
              className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#8b1fa9]"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-[#8b1fa9] to-[#e91e63] text-white px-8 py-4 rounded-lg font-semibold hover:-translate-y-1 transition-transform duration-200"
          >
            Enviar mensagem
          </button>
        </motion.form>

        <div className="mt-8 text-center text-gray-600">
          <p>@radiusmining | linkedin.com/in/radius-mining | contato@radius.com</p>
        </div>
      </div>
    </section>
  )
}
