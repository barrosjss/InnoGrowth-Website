"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
 
  return (
    <header className="w-full bg-[#030303] border-b border-white/5">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="InnoGrowth" width={32} height={32} />
            <span className="text-white font-semibold text-xl">InnoGrowth</span>
          </Link>

          {/* Navegación de escritorio */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white/70 hover:text-white transition-colors">
              Inicio
            </Link>
            <Link href="/#quienes-somos" className="text-white/70 hover:text-white transition-colors">
              Quiénes Somos
            </Link>
            <Link href="/#sectores" className="text-white/70 hover:text-white transition-colors">
              Sectores
            </Link>
            <Link href="/#proyectos" className="text-white/70 hover:text-white transition-colors">
              Proyectos
            </Link>
            <Link href="/#contacto" className="text-white/70 hover:text-white transition-colors">
              Contacto
            </Link>
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => {
                if (typeof window !== "undefined" && window.openAppointmentModal) {
                  window.openAppointmentModal()
                }
              }}
              className="px-5 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-full text-sm transition-colors"
            >
              Agendar una cita
            </button>
          </div>

          {/* Botón de menú móvil */}
          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/5 mt-4">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-white/70 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/#quienes-somos"
                className="text-white/70 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Quiénes Somos
              </Link>
              <Link
                href="/#sectores"
                className="text-white/70 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sectores
              </Link>
              <Link
                href="/#proyectos"
                className="text-white/70 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Proyectos
              </Link>
              <Link
                href="/#contacto"
                className="text-white/70 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  if (typeof window !== "undefined" && window.openAppointmentModal) {
                    window.openAppointmentModal()
                  }
                }}
                className="px-5 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-full text-sm transition-colors self-start mt-2"
              >
                Agendar una cita
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
