"use client"

import { motion } from "framer-motion"

export function MinerarProposito() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] mb-6 font-['Play']">
          Minerar com propósito é transformar energia em futuro.
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          Entre em contato e descubra como a Radius pode potencializar seus ativos energéticos.
        </p>
      </motion.div>
    </section>
  )
}
