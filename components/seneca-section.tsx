"use client"

import { motion } from "framer-motion"

export function SenecaSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div
            className="min-h-[300px] rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/seneca.png')`,
            }}
          />

          <div>
            <blockquote className="text-2xl md:text-3xl font-medium text-[#1e1b4b] mb-4 leading-relaxed">
              "Não é porque as coisas são difíceis que não ousamos; é porque não ousamos que elas são difíceis."
            </blockquote>
            <p className="text-gray-600">— Sêneca</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
