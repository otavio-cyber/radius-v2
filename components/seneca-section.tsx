"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function SenecaSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Parallax muito sutil - movimento de 30px
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30])
  const quoteY = useTransform(scrollYProgress, [0, 1], [20, -20])

  return (
    <section
      ref={sectionRef}
      className="w-full relative overflow-hidden bg-gradient-to-br from-[#1e1b4b] via-[#2d2a5f] to-[#1e1b4b] flex items-center h-[85vh] min-h-[600px] lg:h-[66vh] lg:min-h-[500px]"

    >
      {/* Container principal full width */}
      <div className="w-full grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 h-full">


        {/* COLUNA ESQUERDA - IMAGEM */}
        <motion.div
          style={{ y: imageY }}
          className="relative h-full"
        >
          {/* Imagem com overlay sutil */}
          <div className="absolute inset-0">
            <Image
              src="/images/seneca.webp"
              alt="Busto de Sêneca"
              fill
              className="object-cover object-[50%_15%] lg:object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />

            {/* Gradient overlay para integração */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1e1b4b]/30 via-transparent to-[#1e1b4b]/60" />

            {/* Decorative element - linha vertical laranja */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff6b35] via-[#e91e63] to-transparent origin-top"
            />
          </div>
        </motion.div>

        {/* COLUNA DIREITA - CITAÇÃO */}
        <motion.div
          style={{ y: quoteY }}
          className="relative flex items-center px-8 py-16 lg:px-16 lg:py-24"
        >
          <div className="max-w-2xl">

            {/* Linha decorativa superior */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-[#ff6b35] to-[#e91e63] rounded-full mb-8"
            />

            {/* Citação */}
            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl lg:text-3xl xl:text-4xl font-normal text-white mb-8 leading-tight font-['Play']"
            >
              Não é porque as coisas são difíceis que não ousamos; é porque não ousamos que elas são difíceis.
            </motion.blockquote>

            {/* Autor */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-0.5 bg-white/30" />
              <p className="text-lg lg:text-xl text-white/70 font-light">
                Sêneca
              </p>
            </motion.div>


          </div>
        </motion.div>
      </div>

      {/* Background decorative element */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.03, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#8b1fa9]"
        />
      </div>
    </section>
  )
}

export default SenecaSection