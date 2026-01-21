"use client"

import Image from "next/image"
import { Linkedin, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1e1b4b] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:divide-x md:divide-white/10">
          
          {/* COLUNA 1 - Brand */}
          <div className="flex flex-col items-center md:items-start md:pr-12">
            {/* Logo */}
            <div className="bg-gray-400/50 backdrop-blur-sm rounded-xl px-6 py-0 max-w-sm">
              <Image
                src="/images/logo-radius.png"
                alt="RADIUS MINING"
                width={180}
                height={60}
                className="w-[180px] h-auto"
                priority
              />
            </div>
          </div>

          {/* COLUNA 2 - Links */}
          <div className="md:px-12">
            <h4 className="font-bold mb-6 font-['Play'] text-white text-center md:text-left">
              Navegação
            </h4>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2">
              <nav className="flex flex-col gap-2 text-sm">
                <a href="#home" className="text-gray-300 hover:text-[#ff6b35] transition-colors">
                  Home
                </a>
                <a href="#genese" className="text-gray-300 hover:text-[#ff6b35] transition-colors">
                  Quem Somos
                </a>
                <a href="#servicos" className="text-gray-300 hover:text-[#ff6b35] transition-colors">
                  Serviços
                </a>
              </nav>
              <nav className="flex flex-col gap-2 text-sm">
                <a href="#mentes" className="text-gray-300 hover:text-[#ff6b35] transition-colors">
                  Time Radius
                </a>
                <a href="#contato" className="text-gray-300 hover:text-[#ff6b35] transition-colors">
                  Contato
                </a>
              </nav>
            </div>
          </div>

          {/* COLUNA 3 - Redes Sociais */}
          <div className="md:pl-12">
            <h4 className="font-bold mb-6 font-['Play'] text-white text-center md:text-left">
              Conecte-se
            </h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#ff6b35] flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#ff6b35] flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>


              <a
                href="https://substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#ff6b35] flex items-center justify-center transition-all duration-300"
                aria-label="Substack"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
  <p>© {new Date().getFullYear()} Radius Mining. Todos os direitos reservados.</p>
</div>

      </div>
    </footer>
  )
}

export default Footer
