"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const pillars = [
  {
    icon: "/images/icons/energia.png", // Raio/Lightning
    title: "Energia",
    subtitle: "Inteligência Energética",
    description: "Identificamos oportunidades em que energia disponível, especialmente de fontes renováveis, pode ser convertida em valor sustentável.",
    highlights: [
      "Prospecção e negociação estratégica",
      "Foco em energia limpa e renovável",
      "Aproveitamento de capacidade ociosa"
    ]
  },
  {
    icon: "/images/icons/capital.png", // Gráfico crescente
    title: "Capital",
    subtitle: "Estruturação Financeira",
    description: "Desenvolvemos modelos econômicos robustos que sustentam projetos escaláveis e de alta performance no setor de mineração.",
    highlights: [
      "Modelagem financeira especializada",
      "Estratégia de investimento técnica",
      "Otimização de retorno sobre capital"
    ]
  },
  {
    icon: "/images/icons/operacoes.png", // Engrenagem
    title: "Operações",
    subtitle: "Excelência Operacional",
    description: "Entregamos infraestrutura de datacenter com engenharia de precisão, garantindo eficiência térmica, uptime e performance contínua.",
    highlights: [
      "Arquitetura operacional avançada",
      "Gestão técnica de O&M",
      "Monitoramento e otimização constante"
    ]
  }
]

const metrics = [
  {
    icon: "/images/icons/brasil.png",
    label: "Foco Brasil",
    value: "Potencial renovável do país"
  },
  {
    icon: "/images/icons/bitcoin.png",
    label: "Bitcoin Mining",
    value: "Data centers modulares"
  },
  {
    icon: "/images/icons/conexao.png",
    label: "Integração",
    value: "Energia + Capital + Ops"
  }
]

export function TransformamosSection({ showInVertical = false }: { showInVertical?: boolean }) {
  return (
    <section
      id="transformamos"
      className="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          viewport={{ once: true }}
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#ff6b35]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.02 }}
          viewport={{ once: true }}
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#8b1fa9]"
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
          <h2 className="text-4xl md:text-5xl font-normal text-[#1e1b4b] mb-4 font-['Play']">
            Transformamos Energia em Valor
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Do potencial desperdiçado à geração de capital sustentável
          </p>
        </motion.div>

        {/* TRÊS PILARES */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300 group"
            >
              {/* Ícone */}
              <div className="relative w-20 h-20 mb-6 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/10 to-[#e91e63]/10 rounded-2xl group-hover:scale-110 transition-transform duration-300" />
                <Image
                  src={pillar.icon}
                  alt={pillar.title}
                  width={80}
                  height={80}
                  className="relative z-10 w-full h-full object-contain p-3"
                />
              </div>

              {/* Título */}
              <h3 className="text-2xl font-normal text-[#ff6b35] mb-2 text-center font-['Play']">
                {pillar.title}
              </h3>
              
              {/* Subtítulo */}
              <p className="text-sm font-semibold text-[#1e1b4b] mb-4 text-center uppercase tracking-wide">
                {pillar.subtitle}
              </p>

              {/* Linha decorativa */}
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent mx-auto mb-6" />

              {/* Descrição */}
              <p className="text-gray-600 leading-relaxed mb-6 text-center">
                {pillar.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-3">
                {pillar.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b35] mt-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700 leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* MÉTRICAS / DESTAQUES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-[#1e1b4b] to-[#2d2a5f] rounded-3xl p-10 md:p-14"
        >
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Ícone */}
                <div className="relative w-16 h-16 mb-4">
                  <div className="absolute inset-0 bg-white/10 rounded-xl group-hover:scale-110 transition-transform duration-300" />
                  <Image
                    src={metric.icon}
                    alt={metric.label}
                    width={64}
                    height={64}
                    className="relative z-10 w-full h-full object-contain p-2 brightness-0 invert"
                  />
                </div>

                {/* Label */}
                <p className="text-sm font-semibold text-[#ff6b35] mb-2 uppercase tracking-wide">
                  {metric.label}
                </p>

                {/* Value */}
                <p className="text-white/90 leading-relaxed">
                  {metric.value}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-xl md:text-2xl text-white font-normal font-['Play']">
              Radius Mining
            </p>
            <p className="text-white/70 mt-2">
              Soluções em mineração, energizando o futuro
            </p>
          </motion.div>
        </motion.div>

        {/* TEXTO COMPLEMENTAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto text-center"
        >
          <p className="text-lg text-gray-600 leading-relaxed">
            Acreditamos que o futuro da mineração de Bitcoin está na capacidade de conectar 
            inteligência energética, engenharia de infraestrutura e estratégia de capital, 
            entregando operações sustentáveis, escaláveis e de alta performance.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default TransformamosSection