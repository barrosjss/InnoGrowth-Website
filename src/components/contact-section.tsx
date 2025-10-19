"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  LucidePhone,
  LucideMail,
  LucideMapPin,
  LucideSend,
  LucideInstagram,
  LucideLinkedin,
  LucideFacebook,
  LucideTwitter,
} from "lucide-react"

// Registrar el plugin de ScrollTrigger para las animaciones de scroll.
gsap.registerPlugin(ScrollTrigger)

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

/**
 * Componente para mostrar un único dato de contacto (teléfono, email, etc.)
 */
function ContactInfo({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode
  title: string
  content: string
}) {
  return (
    // La clase `contact-info-item` se usa como selector para la animación de stagger en el componente padre.
    <div className="flex gap-4 contact-info-item">
      <div className="flex-shrink-0">
        <div
          className={cn(
            "w-10 h-10 flex items-center justify-center rounded-lg",
            "bg-gradient-to-br from-white/[0.08] to-transparent",
            "border border-white/[0.08]",
          )}
        >
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium text-white/60 mb-1">{title}</h3>
        <p className="text-white">{content}</p>
      </div>
    </div>
  )
}

/**
 * Componente que renderiza la sección de "Contacto", con un formulario a la izquierda
 * y la información de contacto a la derecha.
 */
export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline para orquestar la animación de toda la sección.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      })

      // La secuencia anima primero la columna izquierda (títulos y formulario)
      tl.from(".contact-title-tag", { opacity: 0, y: 30, duration: 0.8 })
        .from(".contact-title", { opacity: 0, y: 30, duration: 0.8 }, "-=0.6")
        .from(".contact-subtitle", { opacity: 0, y: 30, duration: 0.8 }, "-=0.6")
        .from(".contact-form", { opacity: 0, y: 30, duration: 0.8 }, "-=0.6")
        // Luego, anima la columna derecha (la tarjeta de información)
        .from(".contact-info-card", { opacity: 0, y: 30, duration: 0.8 }, "<+=0.2")
        // Finalmente, anima los items dentro de la tarjeta de información de forma escalonada.
        .from(".contact-info-item", { opacity: 0, y: 20, stagger: 0.2, duration: 0.6 }, "-=0.4")
        .from(".contact-socials", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    // El ID se coloca en el contenedor principal para que el scroll-spy de la navbar lo detecte.
    <div id="contact" className="relative w-full py-24 md:py-32 overflow-hidden bg-[#030303]" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700/[0.03] via-transparent to-primary-500/[0.03] blur-3xl" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Left column - Contact Form */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4 contact-title-tag">
              <span className="text-sm text-white/60 tracking-wide">Contacto</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight contact-title">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">¿Listo para</span>
              <span
                className={cn(
                  "ml-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-300 via-white/90 to-primary-500",
                  pacifico.className,
                )}
              >
                transformar
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                {" "}
                tu empresa?
              </span>
            </h2>

            <p className="text-white/40 mb-8 contact-subtitle">
              Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos de negocio.
            </p>

            <form className="space-y-6 contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white/60 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                  placeholder="Nombre de tu empresa"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                  placeholder="¿Cómo podemos ayudarte?"
                ></textarea>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="w-4 h-4 text-primary-500 border-white/[0.08] rounded focus:ring-primary-500/50"
                />
                <label htmlFor="newsletter" className="ml-2 text-sm text-white/60">
                  Suscribirme al newsletter
                </label>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-medium transition-all duration-300 shadow-lg shadow-primary-500/25 flex items-center justify-center"
              >
                Enviar mensaje
                <LucideSend className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>

          {/* Right column - Contact Info */}
          <div className="lg:pl-8">
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 backdrop-blur-sm h-full contact-info-card">
              <h3 className="text-2xl font-bold mb-8 text-white">
                Información de contacto
              </h3>

              <div className="space-y-8 mb-12">
                <ContactInfo
                  icon={<LucidePhone className="w-5 h-5 text-primary-300" />}
                  title="Teléfono"
                  content="+57 3004986307"
                />
                <ContactInfo
                  icon={<LucideMail className="w-5 h-5 text-primary-300" />}
                  title="Email"
                  content="contact@innogrowth.co"
                />
                <ContactInfo
                  icon={<LucideMapPin className="w-5 h-5 text-primary-300" />}
                  title="Dirección"
                  content="Calle 35a #17-74"
                />
              </div>

              <div className="contact-socials">
                <h4 className="text-lg font-medium mb-4 text-white">Síguenos</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/innogrowthcon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-white/60 hover:text-primary-300 hover:border-primary-300/30 transition-colors duration-300"
                  >
                    <LucideInstagram className="w-5 h-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href="#facebook"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-white/60 hover:text-primary-300 hover:border-primary-300/30 transition-colors duration-300"
                  >
                    <LucideFacebook className="w-5 h-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="#twitter"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-white/60 hover:text-primary-300 hover:border-primary-300/30 transition-colors duration-300"
                  >
                    <LucideTwitter className="w-5 h-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="#linkedin"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-white/60 hover:text-primary-300 hover:border-primary-300/30 transition-colors duration-300"
                  >
                    <LucideLinkedin className="w-5 h-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
