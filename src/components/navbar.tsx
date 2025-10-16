"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Controlar la visibilidad de la navbar basado en si el footer está visible
  useEffect(() => {
    const handleScroll = () => {
      // Obtener la posición del footer
      const footer = document.querySelector("footer")
      if (!footer) return

      const footerTop = footer.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      // Ocultar la navbar cuando el footer está visible en la pantalla
      if (footerTop < windowHeight) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      // Detectar sección activa
      const sections = ["home", "about", "services", "team", "projects", "clients", "blog", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Evitar scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMobileMenuOpen])

  // Función para scroll suave a las secciones
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  // Modificar el array navItems para incluir todas las secciones
  const navItems = [
    { name: "Home", sectionId: "home" },
    { name: "Quiénes Somos", sectionId: "about" },
    { name: "Sectores", sectionId: "services" },
    { name: "Equipo", sectionId: "team" },
    { name: "Proyectos", sectionId: "projects" }, 
    { name: "Clientes", sectionId: "clients" },
    { name: "Blog", sectionId: "blog" },
    { name: "Contáctanos", sectionId: "contact" },
  ]

  if (!isVisible) return null

  return (
    <>
      {/* Versión desktop */}
      <div className="fixed bottom-8 left-0 right-0 z-50 hidden md:flex justify-center">
        <div className="bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.2)] px-8 py-4 flex items-center space-x-8 border border-gray-100 max-w-5xl w-auto">
          {navItems.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => scrollToSection(item.sectionId)}
              className={cn(
                "text-gray-800 hover:text-primary-500 transition-colors text-sm font-medium",
                activeSection === item.sectionId && "text-primary-500",
              )}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Versión mobile - Botón hamburguesa */}
      <div className="fixed bottom-8 left-0 right-0 z-50 flex md:hidden justify-center">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.2)] w-16 h-16 flex items-center justify-center"
          aria-label="Abrir menú"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col md:hidden">
          {/* Overlay semi-transparente */}
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)}></div>

          {/* Menú */}
          <div className="relative z-10 mt-20 mx-auto w-[85%] max-w-md bg-white rounded-3xl overflow-hidden">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <div key={item.sectionId} className="border-b border-gray-100 last:border-b-0">
                  <button
                    onClick={() => scrollToSection(item.sectionId)}
                    className={cn(
                      "w-full py-6 px-8 text-gray-600 text-left text-lg font-medium hover:text-primary-500 transition-colors",
                      activeSection === item.sectionId && "text-primary-500",
                    )}
                  >
                    {item.name}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Botón de cierre */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.2)] w-16 h-16 flex items-center justify-center"
            aria-label="Cerrar menú"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  )
}
