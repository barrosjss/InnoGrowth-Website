"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AppointmentModal from "./appointment-modal"
import team from "@/assets/img/teamGorw.png"

// Es necesario registrar el plugin de ScrollTrigger para que GSAP lo pueda utilizar.
gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  // Ref para el contenedor principal de la sección. Se usará como disparador (trigger) de la animación.
  const sectionRef = useRef<HTMLDivElement>(null)

  const benefits = [
    "Implementación de KPIs estratégicos",
    "Análisis de datos para toma de decisiones",
    "Optimización de procesos empresariales",
    "Transformación digital integral",
  ]

  // useEffect para manejar las animaciones de scroll.
  // Se ejecuta una sola vez cuando el componente se monta.
  useEffect(() => {
    // gsap.context() agrupa las animaciones y facilita su limpieza automática.
    const ctx = gsap.context(() => {
      // Se crea una "línea de tiempo" (timeline) para orquestar múltiples animaciones en secuencia.
      const tl = gsap.timeline({
        // La animación se activa con el scroll.
        scrollTrigger: {
          trigger: sectionRef.current, // El elemento que dispara la animación.
          start: "top 70%", // La animación comienza cuando el 70% superior del trigger entra en el viewport.
          toggleActions: "play none none none", // La animación solo se reproduce una vez hacia adelante.
        },
      })

      // Se añade a la timeline una secuencia de animaciones "from".
      // GSAP animará los elementos desde este estado inicial a su estado final en el CSS.
      // Se usan clases como selectores para no tener que crear un `ref` para cada elemento.
      tl.from(".about-title-tag", { opacity: 0, y: 20, duration: 0.5 })
        .from(".about-title", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3") // El "- = 0.3" hace que esta animación empiece 0.3s antes de que la anterior termine.
        .from(".about-text", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
        .from(".about-benefit", { opacity: 0, y: 20, duration: 0.5, stagger: 0.1 }, "-=0.3") // `stagger` anima los elementos con esta clase uno tras otro.
        .from(".about-button", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
        .from(".about-image", { opacity: 0, scale: 0.9, duration: 0.7 }, "<") // El "<" hace que esta animación empiece junto con la anterior.
        .from(".about-cta", { opacity: 0, y: 40, duration: 0.5 }, "-=0.5")

    }, sectionRef) // Se define el scope para que GSAP busque los selectores solo dentro de `sectionRef`.

    // Función de limpieza que se ejecuta cuando el componente se desmonta.
    return () => ctx.revert() 
  }, [])

  return (
    // Se asigna la ref al contenedor principal de la sección.
    <section id="about" className="py-20 bg-[#030303] relative overflow-hidden" ref={sectionRef}>
      {/* Gradiente de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.03] via-transparent to-primary-700/[0.03]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Los elementos a animar tienen clases específicas (ej. about-title-tag) */}
            <span className="text-primary-300 font-medium mb-2 block about-title-tag">
              Quiénes Somos
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white about-title">
              Impulsamos el crecimiento de tu empresa con estrategias basadas en datos
            </h2>

            <p className="text-white/60 mb-8 about-text">
              En InnoGrowth, nos especializamos en transformar empresas mediante la implementación de KPIs estratégicos
              y metodologías innovadoras. Nuestro enfoque se basa en el análisis de datos para identificar oportunidades
              de mejora y desarrollar soluciones personalizadas que impulsen el crecimiento sostenible.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start about-benefit">
                  <CheckCircle className="w-5 h-5 text-primary-300 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-white/80">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="about-button">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full transition-colors"
              >
                Agendar una cita
              </button>
            </div>
          </div>

          <div className="relative about-image">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={team}
                alt="Equipo de InnoGrowth"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-700/20 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Banner CTA */}
        <div className="mt-20 bg-[#1a103d] rounded-xl p-8 md:p-10 about-cta">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                ¿Le gustaría cotizar una solución para su empresa?
              </h3>
              <p className="text-white/70 max-w-2xl">
                Nuestro equipo de expertos está listo para ayudarle a implementar soluciones estratégicas que impulsen
                el crecimiento de su negocio.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full transition-colors whitespace-nowrap"
              >
                Solicita tu cotización
              </button>
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-full transition-colors whitespace-nowrap"
              >
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </div>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
