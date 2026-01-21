"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface HeroSectionProps {
  onNavigate: () => void
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const [touchStartY, setTouchStartY] = useState<number | null>(null)

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

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="relative z-30 max-w-5xl mx-auto px-6 text-center"
      >
        <h1 className="text-4xl md:text-7xl font-normal text-white leading-tight drop-shadow-xl">
          Minerando Soluções,
          <br />
          Energizando o Futuro.
        </h1>
      </motion.div>

      {/* Scroll controller */}
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
