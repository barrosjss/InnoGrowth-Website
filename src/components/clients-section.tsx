"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import fomo from "@/assets/img/fomoLogo.svg"
import caribe from "@/assets/img/caribeS.svg"
import feanwa from "@/assets/img/Logofeanware.svg"
import cie from "@/assets/img/logoCIEW.svg"
import comerci from "@/assets/img/Coaching_Comercial.svg"
import coderlbas from "@/assets/img/coder.svg"
import foodverso from "@/assets/img/logofoodiverso.png"
import magic from "@/assets/img/magic.svg"

// Registrar el plugin de ScrollTrigger para las animaciones de scroll.
gsap.registerPlugin(ScrollTrigger)

/**
 * Componente que muestra una parrilla con los logos de clientes y aliados.
 * Toda la sección se anima en secuencia al entrar en el viewport.
 */
export default function ClientsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  // En una aplicación real, estos datos vendrían de una API o CMS
  const clients = [
    { name: "FOMO", logo: fomo },
    { name: "Caribe Startup", logo: caribe },
    { name: "Feanware", logo: feanwa },
    { name: "CIE Barcelona", logo: cie },
    { name: "Coaching Comercial", logo: comerci },
    { name: "Coderlabs", logo: coderlbas },
    { name: "Foodiverso", logo: foodverso },
    { name: "Magichack", logo: magic },
  ]

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    // Contexto de GSAP para la limpieza automática de animaciones.
    const ctx = gsap.context(() => {
      // Timeline para orquestar la animación de toda la sección.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      })

      // Secuencia de animación para la cabecera y la parrilla de logos.
      tl.from(".client-title-tag", { opacity: 0, y: 20, duration: 0.5 })
        .from(".client-title", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
        .from(".client-button", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
        // Anima todos los elementos con la clase '.client-logo' de forma escalonada.
        // La propiedad `stagger: 0.1` añade un retraso de 0.1s entre la animación de cada logo.
        .from(".client-logo", { opacity: 0, y: 20, duration: 0.5, stagger: 0.1 }, "-=0.3")

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="clients" className="py-20 bg-[#030303]" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <span className="text-primary-300 font-medium mb-2 block client-title-tag">
              Confianza y Colaboración
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white client-title">
              Clientes & Aliados
            </h2>
          </div>

          <div className="client-button">
            <button
              onClick={handleContactClick}
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full transition-colors"
            >
              Contáctenos
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              // Se asigna la clase 'client-logo' a cada item para que GSAP pueda animarlos.
              className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 flex items-center justify-center hover:border-primary-300/30 transition-colors duration-300 client-logo"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={160}
                height={80}
                className="max-h-16 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
