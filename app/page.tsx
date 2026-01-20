"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

import { HeroSection } from "@/components/hero-section"
import { StackEstrategica } from "@/components/stack-estrategica"
import { GeneseSection } from "@/components/genese-section"
import { MentesSection } from "@/components/mentes-section"
import { SenecaSection } from "@/components/seneca-section"
import { ParaGeradoresSection } from "@/components/para-geradores-section"
import { MinerarProposito } from "@/components/minerar-proposito"
import { NumerosSection } from "@/components/numeros-section"
import { ContatoSection } from "@/components/contato-section"
import { Footer } from "@/components/footer"
import { GlobalMenu } from "@/components/global-menu"

type NavigationState = "hero" | "stack" | "numeros" | "vertical"

export default function Home() {
  const [navState, setNavState] = useState<NavigationState>("hero")
  const [verticalUnlocked, setVerticalUnlocked] = useState(false)

  /* =========================
     KEYBOARD NAVIGATION
  ========================== */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (verticalUnlocked) return

      if (e.key === "ArrowLeft") {
        if (navState === "stack" || navState === "numeros") {
          setNavState("hero")
        }
      }

      if (e.key === "ArrowRight") {
        if (navState === "hero") setNavState("stack")
        else if (navState === "stack") setNavState("numeros")
      }

      if (e.key === "ArrowDown") {
        if (navState !== "vertical") setNavState("vertical")
      }

      if (e.key === "ArrowUp" && navState === "vertical") {
        setNavState("hero")
        setVerticalUnlocked(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [navState, verticalUnlocked])

  useEffect(() => {
    if (navState === "vertical") {
      setVerticalUnlocked(true)
    }
  }, [navState])

  /* =========================
     HERO NAVIGATION
  ========================== */
  const handleNavigate = (direction: "left" | "right" | "down" | "up") => {
    if (direction === "down") {
      setNavState("vertical")
      return
    }

    if (direction === "up" && navState === "vertical") {
      setNavState("hero")
      setVerticalUnlocked(false)
      return
    }

    if (navState === "hero") {
      if (direction === "left") setNavState("stack")
      if (direction === "right") setNavState("numeros")
    }

    if (navState === "stack" || navState === "numeros") {
      if (direction === "left" || direction === "right") {
        setNavState("hero")
      }
    }
  }

  /* =========================
     MENU NAVIGATION
  ========================== */
  const navigateToSection = (section: string) => {
    if (section === "home") {
      setNavState("hero")
      setVerticalUnlocked(false)
      return
    }

    setNavState("vertical")
    setVerticalUnlocked(true)

    setTimeout(() => {
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <>
      <GlobalMenu onNavigate={navigateToSection} />

      <div className={verticalUnlocked ? "overflow-y-auto" : "overflow-hidden h-screen"}>
        {/* =========================
           HORIZONTAL HERO FLOW
        ========================== */}
        <AnimatePresence mode="wait">
          {navState === "hero" && !verticalUnlocked && (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HeroSection onNavigate={handleNavigate} />
            </motion.div>
          )}

          {navState === "stack" && !verticalUnlocked && (
            <motion.div
              key="stack"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <StackEstrategica onNavigate={handleNavigate} />
            </motion.div>
          )}

          {navState === "numeros" && !verticalUnlocked && (
            <motion.div
              key="numeros"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <NumerosSection onNavigate={handleNavigate} isHorizontalView />
            </motion.div>
          )}
        </AnimatePresence>

        {/* =========================
           VERTICAL FLOW
        ========================== */}
        {verticalUnlocked && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#DBDBE0]"
          >
            <GeneseSection onNavigate={handleNavigate} />
            <MentesSection />
            <SenecaSection />
            <StackEstrategica onNavigate={handleNavigate} />
            <ParaGeradoresSection />
            <MinerarProposito />
            <NumerosSection />
            <ContatoSection />
            <Footer />
          </motion.div>
        )}
      </div>
    </>
  )
}
