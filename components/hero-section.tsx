"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface HeroSectionProps {
  onNavigate: (direction: "left" | "right" | "down") => void
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const [animationComplete, setAnimationComplete] = useState(false)
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY })
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return

    const deltaX = e.changedTouches[0].clientX - touchStart.x
    const deltaY = e.changedTouches[0].clientY - touchStart.y
    const threshold = 50

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > threshold) onNavigate("left")
      else if (deltaX < -threshold) onNavigate("right")
    } else {
      if (deltaY < -threshold) onNavigate("down")
    }

    setTouchStart(null)
  }

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/images/banner-hero.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Bitcoin symbol animation */}
      <BitcoinAnimation isComplete={animationComplete} />

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-10 max-w-7xl mx-auto px-4 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-xl font-['Play']">
          MINERANDO SOLUÇÕES,
          <br />
          ENERGIZANDO O FUTURO.
        </h1>
      </motion.div>

      {/* Navigation arrows */}
      <NavigationArrows onNavigate={onNavigate} />
    </section>
  )
}

function BitcoinAnimation({ isComplete }: { isComplete: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg width="300" height="300" viewBox="0 0 300 300" className="opacity-20">
        {/* Center circle */}
        <motion.circle
          cx="150"
          cy="150"
          r="40"
          fill="none"
          stroke="#8b1fa9"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Orbiting particles */}
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
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 1],
                opacity: [0, 1, 0.7],
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                repeatDelay: 1,
              }}
            />
          )
        })}

        {/* Energy lines */}
        {[...Array(12)].map((_, i) => {
          const angle = (i / 12) * Math.PI * 2
          const x1 = 150 + Math.cos(angle) * 50
          const y1 = 150 + Math.sin(angle) * 50
          const x2 = 150 + Math.cos(angle) * 120
          const y2 = 150 + Math.sin(angle) * 120

          return (
            <motion.line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#8b1fa9"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          )
        })}

        {/* Bitcoin B symbol */}
        <motion.text
          x="150"
          y="165"
          fontSize="60"
          fill="#fff"
          textAnchor="middle"
          fontFamily="Play, sans-serif"
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0.1] }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          ₿
        </motion.text>
      </svg>
    </div>
  )
}

function NavigationArrows({ onNavigate }: { onNavigate: (direction: "left" | "right" | "down") => void }) {
  return (
    <>
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        onClick={() => onNavigate("left")}
        className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110 z-20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </motion.button>

      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        onClick={() => onNavigate("right")}
        className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110 z-20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </motion.button>

      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        onClick={() => onNavigate("down")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110 z-20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 9l-6 6-6-6" />
        </svg>
      </motion.button>
    </>
  )
}
