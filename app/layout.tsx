import type React from "react"
import type { Metadata } from "next"
import { Play, Palanquin } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playFont = Play({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-play",
})

const palanquinFont = Palanquin({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-palanquin",
})

export const metadata: Metadata = {
  title: "Radius Mining - Minerando soluções, energizando o futuro",
  description: "Empresa de tecnologia focada em mineração de Bitcoin com eficiência energética e impacto positivo",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${playFont.variable} ${palanquinFont.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
