"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface GlobalMenuProps {
  onNavigate: (section: string) => void
}

export function GlobalMenu({ onNavigate }: GlobalMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: "HOME", id: "home" },
    { label: "QUEM SOMOS", id: "genese" },
    { label: "TIME RADIUS", id: "mentes" },
    { label: "SERVIÇOS", id: "servicos" },
    { label: "CONTATO", id: "contato" },
  ]

  const handleNavigate = (id: string) => {
    onNavigate(id)
    setIsOpen(false)
  }

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/85 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/images/logo-radius.png"
                alt="RADIUS MINING"
                className="h-[54px]"
                style={{ transform: "scale(1.12)" }}
              />
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className="text-[#1e1b4b] hover:text-[#8b1fa9] transition-colors font-['Play']"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden text-[#1e1b4b] px-4 py-2 border-2 border-[#1e1b4b] rounded font-['Play']"
            >
              MENU
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-[998]"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 w-80 max-w-[80%] h-screen bg-[#1e1b4b] z-[999] p-8"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-2xl mb-10"
              >
                ✕
              </button>

              <nav className="flex flex-col gap-6">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className="text-white text-lg hover:text-purple-400 transition-colors text-left font-['Play']"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
