"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface HeroSectionProps {
  onNavigate: () => void
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const [animationComplete, setAnimationComplete] = useState(false)
  const [touchStartY, setTouchStartY] = useState<number | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY === null) return

    const deltaY = e.changedTouches[0].clientY - touchStartY
    const threshold = 50

    if (deltaY < -threshold) {
      onNavigate()
    }

    setTouchStartY(null)
  }

  return (
    <section
      id="home"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/images/banner-hero.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 z-0" />

      {/* Background animation */}
      <BitcoinAnimation isComplete={animationComplete} />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="relative z-30 max-w-5xl mx-auto px-6 text-center"
      >
        <h1 className="text-4xl md:text-7xl font-normal text-white leading-20 drop-shadow-xl">
          Minerando Soluções,
          <br />
          Energizando o Futuro.
        </h1>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        onClick={onNavigate}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110 z-20"
        aria-label="Scroll para baixo"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 9l-6 6-6-6" />
        </svg>
      </motion.button>
    </section>
  )
}

function BitcoinAnimation({ isComplete }: { isComplete: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg width="600" height="600" viewBox="0 0 300 300" className="opacity-40">
        <motion.circle
          cx="150"
          cy="150"
          r="40"
          fill="none"
          stroke="#8b1fa9"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2
          const radius = 100
          const x = 150 + Math.cos(angle) * radius
          const y = 150 + Math.sin(angle) * radius

          return (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r="6"
              fill="#e91e63"
              animate={{
                scale: [0.6, 1, 0.6],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )
        })}

        <motion.text
          x="150"
          y="165"
          fontSize="60"
          fill="#fff"
          textAnchor="middle"
          fontFamily="Play, sans-serif"
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0.15] }}
          transition={{ duration: 2 }}
        >
          ₿
        </motion.text>
      </svg>
    </div>
  )
}
