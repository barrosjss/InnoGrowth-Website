"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Componente de Navegación principal.
 * Es una barra flotante en la parte inferior con estilo "glassmorphism".
 * Detecta la sección visible para resaltar el enlace activo y es responsivo (menú de hamburguesa en móvil).
 */
export default function Navbar() {
  // --- ESTADOS DEL COMPONENTE ---
  // Controla si la barra de navegación es visible (se oculta al llegar al footer).
  const [isVisible, setIsVisible] = useState(true)
  // Controla la visibilidad del menú en dispositivos móviles.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  // Almacena el ID de la sección activa para resaltar el enlace correspondiente.
  const [activeSection, setActiveSection] = useState("home")

  // --- EFECTOS SECUNDARIOS (HOOKS de useEffect) ---

  // Efecto para manejar el scroll de la página.
  useEffect(() => {
    const handleScroll = () => {
      // --- Lógica para ocultar la navbar en el footer ---
      const footer = document.querySelector("footer")
      if (!footer) return
      const footerTop = footer.getBoundingClientRect().top
      const windowHeight = window.innerHeight
      // Si la parte superior del footer ya es visible en la pantalla, oculta la navbar.
      if (footerTop < windowHeight) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      // --- Lógica de Scroll-Spy para detectar la sección activa ---
      const sections = ["home", "about", "services", "team", "projects", "clients", "blog", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Si la sección está en el área central del viewport (alrededor de 100px desde arriba), se marca como activa.
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break // Se detiene al encontrar la primera sección que cumple la condición.
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Limpieza: se elimina el event listener cuando el componente se desmonta para evitar memory leaks.
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Efecto para bloquear el scroll del body cuando el menú móvil está abierto.
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    // Limpieza: se asegura que el scroll vuelva a la normalidad.
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMobileMenuOpen])

  // --- FUNCIONES AUXILIARES ---

  // Función para navegar suavemente a una sección al hacer clic en un enlace.
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false) // Cierra el menú móvil si está abierto.
    }
  }

  // --- DATOS DE NAVEGACIÓN ---
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

  // Si no es visible, no renderiza nada.
  if (!isVisible) return null

  return (
    <>
      {/* ================================= */}
      {/* ===== BARRA DE NAVEGACIÓN DE ESCRITORIO ===== */}
      {/* ================================= */}
      <div className="fixed bottom-8 left-0 right-0 z-50 hidden md:flex justify-center">
        {/* Contenedor con estilo glassmorphism: fondo translúcido, blur y borde sutil. */}
        <div className="bg-white/5 backdrop-blur-lg rounded-full shadow-lg shadow-black/20 p-2 flex items-center space-x-2 border border-white/10 max-w-5xl w-auto">
          {navItems.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => scrollToSection(item.sectionId)}
              className={cn(
                // Estilo base para todos los botones.
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                // Lógica condicional para el estado activo vs. inactivo.
                activeSection === item.sectionId
                  ? "bg-primary-500 text-white shadow-md shadow-primary-500/30" // Estilo para el botón ACTIVO (píldora morada).
                  : "text-gray-300 hover:text-primary-300", // Estilo para botones inactivos y su hover.
              )}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* ================================= */}
      {/* ===== NAVEGACIÓN MÓVIL ===== */}
      {/* ================================= */}

      {/* --- Botón de Hamburguesa --- */}
      <div className="fixed bottom-8 left-0 right-0 z-50 flex md:hidden justify-center">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="bg-white/5 backdrop-blur-lg rounded-full shadow-lg shadow-black/20 w-16 h-16 flex items-center justify-center border border-white/10 text-white"
          aria-label="Abrir menú"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* --- Panel del Menú Desplegable --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col md:hidden">
          {/* Overlay para cerrar el menú al hacer clic fuera */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>

          {/* Contenedor del menú con estilo glassmorphism */}
          <div className="relative z-10 mt-20 mx-auto w-[85%] max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <div key={item.sectionId} className="border-b border-white/10 last:border-b-0">
                  <button
                    onClick={() => scrollToSection(item.sectionId)}
                    className={cn(
                      // Estilo base para los botones del menú móvil.
                      "w-full py-6 px-8 text-left text-lg font-medium transition-colors duration-300",
                      // Lógica condicional para el estado activo vs. inactivo.
                      activeSection === item.sectionId
                        ? "text-white bg-primary-500/20 font-semibold" // Estilo ACTIVO: texto blanco y fondo morado sutil.
                        : "text-gray-300 hover:text-primary-300 hover:bg-white/5", // Estilo inactivo y su hover.
                    )}
                  >
                    {item.name}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Botón de Cierre del menú móvil */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-lg rounded-full shadow-lg shadow-black/20 w-16 h-16 flex items-center justify-center border border-white/10 text-white"
            aria-label="Cerrar menú"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  )
}
