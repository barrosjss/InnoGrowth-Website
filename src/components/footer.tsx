"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  LucidePhone,
  LucideMail,
  LucideMapPin,
  LucideArrowUp,
  LucideInstagram,
  LucideLinkedin,
  LucideFacebook,
  LucideTwitter,
} from "lucide-react"

// Registrar el plugin de ScrollTrigger para las animaciones de scroll.
gsap.registerPlugin(ScrollTrigger)

/**
 * Componente del pie de página del sitio web.
 * Contiene información de contacto, enlaces de navegación y redes sociales.
 */
export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)

  // Función para hacer scroll suave hasta la parte superior de la página.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    // Contexto de GSAP para la animación de las columnas del footer.
    const ctx = gsap.context(() => {
      // Anima todos los elementos con la clase `.footer-col` de forma escalonada.
      gsap.from(".footer-col", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.15, // Añade un retraso de 0.15s entre la animación de cada columna.
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%", // La animación empieza cuando el 95% superior del footer es visible.
          toggleActions: "play none none none",
        },
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer id="footer" className="relative w-full bg-[#030303] border-t border-white/[0.08] pt-16 pb-8" ref={footerRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo y descripción */}
          <div className="md:col-span-1 footer-col">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.svg" alt="InnoGrowth" width={32} height={32} />
              <span className="text-xl font-bold text-white">InnoGrowth</span>
            </div>
            <p className="text-white/40 mb-6">
              Transformamos empresas mediante la implementación de KPIs estratégicos y soluciones innovadoras.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/innogrowthcon/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-white/60 hover:text-primary-300 hover:border-primary-300/30 transition-colors duration-300"
              >
                <LucideInstagram className="w-4 h-4" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#linkedin"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-white/60 hover:text-primary-300 hover:border-primary-300/30 transition-colors duration-300"
              >
                <LucideLinkedin className="w-4 h-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="#facebook"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-white/60 hover:text-primary-300 hover:border-primary-300/30 transition-colors duration-300"
              >
                <LucideFacebook className="w-4 h-4" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#twitter"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-white/60 hover:text-primary-300 hover:border-primary-300/30 transition-colors duration-300"
              >
                <LucideTwitter className="w-4 h-4" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="md:col-span-1 footer-col">
            <h3 className="text-white font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {[
                { name: "Inicio", href: "#home" },
                { name: "Quiénes Somos", href: "#about" },
                { name: "Sectores", href: "#services" },
                { name: "Equipo", href: "#team" },
                { name: "Proyectos", href: "#projects" },
                { name: "Blog", href: "#blog" },
                { name: "Contacto", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary-300 transition-colors"
                    scroll={false}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div className="md:col-span-1 footer-col">
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {[
                "Transformación Digital",
                "Consultoría Estratégica",
                "Análisis de Datos",
                "Desarrollo de Software",
                "Capacitación empresarial",
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-white/60 hover:text-primary-300 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="md:col-span-1 footer-col">
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <LucidePhone className="w-5 h-5 text-primary-300 mt-0.5" />
                <span className="text-white/60">+57 3004986307</span>
              </li>
              <li className="flex items-start gap-3">
                <LucideMail className="w-5 h-5 text-primary-300 mt-0.5" />
                <span className="text-white/60">contact@innogrowth.co</span>
              </li>
              <li className="flex items-start gap-3">
                <LucideMapPin className="w-5 h-5 text-primary-300 mt-0.5" />
                <span className="text-white/60">Calle 35a #17-74</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mb-4 md:mb-0">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} InnoGrowth. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/40 text-sm hover:text-primary-300 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terms" className="text-white/40 text-sm hover:text-primary-300 transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>

      {/* Botón para volver arriba */}
      <button
        onClick={scrollToTop}
        className="absolute top-0 right-6 transform -translate-y-1/2 w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center shadow-lg hover:bg-primary-600 transition-colors"
      >
        <LucideArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}
