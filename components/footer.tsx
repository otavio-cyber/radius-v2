export function Footer() {
  return (
    <footer className="bg-[#1e1b4b] text-white py-14 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/images/logo-radius-white.png"
                alt="RADIUS MINING"
                className="h-12"
              />
            </div>
            <p className="text-sm text-gray-300 max-w-xs">
              Soluções em mineração de Bitcoin, integrando energia, capital e
              operações para construir valor sustentável.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4 font-['Play'] text-white">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2 text-sm">
              <a
                href="#home"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#genese"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Quem Somos
              </a>
              <a
                href="#mentes"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Time Radius
              </a>
              <a
                href="#servicos"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Serviços
              </a>
              <a
                href="#contato"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Contato
              </a>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4 font-['Play'] text-white">
              Conecte-se
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="#"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>© 2025 Radius Mining. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
