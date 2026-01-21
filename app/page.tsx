"use client"

import { HeroSection } from "@/components/hero-section"
import { GeneseSection } from "@/components/genese-section"
import { MentesSection } from "@/components/mentes-section"
import { SenecaSection } from "@/components/seneca-section"
import { ParaGeradoresSection } from "@/components/para-geradores-section"
import { ContatoSection } from "@/components/contato-section"
import { Footer } from "@/components/footer"
import { GlobalMenu } from "@/components/global-menu"

export default function Home() {
  const navigateToSection = (section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <GlobalMenu onNavigate={navigateToSection} />

      {/* HERO */}
      <HeroSection onNavigate={() => navigateToSection("genese")} />

      {/* CONTEÚDO */}
      <main className="bg-[#DBDBE0]">
        <GeneseSection />
        <MentesSection />
        <SenecaSection />
        <ParaGeradoresSection />
        <ContatoSection />
        <Footer />
      </main>
    </>
  )
}
