"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const services = [
  {
    icon: "/images/icons/operacoes.png",
    title: "Operação de Mineração Proprietárias",
    description: "Implementação e gestão completa de operações de mineração próprias com infraestrutura dedicada e otimização contínua."
  },
  {
    icon: "/images/icons/bitcoin.png",
    title: "Operação de Mineração Full Stack para Geradores",
    description: "Solução completa end-to-end para geradores de energia, desde a infraestrutura até a operação técnica e financeira."
  },
  {
    icon: "/images/icons/engrenagem.png",
    title: "Prestação de Serviço de O&M",
    description: "Operação e manutenção especializada garantindo máxima eficiência, uptime operacional e performance técnica sustentada."
  },
  {
    icon: "/images/icons/conexao.png",
    title: "Consultoria para Projetos de Mining",
    description: "Modelagem técnico-financeira, engenharia de sistemas e comissionamento completo de projetos de mineração.",
    highlight: "Modelagem, engenharia e comissionamento"
  }
]

const benefits = [
  {
    icon: "/images/icons/grafico-down.png",
    title: "Monetização de ativos em Curtailment",
    description: "Transforme energia que seria desperdiçada em receita através de operações de mineração estratégicas."
  },
  {
    icon: "/images/icons/energia.png",
    title: "Geração de receita com consumo de energia descontratada ou off grid",
    description: "Aproveite excedentes energéticos e capacidade ociosa para criar novos fluxos de receita sustentáveis."
  },
  {
    icon: "/images/icons/grafico-up.png",
    title: "Arbitragem de energia e mineração de acordo com o PLD",
    description: "Otimização inteligente entre consumo energético e mineração baseada nas condições do mercado spot."
  }
]

export function ParaGeradoresSection() {
  return (
    <section
      id="servicos"
      className="py-24 px-4 bg-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.02 }}
          viewport={{ once: true }}
          className="absolute top-40 left-10 w-96 h-96 rounded-full bg-[#1e1b4b]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.025 }}
          viewport={{ once: true }}
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-[#ff6b35]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-normal text-[#1e1b4b] mb-6 font-['Play']">
            Serviços
          </h2>
        </motion.div>

        {/* SERVIÇOS - Grid 2x2 */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-[#ff6b35]/30 hover:shadow-[0_8px_30px_rgba(255,107,53,0.12)] transition-all duration-300 group"
            >
              {/* Ícone */}
              <div
  className="
    w-16 h-16 mb-5
    flex items-center justify-center
    rounded-xl
    border border-[#1e1b4b]
    bg-transparent
    transition-all duration-300
    group-hover:border-[#ff6b35]
  "
>
  <Image
    src={service.icon}
    alt={service.title}
    width={64}
    height={64}
    className="
      w-full h-full object-contain p-2
      transition-all duration-300
      group-hover:scale-110
      group-hover:brightness-0
      group-hover:sepia
      group-hover:saturate-[600%]
      group-hover:hue-rotate-[8deg]
    "
  />
</div>


              {/* Título */}
              <h3 className="text-xl font-normal text-[# ] mb-3 font-['Play'] leading-tight">
                {service.title}
              </h3>

              {/* Descrição */}
              <p className="text-gray-600 leading-relaxed mb-3">
                {service.description}
              </p>

              {/* Highlight opcional */}
              {service.highlight && (
                <p className="text-sm text-[#ff6b35] font-medium">
                  → {service.highlight}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* BENEFÍCIOS - Cards horizontais com ícones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-[#1e1b4b] via-[#2d2a5f] to-[#1e1b4b] rounded-3xl p-10 md:p-12"
        >
          {/* Header da seção de benefícios */}
          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl text-[#dddddd] max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos projetos de mineração de Bitcoin que ajudam geradores 
            a equilibrar suas redes e monetizar excedentes de energia.
          </p><br></br>
            <div className="w-20 h-1 bg-gradient-to-r from-[#ff6b35] to-[#e91e63] rounded-full mx-auto" />
          </div>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"

              >
                {/* Ícone */}
                <div className="relative w-14 h-14 flex-shrink-0 md:self-start">
                  <div className="absolute inset-0 bg-[#ff6b35]/20 rounded-xl group-hover:scale-110 transition-transform duration-300" />
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={56}
                    height={56}
                    className="relative z-10 w-full h-full object-contain p-2 brightness-0 invert"
                  />
                </div>

                {/* Conteúdo */}
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-lg md:text-xl font-medium text-white mb-2 leading-tight">
                    {benefit.title}
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Bullet decorativo */}
                <div className="hidden md:block w-2 h-2 rounded-full bg-[#ff6b35] mt-2 flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA / Chamada final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
  </motion.div>
      </div>
    </section>
  )
}

export default ParaGeradoresSection